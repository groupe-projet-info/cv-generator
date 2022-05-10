module.exports = app => {
    const skill = require("../controllers/skill.controller.js");
    var skill_router = require("express").Router();

    skill_router.post("/:cv_id/skill", skill.add_skill);
    skill_router.get("/:cv_id/skill", skill.find_all_skills);


    //skill_router.delete("/:cv_id/skill/:id", skill.remove_one_skill);
    //skill_router.delete("/:cv_id/skill", skill.remove_all_skills);

    app.use("/api/cv", skill_router);
  };