const PickRepository = require('./pick.repository');
const ContentsRepository = require('../contents/contents.repository');
const { Picks } = require('../../models');
const { ValidationError } = require('../../exceptions/index.exception.js');

class PickService {
  pickRepository = new PickRepository(Picks);
  contentsRepository = new ContentsRepository();

  pickedContents = async (contentsId, userId) => {
    const existsContent = await this.contentsRepository.getOneMovie(contentsId);

    if (!existsContent) {
      throw new ValidationError('존재하지 않는 컨텐츠 입니다.', 400);
    }

    const isPicked = await this.pickRepository.pickedContents(
      contentsId,
      userId
    );

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
