'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Book extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Book.hasMany(models.Post, {
				foreignKey: 'bookId',
			});
			Book.belongsTo(models.Member, {
				foreignKey: 'memberId',
			});
		}
	}
	Book.init(
		{
			title: DataTypes.STRING,
			author: DataTypes.STRING,
			category: DataTypes.STRING,
			isbn: DataTypes.STRING,
			status: DataTypes.STRING,
			memberId: {
				type: DataTypes.INTEGER,
				model: 'Member',
				key: 'id',
			},
		},
		{
			sequelize,
			modelName: 'Book',
		}
	);
	return Book;
};
