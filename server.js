const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./src/config/config")
const controller = require("./src/controllers/controller");

const app = express();

const db = require("./src/models");

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/",express.static("./src/view"));
// simple route
app.get("/", (req, res) => {
  res.sendFile("./src/view/index.html", { root: __dirname , versionMain:1});
});

// routes
require("./src/routes/global.routes")(app);
require("./src/routes/policy.routes")(app);

// // attach this errorHandler just before you create the server
// app.use(function(error, req, res, next){
//   console.log(error);
//   res.status(500).json(error);
// });

// set port, listen for requests
const PORT = process.env.PORT || config.myport;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
