const ExplorerService = require('./../../lib/services/ExplorerService')
const Reader = require('./../../lib/utils/Reader')

describe('Test suit for ExplorerService', () => {
    test('Filter explorer objects by mission', () => {
        // Aplicación del ExplorerService sobre la lista de explorers
        const explorers = Reader.readJsonFile('explorers.json')
        const noders = ExplorerService.filterByMission(explorers, "node");

        // ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        // ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(noders[0].mission).toBe('node');
    });
})