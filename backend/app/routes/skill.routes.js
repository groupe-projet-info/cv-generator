const { authJwt } = require("../middlewares");
const skill = require("../controllers/skill.controller.js");

module.exports = app => {
    
    var skill_router = require("express").Router();

    //Update
    skill_router.post("/:cv_id/skill", [authJwt.verifyToken], skill.add_skill);

    //Getter
    skill_router.get("/:cv_id/skill", [authJwt.verifyToken], skill.find_all_skills);
    
    //Delete
    skill_router.delete("/:cv_id/skill/:skill_id", [authJwt.verifyToken], skill.remove_one_skill);
    skill_router.delete("/:cv_id/skill", [authJwt.verifyToken], skill.remove_all_skills);

    app.use("/api/cv", skill_router);
  };