const ViewRepository = require('./repository')


class ViewService {
  constructor() {
    this.viewRepository = new ViewRepository();
  }

  // 컨텐츠 랭킹 조회 API
  // viewById = async ({ viewId }) => {
  //   const viewMovie = await this.viewRepository.viewMovie({ viewId });
  //   return {
  //     viewId: viewMovie.viewId,
  //     userId: viewMovie.userId,
  //     contentsId: viewMovie.contentsId,
  //   };
  // };

}

module.exports = ViewService