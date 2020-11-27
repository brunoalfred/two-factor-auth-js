var express = require("express");
const speakeasy = require("speakeasy");
const JsonDB = require("node-json-db").JsonDB;
const Config = require("node-json-db/dist/lib/JsonDBConfig").Config;


var router = express.Router();


var db = new JsonDB(new Config("myDataBase", true, false, '/'));

    




app.post("/api/validate", (req,res) => {
    const { userId, token } = req.body;
    try {
      // Retrieve user from database
      const path = `/user/${userId}`;
      const user = db.getData(path);
      console.log({ user })
      const { base32: secret } = user.secret;
      // Returns true if the token matches
      const tokenValidates = speakeasy.totp.verify({
        secret,
        encoding: 'base32',
        token,
        window: 1
      });
      if (tokenValidates) {
        res.json({ validated: true })
      } else {
        res.json({ validated: false})
      }
    } catch(error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving user'})
    };
  })