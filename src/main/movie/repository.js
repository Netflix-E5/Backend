const { Movies } = require('../../models');

class MovieRepository extends Movies {
  constructor() {
    super()
  }

  getAllMovie = async () => {
    try {
      const movie = await Movies.findAll()

      return movie;
    } catch (error) {
      throw error;
    }
  };


  // 컨텐츠 상세 정보 조회 API
  getOneMovie = async (movieId) => {

    try {
      return await Movies.findByPk(movieId);
    } catch (error) {
      throw error;
    }
  };
}

module.exports = MovieRepository;
