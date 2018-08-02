const express = require("express")
const router = express.Router()
const basketballController = require("../controllers/basketball.js")

router.post("/",  basketballController.create)
router.get("/new",  basketballController.new)
router.get("/:id", basketballController.show)
router.put("/:id",  basketballController.update)
router.delete('/:id', basketballController.delete)
module.exports = router
