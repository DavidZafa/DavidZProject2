const express = require('express')
const router = express.Router()
const basketballTeam = require('../controllers/basketballteam')

router.get('/:id', basketballTeam.show)
router.get('/new', basketballTeam.new)
router.post('/', basketballTeam.create)

module.exports = router
