'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Picks, {
        as: 'Picks',
        foreignKey: 'userId',
      });
      this.hasMany(models.Views, {
        as: 'Views',
        foreignKey: 'userId',
      });
    }
  }
  Users.init(
    {
      userId: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      loginId: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: true,
      },
      nickname: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      talk: {
        type: DataTypes.STRING,
        allowNull: true, // ?
      },
      talkId: {
        type: DataTypes.STRING,
        allowNull: true, // ?
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
  return Users;
};
