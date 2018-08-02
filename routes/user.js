
const express = require('express')
const router = express.Router()
const user = require('../controllers/user.js')

router.get('/login', user.login)
router.post('/login', user.createLogin)
router.get('/signUp', user.signUp)
router.post('/signUp', user.createSignUp)
router.get('/profile', user.profile)
router.get('/logout', user.logout)
router.get('/:id', user.show)
router.put('/:id', user.update)
module.exports = router
