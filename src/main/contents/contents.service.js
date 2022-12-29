const ContentsRepository = require('./contents.repository');
const { ValidationError } = require('../../exceptions/index.exception');

class ContentsService {
  constructor() {
    this.contentsRepository = new ContentsRepository();
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


    const all = 'ALL'
    const twelve = '12'
    const fifteen = '15'
    const eighteen = '18'

    // all
    const ratingAll = await this.contentsRepository.getAllRating(all);

    const uniqueArr1 = ratingAll.filter((element, index) => {
      return ratingAll.indexOf(element) === index;
    });

    await Promise.all(uniqueArr1.map(async (data) => {
      const episodeCount = await this.episodeRepository.getCountEpisodes(data['contentsId']);
      const pick = await this.pickRepository.getCountPick(userId, data['contentsId']);
      pick['count'] ? data['pick'] = true : data['pick'] = false;
      data['episodeCount'] = episodeCount['count'];
    }))
    uniqueArr1.sort((a, b) => b.count - a.count);

    // 12
    const ratingTwelve = await this.contentsRepository.getAllRating(twelve);

    const uniqueArr2 = ratingTwelve.filter((element, index) => {
      return ratingTwelve.indexOf(element) === index;
    });

    await Promise.all(uniqueArr2.map(async (data) => {
      const episodeCount = await this.episodeRepository.getCountEpisodes(data['contentsId']);
      const pick = await this.pickRepository.getCountPick(userId, data['contentsId']);
      pick['count'] ? data['pick'] = true : data['pick'] = false;
      data['episodeCount'] = episodeCount['count'];
    }))
    uniqueArr2.sort((a, b) => b.count - a.count);


    // 15
    const ratingFifteen = await this.contentsRepository.getAllRating(fifteen);

    const uniqueArr3 = ratingFifteen.filter((element, index) => {
      return ratingFifteen.indexOf(element) === index;
    });

    await Promise.all(uniqueArr3.map(async (data) => {
      const episodeCount = await this.episodeRepository.getCountEpisodes(data['contentsId']);
      const pick = await this.pickRepository.getCountPick(userId, data['contentsId']);
      pick['count'] ? data['pick'] = true : data['pick'] = false;
      data['episodeCount'] = episodeCount['count'];
    }))
    uniqueArr3.sort((a, b) => b.count - a.count);

    // 18
    const ratingEighteen = await this.contentsRepository.getAllRating(eighteen);

    const uniqueArr4 = ratingEighteen.filter((element, index) => {
      return ratingEighteen.indexOf(element) === index;
    });

    await Promise.all(uniqueArr4.map(async (data) => {
      const episodeCount = await this.episodeRepository.getCountEpisodes(data['contentsId']);
      const pick = await this.pickRepository.getCountPick(userId, data['contentsId']);
      pick['count'] ? data['pick'] = true : data['pick'] = false;
      data['episodeCount'] = episodeCount['count'];
    }))
    uniqueArr4.sort((a, b) => b.count - a.count);



    return [{ rating: twelve, movies: uniqueArr2 },
    { rating: fifteen, movies: uniqueArr3 },
    { rating: eighteen, movies: uniqueArr4 },
    { rating: all, movies: uniqueArr1 }]

  };


  //장르별 조회

  getGenre = async () => {

    const teenager = '청소년'
    const animation = '애니'
    const Comic = '코미디'
    const Romance = '로맨스'
    const Action = '액션'
    const Thriller = '스릴러'

    const genreTeenager = await this.contentsRepository.getAllRating(teenager);
    const genreAnimation = await this.contentsRepository.getAllRating(animation);
    const genreComic = await this.contentsRepository.getAllRating(Comic);
    const genreRomance = await this.contentsRepository.getAllRating(Romance);
    const genreAction = await this.contentsRepository.getAllRating(Action);
    const genreThriller = await this.contentsRepository.getAllRating(Thriller);


    // 액션
    const genreAction = await this.contentsRepository.getAllRating(Action);

    const uniqueArr9 = genreAction.filter((element, index) => {
      return genreAction.indexOf(element) === index;
    });

    await Promise.all(uniqueArr9.map(async (data) => {
      const episodeCount = await this.episodeRepository.getCountEpisodes(data['contentsId']);
      const pick = await this.pickRepository.getCountPick(userId, data['contentsId']);
      pick['count'] ? data['pick'] = true : data['pick'] = false;
      data['episodeCount'] = episodeCount['count'];
    }))
    uniqueArr9.sort((a, b) => b.count - a.count);

    // 스릴러
    const genreThriller = await this.contentsRepository.getAllRating(Thriller);

    const uniqueArr0 = genreThriller.filter((element, index) => {
      return genreThriller.indexOf(element) === index;
    });

    await Promise.all(uniqueArr0.map(async (data) => {
      const episodeCount = await this.episodeRepository.getCountEpisodes(data['contentsId']);
      const pick = await this.pickRepository.getCountPick(userId, data['contentsId']);
      pick['count'] ? data['pick'] = true : data['pick'] = false;
      data['episodeCount'] = episodeCount['count'];
    }))
    uniqueArr0.sort((a, b) => b.count - a.count);


    return [{ genre: teenager, movies: genreTeenager }, { genre: animation, movies: genreAnimation }, { genre: Comic, movies: genreComic }, { genre: Romance, movies: genreRomance }, { genre: Action, movies: genreAction }, { genre: Thriller, movies: genreThriller },]

  };

}


module.exports = ContentsService;