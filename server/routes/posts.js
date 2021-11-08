var express = require('express');
const { createClient } = require('../db/client');
var router = express.Router();

const client = createClient();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const r = await client.query("SELECT * FROM posts")
  res.status(200).send({ type: "BlogPost", data: r.rows });
});

router.post("/", async (req, res, next) => {
  if (!req.body.post) {
    res.status(400).send(req.body);
    return;
  }

  const { headerImg, title, body } = req.body.post;

  const t = "INSERT INTO posts(img, title, body) VALUES($1, $2, $3) RETURNING *"
  const r = await client.query(t, [headerImg, title, body]);
  res.status(200).send({ type: "BlogPost", data: r.rows });
})

module.exports = router;
