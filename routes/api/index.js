const router = require('koa-router')();
const { API_PREFIX } = require('../../config');
const message = require('./message');

module.exports = router;

// API 统一前缀
router.prefix(API_PREFIX);

router.get('/', (ctx) => {
  ctx.body = 'hello world';
});

router.use(message.routes(), message.allowedMethods());

