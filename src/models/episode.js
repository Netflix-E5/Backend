'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Episodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Movies, { foreignKey: 'movieId' });
    }
  }
  Episodes.init(
    {
      episodeId: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      runtime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      story: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Episodes',
    }
  );

  return Episodes;
};
