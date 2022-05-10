const db = require("../models");
const Language = db.languages;

// Create and Save a new Language

exports.create = (req, res) => {
    // Validate request
    if (!req.body.languageName) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create a Language
    const language = new Language({
      languageName: req.body.languageName,
      level: req.body.level,
      });

    // Save Language in the database
    language
      .save(language)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the languages."
        });
      });
  };


// Retrieve all Languages from the database.
exports.findAll = (req, res) => {
    Language.find({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving languages."
        });
      });
  };
  

// Find a single Language with an id
exports.findOne = (req, res) => {
  
};
// Update a Language by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Language with the specified id in the request

exports.delete = (req, res) => {
    const id = req.params.id;
    Language.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: "Cannot delete Language with id"+ id
          });
        } else {
          res.send({
            message: "Language was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Language with id=" + id
        });
      });
  };

// Delete all Languages from the database.
exports.deleteAll = (req, res) => {
    Language.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Languages were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Languages."
      });
    });
};



