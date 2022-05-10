module.exports = app => {
    const certif = require("../controllers/certification.controller.js");
    var certif_router = require("express").Router();

    //Update
    certif_router.post("/:cv_id/certification", certif.add_certification);

    //Getter
    certif_router.get("/:cv_id/certification", certif.find_all_certifications);
    
    //Delete
    certif_router.delete("/:cv_id/certification/:certif_id", certif.remove_one_certification);
    certif_router.delete("/:cv_id/certification", certif.remove_all_certifications);
    
    app.use("/api/cv", certif_router);

  };