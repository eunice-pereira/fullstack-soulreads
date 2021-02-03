'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Post extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Post.belongsTo(models.Book, {
				foreignKey: 'bookId',
			});
			Post.belongsTo(models.Member, {
				foreignKey: 'memberId',
			});
		}
	}
	Post.init(
		{
			comment: DataTypes.STRING,
			bookId: {
				type: DataTypes.INTEGER,
				model: 'Book',
				key: 'id',
			},
			memberId: {
				type: DataTypes.INTEGER,
				model: 'Member',
				key: 'id',
			},
		},
		{
			sequelize,
			modelName: 'Post',
		}
	);
	return Post;
};
