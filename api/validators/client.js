const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validateClientItem = [
  check("identity_doc_type").exists().notEmpty(),
  check("identity_doc").exists().notEmpty().matches(/^[0-9]{8,8}[A-Za-z]$/),
  check("person_name").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("person_first_lastname").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("person_second_lastname").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("birthdate").exists().notEmpty().isDate(),
  check("address").exists().notEmpty(),
  check("email").exists().notEmpty().isEmail(),
  //End and send to validate handles and check if next or err
  (req, res, next) => validateResults(req, res, next),
];

module.exports = { validateClientItem };
