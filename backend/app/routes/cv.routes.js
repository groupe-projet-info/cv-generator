const { authJwt } = require("../middlewares");
const cvs = require("../controllers/cv.controller.js");

module.exports = app => {
    
    var cv_router = require("express").Router();

    cv_router.post("/", [authJwt.verifyToken], cvs.create);

    //Getters
    cv_router.get("/:cv_id", [authJwt.verifyToken], cvs.find_one_cv);

    //Modifications
    cv_router.post("/:cv_id/hobby", [authJwt.verifyToken] , cvs.set_hobbies);
    cv_router.post("/:cv_id/jobtitle", [authJwt.verifyToken],  cvs.set_jobtitle);
    
    //Delete
    cv_router.delete("/:cv_id/", [authJwt.verifyToken], cvs.remove_one_cv);

    app.use("/api/cv",cv_router);
  };