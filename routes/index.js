var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
  // res.sendFile('index.html', {
  //   root: 'views'
  // });
});

module.exports = router;
