const cheerio = require("cheerio");
const axios = require("axios");
// HTML 가져오기
const getHTML = async () => {
  try {
    return await axios.get('https://movie.naver.com/movie/bi/mi/detail.naver?code=224788')
  } catch (error) {
    console.log(error);
  }
}
// 파싱
const parsing = async () => {
  const html = await getHTML();
  const $ = cheerio.load(html.data);
  const $trs = $("#content > div.article > div.mv_info_area > div.mv_info");
  // document.querySelector("#content > div.article > div.obj_section2.noline > div > div.ifr_module > div > div > ul > li:nth-child(1) > a")
  // 파싱한 데이터를 담을 배열
  let dataArr = [];
  // 찾은 tr 개수 만큼 반복문을 돌린다.
  $trs.each((idx, node) => {
    const title = $(node).find(".h_movie a").text();
    const spec = $(node).find(".info_spec a").text();
    //const link = $(node).find(".video_thumb li").attr("href");
    // 오브젝트 형식으로 배열에 담기
    dataArr.push({
      title: title,
      spec: spec,
      //link: link,
    });
  });
  console.log(dataArr)
}
parsing()