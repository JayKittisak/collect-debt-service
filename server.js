const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./app/config/config")
const controller = require("./app/controllers/controller");

const app = express();

const db = require("./app/models");

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/",express.static("./app/view"));
// simple route
app.get("/", (req, res) => {
  res.sendFile("./app/view/index.html", { root: __dirname });
});

// routes
require("./app/routes/global.routes")(app);

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
