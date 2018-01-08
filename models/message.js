const { query } = require('../libs/db');

const TABLE = 'messages';

exports.post = async ({ article, name, email = '', text = '' }) => {
  if (!article || !name) {
    throw Error('Param Error');
  }

  const sql = `INSERT INTO
    ${TABLE} (article, name, email, text)
    VALUES  (${[article, name, email, text].map(item => `"${item}"`).join(',')})`;

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
    WHERE article = "${article}"
    ORDER BY create_time DESC
  `;

  console.log('SQL:', sql);

  try {
    return await query(sql);
  } catch (error) {
    throw Error(error);
  }
};
