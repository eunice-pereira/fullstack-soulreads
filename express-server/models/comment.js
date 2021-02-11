'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Comment.belongsTo(models.Member, {
				foreignKey: "memberId",
			});
			
		}
	}
	Comment.init(
		{
			
			memberId:{
				type: DataTypes.INTEGER,
				model: "Member",
				key: "id"
			},

			comment: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Comment',
		}
	);
	return Comment;
};
