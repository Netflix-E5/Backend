'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Picks, {
        as: 'Picks',
        foreignKey: 'movieId',
      });
      this.hasMany(models.Views, {
        as: 'Views',
        foreignKey: 'movieId',
      });
      this.hasMany(models.Episodes, {
        as: 'Episodes',
        foreignKey: 'movieId',
      });
      this.hasMany(models.Ratings, {
        as: 'Ratings',
        foreignKey: 'movieId',
      });
      this.hasMany(models.Genres, {
        as: 'Genres',
        foreignKey: 'movieId',
      });
    }
  }
  Movies.init(
    {
      movieId: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contents: {
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
      movieUrl: {
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
      //timestamp: false,
      sequelize,
      modelName: 'Movies',
    }
  );

  return Movies;
};
