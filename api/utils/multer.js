const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../storage`;
    cb(null, pathStorage);
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop();
    const fileName = `inmo-${new Date().getTime()}.${ext}`; //TODO: nombre de la empresa
    cb(null, fileName);
  },
});

const uploadMiddleware = multer({
  storage,
});

module.exports = uploadMiddleware