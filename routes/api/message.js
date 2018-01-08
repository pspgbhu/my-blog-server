const router = require('koa-router')();
const { postmsg, getmsg } = require('../../controllers/message');

module.exports = router;

router.prefix('/message');

/**
 * 读取评论
 */
router.get('/', async ctx => {
  const { article } = ctx.query;

  const res = await getmsg({ article });
  ctx.body = { code: 0, msg: 'success', data: res };
});


/**
 * 发表评论
 */
router.post('/', async ctx => {
  const body = ctx.request.body;
  console.log('得到参数:', body);

  await postmsg(JSON.parse(body));

  ctx.body = {
    code: 0,
    msg: 'success',
  };
});
