var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zlogger' });
});

/* GET home page. */
/*router.get('/foo', function(req, res, next) {
  throw {
    status: 500,
    message: 'error'
  }
});*/

module.exports = router;
