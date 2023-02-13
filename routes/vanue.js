var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vanue/vanue', {
    title: 'Data Vanue'
  });
});

module.exports = router;