const db = require("../models");
const Skill = db.skills;
const CV = db.cvs;
var ObjectId = require('mongoose').Types.ObjectId;


exports.add_skill = (req, res) => {
  var cv_id = req.params.cv_id;

  if (!req.body.skillTitle) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

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
    
      CV.findById(cv_id)
      .then( (cv)=>{
        cv.skills.push(data._id)
        cv.save(cv);
      });

    res.send({ message: "CV was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the skill."
      });
    });


};

exports.find_all_skills = (req, res) => {
  var cv_id = req.params.cv_id;

  CV.findOne({ _id: cv_id })
    .populate('skills').exec((err, cv) => {
      if (err) return handleError(err);
      res.send(cv.skills)
      console.log(cv.skills.length+" skills retrieved successfully ");
    })

};


exports.remove_one_skill = (req, res) => {
  var cv_id = req.params.cv_id;
  var skill_id= req.params.skill_id;

  CV.findById(cv_id)
  .then(cv => {
    if (!cv)
      res.status(404).send({ message: "Not found CV with id " + cv_id });
    else { 
      Skill.findByIdAndRemove(skill_id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete skill with id=${skill_id}. Maybe it was not found!`
        });
      } else {
        res.send({
          message: "Skill was deleted successfully!"
        });
        cv.skills.pull(skill_id);
        cv.save(cv); 
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete skill with id=" + skill_id
      });
    });
      
    }
})
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving CV with id=" + cv_id });
  });

};


exports.remove_all_skills = (req, res) => {
  var cv_id = req.params.cv_id;

  Skill.deleteMany({ cv: cv_id })
    .then(data => {
      console.log(`${data.deletedCount} skills were deleted successfully!`);
      CV.findById(cv_id)
      .then(cv => {
        if (!cv)
        res.status(404).send({ message: "Not found CV with id " + cv_id });
        else { 
          cv.skills = [];
          cv.save(data); 
          res.send({ message: "CV was updated successfully." });
        }
      })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving CV with id=" + cv_id });
  });
})
.catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while removing all skills."
    });
  });

};

