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
  const cv_id = req.params.cv_id;
  const id = new ObjectId(req.params.id);

  CV.findById(cv_id)
    .then( (cv) => {
      if (!cv)
        res.status(404).send({ message: "Not found CV with id " + cv_id });
      else {
        //cv.skills.pullAll(id);
        //cv.save(data);
        res.send(cv);
      } 
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving CV with id=" + cv_id });
    });


 /* CV.findByIdAndUpdate(cv_id, { $pullAll: { skills: id } } , { useFindAndModify: false })

  CV.update({_id: cv_id}, { $pullAll: { skills: id } },{multi:true})
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update CV with id=${cv_id}. Maybe CV was not found!`
        });
      } else {
        res.send({ message: "CV was updated successfully." });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating CV with id=" + cv_id
      });
    });
*/
  


};





