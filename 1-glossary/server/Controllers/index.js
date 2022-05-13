var model = require('./../Models/index.js');
let express = require('express')


module.exports.get = function(req, res){
  console.log(req.url)
  console.log('We in module.exports.get')

  model.getAll((err, data)=> {
    if(err) {
      console.log(err)
      res.sendStatus(403)
    } else {
      console.log('data in GET',data)
      res.send(data)

    }

  })

}

module.exports.post = function(req, res){
  console.log('We in module.exports.post')
  console.log('req.url', req.url)
  console.log('req.body', req.body)

  if (req.url === '/') {
    model.addEntry(req.body, (err, data)=> {
      if(err) {
        console.log(err)
        res.sendStatus(403)
      } else {
        console.log('data in POST',data)
        res.sendStatus(205)
      }
    })
  } else if (req.url === '/delete') {

    model.deleteEntry(req.body, (err, data)=> {
      if(err) {
        console.log(err)
        res.sendStatus(407)
      } else {
        console.log('data in delete',data)
        res.sendStatus(207)
      }
    })

  }
}










