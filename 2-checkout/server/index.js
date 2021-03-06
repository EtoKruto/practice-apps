require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// TODO: Build your Express app inside server.js


// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);
app.use(express.json());

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));



//  * Other routes here....
app.post('/form', (req, res) => {

  db.insertCustomer(req)
  .then(()=> {
    console.log('success POST')
    res.sendStatus(205);
  })
  .catch((err)=> {
    console.log(err)
  })

  // console.log('req.body', req.body)
  // console.log('req.session_id', req.session_id)

})

app.get('/form', (req, res) => {

  db.connectAsync()
  .then(()=> {
    console.log('success GET')
    res.sendStatus(206);
  })
  .catch((err)=> {
    console.log(err)
  })

  // console.log('req.body', req.body)
  // console.log('req.session_id', req.session_id)

})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);


// You can store this ID alongside form responses to relate responses to a given user and ensure a user can only submit the form once per session.



