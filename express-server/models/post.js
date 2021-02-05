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
			Post.hasOne(models.Book, {
				foreignKey: 'bookId',
			});
			Post.hasMany(models.Comment, {
				foreignKey: 'postId',
			});
		}
	}
	Post.init(
		{
			comment: DataTypes.STRING,
			content: DataTypes.STRING,
			bookId: DataTypes.INTEGER,
			memberId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Post',
		}
	);
	return Post;
};
