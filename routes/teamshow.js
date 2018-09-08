
const express = require('express')
const router = express.Router()
const teamController = require('../controllers/teamshow')

router.get('/:id', teamController.show)
router.get('/new', teamController.new)
router.post('/', teamController.create)

module.exports = router
