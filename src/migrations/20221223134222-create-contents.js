'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contents', {
      contentsId: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      summary: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rating: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      release: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      director: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      actor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isNetflixOriginal: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      trailerUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      thumbnailUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contents');
  },
};
