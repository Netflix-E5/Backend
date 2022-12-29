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
}

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

  // 청소년
  const genreTeenager = await this.contentsRepository.getAllRating(teenager);

  const uniqueArr5 = genreTeenager.filter((element, index) => {
    return genreTeenager.indexOf(element) === index;
  });

  await Promise.all(uniqueArr5.map(async (data) => {
    const episodeCount = await this.episodeRepository.getCountEpisodes(data['contentsId']);
    const pick = await this.pickRepository.getCountPick(userId, data['contentsId']);
    pick['count'] ? data['pick'] = true : data['pick'] = false;
    data['episodeCount'] = episodeCount['count'];
  }))
  uniqueArr5.sort((a, b) => b.count - a.count);


  // 애니
  const genreAnimation = await this.contentsRepository.getAllRating(animation);

  const uniqueArr6 = genreAnimation.filter((element, index) => {
    return genreAnimation.indexOf(element) === index;
  });

  await Promise.all(uniqueArr6.map(async (data) => {
    const episodeCount = await this.episodeRepository.getCountEpisodes(data['contentsId']);
    const pick = await this.pickRepository.getCountPick(userId, data['contentsId']);
    pick['count'] ? data['pick'] = true : data['pick'] = false;
    data['episodeCount'] = episodeCount['count'];
  }))
  uniqueArr6.sort((a, b) => b.count - a.count);

  // 코믹
  const genreComic = await this.contentsRepository.getAllRating(Comic);

  const uniqueArr7 = genreComic.filter((element, index) => {
    return genreComic.indexOf(element) === index;
  });

  await Promise.all(uniqueArr7.map(async (data) => {
    const episodeCount = await this.episodeRepository.getCountEpisodes(data['contentsId']);
    const pick = await this.pickRepository.getCountPick(userId, data['contentsId']);
    pick['count'] ? data['pick'] = true : data['pick'] = false;
    data['episodeCount'] = episodeCount['count'];
  }))
  uniqueArr7.sort((a, b) => b.count - a.count);

  // 로맨스
  const genreRomance = await this.contentsRepository.getAllRating(Romance);

  const uniqueArr8 = genreRomance.filter((element, index) => {
    return genreRomance.indexOf(element) === index;
  });

  await Promise.all(uniqueArr8.map(async (data) => {
    const episodeCount = await this.episodeRepository.getCountEpisodes(data['contentsId']);
    const pick = await this.pickRepository.getCountPick(userId, data['contentsId']);
    pick['count'] ? data['pick'] = true : data['pick'] = false;
    data['episodeCount'] = episodeCount['count'];
  }))
  uniqueArr8.sort((a, b) => b.count - a.count);


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


  return [{ genre: teenager, movies: uniqueArr5 },
  { genre: animation, movies: uniqueArr6 },
  { genre: Comic, movies: uniqueArr7 },
  { genre: Romance, movies: uniqueArr8 },
  { genre: Action, movies: uniqueArr9 },
  { genre: Thriller, movies: uniqueArr0 },]

};



module.exports = ContentsService;