const arrayFilter = require("../task/task_02");

describe("filtered array", () => {
  const testCase = [
    {
      in: [0, 1, 2, 3, 4],
      expected: [0, 2, 4],
    },
    {
      in: [true, false, true, false, true, false],
      expected: [true, true, true],
    },
  ];

  testCase.forEach((test) => {
    it(`in: ${test.in}, expected ${test.expected}`, () => {
      const filter = arrayFilter(test.in);
      expect(filter).toEqual(test.expected);
    });
  });
});
