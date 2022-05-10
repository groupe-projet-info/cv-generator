const db = require("../models");
const Job = db.jobs;
const CV = db.cvs;

  
exports.add_job = (req, res) => {
  var cv_id = req.params.cv_id;

  if (!req.body.jobTitle) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a job
  const job = new Job({
    cv: cv_id,
    jobTitle: req.body.jobTitle,
    companyName: req.body.companyName,
    jobDescription: req.body.jobDescription,
    jobShortDescription: req.body.jobShortDescription,
    jobTechnicalKeywords: req.body.jobTechnicalKeywords,
    startYear: req.body.startYear,
    hasEnded: req.body.hasEnded,
    endYear: req.body.endYear,
    missions: req.body.missions
  });

  // Save job in the database
  job
    .save(job)
    .then(data => {
    
      CV.findById(cv_id)
      .then( (cv)=>{
        cv.previousJobs.push(data._id)
        cv.save(cv);
      });

    res.send({ message: "CV was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the job."
      });
    });


};


exports.find_all_jobs = (req, res) => {
  var cv_id = req.params.cv_id;

  CV.findOne({ _id: cv_id })
    .populate('previousJobs').exec((err, cv) => {
      if (err) return handleError(err);
      res.send(cv.previousJobs)
      console.log(cv.previousJobs.length+" jobs retrieved successfully ");
    })

};
