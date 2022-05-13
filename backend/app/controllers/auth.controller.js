require('dotenv').config();
const db = require("../models");
const User = db.users;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.verify_username = (req, res) => {
  // Check if Username isnt already used !
  User.findOne({
    userName: req.body.userName
  }).exec((err, data) => {

    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (data) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }
    res.status(200).send({ message: "Username not taken !" });

  });
};


exports.signup = (req, res) => {

  // Check if Username isnt already used !
  User.findOne({
    userName: req.body.userName
  }).exec((err, data) => {

    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (data) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }

    const user = new User({
      userName: req.body.userName,
      password: bcrypt.hashSync(req.body.password, 8)
    });
  
    user.save((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.send({ message: "User was registered successfully!" });
    });

  });

    
};


exports.signin = (req, res) => {
  User.findOne({
    userName: req.body.userName
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      var token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.TOKEN_VALIDITY_TIME * 3600 
      });
      res.status(200).send({
        id: user._id,
        userName: user.userName,
        accessToken: token
      });
    });
};


exports.test_token = (req, res) => {
  
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    return res.status(200).send({ message: "Authorized!" });
  });

};