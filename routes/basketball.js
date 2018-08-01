const express = require("express")
const router = express.Router()
const basketballController = require("../controllers/basketball.js")

router.post("/",  basketballController.create)
router.get("/new",  basketballController.new)
router.get("/:id", basketballController.show)
router.put("/:id",  basketballController.update)

module.exports = router
