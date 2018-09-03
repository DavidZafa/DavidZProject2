const express = require('express')
const router = express.Router()
const basketballController = require('../controllers/basketball')

router.get('/new', basketballController.new)
router.get('/:id', basketballController.show)
router.post('/search/', basketballController.search)
router.put('/:id', basketballController.update)
router.delete('/:id', basketballController.delete)
module.exports = router
