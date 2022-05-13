const db = require("../models");
const Certification = db.certifications;
const CV = db.cvs;


exports.add_certification= (req, res) => {
  var cv_id = req.params.cv_id;

  if (!req.body.certificationName) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a certification
  const certification = new Certification({
    cv: cv_id,
    authority: req.body.authority,
    certificationName: req.body.certificationName,
    certificationPassYear: req.body.certificationPassYear
  });

  // Save certification in the database
  certification
    .save(certification)
    .then(data => {
    
      CV.findById(cv_id)
      .then( (cv)=>{
        cv.extracurricularCertifications.push(data._id)
        cv.save(cv);
      });

    res.send({ message: "CV was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the certification."
      });
    });


};

exports.find_all_certifications = (req, res) => {
  var cv_id = req.params.cv_id;

  CV.findOne({ _id: cv_id })
    .populate('extracurricularCertifications').exec((err, cv) => {
      if (err) {
        res
      .status(500)
      .send({ message: "Error retrieving CV with id=" + cv_id });
      }
      res.send(cv.extracurricularCertifications)
      console.log(cv.extracurricularCertifications.length+" certifications retrieved successfully ");
    })

};

exports.remove_one_certification = (req, res) => {
  var cv_id = req.params.cv_id;
  var certif_id= req.params.certif_id;

  CV.findById(cv_id)
  .then(cv => {
    if (!cv)
      res.status(404).send({ message: "Not found CV with id " + cv_id });
    else { 

      Certification.findByIdAndRemove(certif_id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Certification with id=${certif_id}. Maybe it was not found!`
        });
      } else {
        res.send({
          message: "Certification was deleted successfully!"
        });
        cv.extracurricularCertifications.pull(certif_id);
        cv.save(cv); 
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Certification with id=" + certif_id
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

exports.remove_all_certifications = (req, res) => {
  var cv_id = req.params.cv_id;

  Certification.deleteMany({ cv: cv_id })
    .then(data => {
      console.log(`${data.deletedCount} certifications were deleted successfully!`);
      CV.findById(cv_id)
      .then(cv => {
        if (!cv)
        res.status(404).send({ message: "Not found CV with id " + cv_id });
        else { 
          cv.extracurricularCertifications = [];
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
        err.message || "Some error occurred while removing all certifications."
    });
  });


};

