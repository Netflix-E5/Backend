'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      userId: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      loginId: {
        unique: true,
        type: Sequelize.STRING,
        allowNull: false,
      },
      nickname: {
        unique: true,
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      talk: {
        type: Sequelize.STRING,
        allowNull: true, // ?
      },
      talkId: {
        type: Sequelize.STRING,
        allowNull: true, // ?
      },
      nation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      plan: {
        type: Sequelize.DATE,
        allowNull: true, // 로그인만 하고 결제안했을 경우
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
    await queryInterface.dropTable('Users');
  },
};
