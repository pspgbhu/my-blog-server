const { query, pool } = require('../libs/db');

const escape = pool.escape.bind(pool);

const TABLE = 'messages';

exports.post = async ({ article, name, email = '', text = '' }) => {
  if (!article || !name) {
    throw Error('Param Error');
  }

  const sql = `INSERT INTO
    ${TABLE} (article, name, email, text)
    VALUES  (${escape([article, name, email, text])})`;

  console.log('SQL:', sql);

  try {
    await query(sql);
  } catch (error) {
    throw Error(error);
  }
};


exports.getmsgByArticle = async (article) => {
  if (!article) {
    throw Error('Param Error');
  }

  const sql = `SELECT * FROM ${TABLE}
    WHERE article = ${escape(article)} and status = 1
    ORDER BY create_time DESC
  `;

  console.log('SQL:', sql);

  try {
    return await query(sql);
  } catch (error) {
    throw Error(error);
  }
};
