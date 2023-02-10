const express = require("express");
const router = express.Router();
const {
  getClientById,
  getClients,
  createClient,
  updateClient,
  desactivateClient,
  getClientsTrash,
  activateClient,
} = require("../controllers/client");

// const checkAuth = require("../middlewares/auth");
// const { checkRoleAuth } = require("../middlewares/role");
const { validateClientItem } = require("../validators/client");

router.get("/", [], getClients);
router.get("/trash", [], getClientsTrash);
router.get("/:id", [], getClientById);
router.post("/create", [validateClientItem], createClient);
router.put("/update/:id", [], updateClient);
router.put("/delete/:id", [], desactivateClient);
router.put("/activate/:id", [], activateClient);

module.exports = router;
