const express = require("express");
const router = express.Router();
const basketballController = require("../controllers/basketball");

router.post("/", basketballController.requireAuth, basketballController.create);
router.get("/new", basketballController.requireAuth, basketballController.new);
router.get("/:id", basketballController.show);
router.put("/:id", basketballController.requireAuth, basketballController.update);

module.exports = router;
