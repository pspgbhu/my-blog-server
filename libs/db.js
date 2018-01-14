const mysql = require('mysql');
const settings = require('../config/db');

const pool = mysql.createPool(settings);


/**
 *  query db
 */

function query(sql) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {

      if (err) {
        reject(err);
        return;
      }

      connection.query(sql, (err, res, fields) => {
        if (err) {
          connection.release();
          reject(err);
          return;
        }

        resolve(res);
        connection.release();
      });
    });
  });
}


module.exports = { query, pool };
