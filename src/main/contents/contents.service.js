const ContentsRepository = require('./contents.repository');
const { ValidationError } = require('../../exceptions/index.exception');
const EpisodeRepository = require("../episode/episode.repository");
const {Episodes, Picks} = require("../../models");
const PickRepository = require("../pick/pick.repository");

class ContentsService {
  constructor() {
    this.contentsRepository = new ContentsRepository();
    this.episodeRepository = new EpisodeRepository(Episodes);
    this.pickRepository = new PickRepository(Picks);

  }

  getAllMovie = async ({ }) => {
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

  //등급별 조회

  getRating = async () => {
    const userId = {userId:1}

    const all = 'ALL'
    const twelve = '12'
    const fifteen = '15'
    const eighteen = '18'

    // all
    const ratingAllResult = await this.contentsRepository.getAllRating(all);

    let ratingAll = ratingAllResult;
    if(ratingAll.length > 0){
      ratingAll = await this.addCount(ratingAllResult,userId);
    }

    // 12세
    const ratingTwelveResult = await this.contentsRepository.getAllRating(twelve);

    let ratingTwelve = ratingTwelveResult;
    if(ratingTwelve.length > 0){
      ratingTwelve = await this.addCount(ratingTwelveResult,userId);
    }


    // 15세
    const ratingFifteenResult = await this.contentsRepository.getAllRating(fifteen);

    let ratingFifteen = ratingFifteenResult;
    if(ratingFifteen.length > 0){
      ratingFifteen = await this.addCount(ratingFifteenResult,userId);
    }


    // 18세
    const ratingEighteenResult = await this.contentsRepository.getAllRating(eighteen);

    let ratingEighteen = ratingEighteenResult;
    if(ratingEighteen.length > 0){
      ratingEighteen = await this.addCount(ratingEighteenResult,userId);
    }

    return [{ rating: twelve, movies: ratingTwelve },
    { rating: fifteen, movies: ratingFifteen },
    { rating: eighteen, movies: ratingEighteen },
    { rating: all, movies: ratingAll }]

  };


  //장르별 조회

  getGenre = async () => {

    const teenager = '청소년'
    const animation = '애니'
    const Comic = '코미디'
    const Romance = '로맨스'
    const Action = '액션'
    const Thriller = '스릴러'
    const userId = {userId:1}

    // 청소년
    const genreTeenagerResult = await this.contentsRepository.getAllGenre(teenager);

    let genreTeenager = genreTeenagerResult;
    if(genreTeenagerResult.length > 0){
      genreTeenager = await this.addCount(genreTeenagerResult,userId);
    }

    // 애니
    const genreAnimationResult = await this.contentsRepository.getAllGenre(animation);

    let genreAnimation = genreAnimationResult;
    if(genreAnimationResult.length > 0){
      genreAnimation = await this.addCount(genreAnimationResult,userId);
    }

    // 코믹
    const genreComicResult = await this.contentsRepository.getAllGenre(Comic);

    let genreComic = genreComicResult;
    if(genreComicResult.length > 0){
      genreComic = await this.addCount(genreComicResult,userId);
    }

    // 로맨스
    const genreRomanceResult = await this.contentsRepository.getAllGenre(Romance);

    let genreRomance = genreRomanceResult;
    if(genreRomance.length > 0){
      genreRomance = await this.addCount(genreRomanceResult,userId);
    }

    // 액션
    const genreActionResult = await this.contentsRepository.getAllGenre(Action);

    let genreAction = genreActionResult;
    if(genreAction.length > 0){
      genreAction = await this.addCount(genreActionResult,userId);
    }

    // 스릴러
    const genreThrillerResult = await this.contentsRepository.getAllGenre(Thriller);

    let genreThriller = genreThrillerResult;
    if(genreThriller.length > 0){
      genreThriller = await this.addCount(genreThrillerResult,userId);
    }

    return [{ genre: teenager, movies: genreTeenager },
    { genre: animation, movies: genreAnimation },
    { genre: Comic, movies: genreComic },
    { genre: Romance, movies: genreRomance },
    { genre: Action, movies: genreAction },
    { genre: Thriller, movies: genreThriller },]

  };

  addCount = async (arr,userId) => {
    await Promise.all(arr.map(async (data) => {
      const episodeCount = await this.episodeRepository.getCountEpisodes(data['contentsId']);
      const pick = await this.pickRepository.getCountPick(userId, data['contentsId']);
      pick['count'] ? data['pick'] = true : data['pick'] = false;
      data['episodeCount'] = episodeCount['count'];
    }))

    return arr;
  }

}


module.exports = ContentsService;