const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    proxy('/api', {  //도메인 api로 호출
      target: 'http://localhost:8080/',
      changeOrigin: true,
    })
  )
}