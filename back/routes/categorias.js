const express = require("express");
const categoriasController = require("../controllers/categoriasController");
const router = express.Router();

router.get("/", categoriasController.showAll);

// router.get("/uni", categoriasController.uniqueValues);

module.exports = router;
