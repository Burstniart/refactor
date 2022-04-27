const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe('Test suit for ExplorerController', () => {
    test('1) Test for getExplorersByMission method', () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node")
        console.log(explorersInNode[0]);
        expect(explorersInNode[0].mission).toBe("node")
    });
})