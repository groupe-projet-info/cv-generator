module.exports = app => {
    const cvs = require("../controllers/cv.controller.js");
    var cv_router = require("express").Router();

    cv_router.post("/", cvs.create);

    //Getters
    cv_router.get("/:cv_id", cvs.find_one_cv);
    // Get all the cv of a user
    cv_router.get("/cvs/:user_id/", cvs.find_user_cvs);

    //Modifications
    cv_router.post("/:cv_id/sex", cvs.set_sex);
    cv_router.post("/:cv_id/phonenumber", cvs.set_phoneNumber);
    cv_router.post("/:cv_id/emailadress", cvs.set_emailAdress);
    cv_router.post("/:cv_id/homeadress", cvs.set_homeAdress);
    cv_router.post("/:cv_id/drivinglicence", cvs.set_drivingLicence);
    cv_router.post("/:cv_id/hobby", cvs.set_hobbies);
    cv_router.post("/:cv_id/jobtitle", cvs.set_jobtitle);
    
    //Delete
    cv_router.delete("/:cv_id/", cvs.remove_one_cv);
   

    // Delete user cv 
    cv_router.delete("/user/:user_id/cv/:cv_id", cvs.delete_user_cv);

    app.use("/api/cv",cv_router);
  };