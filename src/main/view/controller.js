const ViewService = require('./service')
const session = require('../../app.js')
class ViewController {
  constructor() {
    this.viewService = new ViewService();
  }

  // 컨텐츠 랭킹 조회 API
  viewMovie = async (req, res, next) => {
    try {
      // const { viewId } = req.params;
      const { viewId } = req.session.views++
      const view = await this.viewService.viewMovie({ viewId });

      res.status(200).json({ data: view });

    } catch (error) {
      console.log(error);
      res.status(400).send({ message: '영화 랭킹 조회에 실패하였습니다.' });
      next(error);
    }
  };

}
module.exports = ViewController