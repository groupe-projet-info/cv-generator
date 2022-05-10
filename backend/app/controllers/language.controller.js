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
      if (err) return handleError(err);
      res.send(cv.languages)
      console.log(cv.languages.length+" languages retrieved successfully ");
    })

};
