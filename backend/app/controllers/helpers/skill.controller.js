const db = require("../models");
const Skill = db.skills;

/* INVENTORY OF FUNCTIONS
create ---> Create and Save 
findAll ---> retrieve all 
delete ---> Delete one specific (id)
deleteAll ---> Delete All

*/

// Create and Save a new skill
exports.create_skill = (req, res) => {
    // Validate request
    if (!req.body.skillTitle) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    const cv_id = req.params.id;

    // Create a skill
    const skill = new Skill({
      cv: cv_id,
      skillTitle: req.body.skillTitle,
      skillValue: req.body.skillValue,
    });

    // Save skill in the database
    skill
      .save(skill)
      .then(data => {
        return data.id;
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the skill."
        });
      });
  };


// Retrieve all skills in one specified CV from the database.
exports.find_all_skills_in_cv = (req, res) => {
  const cv_id = req.params.id;

    Skill.find({ cv : cv_id })
      .then(data => {
        return data;
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving skills."
        });
      });
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

// Delete all skills in one CV from the database.
exports.delete_all_skills_in_cv = (req, res) => {
  const cv_id = req.params.id;
    Skill.deleteMany({ cv : cv_id })
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

// Find a single Skill with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Skill.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found skill with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving skill with id=" + id });
    });
};