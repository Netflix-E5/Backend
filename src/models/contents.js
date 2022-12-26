'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Picks, {
        as: 'Picks',
        foreignKey: 'contentsId',
      });
      this.hasMany(models.Views, {
        as: 'Views',
        foreignKey: 'contentsId',
      });
      this.hasMany(models.Episodes, {
        as: 'Episodes',
        foreignKey: 'contentsId',
      });
    }
  }
  Contents.init(
    {
      contentsId: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      release: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      director: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      actor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isNetflixOriginal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      trailerUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      thumbnailUrl: {
        type: DataTypes.STRING,
        allowNull: false,
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
      modelName: 'Contents',
    }
  );

  return Contents;
};
