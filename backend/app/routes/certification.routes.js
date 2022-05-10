module.exports = app => {
    const certif = require("../controllers/certification.controller.js");
    var certif_router = require("express").Router();
    certif_router.post("/", certif.create);
    certif_router.get("/", certif.findAll);
    certif_router.get("/:id", certif.findOne);
    certif_router.put("/:id", certif.update);
    certif_router.delete("/:id", certif.delete);
    certif_router.delete("/", certif.deleteAll);
    app.use('/api/certification', certif_router);
  };