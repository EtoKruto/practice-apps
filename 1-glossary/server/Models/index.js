const mysql = require('mysql2');




// 1. Use mongoose to establish a connection to MongoDB
const connection = mysql.createConnection({
  user: 'root',
  password: 'student',
  database: 'dictionary'
});

// connection.connect();

function getAll (callback) {

  connection.query('SELECT * FROM definitions',
  (err, results, fields)=> {
    if(err) {
      console.log('err', err)
      callback(err, null)
    } else {
      console.log('results', results)
      callback(null, results)
    }
  }
  );

}

let addEntry = (dataEntry, callback) => {
  // console.log('entry', entry);
  // INSERT IGNORE INTO person_tbl (last_name, first_name) VALUES( 'Jay', 'Thomas');
  connection.query('REPLACE INTO definitions (name, def) VALUES (?, ?)', [dataEntry.name, dataEntry.def], (err, results, fields)=> {

    if(err) {
      console.log('err', err)
      callback(err, null)
    } else {
      console.log('results', results)
      callback(null, results)
    }
  })
}


let deleteEntry = (entry, callback) => {

  console.log('entry', entry);
  console.log('entry.name', entry.name);
  connection.query('DELETE FROM definitions WHERE name = (?)', entry.name, (err, results, fields)=> {
    if(err) {
      console.log('err', err)
      callback(err, null)
    } else {
      console.log('results', results)
      callback(null, results)
    }
  })



}

module.exports.getAll = getAll;
module.exports.addEntry = addEntry;
module.exports.deleteEntry = deleteEntry;
