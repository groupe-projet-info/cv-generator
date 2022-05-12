const { authJwt } = require("../middlewares");
const language = require("../controllers/language.controller.js");

module.exports = app => {
    
    var language_router = require("express").Router();

     //Update
     language_router.post("/:cv_id/language", language.add_language);

     //Getter
     language_router.get("/:cv_id/language", language.find_all_languages);
     
     //Delete
     language_router.delete("/:cv_id/language/:lang_id",  language.remove_one_language);
     language_router.delete("/:cv_id/language", language.remove_all_languages);

    app.use("/api/cv", language_router);
  };