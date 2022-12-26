const EpisodeService = require('./episode.service');
const { InvalidParamsError } = require('../../exceptions/index.exception.js');

class EpisodeController {
  episodeService = new EpisodeService();

  getAllEpisodes = async (req, res, next) => {
    try {
      const { contentsId, season } = req.params;

      if (!contentsId || !season)
        throw new InvalidParamsError('잘못된 데이터 형식입니다.');

      const episodes = await this.episodeService.getAllEpisodes(
        contentsId,
        season
      );

      res.status(200).json({ data: episodes });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = EpisodeController;
