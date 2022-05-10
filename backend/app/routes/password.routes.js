module.exports = app => {
    const passwords = require("../controllers/password.controller.js");
    var password_router = require("express").Router();
    password_router.post("/", passwords.create);
    password_router.get("/", passwords.findAll);
    password_router.get("/:id", passwords.findOne);
    password_router.delete("/:id", passwords.delete);
    password_router.delete("/", passwords.deleteAll);
    app.use('/api/user/password', password_router);
  };