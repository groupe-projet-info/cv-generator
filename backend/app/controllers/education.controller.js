const db = require("../models");
const Education = db.educations;
const CV = db.cvs;


exports.add_education = (req, res) => {
  var cv_id = req.params.cv_id;

  if (!req.body.location) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create an education
  const education = new Education({
    cv: cv_id,
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
    
      CV.findById(cv_id)
      .then( (cv)=>{
        cv.education.push(data._id)
        cv.save(cv);
      });

    res.send({ message: "CV was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the education."
      });
    });


};


exports.find_all_educations = (req, res) => {
  var cv_id = req.params.cv_id;

  CV.findOne({ _id: cv_id })
    .populate('education').exec((err, cv) => {
      if (err) {
        res
      .status(500)
      .send({ message: "Error retrieving CV with id=" + cv_id });
      }
      res.send(cv.education)
      console.log(cv.education.length+" educations retrieved successfully ");
    })

};


exports.remove_one_education = (req, res) => {
  var cv_id = req.params.cv_id;
  var educ_id= req.params.educ_id;

  CV.findById(cv_id)
  .then(cv => {
    if (!cv)
      res.status(404).send({ message: "Not found CV with id " + cv_id });
    else { 

      Education.findByIdAndRemove(educ_id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Education with id=${educ_id}. Maybe it was not found!`
        });
      } else {
        res.send({
          message: "Education was deleted successfully!"
        });
        cv.education.pull(educ_id);
        cv.save(cv); 
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Education with id=" + educ_id
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


exports.remove_all_educations = (req, res) => {
  var cv_id = req.params.cv_id;

  Education.deleteMany({ cv: cv_id })
    .then(data => {
      console.log(`${data.deletedCount} educations were deleted successfully!`);
      CV.findById(cv_id)
      .then(cv => {
        if (!cv)
        res.status(404).send({ message: "Not found CV with id " + cv_id });
        else { 
          cv.education = [];
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
        err.message || "Some error occurred while removing all educationss."
    });
  });


};

