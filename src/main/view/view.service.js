const ViewRepository = require('./view.repository')


class ViewService {
  constructor() {
    this.viewRepository = new ViewRepository();
  }

  // 컨텐츠 조회 레코딩 API
  clickView = async ({ contentsId }) => {
    try {
      const view = await this.viewRepository.clickView({ contentsId });
      return { data: view }
    } catch (error) {
      throw error
    }
  }


  // 컨텐츠 랭킹 조회 API
  viewContents = async ({ }) => {

    const viewContents = await this.viewRepository.viewContents({});

    // 중복 제거
    const uniqueArr = viewContents.filter((element, index) => {
      return viewContents.indexOf(element) === index;
    });

    // count를 기준으로 contentsId 정렬
    uniqueArr.sort((a, b) => b.count - a.count);


    return uniqueArr
  }

}

module.exports = ViewService