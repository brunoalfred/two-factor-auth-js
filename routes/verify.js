var express = require("express");
const speakeasy = require("speakeasy");
const JsonDB = require("node-json-db").JsonDB;
const Config = require("node-json-db/dist/lib/JsonDBConfig").Config;


var router = express.Router();


var db = new JsonDB(new Config("myDataBase", true, false, '/'));


/* GET verify page. */
router.get('/', function(req, res, next) {
  res.render('verify', { title: 'Express' });
 
});

/* POST verify page. */
router.post("/", function (req, res, next) {
  const { userId, token } = req.body;
  try {
    // Retrieve user from the Database
    const path = `/user/${userId}`;
    const user = db.getData(path);
    console.log({ user });
    const { base32: secret } = user.temp_secret;
    const verified = speakeasy.totp.verify({
      secret,
      encoding: "base32",
      token,
    });

    if (verified) {
      // Update user data
      db.push(path, { id: userId, secret: user.temp_secret });
      res.json({ verified: true });
    } else {
      res.json({ verified: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving user" });
  }

});





module.exports = router;
