const AlipaySdk = require('alipay-sdk').default;

// 初始化支付宝 SDK
const alipay = new AlipaySdk({
  appId: process.env.ALIPAY_APP_ID,  // 从环境变量读取 APPID
  privateKey: process.env.ALIPAY_PRIVATE_KEY.replace(/\\n/g, '\n'),  // 从环境变量读取私钥
  alipayPublicKey: process.env.ALIPAY_PUBLIC_KEY.replace(/\\n/g, '\n'),  // 从环境变量读取公钥
  gateway: 'https://openapi.alipaydev.com/gateway.do',  // 沙箱环境
});

// 处理 HTTP 请求
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const { pathname } = new URL(request.url);

  if (pathname === '/api/alipay') {
    return handleAlipayRequest(request);  // 处理支付请求
  } else if (pathname === '/api/notify') {
    return handleAlipayNotify(request);  // 处理支付宝回调
  } else if (pathname.startsWith('/api/order/')) {
    return handleOrderQuery(request);  // 处理订单查询
  } else {
    return new Response('Not Found', { status: 404 });  // 其他路径返回 404
  }
}

// 处理支付请求
async function handleAlipayRequest(request) {
  try {
    const { total, items, outTradeNo } = await request.json();  // 获取请求体中的金额、商品列表和订单号

    // 保存订单数据到 KV
    await ORDERS.put(outTradeNo, JSON.stringify({
      total,
      items,
      status: 'pending',  // 初始状态为待支付
      createdAt: new Date().toISOString(),  // 创建时间
    }));

    // 调用支付宝接口生成支付链接
    const result = await alipay.exec('alipay.trade.page.pay', {
      notifyUrl: 'https://your-worker-url.workers.dev/api/notify',  // 回调地址
      returnUrl: 'https://your-domain.com/success',  // 支付成功后跳转地址
      bizContent: {
        out_trade_no: outTradeNo,  // 订单号
        total_amount: total,  // 金额
        subject: `订单支付 - ${items[0].name}等${items.length}件商品`,  // 订单标题
        product_code: 'FAST_INSTANT_TRADE_PAY',  // 销售产品码
      },
    });

    // 返回支付链接
    return new Response(JSON.stringify({ payUrl: result }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('支付链接生成失败:', error);
    return new Response('支付链接生成失败', { status: 500 });
  }
}

// 处理支付宝回调
async function handleAlipayNotify(request) {
  try {
    const body = await request.text();  // 获取回调请求体
    const params = new URLSearchParams(body);  // 解析为键值对

    // 验证签名
    const isValid = alipay.checkNotifySign(Object.fromEntries(params));
    if (!isValid) {
      return new Response('验签失败', { status: 400 });
    }

    // 获取订单号和支付状态
    const outTradeNo = params.get('out_trade_no');
    const tradeStatus = params.get('trade_status');

    // 更新订单状态
    if (tradeStatus === 'TRADE_SUCCESS') {
      await ORDERS.put(outTradeNo, JSON.stringify({
        ...JSON.parse(await ORDERS.get(outTradeNo)),
        status: 'paid',  // 更新为已支付
        paidAt: new Date().toISOString(),  // 支付时间
      }));
      console.log('支付成功，订单号:', outTradeNo);
    } else {
      await ORDERS.put(outTradeNo, JSON.stringify({
        ...JSON.parse(await ORDERS.get(outTradeNo)),
        status: 'failed',  // 更新为支付失败
      }));
      console.log('支付失败，订单号:', outTradeNo);
    }

    // 返回成功响应（支付宝要求返回 "success"）
    return new Response('success');
  } catch (error) {
    console.error('回调处理失败:', error);
    return new Response('回调处理失败', { status: 500 });
  }
}

// 处理订单查询
async function handleOrderQuery(request) {
  try {
    const orderId = new URL(request.url).pathname.split('/').pop();  // 从 URL 中提取订单号
    const orderData = await ORDERS.get(orderId);  // 从 KV 中获取订单数据

    if (orderData) {
      // 返回订单数据
      return new Response(orderData, {
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      // 订单不存在
      return new Response('订单不存在', { status: 404 });
    }
  } catch (error) {
    console.error('订单查询失败:', error);
    return new Response('订单查询失败', { status: 500 });
  }
}