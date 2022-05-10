module.exports = app => {
    const certif = require("../controllers/helpers/certification.controller.js");
    var certif_router = require("express").Router();
    certif_router.post("/", certif.create);
    certif_router.get("/", certif.findAll);
    certif_router.delete("/:id", certif.delete);
    certif_router.delete("/", certif.deleteAll);
    app.use('/api/certification', certif_router);
  };