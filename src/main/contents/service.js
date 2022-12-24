const ContentsRepository = require('./repository')


class ContentsService {
  constructor() {
    this.contentsRepository = new ContentsRepository();
  }

  getAllMovie = async ({ }) => {
    try {
      const movie = await this.contentsRepository.getAllMovie({});

      return { data: movie };
    } catch (error) {
      throw error;
    }
  };

  // 컨텐츠 상세 정보 조회 API
  getOneMovie = async (contentsId) => {
    try {
      return await this.contentsRepository.getOneMovie(contentsId);
    } catch (error) {
      throw error;
    }
  };

}

module.exports = ContentsService