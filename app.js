const Koa = require('koa');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');

const cors = require('./middlewares/cors');
const err = require('./middlewares/err');

require('./libs/db');

const api = require('./routes/api');

const app = new Koa();

// error handler
app.use(err());

app.use(cors());

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text'],
}));
app.use(json());
app.use(logger());

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(api.routes(), api.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;
