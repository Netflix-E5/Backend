const MovieService = require('./service')

class MovieController {
  constructor() {

  }
  // 컨텐츠 상세 정보 조회 API
  // getMovie = async (req, res, next) => {
  //   try {

  //     const { movieId } = req.params;
  //     const movie = await this.movieService.findMovie({ movieId });

  //     res.status(200).json({ data: movie });

  //   } catch (error) {
  //     console.log(error);
  //     res.status(400).send({ message: '영화 조회에 실패하였습니다.' });
  //     next(error);
  //   }
  // };

}
module.exports = MovieController