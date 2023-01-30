const express = require("express");
const router = express.Router();
const {
  getclient,
  getclients,
  createclient,
  updateclient,
  desactivateclient,
} = require("../controllers/client");

const checkAuth = require("../middlewares/auth");
const {checkRoleAuth} = require("../middlewares/role");
const { validateClientItem } = require("../validators/client");

router.get("/", [], getclients);
router.get("/:id", [checkAuth], getclient);
router.post("/create", [validateClientItem], createclient);
router.put("update/:id", [validateClientItem], updateclient);
router.put("delete/:id", [validateClientItem], desactivateclient);

module.exports = router;
