const multer = require("multer");
const mkdirp = require('mkdirp')

/*
เก็บรูปที่ /home/ubuntu/rodray-server/uploads/;
  - in docker : /uploads/ เพราะ map volumn ออกมาหน้านอก
  - in dev : /home/ubuntu/rodray-server/uploads/
*/
const uploadPath = "../files/"
const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};
mkdirp.sync(uploadPath)

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});


var uploadFile = multer({ storage: storage, fileFilter: imageFilter ,limits: { fileSize: 1282810}});
module.exports = uploadFile;