const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/**', { target: 'https://c2t-cabq-open-data.s3.amazonaws.com' })
  );
};
