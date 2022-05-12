const db = require("../models");
const User = db.users;
var bcrypt = require("bcryptjs");


exports.find_user_data = (req, res) => {
  const id=req.userId

  User.findById(req.userId)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else {
        res.send(data);
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });

};


exports.update_password = (req, res) => {
  const user_id = req.userId

  if (!req.body.password) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  User.findById(user_id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found User with id " + user_id });
    else { 
      data.password = bcrypt.hashSync(req.body.password, 8)
      data.save(data); 
      res.send({ message: "User was updated successfully." });
    }
})
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving User with id=" + cv_id });
  });


};

