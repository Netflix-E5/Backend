const PickService = require('./pick.service');
const { InvalidParamsError } = require('../../exceptions/index.exception');

class PickController {
  pickService = new PickService();

  pickedContents = async (req, res, next) => {
    try {
      const { contentsId } = req.params;
      const userId = 1;

      if (!contentsId || !userId) throw new InvalidParamsError();

      const isPicked = await this.pickService.pickedContents(
        contentsId,
        userId
      );

      if (!isPicked)
        return res.status(201).json({ message: '찜하기를 취소하셨습니다.' });

      res.status(201).json({ message: '찜하기를 등록하셨습니다.' });
    } catch (error) {
      next(error);
    }
  };

  getPickedList = async (req, res, next) => {
    try {
      const userId = 1;

      if (!userId) throw new InvalidParamsError();

      const existsPickedList = await this.pickService.getPickedList(userId);

      res.status(200).json({ data: existsPickedList });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = PickController;
