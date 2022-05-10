module.exports = app => {
    const cvs = require("../controllers/cv.controller.js");
    var cv_router = require("express").Router();

    cv_router.post("/", cvs.create);

    //Getters
    cv_router.get("/:cv_id", cvs.find_one_cv);

    //Modifications
    cv_router.post("/:cv_id/hobby", cvs.set_hobbies);
    cv_router.post("/:cv_id/jobtitle", cvs.set_jobtitle);
    
    //Delete
    cv_router.delete("/:cv_id/", cvs.remove_one_cv);

    app.use("/api/cv",cv_router);
  };