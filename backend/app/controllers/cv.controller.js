const db = require("../models");
const CV = db.cvs;
const User=db.users;
const Certification = db.certifications;
const Education = db.educations;
const Job = db.jobs;
const Language = db.languages;
const Skill = db.skills;

// Create and Save a new cv
exports.create = (req, res) => {
    // Validate request
    if (!req.userId) {
      res.status(400).send({ message: "User id cannot be empty! Check the headers" });
      return;
    }

    // Create a cv
    const cv = new CV({
      user: req.userId,
      sex: req.body.sex,
      phoneNumber: req.body.phoneNumber,
      emailAdress: req.body.emailAdress,
      homeAdress: req.body.homeAdress,
      drivingLicence: req.body.drivingLicence,
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

// Find a cv with the specified user id in the request
exports.find_user_all_cvs = (req, res) => {
  var user_id = req.userId;
  var cv_id= req.params.cv_id;

  User.findById(user_id)
  .then(user => {
    if (!user)
      res.status(404).send({ message: "Not found user with id " + user_id });
    else { 

      CV.find({ user : user_id })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot find cv with id=${job_id}.`
        });
      } else {
        res.send(data); 
      }
    })
    }
})
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving user with id= " + user_id });
  });

};

// Set user's phone number
exports.set_phoneNumber = (req, res) => {
  var cv_id = req.params.cv_id;
  if (!req.body.phoneNumber) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  CV.findById(cv_id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found CV with id " + cv_id });
    else { 
      data.phoneNumber = req.body.phoneNumber;
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

// Set user's email adress
exports.set_emailAdress = (req, res) => {
  var cv_id = req.params.cv_id;
  if (!req.body.emailAdress) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  CV.findById(cv_id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found CV with id " + cv_id });
    else { 
      data.emailAdress = req.body.emailAdress;
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

// Set user's home adress
exports.set_homeAdress = (req, res) => {
  var cv_id = req.params.cv_id;
  if (!req.body.homeAdress) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  CV.findById(cv_id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found CV with id " + cv_id });
    else { 
      data.homeAdress = req.body.homeAdress;
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

// Set user's driving licence
exports.set_drivingLicence = (req, res) => {
  var cv_id = req.params.cv_id;
  if (!req.body.drivingLicence) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  CV.findById(cv_id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found CV with id " + cv_id });
    else { 
      data.drivingLicence = req.body.drivingLicence;
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

// Set job title
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

// Set Hobbies
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

exports.delete_all_elements_of_cv = (cv_id, res) => {

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
}

exports.remove_one_cv = (req, res) => {
  const cv_id = req.params.cv_id;

  this.delete_all_elements_of_cv(cv_id,res);

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

// Delete all cvs with the specified user id in the request
exports.delete_user_all_cvs = (req, res) => {
  var user_id = req.userId;
  var cv_id= req.params.cv_id;

  CV.find({ user : user_id })
  .then(cvs => {
    if (!cvs)
      res.status(404).send({ message: "CVs not found." });
    else { 
      cvs.forEach( (cv)=> {
        this.delete_all_elements_of_cv(cv.id,res);
        CV.findByIdAndRemove(cv.id, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot delete cv with id=${cv_id}.`
            });
          } else {
            console.log("1 CV was deleted successfully!");
          }
        });
    });
    res.send({
      message: "All cvs deleted successfully!"
    });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error while retrieving the CVs." 
      });
    });
      
};

