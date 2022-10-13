const controller = require("../../controllers/controller");
module.exports = (sequelize, Sequelize) => {
  const revcard = sequelize.define("Revcard", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });
  revcard.addScope('default',{
    order : [['id','ASC']], 
  })
  return revcard;
};
