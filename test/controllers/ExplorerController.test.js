const { getExplorersUsernamesByMission } = require("../../lib/services/ExplorerService");
const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe('Test suit for ExplorerController', () => {
    test('1) Test for getExplorersByMission method', () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node")
        expect(explorersInNode[0].mission).toBe("node")
    });
    test("2) Test for getExplorersUsernamesByMission method", () => {
        const explorersInNode = ExplorerController.getExplorersUsernamesByMission("node")
        expect(explorersInNode[0]).toBe("ajolonauta1")
    });
    test("3) Test for getExplorersAmountByMission method", () => {
        const explorersInNode = ExplorerController.getExplorersAmountByMission("node")
        console.log(explorersInNode);
        expect(explorersInNode).toBe(10)
    })
})