const controller = require("../../controllers/controller");
module.exports = (sequelize, Sequelize) => {
  const policy = sequelize.define("Policy", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Policy_no: {
      type: Sequelize.STRING,
    },
    Word: {
      type: Sequelize.STRING,
    },
    Interest_rate: {
      type: Sequelize.FLOAT,
    },
    Fee_rate: {
      type: Sequelize.FLOAT,
    },
    Amount: {
      type: Sequelize.FLOAT,
    },
    Ku_request: {
      type: Sequelize.INTEGER,
    },
    Ku_code: {
      type: Sequelize.STRING,
    },
    Ku_name: {
      type: Sequelize.STRING,
    },
    Ku_age: {
      type: Sequelize.STRING,
    },
    Ku_address: {
      type: Sequelize.STRING,
    },
    Ku_MP: {
      type: Sequelize.STRING,
    },
    Ku_other: {
      type: Sequelize.STRING,
    },
  });
  policy.addScope('default',{
    order : [['id','ASC']], 
  })
  return policy;
};
