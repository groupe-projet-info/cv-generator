const db = require("../models");
const Education = db.educations;

/* INVENTORY OF FUNCTIONS
create ---> Create and Save 
findAll ---> retrieve all 
delete ---> Delete one specific (id)
deleteAll ---> Delete All

*/

// Create and Save a new education
exports.create = (req, res) => {
    // Validate request
    if (!req.body.location) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create an education
    const education = new Education({
      location: req.body.location,
      title: req.body.title,
      startYear: req.body.startYear,
      hasEnded: req.body.hasEnded,
      endYear: req.body.endYear,
      comments: req.body.comments
    });

    // Save education in the database
    education
      .save(education)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the education."
        });
      });
  };

// Retrieve all educations from the database.
exports.findAll = (req, res) => {
    Education.find({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving educations."
        });
      });
  };

// Delete an education with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Education.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: "Cannot delete education with id"+ id
          });
        } else {
          res.send({
            message: "Education was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete education with id=" + id
        });
      });
  };

// Delete all educations from the database.
exports.deleteAll = (req, res) => {
    Education.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} educations were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all educations."
      });
    });
};
