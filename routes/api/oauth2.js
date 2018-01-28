const router = require('koa-router')();
const axios = require('axios');
const { API_PREFIX } = require('../routes.types');
const { randomString } = require('../../utils');

module.exports = router;

const CLIENT_ID = 'f0109912955c9ab71e4d';
const CLIENT_SECRET = '69bc375d03ad7c5f75e92736d80d79b8cbf7cf7d';
const API_OAUTH2 = '/oauth2';
const API_CODE = '/github/code';
const API_LOGIN = '/github/login';
const API_TOKEN = '/github/token';
const URL_BLOG = 'http://blog.pspgbhu.me';
const URL_SERVER = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'http://server.pspgbhu.me';

const stateTagMap = new Map();


/**
 * With the prefix
 */
router.prefix('/oauth2');


/**
 * Login with GitHub.
 */
router.get(API_LOGIN, async ctx => {
  const state = `${randomString()}${randomString()}@@@${encodeURIComponent(ctx.href)}`;
  const redirectUri = encodeURIComponent(`${URL_SERVER}${API_PREFIX}${API_OAUTH2}${API_CODE}`);
  const queryArr = [
    `client_id=${CLIENT_ID}`,
    `redirect_uri=${redirectUri}`,
    `state=${state}`,
  ];
  const url = `https://github.com/login/oauth/authorize?${queryArr.join('&')}`;

  console.log('[API_LOGIN] url: ', url);
  console.log('[API_LOGIN] state: ', state);
  stateTagMap.set(state, new Date().getTime()); // Prevent CSRF
  console.log('[stateTagMap]:', stateTagMap);
  ctx.redirect(url);
});


/**
 * Get the code of GitHub. and will get the token back with this.
 */
router.get(API_CODE, async ctx => {
  const state = ctx.query.state;
  const code = ctx.query.code;
  const timestamp = stateTagMap.get(state);
  stateTagMap.delete(state);

  console.log('[API_CODE] state', state);
  console.log('[API_CODE] code', code);

  // Prevent CSRF
  if (!timestamp) {
    ctx.body = '请求已被拦截！';
    return;
  }
  if (new Date().getTime() - timestamp > 1000 * 60 * 10) {
    ctx.body = '超时！请重新操作！';
    return;
  }

  let returnUrl = decodeURIComponent(state.split('@@@')[1]);

  if (returnUrl.search(URL_BLOG) < 0) {
    returnUrl = URL_BLOG;
  }

  console.log('[API_CODE] returnUrl:', returnUrl);

  returnUrl = 'http://blog.pspgbhu.me';

  axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token',
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
      state,
    },
  }).then(res => {
    const { token } = res;
    console.log('[API_CODE] Get Token:', token);
    ctx.redirect(returnUrl);
  }).catch(error => {
    console.error('AXIOS REQUEST ERROR: [API_CODE]', error);
    ctx.redirect(URL_BLOG);
  });
});
