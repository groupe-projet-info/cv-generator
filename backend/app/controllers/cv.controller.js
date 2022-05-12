const db = require("../models");
const CV = db.cvs;
const Certification = db.certifications;
const Education = db.educations;
const Job = db.jobs;
const Language = db.languages;
const Skill = db.skills;

// Create and Save a new cv
exports.create = (req, res) => {
    // Validate request
    if (!req.body.preset) {
      res.status(400).send({ message: "Preset can not be empty!" });
      return;
    }

    // Create a cv
    const cv = new CV({
      user: req.body.user_id,
      jobTitle: req.body.jobTitle,
      education:[],
      skills:[],
      previousJobs:[],
      hobbies:[],
      languages:[],
      extracurricularCertifications:[],
      preset: req.body.preset
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

// Find a single cv with an id
exports.find_one_cv = (req, res) => {
  const id = req.params.cv_id;

  CV.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found CV with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving CV with id=" + id });
    });
};


// JOBTITLE
exports.set_jobtitle = (req, res) => {
  var cv_id = req.params.cv_id;
  if (!req.body.jobTitle) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  CV.findById(cv_id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found CV with id " + cv_id });
    else { 
      data.jobTitle = req.body.jobTitle;
      data.save(data); 
      res.send({ message: "CV was updated successfully." });
    }
})
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving CV with id=" + cv_id });
  });

};

// HOBBIES
exports.set_hobbies = (req, res) => {
  var cv_id = req.params.cv_id;
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  CV.findById(cv_id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found CV with id " + cv_id });
    else { 
      data.hobbies = req.body.hobbies
      data.save(data); 
      res.send({ message: "CV was updated successfully." });
    }
})
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving CV with id=" + cv_id });
  });

};



//DELETE CVS

exports.remove_one_cv = (req, res) => {

  const cv_id = req.params.cv_id;

  Certification.deleteMany({ cv: cv_id })

    .then(data => {
      console.log(`${data.deletedCount} Certifications were deleted successfully!`);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Certifications."
      });
    });

    Education.deleteMany({ cv: cv_id })
    .then(data => {
      console.log(`${data.deletedCount} Educations were deleted successfully!`);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Educations."
      });
    });

    Job.deleteMany({ cv: cv_id })
    .then(data => {
      console.log(`${data.deletedCount} Jobs were deleted successfully!`);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Jobs."
      });
    });

    Language.deleteMany({ cv: cv_id })
    .then(data => {
      console.log(`${data.deletedCount} Languages were deleted successfully!`);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Languages."
      });
    });

    Skill.deleteMany({ cv: cv_id })
    .then(data => {
      console.log(`${data.deletedCount} Skills were deleted successfully!`);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Skills."
      });
    });

    CV.findByIdAndRemove(cv_id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete CV with id=${cv_id}. Maybe it was not found!`
        });
      } else {
        res.send({
          message: "CV was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete CV with id=" + cv_id
      });
    });

};