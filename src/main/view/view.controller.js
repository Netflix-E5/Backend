const ViewService = require('./view.service')
const session = require('../../app.js');
class ViewController {
  constructor() {
    this.viewService = new ViewService();
  }

  // 컨텐츠 조회 레코딩 API

  clickView = async (req, res, next) => {
    try {
      const { contentsId } = req.params
      const view = await this.viewService.clickView({ contentsId });
      res.status(200).json({ data: view });

    } catch (error) {
      next(error)
    }
  }

  // 컨텐츠 랭킹 조회 API
  viewContents = async (req, res, next) => {

    const view = await this.viewService.viewContents({});
    return res.status(200).json({ data: view })
  }

}

module.exports = ViewController