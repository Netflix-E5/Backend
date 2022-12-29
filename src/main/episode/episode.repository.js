class EpisodeRepository {
  constructor(EpisodeModel) {
    this.episodeModel = EpisodeModel;
  }

  getAllEpisodes = async (contentsId, season) => {
    return this.episodeModel.findAll({
      raw: true,
      where: { season, contentsId },
      attributes: ['episodeId', 'runtime', 'summary', 'episodeUrl', 'title'],
    });
  };

  getCountEpisodes = async (contentsId) => {
    return this.episodeModel.findAndCountAll({
      where: {contentsId}
    });
  }
}

module.exports = EpisodeRepository;
