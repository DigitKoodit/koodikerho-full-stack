var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).send("Server is running");
});

module.exports = router;
