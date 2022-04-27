const { getExplorersUsernamesByMission } = require("../../lib/services/ExplorerService");
const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe('Test suit for ExplorerController', () => {
    test('1) Test for getExplorersByMission method', () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node")
        console.log(explorersInNode[0]);
        expect(explorersInNode[0].mission).toBe("node")
    });
    test("2) Test for getExplorersAmountByMission method", () => {
        const explorersInNode = ExplorerController.getExplorersUsernamesByMission("node")
        console.log(explorersInNode);
        expect(explorersInNode[0]).toBe("ajolonauta1")
    })
})