module.exports = app => {
    const templates = require("../controllers/template.controller.js");
    var template_router = require("express").Router();
    template_router.post("/", templates.create);
    template_router.get("/", templates.findAll);
    template_router.get("/:id", templates.findOne);
    template_router.delete("/:id", templates.delete);
    template_router.delete("/", templates.deleteAll);
    app.use('/api/template', template_router);
  };