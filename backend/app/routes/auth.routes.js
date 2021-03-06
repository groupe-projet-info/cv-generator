const auth_controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.post("/api/auth/register",auth_controller.signup );
  app.post("/api/auth/login", auth_controller.signin);
  app.post("/api/auth/test", auth_controller.test_token);
  app.post("/api/auth/can_register", auth_controller.verify_username);

};