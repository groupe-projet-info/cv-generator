const db = require("../models");
const Job = db.jobs;

// Create and Save a new job

exports.create = (req, res) => {
    // Validate request
    if (!req.body.jobTitle) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create a Job
    const job = new Job({
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

    // Save Job in the database
    job
      .save(job)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the jobs."
        });
      });
  };


// Retrieve all Jobs from the database.
exports.findAll = (req, res) => {
    Job.find({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving jobs."
        });
      });
  };
  

// Find a single Job with an id
exports.findOne = (req, res) => {
  
};
// Update a Job by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Job with the specified id in the request

exports.delete = (req, res) => {
    const id = req.params.id;
    Job.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: "Cannot delete Job with id"+ id
          });
        } else {
          res.send({
            message: "Job was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Job with id=" + id
        });
      });
  };

// Delete all Jobs from the database.
exports.deleteAll = (req, res) => {
    Job.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Jobs were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Jobs."
      });
    });
};



