'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Forum extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Forum.hasMany(models.Comment, {
				foreignKey: 'forumId',
			});
			// Forum.belongsTo(models.Book, {
			// 	foreignKey: 'bookId',
			// });
		}
	}
	Forum.init(
		{
			description: DataTypes.STRING,
			comment: DataTypes.STRING,
			memberId: {
				type: DataTypes.INTEGER,
				model: 'Member',
				key: 'id',
			},
			bookId: {
				type: DataTypes.INTEGER,
				model: 'Book',
				key: 'id',
			},
		},
		{
			sequelize,
			modelName: 'Forum',
		}
	);
	return Forum;
};
