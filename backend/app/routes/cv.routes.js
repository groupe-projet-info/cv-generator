const { authJwt } = require("../middlewares");
const cvs = require("../controllers/cv.controller.js");

module.exports = app => {
    
    var cv_router = require("express").Router();

    cv_router.post("/cv", [authJwt.verifyToken], cvs.create);

    //Getters
    cv_router.get("/cv/:cv_id", [authJwt.verifyToken], cvs.find_one_cv);

    // Get all cvs of a user
    cv_router.get("/user/:user_id/cv", [authJwt.verifyToken], cvs.find_user_all_cvs);

    //Modifications
    cv_router.post("/cv/:cv_id/phonenumber", [authJwt.verifyToken], cvs.set_phoneNumber);
    cv_router.post("/cv/:cv_id/emailadress", [authJwt.verifyToken], cvs.set_emailAdress);
    cv_router.post("/cv/:cv_id/homeadress", [authJwt.verifyToken], cvs.set_homeAdress);
    cv_router.post("/cv/:cv_id/drivinglicence", [authJwt.verifyToken], cvs.set_drivingLicence);
    cv_router.post("/cv/:cv_id/hobby", [authJwt.verifyToken], cvs.set_hobbies);
    cv_router.post("/cv/:cv_id/jobtitle", [authJwt.verifyToken], cvs.set_jobtitle);
    
    //Delete
    cv_router.delete("/cv/:cv_id/", [authJwt.verifyToken], cvs.remove_one_cv);
   

    // Delete all cvs of one user 
    cv_router.delete("/user/:user_id/cv",  [authJwt.verifyToken], cvs.delete_user_all_cvs);
    cv_router.delete("/user/:user_id/cv/:cv_id",  [authJwt.verifyToken], cvs.remove_one_cv);

    
    app.use("/api",cv_router);
  };