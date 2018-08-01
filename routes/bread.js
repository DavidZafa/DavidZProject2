const express = require("express");
const router = express.Router();
const breadController = require("../controllers/bread");

router.post("/", breadController.requireAuth, breadController.create);
router.get("/new", breadController.requireAuth, breadController.new);
router.get("/:id", breadController.show);
router.put("/:id", breadController.requireAuth, breadController.update);

module.exports = router;
