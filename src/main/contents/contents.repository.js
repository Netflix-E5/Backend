const { Contents } = require('../../models');


class ContentsRepository extends Contents {
  constructor() {
    super();
  }

  getAllMovie = async () => {
    try {
      const movie = await Contents.findAll();

      return movie;
    } catch (error) {
      throw error;
    }
  };

  // 컨텐츠 상세 정보 조회 API
  getOneMovie = async (contentsId) => {
    try {
      return await Contents.findByPk(contentsId);
    } catch (error) {
      throw error;
    }
  };



getRating = async (rating) => {
  return Contents.findAll({
  where : {rating},
  attributes : ['contentsId','title', 'summary', 'rating','genre', 'release','director','actor','isNetflixOriginal' ,
    'trailerUrl' ,'thumbnailUrl' ,],
     raw : true
  
  
  });
 }

 getGenre = async(genre) => {
  return Contents.findAll({
    where : {genre},
    attributes : ['contentsId','title', 'summary', 'rating','genre', 'release','director','actor','isNetflixOriginal' ,
    'trailerUrl' ,'thumbnailUrl' ,],
     raw : true

  })

 }

} 







module.exports = ContentsRepository;
