const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");


// funzione index
router.get("/", eventController.index)
//funzione show
router.get("/:slug", eventController.show)
//funzione store
router.post("/", eventController.store)
//funzione update
router.put("/:slug", eventController.update)









module.exports = router;