const express = require('express');
const router = express.Router();

const {
    postComment,
    processPost,
    delComment,
    processDelComment,
    showPostList,
    editPost,
    processEditPost,
   } = require('../controllers/post');

router
    .get('/showpost', showPostList)
    .post('/postcomment', postComment)
    .post('/processnewpost', processPost)
    .post('/deletecomment', delComment)
    .post('/processdeletecomment',processDelComment)
    .post('/editpost', editPost)
    .post('/processedit', processEditPost);


module.exports = router;