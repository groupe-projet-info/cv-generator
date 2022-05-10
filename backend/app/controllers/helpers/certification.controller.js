const db = require("../../models");
const Certification = db.certifications;

/* INVENTORY OF FUNCTIONS
create ---> Create and Save 
findAll ---> retrieve all 
delete ---> Delete one specific (id)
deleteAll ---> Delete All

*/

// Create and Save a new Certification
exports.create = (req, res) => {
    // Validate request
    if (!req.body.authority) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create a Certification
    const certification = new Certification({
      authority: req.body.authority,
      certificationName: req.body.certificationName,
      certificationPassYear: req.body.certificationPassYear
    });

    // Save Certification in the database
    certification
      .save(certification)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the certification."
        });
      });
  };

// Retrieve all Certifications from the database.
exports.findAll = (req, res) => {
    Certification.find({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving certifications."
        });
      });
  };
  
// Delete a Certification with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Certification.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: "Cannot delete Certification with id"+ id
          });
        } else {
          res.send({
            message: "Certification was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Certification with id=" + id
        });
      });
  };

// Delete all Certifications from the database.
exports.deleteAll = (req, res) => {
    Certification.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Certifications were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Certifications."
      });
    });
};






