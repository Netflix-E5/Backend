//const { Views } = require('./models');

class ViewRepository {
  constructor(viewModel) {
    this.viewModel = viewModel;
  }

  // 컨텐츠 랭킹 조회 API
  // viewById = async ({ viewId }) => {
  //   const view = await this.viewModel.findByPk({ viewId });

  //   if (viewId) {
  //     return await Views.viewId++
  //   }
  // }

};

module.exports = ViewRepository;