const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router
	.get('/new', userController.newUser)
	.post('/new', userController.processNewUser);

router
	.get('/', userController.login)
	.post('/', userController.processLogin)
	.get('/member-profile', userController.profileController);

router.get('/logout', userController.logout);

module.exports = router;
