const prod = process.env.NODE_ENV === 'production';
const config = {
  host: prod ? '' : '',
  user: prod ? '' : '',
  password: prod ? '' : '',
  database: prod ? '' : '',
};

module.exports = config;
