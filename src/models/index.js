const config = require("../config/config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.db_database,
  config.db_user,
  config.db_password,
  {
    host: config.db_host,
    dialect: "mysql",
    port: config.port,
    operatorsAliases: false,
    define: {
      freezeTableName: true,
      timestamps: false 
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.policy = require("./db/policy.js")(sequelize, Sequelize);
db.revcard = require("./db/revcard.js")(sequelize, Sequelize);

module.exports = db;