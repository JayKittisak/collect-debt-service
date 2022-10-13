const db = require("../models");
const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);
    if (req.file == undefined) {
      return res.status(500).send({ message: `You must select a file.` });
    }
    return res.status(200).send({ path: `https://rod-ray.com/imgs/${req.file.filename}`});
  } catch (error) {
    console.log(error);
    return res.status(500).send({code:'error', message: err.message });
  }
};

module.exports = {
  uploadFiles,
};