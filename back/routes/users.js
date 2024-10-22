const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();

router.get("/", usersController.allUsers);

router.get("/:id", usersController.showById);

module.exports = router;
