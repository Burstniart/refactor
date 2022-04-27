const ExplorerService = require('./../../lib/services/ExplorerService')
const Reader = require('./../../lib/utils/Reader')

describe('Test suit for ExplorerService', () => {
    test('1) Filter explorer objects by mission', () => {
        const explorers = Reader.readJsonFile('explorers.json')
        const noders = ExplorerService.filterByMission(explorers, "node");
        
        expect(noders[0].mission).toBe('node');
    });
    test('2) Amount of explorers by mission', () => {
        const explorers = Reader.readJsonFile('explorers.json')
        const noders = ExplorerService.getAmountOfExplorersByMission(explorers, 'node')

        expect(noders).toBe(10)
    });
    test('3) Usernames by mission', () => {
        const explorers = Reader.readJsonFile('explorers.json')
        const nodersUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, 'node')

        expect(nodersUsernames[0]).toBe('ajolonauta2')
    })
})