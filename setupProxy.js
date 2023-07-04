const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/', {  //도메인 api로 호출
      target: 'http://localhost:5000/',
      changeOrigin: true,
    })
  )
}