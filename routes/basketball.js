const express = require("express")
const router = express.Router()
const basketballController = require("../controllers/basketball")


router.get("/new",  basketballController.new)
router.get("/:id", basketballController.show)
router.put("/:id",  basketballController.update)
router.post('/search/', basketballController.search)
router.delete('/:id', basketballController.delete)
module.exports = router
