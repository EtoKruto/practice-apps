require("dotenv").config({path: './.env'});
let mongooseDB = require('./db.js')
var dictionary = require('./dictionary.js');

const express = require("express");
const path = require("path");
// const url = require('url')
const app = express();
// const router = express.Router()


// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const router = app.Router()

app.use('/dictionary', dictionary);

// router.get('/dictionary', router.(req, res) => {
//   console.log('its a GET')
//   res.send('Birds home page')
// })
// // define the about route
// router.post('/dictionary', (req, res) => {
//   res.send('About birds')
// })


// app.post('/dictionary', (req, res) => {

//   // console.log(req.data);
//   console.log('req.body', req.body);

//   mongooseDB.addEntry(req.body)
//   .then((err)=> {
//     if(err === 'exists'){
//       res.sendStatus(402)
//     } else {
//     res.sendStatus(201)
//     }
//   })
//   .catch((err)=> {
//     console.log(err)
//   })
// })

// app.post('/delete', (req, res) => {

//   // console.log(req.data);
//   console.log('req.body in delete', req.body);

//   mongooseDB.deleteEntry(req.body)
//   .then((err)=> {
//     if(err === 'NotFound'){
//       res.sendStatus(403)
//     } else {
//     res.sendStatus(202)
//     }
//   })
//   .catch((err)=> {
//     console.log(err)
//   })
// })

// app.get('/dictionary', (req, res) => {

//   mongooseDB.getAll()
//   .then((data)=> {
//     // console.log('data in get', data)
//     res.send(data)
//   })
//   .catch((err)=> {
//     console.log(err)
//   })
// })

//  console.log(process.env.PORT)

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
