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
     
  User.findById(user_id)
  .then(user => {
    if (!user)
      res.status(404).send({ message: "Not found User with id " + user_id });
    else {
      //Check first password
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });}
      
      user.password = bcrypt.hashSync(req.body.newPassword, 8)
      user.save(user); 
      res.send({ message: "User was updated successfully." });
    }
})
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving User with id=" + cv_id });
  });


};

