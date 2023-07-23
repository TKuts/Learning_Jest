const random = require("../task/task_03");

describe("Testing random int", () => {
  const testCase = [
    {
      from: 100,
      to: 110,
    },
    {
      from: 200,
      to: 201,
    },
  ];

  testCase.forEach((test) => {
    it(`from: ${test.from}, to: ${test.to}`, () => {
      const number = random(test.from, test.to);
			console.log(number);
			expect(number).toBeGreaterThanOrEqual(test.from)
			expect(number).toBeLessThanOrEqual(test.to)
    });
  });
});
