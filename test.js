const crawler = require('crawler');

const view = new crawler({

  MaxConnection: 10, // 크롤링된 페이지 호출

  callback: function (error, res, done) {
    if (error) {
      console.log(error)
    } else {
      const $ = res.$ // $ 기본값 서버용으로 설계된 Jquery 
      console.log($("title").text());
    }
    done()
  }

})




var c = new Crawler({
  maxConnections: 10, // 크롤링된 페이지 호출
  callback: function (error, res, done) {
    if (error) {
      console.log(error);
    } else {
      var $ = res.$; // $ 기본값 서버용으로 설계된 Jquery
      console.log($("title").text());


    }
    done();
  }
});

// Queue just one URL, with default callback
c.queue('http://www.naver.com');
// url은 네이버의 주소로 변경해줍니다.