const express = require("express");
const router = express.Router();
const { login, register, check } = require("../controllers/auth");

const {
  validateLoginItem,
  validateRegisterItem,
} = require("../validators/auth");

router.post("/login", [validateLoginItem], login);
router.post("/register", [validateRegisterItem], register);

module.exports = router;