module.exports = app => {
  const users = require("../controllers/user.controller.js");
  var user_router = require("express").Router();
  user_router.post("/", users.create);
  user_router.get("/", users.findAll);
  user_router.get("/:id", users.findOne);
  user_router.delete("/:id", users.delete);
  user_router.delete("/", users.deleteAll);
  app.use('/api/user', user_router);
};