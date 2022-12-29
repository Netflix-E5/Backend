const { Contents, sequelize } = require('../../models');
const {Op} = require("sequelize");
//
class PickRepository {
  constructor(PickModel) {
    this.pickModel = PickModel;
  }

  pickedContents = async (contentsId, userId) => {
    const [_, isPicked] = await this.pickModel.findOrCreate({
      where: { contentsId, userId },
      default: { contentsId, userId },
    });

    if (!isPicked) {
      await this.pickModel.destroy({ where: { contentsId, userId } });
    }

    return isPicked;
  };

  getPickedList = async (userId) => {
    return this.pickModel.findAll({
      raw: true,
      where: { userId },
      attributes: [
        [sequelize.col('Content.contentsId'), 'contentsId'],
        [sequelize.col('Content.title'), 'title'],
        [sequelize.col('Content.summary'), 'summary'],
        [sequelize.col('Content.release'), 'release'],
        [sequelize.col('Content.director'), 'director'],
        [sequelize.col('Content.trailerUrl'), 'trailerUrl'],
      ],
      include: [
        {
          model: Contents,
          attributes: [],
        },
      ],
    });
  };

  getCountPick = async (userId, contentsId) => {
    return this.pickModel.findAndCountAll({
      where: {
        [Op.and]:[userId, {contentsId:contentsId}]
      },
      raw:true
    });
  }
}
module.exports = PickRepository;
