//const { Movies } = require('./models');

class MovieRepository {
  constructor(movieModel) {
    this.movieModel = movieModel;
  }

  // 컨텐츠 상세 정보 조회 API
  // findMovie = async ({ movieId }) => {
  //   const movie = await this.movieModel.findOne({
  //     where: { movieId },
  //     raw: true,
  //   });

  //   return movie;
  // };
  // findMovieById = async ({ movieId }) => {
  //   const movie = await this.movieModel.findByPk({ movieId });

  //   return movie;
  // };

}

module.exports = MovieRepository;
