const router = require('koa-router')();
const { API_PREFIX } = require('../routes.types');
const message = require('./message');
const oauth2 = require('./oauth2');

module.exports = router;

// API 统一前缀
router.prefix(API_PREFIX);

// test
router.get('/', (ctx) => {
  ctx.body = 'hello world';
});

// load routers
router.use(message.routes(), message.allowedMethods());
router.use(oauth2.routes(), oauth2.allowedMethods());

