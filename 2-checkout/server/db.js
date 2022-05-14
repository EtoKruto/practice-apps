const mysql = require("mysql2");
const Promise = require("bluebird");
require('dotenv').config()

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
.then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
.then(() => db.queryAsync(
  `CREATE TABLE IF NOT EXISTS responses
  (
    session_id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    line1 VARCHAR(100),
    line2 VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(100),
    zipcode VARCHAR(100),
    ccNumber VARCHAR(100),
    expiryDate VARCHAR(100),
    zipCodeCC VARCHAR(100)
    )
    `
    )
    )
    .then((success) => console.log('success', success))
    .catch((err) => console.log(err));

    db.insertCustomer = (req) => {

      // console.log(req.session_id)
      // console.log(req.body)
      console.log('ALL: ',`${req.session_id},
      ${req.body.userInfo.name},
      ${req.body.userInfo.email},
      ${req.body.userInfo.password},
      ${req.body.addressInfo.line1},
      ${req.body.addressInfo.line2},
      ${req.body.addressInfo.city},
      ${req.body.addressInfo.state},
      ${req.body.addressInfo.zipcode},
      ${req.body.ccInfo.ccNumber},
      ${req.body.ccInfo.expiryDate},
      ${req.body.ccInfo.zipcodeCC}
      `)

      return db.queryAsync('REPLACE INTO responses (session_id, name, email, password, line1, line2, city, state, zipcode, ccNumber, expiryDate, zipCodeCC)VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [
        req.session_id,
        req.body.userInfo.name,
        req.body.userInfo.email,
        req.body.userInfo.password,
        req.body.addressInfo.line1,
        req.body.addressInfo.line2,
        req.body.addressInfo.city,
        req.body.addressInfo.state,
        req.body.addressInfo.zipcode,
        req.body.ccInfo.ccNumber,
        req.body.ccInfo.expiryDate,
        req.body.ccInfo.zipcodeCC
      ]
      )
      .then((err)=> {
        return console.log(err)
      })
    }







    module.exports = db;


    // `REPLACE INTO responses (session_id) VALUES ('cc39f554-a724-4715-9251-0e37c028a4a4')`


    // `INSERT INTO responses (session_id, name) VALUES ("cc39f554-a724-4715-9251-0e37c028a4a4", "hello")`;


    // `REPLACE INTO responses
    // (
    // session_id,
    // name,
    // email,
    // password,
    // line1,
    // line2,
    // city,
    // state,
    // zipcode,
    // ccNumber,
    // expiryDate,
    // zipCodeCC
    // )
    // VALUES
    // (
    //   cc39f554-a724-4715-9251-0e37c028a4a4,
    // hello,
    // goodbye,
    // 21376182323,
    // 123 Memoery Lane,
    // Apt 123,
    // Atlanta,
    // GA,
    // ${Math(14323)},
    // 873487462648,
    // 64/2234,
    // ${Math(14323)}
    // )
    // `