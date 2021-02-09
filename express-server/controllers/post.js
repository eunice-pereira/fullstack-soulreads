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
            message: "Deleting book",
            id: bookId,
        });
    };

};

const editPost = async (req, res) =>{
    const { id } = req.sessions.user;
    const { bookId } = req.params;
    if (id && bookId ) {
        const post = await Post.findByPk(bookId);
        console.log(`Your are editing a post comment for ${bookId}.`);

    }
}




module.exports = {
	postComment,
	delComment,
	
};