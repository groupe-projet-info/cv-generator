module.exports = app => {
    const education = require("../controllers/education.controller.js");
    var educ_router = require("express").Router();
    educ_router.post("/", education.create);
    educ_router.get("/", education.findAll);
    educ_router.delete("/:id", education.delete);
    educ_router.delete("/", education.deleteAll);
    app.use('/api/education', educ_router);
  };