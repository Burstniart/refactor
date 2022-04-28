const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");
class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const missioners = ExplorerService.filterByMission(explorers, mission);
        return missioners;
    }
    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const missioners = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return missioners;
    }
    static getExplorersAmountByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const missioners = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return missioners;
    }
    static getTrickByScore(number) {
        return FizzbuzzService.applyValidationInNumber(number);
    }
}
module.exports = ExplorerController;
