module.exports = app => {
    const education = require("..//controllers/education.controller.js");
    var educ_router = require("express").Router();

    educ_router.get("/:cv_id/education", education.find_all_educations);
    educ_router.post("/:cv_id/education", education.add_education);
    //educ_router.delete("/:cv_id/education", education.remove_all_educations);*/

    app.use("/api/cv", educ_router);
  };