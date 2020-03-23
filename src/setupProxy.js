const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/**',
    createProxyMiddleware({
      target: 'https://c2t-cabq-open-data.s3.amazonaws.com',
      changeOrigin: true
    })
  );
};
