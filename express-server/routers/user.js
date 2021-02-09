const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
// process new member account
router.post('/new', userController.processNewUser);

// process login after account is created
router.post('/login', userController.processLogin);

// log user out of account
router.post('/logout', userController.logout);

module.exports = router;
