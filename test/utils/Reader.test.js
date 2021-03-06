const Reader = require("./../../lib/utils/Reader");

describe("Reader class tester", () => {
    test("1) Checking for correct Json read", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorer0 = {
            name: "Woopa1",
            githubUsername: "ajolonauta1",
            score: 1,
            mission: "node",
            stacks: [ "javascript", "reasonML", "elm" ]
        };
        expect(explorers[0]).toStrictEqual(explorer0);
    });
});