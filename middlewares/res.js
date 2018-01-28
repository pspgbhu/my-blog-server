module.exports = () => async (ctx, next) => {
  await next();
  if (!ctx.body) return;
  if (!ctx.body.message) return;

  switch (ctx.body.code) {
    case 0:
      ctx.body.message = 'success';
      break;
    default:
      ctx.body.message = 'Unknown Error!';
      break;
  }
};
