module.exports = app => {
    const cvs = require("../controllers/cv.controller.js");
    var cv_router = require("express").Router();

    cv_router.post("/cv", cvs.create);

    //Getters
    cv_router.get("/cv/:cv_id", cvs.find_one_cv);

    // Get all cvs of a user
    cv_router.get("/user/:user_id/cv", cvs.find_user_all_cvs);

    //Modifications
    cv_router.post("/cv/:cv_id/phonenumber", cvs.set_phoneNumber);
    cv_router.post("/cv/:cv_id/emailadress", cvs.set_emailAdress);
    cv_router.post("/cv/:cv_id/homeadress", cvs.set_homeAdress);
    cv_router.post("/cv/:cv_id/drivinglicence", cvs.set_drivingLicence);
    cv_router.post("/cv/:cv_id/hobby", cvs.set_hobbies);
    cv_router.post("/cv/:cv_id/jobtitle", cvs.set_jobtitle);
    
    //Delete
    cv_router.delete("/cv/:cv_id/", cvs.remove_one_cv);
   

    // Delete all cvs of one user 
    cv_router.delete("/user/:user_id/cv", cvs.delete_user_all_cvs);
    cv_router.delete("/user/:user_id/cv/:cv_id", cvs.remove_one_cv);

    
    app.use("/api",cv_router);
  };