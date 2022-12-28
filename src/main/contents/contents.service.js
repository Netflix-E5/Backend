const ContentsRepository = require('./contents.repository');
const {ValidationError} = require('../../exceptions/index.exception');

class ContentsService {
  constructor() {
    this.contentsRepository = new ContentsRepository();
  }

  getAllMovie = async ({}) => {
    try {
      const movie = await this.contentsRepository.getAllMovie({});

      return { data: movie };
    } catch (error) {
      throw error;
    }
  };

  // 컨텐츠 상세 정보 조회 API
  getOneMovie = async (contentsId) => {
    try {
      return await this.contentsRepository.getOneMovie(contentsId);
    } catch (error) {
      throw error;
    }
  };
}

//등급별 조회

getRating = async() => {

 
  const all = 'ALL'
  const twelve ='12'
  const fifteen = '15'
  const eighteen = '18'

  const ratingAll = await this.contentsRepository.getAllRating(all);
  const ratingTwelve  = await this.contentsRepository.getAllRating(twelve);
  const ratingFifteen = await this.contentsRepository.getAllRating(fifteen);
  const ratingEighteen = await this.contentsRepository.getAllRating(eighteen);
  
   
return [{rating:twelve,movies:ratingTwelve},{rating:fifteen,movies:ratingFifteen},{rating:eighteen,movies:ratingEighteen},{rating:all,movies:ratingAll}]

};

       
//장르별 조회

getGenre = async() => {

const teenager = '청소년'
const animation = '애니'
const Comic = '코미디'
const Romance = '로맨스'
const Action ='액션'
const Thriller ='스릴러'  

  const genreTeenager = await this.contentsRepository.getAllRating(teenager);
  const genreAnimation = await this.contentsRepository.getAllRating(animation);
  const genreComic= await this.contentsRepository.getAllRating(Comic);
  const genreRomance = await this.contentsRepository.getAllRating(Romance);
  const genreAction= await this.contentsRepository.getAllRating(Action);
  const genreThriller= await this.contentsRepository.getAllRating(Thriller);



  return [{genre:teenager,movies:genreTeenager},{genre:animation,movies:genreAnimation},{genre:Comic,movies:genreComic},{genre:Romance,movies:genreRomance},{genre:Action,movies:genreAction},{genre:Thriller,movies:genreThriller},]

};



module.exports = ContentsService;