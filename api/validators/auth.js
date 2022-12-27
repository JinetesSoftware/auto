
const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validateRegisterItem = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 8, max: 18 }),
  //End and send to validate handles and check if next or err
  (req, res, next) => validateResults(req, res, next),
];

const validateLoginItem = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 8, max: 18 }),
  //End and send to validate handles and check if next or err
  (req, res, next) => validateResults(req, res, next),
];

module.exports = { validateRegisterItem, validateLoginItem };