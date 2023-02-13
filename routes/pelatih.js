var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pelatih/pelatih', {
    title: 'Data Pelatih'
  });
});

module.exports = router;