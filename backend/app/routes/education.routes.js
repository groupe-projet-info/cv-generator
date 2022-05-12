const { authJwt } = require("../middlewares");
const education = require("../controllers/education.controller.js");

module.exports = app => {
    
    var educ_router = require("express").Router();

    //Update
    educ_router.post("/:cv_id/education", [authJwt.verifyToken], education.add_education);

    //Getter
    educ_router.get("/:cv_id/education", [authJwt.verifyToken], education.find_all_educations);
    
    //Delete
    educ_router.delete("/:cv_id/education/:educ_id", [authJwt.verifyToken], education.remove_one_education);
    educ_router.delete("/:cv_id/education", [authJwt.verifyToken], education.remove_all_educations);

    app.use("/api/cv", educ_router);
  };