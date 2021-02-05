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
			firstname: DataTypes.STRING,
			lastname: DataTypes.STRING,
			email: DataTypes.STRING,
			username: DataTypes.STRING,
			hash: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Book',
		}
	);
	return Book;
};
