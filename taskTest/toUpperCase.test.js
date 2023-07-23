const toUpperCase = require("../task/task_05");

describe("check if all letters are capitalized", () => {
  const tests = [
    {
      string: "anton",
      expected: "ANTON",
    },
    {
      string: "car",
      expected: "CAR",
    },
    {
      string: "uppercase",
      expected: "UPPERCASE",
    },
  ];
  tests.forEach((test) => {
    const resp = toUpperCase(test.string);

    it("I check every word", () => {
      expect(resp).toBe(test.expected);
    });
  });
});
