import AlipaySdk from 'alipay-sdk';

// 初始化支付宝 SDK
const alipay = new AlipaySdk({
  appId: process.env.ALIPAY_APP_ID,  // 从环境变量读取 APPID
  privateKey: process.env.ALIPAY_PRIVATE_KEY.replace(/\\n/g, '\n'),  // 从环境变量读取私钥
  alipayPublicKey: process.env.ALIPAY_PUBLIC_KEY.replace(/\\n/g, '\n'),  // 从环境变量读取公钥
  gateway: 'https://openapi.alipaydev.com/gateway.do',  // 沙箱环境
});

// 处理 HTTP 请求
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request, event));
});

async function handleRequest(request, event) {
  const { pathname } = new URL(request.url);

  if (pathname === '/api/alipay') {
    return handleAlipayRequest(request, event); // 处理支付请求
  } else {
    return new Response('Not Found', { status: 404 }); // 其他路径返回 404
  }
}

// 处理支付请求
async function handleAlipayRequest(request, event) {
  try {
    const { totalAmount, subject, outTradeNo } = await request.json();

    // 从环境变量中读取私钥和 App ID
    const privateKey = event.env.ALIPAY_PRIVATE_KEY;
    const appId = event.env.ALIPAY_APP_ID;

    // 构造支付宝 API 请求参数
    const params = {
      app_id: appId,
      method: 'alipay.trade.page.pay',
      format: 'JSON',
      charset: 'utf-8',
      sign_type: 'RSA2',
      timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
      version: '1.0',
      biz_content: JSON.stringify({
        out_trade_no: outTradeNo,
        product_code: 'FAST_INSTANT_TRADE_PAY',
        total_amount: totalAmount,
        subject: subject,
      }),
    };

    // 生成签名
    const sign = await generateSignature(params, privateKey);
    params.sign = sign;

    // 构造支付宝支付 URL
    const queryString = new URLSearchParams(params).toString();
    const payUrl = `https://openapi.alipaydev.com/gateway.do?${queryString}`;

    return new Response(JSON.stringify({ url: payUrl }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// 生成签名函数
async function generateSignature(params, privateKey) {
  const encoder = new TextEncoder();
  const sortedParams = Object.keys(params)
    .sort()
    .map(key => `${key}=${params[key]}`)
    .join('&');

  // 将私钥转换为 CryptoKey
  const keyData = `-----BEGIN PRIVATE KEY-----\n${privateKey}\n-----END PRIVATE KEY-----`;
  const privateKeyBuffer = encoder.encode(keyData);
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    privateKeyBuffer,
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: { name: 'SHA-256' },
    },
    false,
    ['sign']
  );

  // 使用 Web Crypto API 生成签名
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    encoder.encode(sortedParams)
  );

  // 将签名转换为 Base64 格式
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}