const { authJwt } = require("../middlewares");
const certif = require("../controllers/certification.controller.js");

module.exports = app => {
  
    var certif_router = require("express").Router();

    //Update
    certif_router.post("/:cv_id/certification", [authJwt.verifyToken], certif.add_certification);

    //Getter
    certif_router.get("/:cv_id/certification", [authJwt.verifyToken], certif.find_all_certifications);
    
    //Delete
    certif_router.delete("/:cv_id/certification/:certif_id", [authJwt.verifyToken], certif.remove_one_certification);
    certif_router.delete("/:cv_id/certification", [authJwt.verifyToken], certif.remove_all_certifications);
    
    app.use("/api/cv", certif_router);

  };