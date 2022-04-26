const ExplorerService = require('./../../lib/services/ExplorerService')

describe('Test suit for ExplorerService', () => {
    test('Filter explorer objects by mission', () => {
        // Aplicación del ExplorerService sobre la lista de explorers
        const noders = ExplorerService.filterByMission('./explorers.json', "node");
        // ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        // ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(noders[0].mission).toBe('node');
    });
})