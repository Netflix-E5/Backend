const EpisodeRepository = require('./episode.repository');
const ContentsRepository = require('../contents/contents.repository');
const { Episodes } = require('../../models');
const { ValidationError } = require('../../exceptions/index.exception');

class EpisodeService {
  episodeRepository = new EpisodeRepository(Episodes);
  contentsRepository = new ContentsRepository();

  getAllEpisodes = async (contentsId, season) => {
    const existsContent = await this.contentsRepository.getOneMovie(contentsId);

    if (!existsContent) {
      throw new ValidationError('존재하지 않는 컨텐츠 입니다.', 400);
    }

    const existsEpisode = await this.episodeRepository.getAllEpisodes(
      contentsId,
      season
    );

    if (!existsEpisode)
      throw new ValidationError('회차가 존재하지 않습니다.', 400);

    return existsEpisode;
  };
}

module.exports = EpisodeService;
