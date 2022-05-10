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
  const id = req.params.cv_id;

  CV.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
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


// SKILLS

exports.add_skill = (req, res) => {

    var new_cv={}
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      })
    }

    // update the CV 
    const cv_id = req.params.cv_id;
    helpers_skill.create_skill(req,res)
    console.log("TEST 2");
    console.log(cv_id);
   // console.log("Coté CV"+haha);
    
    
    CV.findById(cv_id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found CV with id " + cv_id });
      else { 
        console.log("CV TROUVE");
        console.log(new_skill_id);
        new_cv = data.skills.push(new_skill_id); }
  })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving CV with id=" + cv_id });
    });
    
    // save the updated CV
    CV.findByIdAndUpdate(cv_id, new_cv, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update CV with id=${cv_id}. Maybe CV was not found!`
        });
      } else res.send({ message: "CV was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating CV with id=" + cv_id
      });
    });
};

exports.remove_all_skills = (req, res) => {
  var new_cv={}

  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    })
  }

  // update the CV 
  helpers_skill.delete_all_skills_in_cv(req,res)
  .then(data => {
    res.send({
      message: `${data.deletedCount} skills were deleted successfully!`
    });
  });

  const cv_id = req.params.cv_id;
  CV.findById(cv_id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found CV with id " + cv_id });
    else { 
      data.skills=[];
      new_cv=data;
    }
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving CV with id=" + cv_id });
  });
  
  // save the updated CV
  CV.findByIdAndUpdate(cv_id, new_cv, { useFindAndModify: false })
  .then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot update CV with id=${id}. Maybe CV was not found!`
      });
    } else res.send({ message: "CV was updated successfully." });
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating CV with id=" + cv_id
    });
  });
};

exports.find_all_skills = (req, res) => {
  helpers_skill.find_all_skills_in_cv(req,res)
  .then(data => {
    res.send(data);
  });
};


// JOBS

exports.add_job = (req, res) => {

  var new_cv={}
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    })
  }

  // update the CV 
  const cv_id = req.params.cv_id;
  new_job_id= helpers_job.create_job(req,res)


  CV.findById(cv_id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found CV with id " + cv_id });
    else { new_cv = data.previousJobs.push(new_job_id) }
})
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving CV with id=" + cv_id });
  });
  
  // save the updated CV
  CV.findByIdAndUpdate(cv_id, new_cv, { useFindAndModify: false })
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

exports.remove_all_jobs = (req, res) => {
var new_cv={}

if (!req.body) {
  return res.status(400).send({
    message: "Data to update can not be empty!"
  })
}

// update the CV 
helpers_job.delete_all_jobs_in_cv(req,res)
.then(data => {
  res.send({
    message: `${data.deletedCount} jobs were deleted successfully!`
  });
});

const cv_id = req.params.cv_id;
CV.findById(cv_id)
.then(data => {
  if (!data)
    res.status(404).send({ message: "Not found CV with id " + cv_id });
  else { 
    data.jobs=[];
    new_cv=data;
  }
})
.catch(err => {
  res
    .status(500)
    .send({ message: "Error retrieving CV with id=" + cv_id });
});

// save the updated CV
CV.findByIdAndUpdate(cv_id, new_cv, { useFindAndModify: false })
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

exports.find_all_jobs = (req, res) => {
helpers_job.find_all_jobs_in_cv(req,res)
.then(data => {
  res.send(data);
});
};
