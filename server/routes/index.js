var express = require('express');
var router = express.Router();

// _health
router.get('/', function(req, res, next) {
  res.status(200).send("Server is running");
});

module.exports = router;
