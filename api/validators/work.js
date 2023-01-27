const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validateWorktItem = [
  check("name").exists().notEmpty(),
  check("base_doc").exists().notEmpty(),
  check("code").exists().notEmpty(),
  check("isPay").exists(),
  //End and send to validate handles and check if next or err
  (req, res, next) => validateResults(req, res, next),
];

module.exports = { validateWorktItem };
