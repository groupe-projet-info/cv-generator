module.exports = app => {
    const certif = require("../controllers/certification.controller.js");
    var certif_router = require("express").Router();

    certif_router.get("/:cv_id/certification", certif.find_all_certifications);
    certif_router.post("/:cv_id/certification", certif.add_certification);
    
    //certif_router.delete("/:cv_id/certification", certif.remove_all_certifications);*/

    app.use("/api/cv", certif_router);
  };