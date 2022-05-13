const db = require("../models");
const Language = db.languages;
const CV = db.cvs;
  
exports.add_language = (req, res) => {
  var cv_id = req.params.cv_id;

  if (!req.body.languageName) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a language
  const language = new Language({
    cv: cv_id,
    languageName: req.body.languageName,
    level: req.body.level
  });

  // Save language in the database
  language
    .save(language)
    .then(data => {
    
      CV.findById(cv_id)
      .then( (cv)=>{
        cv.languages.push(data._id)
        cv.save(cv);
      });

    res.send({ message: "CV was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the language."
      });
    });


};


exports.find_all_languages = (req, res) => {
  var cv_id = req.params.cv_id;

  CV.findOne({ _id: cv_id })
    .populate('languages').exec((err, cv) => {
      if (err) {
        res
      .status(500)
      .send({ message: "Error retrieving CV with id=" + cv_id });
      }
      res.send(cv.languages)
      console.log(cv.languages.length+" languages retrieved successfully ");
    })

};


exports.remove_one_language = (req, res) => {
  var cv_id = req.params.cv_id;
  var lang_id= req.params.lang_id;

  CV.findById(cv_id)
  .then(cv => {
    if (!cv)
      res.status(404).send({ message: "Not found CV with id " + cv_id });
    else { 
      Language.findByIdAndRemove(lang_id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete language with id=${lang_id}. Maybe it was not found!`
        });
      } else {
        res.send({
          message: "Language was deleted successfully!"
        });
        cv.languages.pull(lang_id);
        cv.save(cv); 
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete language with id=" + lang_id
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


exports.remove_all_languages = (req, res) => {
  var cv_id = req.params.cv_id;

  Language.deleteMany({ cv: cv_id })
    .then(data => {
      console.log(`${data.deletedCount} languages were deleted successfully!`);
      CV.findById(cv_id)
      .then(cv => {
        if (!cv)
        res.status(404).send({ message: "Not found CV with id " + cv_id });
        else { 
          cv.languages = [];
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
        err.message || "Some error occurred while removing all languages."
    });
  });

};
