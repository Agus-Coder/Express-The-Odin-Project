var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cool', { title: 'Express' });
});

module.exports = router;

// ORM = Object Relational Model
// ODM = Object Data Model