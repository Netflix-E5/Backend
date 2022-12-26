const PickRepository = require('./pick.repository');
const { Picks } = require('../../models');
const { ValidationError } = require('../../exceptions/index.exception.js');

class PickService {
  pickRepository = new PickRepository(Picks);

  pickedMovies = async (contentsId, userId) => {
    const isPicked = await this.pickRepository.pickedMovies(contentsId, userId);

    return isPicked;
  };

  getPickedList = async (userId) => {
    const existsPickedList = await this.pickRepository.getPickedList(userId);

    if (!existsPickedList)
      throw new ValidationError(404, '찜목록이 존재하지 않습니다.');

    return existsPickedList;
  };
}

module.exports = PickService;
