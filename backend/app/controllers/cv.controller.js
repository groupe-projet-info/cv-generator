const db = require("../models");
const CV = db.cvs;



// Create and Save a new cv

exports.create = (req, res) => {
    // Validate request
    if (!req.body.jobTitle) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    // Create a cv
    const cv = new CV({
      user: req.body.user,
      jobTitle: req.body.jobTitle,
      education:[],
      skills:[],
      previousJobs:[],
      hobbies:[],
      languages:[],
      extracurricularCertifications:[],
      preset: req.body.preset,
      creationDate:Date.now().toISOString(),
      lastModifiedDate: creationDate,
    });

    // Save it in the database
    cv
      .save(cv)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the cv."
        });
      });
  };


// Retrieve all cvs from the database.
exports.findAll = (req, res) => {
    CV.find({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving CVs."
        });
      });
  };
  

// Find a single cv with an id
exports.findOne = (req, res) => {
  
};
// Update a cv by the id in the request
exports.update = (req, res) => {
  
};

// Delete a cv with the specified id in the request

exports.delete = (req, res) => {
    const id = req.params.id;
    CV.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: "Cannot delete CV with id"+ id
          });
        } else {
          res.send({
            message: "CV was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete CV with id=" + id
        });
      });
  };

// Delete all CVs from the database.
exports.deleteAll = (req, res) => {
    CV.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} CVs were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all CVs."
      });
    });
};



//A MODIFIER


exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      })
    }
    const id = req.params.id;

    // update the CV 
   //--------------------- Write something here
   new_cv={}
    
    // save the updated CV
    CV.findByIdAndUpdate(id, new_cv, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update CV with id=${id}. Maybe CV was not found!`
        });
      } else res.send({ message: "CV was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating CV with id=" + id
      });
    });
};