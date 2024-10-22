const express = require("express");
const marcasController = require("../controllers/marcasController");
const router = express.Router();

router.get("/", marcasController.showAll);

router.get("/:id", marcasController.showById);

module.exports = router;
