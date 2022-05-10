module.exports = app => {
    const cvs = require("../controllers/cv.controller.js");
    var cv_router = require("express").Router();

    cv_router.post("/", cvs.create);
    cv_router.get("/:cv_id", cvs.find_one_cv);

    cv_router.get("/:cv_id/hobby", cvs.find_all_hobbies);
    cv_router.post("/:cv_id/hobby", cvs.add_hobbies);

    app.use("/api/cv",cv_router);
  };