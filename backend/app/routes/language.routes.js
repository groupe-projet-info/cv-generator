module.exports = app => {
    const language = require("../controllers/language.controller.js");
    var language_router = require("express").Router();

    language_router.get("/:cv_id/language", language.find_all_languages);
    language_router.post("/:cv_id/language", language.add_language);
    //language_router.delete("/:cv_id/language", language.remove_all_languages);

    app.use("/api/cv", language_router);
  };