require("dotenv").config({path: './.env'});
// require("dotenv").config({ path: './githubConfig.env'})

const express = require("express");
const path = require("path");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */


//  console.log(process.env.PORT)

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
