const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");


// funzione index
router.get("/", eventController.index)








module.exports = router;