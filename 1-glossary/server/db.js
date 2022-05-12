const mongoose = require("mongoose");
require("dotenv").config({path: './.env'});

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);
// console.log('process.env.DB_NAME', process.env.DB_NAME)

// 2. Set up any schema and models needed by the app
const glossarySchema = new mongoose.Schema({
  name: String,
  def: String
});
const glossary = mongoose.model('glossary', glossarySchema);

// 3. Export the models
function getAll () {

  return glossary.find({})
  .limit(10)


}


let addEntry = (entry) => {
  // console.log('entry', entry);

  // console.log('entry.name', entry.name);
  // console.log('entry.def', entry.def);
  // glossary.find({entry.name})
  return glossary.exists({ name: entry.name})
  .then((userExists)=> {
    if(userExists) {
      console.log("User already exists");
      return 'exists';
    } else {
      // console.log('DID THIS RUN ONCE?')
      return glossary.create({name : entry.name, def: entry.def})
    };
  })


}
// 4. Import the models into any modules that need them

let deleteEntry = (entry) => {
  // console.log('entry', entry);

  // console.log('entry.name', entry.name);
  // console.log('entry.def', entry.def);

  return glossary.exists({ name: entry.name})
  .then((userExists)=> {
    if(!userExists) {
      console.log("User doesn't exists");
      return 'NotFound';
    } else {
      // console.log('DID THIS RUN ONCE?')
      // return glossary.create({name : entry.name, def: entry.def})
      return glossary.deleteOne({ name: entry.name });
    };
  })
}

module.exports.getAll = getAll;
module.exports.addEntry = addEntry;
module.exports.deleteEntry = deleteEntry;
