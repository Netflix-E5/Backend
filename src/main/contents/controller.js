const ContentsService = require('./service')

class ContentsController {
  constructor() {
    this.contentsService = new ContentsService();
  }
  // 컨텐츠 상세 정보 조회 API
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

      const { contentsId } = req.params;

      const movie = await this.contentsService.getOneMovie(contentsId);
      res.status(200).json({ data: movie });

    } catch (error) {
      console.log(error);
      res.status(400).send({ message: '영화 조회에 실패하였습니다.' });
      next(error);
    }
  };

}
module.exports = ContentsController