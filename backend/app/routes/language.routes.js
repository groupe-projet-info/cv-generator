module.exports = app => {
    const language = require("../controllers/language.controller.js");
    var language_router = require("express").Router();
    language_router.post("/", language.create);
    language_router.get("/", language.findAll);
    language_router.delete("/:id", language.delete);
    language_router.delete("/", language.deleteAll);
    app.use('/api/language', language_router);
  };