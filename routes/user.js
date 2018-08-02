const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');

router.get('/login', userController.login);
router.post('/login', userController.createLogin);
router.get('/sign-up', userController.signUp);
router.post('/sign-up', userController.createSignUp);
router.get('/profile', userController.profile)
router.get('/logout', userController.logout);
router.get('/:id', userController.show);
router.put('/:id', userController.update)
module.exports = router;
