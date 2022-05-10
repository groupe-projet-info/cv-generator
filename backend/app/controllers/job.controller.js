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



exports.remove_one_job = (req, res) => {
  var cv_id = req.params.cv_id;
  var job_id= req.params.job_id;

  CV.findById(cv_id)
  .then(cv => {
    if (!cv)
      res.status(404).send({ message: "Not found CV with id " + cv_id });
    else { 

      Job.findByIdAndRemove(job_id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete job with id=${job_id}. Maybe it was not found!`
        });
      } else {
        res.send({
          message: "Job was deleted successfully!"
        });
        cv.previousJobs.pull(job_id);
        cv.save(cv); 
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Job with id=" + job_id
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


exports.remove_all_jobs = (req, res) => {
  var cv_id = req.params.cv_id;

  Job.deleteMany({ cv: cv_id })
    .then(data => {
      console.log(`${data.deletedCount} jobs were deleted successfully!`);
      CV.findById(cv_id)
      .then(cv => {
        if (!cv)
        res.status(404).send({ message: "Not found CV with id " + cv_id });
        else { 
          cv.previousJobs = [];
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
        err.message || "Some error occurred while removing all jobs."
    });
  });


};

