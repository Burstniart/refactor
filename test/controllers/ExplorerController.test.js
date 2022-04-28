const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test suit for ExplorerController", () => {
    test("1) Test for getExplorersByMission method", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode[0].mission).toBe("node");
    });
    test("2) Test for getExplorersUsernamesByMission method", () => {
        const explorersInNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersInNode[0]).toBe("ajolonauta1");
    });
    test("3) Test for getExplorersAmountByMission method", () => {
        const explorersInNode = ExplorerController.getExplorersAmountByMission("node");
        console.log(explorersInNode);
        expect(explorersInNode).toBe(10);
    });
    test("4) Test for FizzBuzz service in explorer controller", () => {
        const explorer1 = ExplorerController.getTrickByScore(1);
        const explorer3 = ExplorerController.getTrickByScore(3);
        const explorer5 = ExplorerController.getTrickByScore(5);
        const explorer15 = ExplorerController.getTrickByScore(15);

        expect(explorer1).toBe(1);
        expect(explorer3).toBe("FIZZ");
        expect(explorer5).toBe("BUZZ");
        expect(explorer15).toBe("FIZZBUZZ");
    });
});