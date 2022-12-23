const ViewRepository = require('./repository')

//const { Views } = require('./models');

class ViewService {
  viewRepository = new ViewRepository({ Views });

  // 컨텐츠 랭킹 조회 API
  // viewById = async ({ viewId }) => {
  //   const viewMovie = await this.viewRepository.viewMovie({ viewId });
  //   return {
  //     viewId: viewMovie.viewId,
  //     userId: viewMovie.userId,
  //     movieId: viewMovie.movieId,
  //   };
  // };

}

module.exports = ViewService