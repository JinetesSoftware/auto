const express = require("express");
const router = express.Router();
const {
  getClientById,
  getClients,
  createClient,
  updateClient,
  desactivateClient,
} = require("../controllers/client");

const checkAuth = require("../middlewares/auth");
const {checkRoleAuth} = require("../middlewares/role");
const { validateClientItem } = require("../validators/client");

router.get("/", [], getClients);
router.get("/:id", [checkAuth], getClientById);
router.post("/create", [validateClientItem], createClient);
router.put("update/:id", [validateClientItem], updateClient);
router.put("delete/:id", [validateClientItem], desactivateClient);

module.exports = router;
