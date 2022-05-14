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
    zipcode MEDIUMINT,
    ccNumber VARCHAR(100),
    expiryDate VARCHAR(100),
    zipCodeCC MEDIUMINT
    )
    `
    )
    )
    .catch((err) => console.log(err));

    db.insertCustomer = (req) => {

      console.log(req.session_id)
      return db.queryAsync(
        `
        REPLACE INTO responses (session_id, city, zipcode) VALUES ("${req.session_id}", 'hello', 23422);
        `
        )
        .then((err)=> {
          return console.log(err)

        })




      }







      module.exports = db;
