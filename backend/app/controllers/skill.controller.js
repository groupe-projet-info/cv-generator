const db = require("../models");
const Skill = db.skills;

// Create and Save a new skill

exports.create = (req, res) => {
    // Validate request
    if (!req.body.skillTitle) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create a skill
    const skill = new Skill({
      skillTitle: req.body.skillTitle,
      skillValue: req.body.skillValue,
    });

    // Save skill in the database
    skill
      .save(skill)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the skill."
        });
      });
  };


// Retrieve all skills from the database.
exports.findAll = (req, res) => {
    Skill.find({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving skills."
        });
      });
  };
  

// Find a single skill with an id
exports.findOne = (req, res) => {
  
};
// Update a skill by the id in the request
exports.update = (req, res) => {
  
};

// Delete a skill with the specified id in the request

exports.delete = (req, res) => {
    const id = req.params.id;
    Skill.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: "Cannot delete skill with id"+ id
          });
        } else {
          res.send({
            message: "skill was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete skill with id=" + id
        });
      });
  };

// Delete all skills from the database.
exports.deleteAll = (req, res) => {
    Skill.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} skills were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all skills."
      });
    });
};





