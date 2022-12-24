const MovieService = require('./service')

class MovieController {
  constructor() {
    this.movieService = new MovieService();
  }
  // 컨텐츠 상세 정보 조회 API
  getAllMovie = async (req, res, next) => {
    try {
      const movie = await this.movieService.getAllMovie({});
      res.status(200).json({ data: movie });
    } catch (error) {
      next(error);
    }
  };

  getOneMovie = async (req, res, next) => {
    try {

      const { movieId } = req.params;

      const movie = await this.movieService.getOneMovie(movieId);
      res.status(200).json({ data: movie });

    } catch (error) {
      console.log(error);
      res.status(400).send({ message: '영화 조회에 실패하였습니다.' });
      next(error);
    }
  };

}
module.exports = MovieController