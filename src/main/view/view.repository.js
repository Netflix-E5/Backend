const { Views, Contents } = require('../../models');
// const { Op } = require('../../sequelize')


class ViewRepository extends Views {
  constructor() {
    super()
  }

  // 컨텐츠 조회 레코딩 API
  clickView = async ({ contentsId }) => {
    try {
      return await Views.create({ contentsId })
    } catch (error) {
      throw error
    }
  }

  // 컨텐츠 랭킹 조회 API
  viewContents = async ({ }) => {
    const counts = await Views.findAll({
      row: true,
      attributes: ['contentsId']
    });

    // 컨텐츠 조회 카운팅
    const getUniques = (array, compareProp) => {

      let byId = {};
      let uniques = [];

      let i = 0;
      let item = {};

      for (i; i < array.length; i++) {
        item = array[i];
        if (byId[item[compareProp]]) {
          byId[item[compareProp]].count++;
        } else {
          byId[item[compareProp]] = item;
          uniques.push(item);
          item.count = 1;
        }
      }
      return uniques;
    };
    return getUniques(counts, 'contentsId')
    // console.table(getUniques(counts, 'contentsId'));
    // console.log(getUniques(counts, 'contentsId'))
  }


}
module.exports = ViewRepository;