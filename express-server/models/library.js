'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Library extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			// Library.hasMany(models.Journal, {
			// 	foreignKey: 'journalId',
			// });
		}
	}
	Library.init(
		{
			intention: DataTypes.STRING,
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
			modelName: 'Library',
		}
	);
	return Library;
};
