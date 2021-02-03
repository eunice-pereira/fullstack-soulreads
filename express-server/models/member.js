'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Member extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			// Member.hasMany(models.Post, {
			// 	foreignKey: 'memberId',
			// });
			// Member.hasMany(models.Book, {
			// 	foreignKey: 'bookId',
			// });
		}
	}
	Member.init(
		{
			firstname: DataTypes.STRING,
			lastname: DataTypes.STRING,
			username: DataTypes.STRING,
			password: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Member',
		}
	);
	return Member;
};
