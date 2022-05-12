const { authJwt } = require("../middlewares");
const language = require("../controllers/language.controller.js");

module.exports = app => {
    
    var language_router = require("express").Router();

     //Update
     language_router.post("/:cv_id/language", [authJwt.verifyToken], language.add_language);

     //Getter
     language_router.get("/:cv_id/language", [authJwt.verifyToken], language.find_all_languages);
     
     //Delete
     language_router.delete("/:cv_id/language/:lang_id", [authJwt.verifyToken], language.remove_one_language);
     language_router.delete("/:cv_id/language", [authJwt.verifyToken], language.remove_all_languages);

    app.use("/api/cv", language_router);
  };