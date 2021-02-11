const { Comment } = require('../models');

const addComment = async (req, res) => {
	const { id } = req.session.user;
	const { comment } = req.body;

	if (id && comment) {
		const comment = await Comment.create({
			where: {
				memberId: id,
			},
		});
	}
	console.log(`Comment added.`);
	res.json({
		message: 'Comment added.',
	});
};


const editComment = async (req, res) =>{
    const { id } = req.session.user;
    const { forumId } = req.params;
    if (id && { forumId } ) {
        const comment = await Comment.findByPk(forumId);
        
    };
    console.log(`Your are editing a comment for ${forumId}.`);
};

const processEditComment= async (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
    if (id && { forumId }) {

    const updateComment = await Comment.update({
        where: {
            memberId: id,
        }

      });
    } 

    console.log(`Comment updated.`);
    res.json({
        message: 'Comment updated.'
    });
  };


const delComment = async (req, res) => {
	const { id } = req.session.user;
	const { forumId } = req.params;
	if (id && forumId) {
		const comment = await Comment.destroy({
			where: {
				id: forumId,
			},
		});
		console.log(` deleted a comment from ${forumId}.`);
		res.json({
			message: 'Deleting comment',
			id: forumId,
		});
	}
};

module.exports = {
	addComment,
	delComment,
	processEditComment,
	editComment,
};
