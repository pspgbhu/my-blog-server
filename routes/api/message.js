const router = require('koa-router')();
const { postmsg } = require('../../controllers/message');

module.exports = router;

router.prefix('/message');

router.get('/', ctx => {
  ctx.body = '123';
});

router.post('/', async ctx => {
  const { body } = ctx.request;
  await postmsg(body);
  ctx.body = {
    code: 0,
    msg: 'success',
  };
});
