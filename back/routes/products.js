const express = require("express");
const productsController = require("../controllers/productsController");
const router = express.Router();

router.get("/", productsController.showAll);

router.get("/lastadd", productsController.showLastAdd);

router.get("/:id", productsController.showById);

module.exports = router;
