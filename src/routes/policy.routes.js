const { authJwt } = require("../middleware");
const policy = require("../controllers/policy");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/policy", [authJwt.verifyToken], policy.gets);
  app.post("/policy", [authJwt.verifyToken], policy.create);
  app.put("/policy", [authJwt.verifyToken], policy.update);
  app.delete("/policy", [authJwt.verifyToken], policy.delete);
};
