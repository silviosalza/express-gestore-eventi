const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");


// funzione index
router.get("/", eventController.index)
//funzione show
router.get("/:id", eventController.show)
//funzione store
router.post("/", eventController.store)
//funzione update
router.put("/:id", eventController.update)









module.exports = router;