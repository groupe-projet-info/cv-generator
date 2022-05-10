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
      if (err) return handleError(err);
      res.send(cv.extracurricularCertifications)
      console.log(cv.extracurricularCertifications.length+" certifications retrieved successfully ");
    })

};

