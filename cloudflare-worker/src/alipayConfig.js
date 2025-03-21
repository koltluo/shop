module.exports = {
    appId: process.env.ALIPAY_APP_ID,
    privateKey: process.env.ALIPAY_PRIVATE_KEY.replace(/\\n/g, '\n'),  // 处理换行符
    alipayPublicKey: process.env.ALIPAY_PUBLIC_KEY.replace(/\\n/g, '\n'),
    gateway: 'https://openapi.alipaydev.com/gateway.do',  // 沙箱环境
    notifyUrl: 'https://your-worker-url.workers.dev/api/notify',  // 回调地址
  };