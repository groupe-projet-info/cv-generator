const db = require("../models");
const CV = db.cvs;
const LANG = db.languages;
const CERTIF = db.certifications;
const EDUC = db.educations;
const SKILLS = db.skills;
const JOBS = db.jobs

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

// Update education
exports.update_educ = (req, res) => {
    const id = req.params.id;
    EDUC.findByIdAndUpdate(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: "Cannot update education with id"+ id
          });
        } else {
          res.send({
            message: "Education was updated successfully!"
          });
        }
      })  
};
// Update certifications
exports.update_certif = (req, res) => {
    const id = req.params.id;
    CERTIF.findByIdAndUpdate(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: "Cannot update certifications with id"+ id
          });
        } else {
          res.send({
            message: "Certifications was updated successfully!"
          });
        }
      })  
};

// Update languages
exports.update_lang = (req, res) => {
    const id = req.params.id;
    LANG.findByIdAndUpdate(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: "Cannot update languages with id"+ id
          });
        } else {
          res.send({
            message: "Laguages was updated successfully!"
          });
        }
      })  
};

// Update Skills
exports.update_skills = (req, res) => {
  const id = req.params.id;
  SKILLS.findByIdAndUpdate(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: "Cannot update skills with id"+ id
        });
      } else {
        res.send({
          message: "Skills was updated successfully!"
        });
      }
    })  
};

// Update jobs
exports.update_skills = (req, res) => {
  const id = req.params.id;
  JOBS.findByIdAndUpdate(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: "Cannot update skills with id"+ id
        });
      } else {
        res.send({
          message: "Jobs was updated successfully!"
        });
      }
    })  
};

exports.delete = (req, res) => {
  const id = req.params.id;
  EDUC.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: "Cannot delete education with id"+ id
        });
      } else {
        res.send({
          message: "Education was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete education with id=" + id
      });
    });
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
        message: "Data to update cannot be empty!"
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