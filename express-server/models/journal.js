'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Journal extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			// 	Journal.belongsTo(models.Library, {
			// 		foreignKey: 'libraryId',
			// 	});
		}
	}
	Journal.init(
		{
			content: DataTypes.STRING,
			libraryId: {
				type: DataTypes.INTEGER,
				model: 'Library',
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
			modelName: 'Journal',
		}
	);
	return Journal;
};
