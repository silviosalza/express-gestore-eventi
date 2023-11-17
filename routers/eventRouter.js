const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");


// funzione index
router.get("/", eventController.index)

router.post("/", eventController.store)








module.exports = router;