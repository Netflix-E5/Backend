const MovieRepository = require('./repository')

//const { Movies } = require('./models');

class MovieService {
  constructor() {
    this.movieRepository = new MovieRepository();
  }

  getAllMovie = async ({ }) => {
    try {
      const movie = await this.movieRepository.getAllMovie({});

      return { data: movie };
    } catch (error) {
      throw error;
    }
  };

  // 컨텐츠 상세 정보 조회 API
  getOneMovie = async (movieId) => {
    try {
      return await this.movieRepository.getOneMovie(movieId);
    } catch (error) {
      throw error;
    }
  };

}

module.exports = MovieService