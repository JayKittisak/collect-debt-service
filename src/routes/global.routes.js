const { authJwt } = require("../middleware");
const Uploads = require("../controllers/upload");
const upload = require("../middleware/upload");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/upload", upload.single("file"), Uploads.uploadFiles);
};
