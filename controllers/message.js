const { post, getmsgByArticle } = require('../models/message');

exports.postmsg = async ({ article, name, email = '', text }) => {
  if ((name && typeof name !== 'string')
    || (text && typeof text !== 'string')
    || (article && typeof article !== 'string')
  ) { return; }

  await post({ article, name, email, text });
};


exports.getmsg = async ({ article }) => {
  if (article) {
    return getmsgByArticle(article);
  }

  throw Error('Param Error');
};
