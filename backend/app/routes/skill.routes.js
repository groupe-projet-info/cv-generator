module.exports = app => {
    const skill = require("../controllers/skill.controller.js");
    var skill_router = require("express").Router();
    skill_router.post("/", skill.create);
    skill_router.get("/", skill.findAll);
    skill_router.delete("/:id", skill.delete);
    skill_router.delete("/", skill.deleteAll);
    app.use('/api/skill', skill_router);
  };