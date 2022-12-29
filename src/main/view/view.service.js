const ViewRepository = require('./view.repository')
const EpisodeRepository = require('../episode/episode.repository');
const { Episodes, Picks } = require("../../models");
const PickRepository = require("../pick/pick.repository");

class ViewService {
    constructor() {
        this.viewRepository = new ViewRepository();
        this.episodeRepository = new EpisodeRepository(Episodes);
        this.pickRepository = new PickRepository(Picks);

    }

    // 컨텐츠 조회 레코딩 API
    clickView = async ({ contentsId }) => {
        try {
            const view = await this.viewRepository.clickView({ contentsId });

            return { data: view }
        } catch (error) {
            throw error
        }
    }

    // 유저 

    // 컨텐츠 랭킹 조회 API
    viewContents = async ({ }) => {
        // const userId = { userId: '1' }
        const viewContents = await this.viewRepository.viewContents({});
        // const episodes = await 에피소드 데이터베이스 전체;
        // const picks = await 픽스 데이터베이스 전체

        // 중복 제거
        const uniqueArr = viewContents.filter((element, index) => {
            return viewContents.indexOf(element) === index;
        });

        await Promise.all(uniqueArr.map(async (data) => {
            const episodeCount = await this.episodeRepository.getCountEpisodes(data['contentsId']);
            const pick = await this.pickRepository.getCountPick(userId, data['contentsId']);
            pick['count'] ? data['pick'] = true : data['pick'] = false;
            data['episodeCount'] = episodeCount['count'];
        }))

        // count를 기준으로 contentsId 정렬
        uniqueArr.sort((a, b) => b.count - a.count);


        return uniqueArr
    }

}

module.exports = ViewService