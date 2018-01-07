const { query } = require('../libs/db');

exports.postmsg = async ({ name, email = '', text }) => {
  if (typeof name !== 'string' || typeof text !== 'string') return;

  const sql = ``;
  await query(sql);
};
