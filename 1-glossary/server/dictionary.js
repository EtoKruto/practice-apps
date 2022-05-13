var express = require('express');
var router = express.Router();
var controllers = require('./Controllers/index.js');



router.get('/', controllers.get);
router.post('/', controllers.post);
router.post('/delete', controllers.post);

//export this router to use in our index.js
module.exports = router;