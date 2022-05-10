const db = require("../models");
const User = db.users;

/* INVENTORY OF FUNCTIONS
create ---> Create and Save 
findAll ---> retrieve all 
delete ---> Delete one specific (id)
deleteAll ---> Delete All

*/

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.userName) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create an User
    const user = new User({
      userName: req.body.userName,
      password: req.body.password
    }); // TODO: MongoDB a des champs createdAt et UpdatedAt automatiquement ajoutés... Look into that

    // Save User in the database
    user
      .save(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.find({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };
  
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    User.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: "Cannot delete User with id"+ id
          });
        } else {
          res.send({
            message: "User was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
  };

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Users were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users."
      });
    });
};
