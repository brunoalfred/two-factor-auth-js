var express = require("express");
const speakeasy = require("speakeasy");
const JsonDB = require("node-json-db").JsonDB;
const Config = require("node-json-db/dist/lib/JsonDBConfig").Config;
const uuid = require("uuid");

var db = new JsonDB(new Config("myDataBase", true, false, '/'));



var router = express.Router();

/* GET home page. */
router.post("/", function (req, res, next) {
  const id = uuid.v4();
  try {
    const path = `/user/${id}`;
    const temp_secret = speakeasy.generateSecret();
    db.push(path, { id, temp_secret });
    res.json({ id, secret: temp_secret.base32 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error generating secret key" });
  }

  // res.render('register', { title: 'Express' });
});

module.exports = router;
