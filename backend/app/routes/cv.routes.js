module.exports = app => {
    const cvs = require("../controllers/cv.controller.js");
    var cv_router = require("express").Router();
    cv_router.post("/", cvs.create);
    cv_router.get("/", cvs.findAll);
    cv_router.get("/:id", cvs.findOne);

    cv_router.post("/:id/skill", cvs.add_skill);

    cv_router.delete("/:id/skill/:id", cvs.remove_skill);
    
    cv_router.put("/:id", cvs.update);
    cv_router.delete("/:id", cvs.delete);
    cv_router.delete("/", cvs.deleteAll);

    app.use('/api/cv',cv_router);
  };