const Reader = require("./../utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");

class ExplorerService{
    static filterByMission(explorers, mission) {
        return 'ok 0'
    }
    static getAmountOfExplorersByMission(explorers, mission)  {
        return 'Ok 1'
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        return 'OK 2'
    }
}
module.exports = ExplorerService