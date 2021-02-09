const express = require('express');
const router = express.Router();

const {
    postComment,
    delComment,
   
} = require('../controllers/post');

router
    .get('/', )
    .get('/postcomment', postComment)
    .post('/deletecomment', delComment)

module.exports = router;