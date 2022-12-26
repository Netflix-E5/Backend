const EpisodeRepository = require('./episode.repository');
const { Episodes } = require('../../models');
const { ValidationError } = require('../../exceptions/index.exception');
class EpisodeService {
  episodeRepository = new EpisodeRepository(Episodes);

  getAllEpisodes = async (contentsId, season) => {
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
