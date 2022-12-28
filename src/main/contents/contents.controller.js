const ContentsService = require('./contents.service');

const {
  ValidationError,
  AuthenticationError,
} = require('../../exceptions/index.exception');

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

  //등급별 조회
  getRating = async (req, res, next) => {
    try {
     
      const Rating = await this.contentsService.getAllRating();
     
         
      res.status(200).json({ data : Rating });
    } catch (error) {
     
 next(error);
    }
  };


//장르별 조회
    getGenre = async (req, res, next) => {
    try {
     
      const Genre = await this.contentsService.getAllGenre();
      
              
      res.status(200).json({  data : Genre  });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = ContentsController;