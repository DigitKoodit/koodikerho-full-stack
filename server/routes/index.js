var express = require('express');
var path = require('path');
var router = express.Router();

// _health
router.get('/', function(req, res, next) {
  res.sendFile(path.join(path.resolve("../client"), "build", "index.html"));
});

module.exports = router;
