module.exports = () => async (ctx, next) => {
  ctx.set({
    'Access-Control-Allow-Origin': 'http://blog.pspgbhu.me',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
  });
  await next();
};
