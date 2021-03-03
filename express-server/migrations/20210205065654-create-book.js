'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Books', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
			},
			author: {
				type: Sequelize.STRING,
			},
			category: {
				type: Sequelize.STRING,
			},
			isbn: {
				type: Sequelize.STRING,
			},
			status: {
				type: Sequelize.STRING,
			},
			content: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.TEXT,
			},
			memberId: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Books');
	},
};
