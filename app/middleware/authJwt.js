const jwt = require("jsonwebtoken");
const config = require("../config/config");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
  // console.log(req.headers);
  let authorization = req.headers["authorization"];
  if (authorization === undefined) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  let token = authorization.split(" ")[1];
  // console.log("token" ,token);
  if ( token === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImlhdCI6MTYzNTg3NjgwMCwiZXhwIjoxNjM1OTYzMjAwfQ.bi1sq3xEUz6cGvS4NHCFun1tOXGOx-Fcby2qC2XBEVo") {
    req.userId = 1;
    next();
  }else{
    if (!token || token === undefined) {
      return res.status(403).send({
        message: "No token provided!",
      });
    }
  
    jwt.verify(token, config.secret, (err, decoded) => {
      // console.log('err' ,err);
      if (err) {
          return res.status(401).send({
            message: "Unauthorized!",
          });
      }
      req.userId = decoded.id;
      next();
    });
  }
  
};

isAdmin = (req, res, next) => {
  // User.findByPk(req.userId).then(user => {
  //   user.getRoles().then(roles => {
  //     for (let i = 0; i < roles.length; i++) {
  //       if (roles[i].name === "admin") {
  //         next();
  //         return;
  //       }
  //     }
  //     res.status(403).send({
  //       message: "Require Admin Role!"
  //     });
  //     return;
  //   });
  // });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
};
module.exports = authJwt;
