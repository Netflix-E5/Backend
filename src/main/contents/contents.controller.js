const ContentsService = require('./contents.service');
const { InvalidParamsError } = require('../../exceptions/index.exception');


const {
  ValidationError,
  AuthenticationError,
} = require('../../exceptions/index.exception');

class ContentsController {
  constructor() {
    this.contentsService = new ContentsService();
  }
  // 컨텐츠 상세 정보 조회 API //
  getAllMovie = async (req, res, next) => {
    try {
      const movie = await this.contentsService.getAllMovie({});
      res.status(200).json({ data: movie });
    } catch (error) {
      next(error);
    }
  };

  getOneMovie = async (req, res, next) => {
    try {
      const { contentsId } = req.locals;

      const movie = await this.contentsService.getOneMovie(contentsId);
      res.status(200).json({ data: movie });
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: '영화 조회에 실패하였습니다.' });
      next(error);
    }
  };

  //등급별 조회
  getRating = async (req, res, next) => {
    try {

      // const { userId } = req.locals
      // if (!userId) throw new InvalidParamsError();

      const Rating = await this.contentsService.getRating();


      res.status(200).json({ data: Rating });
    } catch (error) {

      next(error);
    }
  };


  //장르별 조회
  getGenre = async (req, res, next) => {
    try {

      // const { userId } = req.locals;
      // if (!userId) throw new InvalidParamsError();

      const Genre = await this.contentsService.getGenre();


      res.status(200).json({ data: Genre });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = ContentsController;