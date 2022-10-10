const config = require("./config")

module.exports = {
    HOST: config.db_host,
    USER: config.db_user,
    PASSWORD: config.db_password,
    DB: config.db_database,
    dialect: "postgres",
    port: 5432, 
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };