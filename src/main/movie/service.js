const MovieRepository = require('./repository')

//const { Movies } = require('./models');

class MovieService {
  movieRepository = new MovieService({ Movies });

  // 컨텐츠 상세 정보 조회 API
  // findMovieById = async ({ movieId }) => {
  //   const findMovie = await this.movieRepository.findMovie({ movieId });
  //   return {
  //     movieId: findMovie.movieId,
  //     title: findMovie.title,
  //     contents: findMovie.contents,
  //     release: findMovie.release,
  //     director: findMovie.director,
  //     actor: findMovie.actor,
  //     movieUrl: findMovie.movieUrl,
  //   };
  // };
}

module.exports = MovieService