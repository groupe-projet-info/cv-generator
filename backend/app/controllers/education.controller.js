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
      if (err) return handleError(err);
      res.send(cv.education)
      console.log(cv.education.length+" educations retrieved successfully ");
    })

};
