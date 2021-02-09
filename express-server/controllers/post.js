const { Post } = require('../models');
const { Book } = require('../models');

const postComment = async (req,res) =>{
    const { id } = req.session.user;

    if (id) {
        const comments = await Post.findAll({
            where: {
                memberId: id,
            },
        });
    };
};

const processPost = async (req, res) => {
    const { id } = req.session.user;
    if (id) {
    const post = await Post.create({
        where: {
            memberId: id,
        },
    });
}
    console.log(`You processed a post comment with id ${bookId}`);
    res.json({
        message: 'Post processed',
    });
    
};

const editPost = async (req, res) =>{
    const { id } = req.sessions.user;
    const { bookId } = req.params;
    if (id && bookId ) {
        const post = await Post.findByPk(bookId);
        console.log(`Your are editing a post comment for ${bookId}.`);

    };
};

const processEditPost= async (req, res) => {
    const { id } = req.params;
    const { bookId } = req.body;
    const updatedPost = await Post.update(
      {
        where: {
          id,
          userid: req.session.user.id,
        },
      }
    );
    console.log(`You updated a post comment with id ${bookId}`);
    res.json({
        message: 'updated post comment',
    });
  };

  const delComment = async (req,res) =>{
    const { id } = req.session.user;
    const { bookId } = req.params;
    if (id && bookId) {
        const post = await Post.destroy({
            where: {
                id: bookId,
            },
        });
        console.log(`You deleted a comment from ${bookId}.`);
        res.json({
            message: "Deleting comment",
            id: bookId,
        });
    };
};

const processDelComment = async (req, res) => {
    const { id } = req.session.user;
    const { bookId } = req.params;
    const deletedComment = await Post.destroy({
      where: {
        id: bookId,
      },
    });
    console.log(`You processed a deleted comment from ${bookId}.`);
    res.json({
        message: "comment deleted",
        id: bookId,
  });
};
const showPostList = async (req,res) => {
   // const { id } = req.session.user;

    if (id) {
        const posts = await Post.findAll({
            where: {
                memberId: id,
            },
        });
        res.json({
            message: 'showing post list',
        });
    }
};

module.exports = {
    postComment,
    processPost,
    delComment,
    processDelComment,
    editPost,
    processEditPost,
    showPostList,
};