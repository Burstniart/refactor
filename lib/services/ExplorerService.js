// const Reader = require("./../utils/Reader");
// const explorers = Reader.readJsonFile("explorers.json");

class ExplorerService{
    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission
    }
    static getAmountOfExplorersByMission(explorers, mission)  {
        return 'Ok 1'
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        return 'OK 2'
    }
}
module.exports = ExplorerService