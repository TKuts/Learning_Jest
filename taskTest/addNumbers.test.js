const addNumbers = require("../task/task_04");

describe("adding numbers", () => {
  const add = [
    {
      a: 1,
      b: 2,
      expected: 3,
    },
    {
      a: 2,
      b: 1,
      expected: 3,
    },
    {
      a: 2,
      b: 3,
      expected: 5,
    },
    {
      a: 10,
      b: 2,
      expected: 12,
    },
  ];

  add.forEach((test) => {
    const resultFunct = addNumbers(test.a, test.b);
    it(`number a: ${test.a} plus number b: ${test.b}, waiting for: ${test.expected}`, () => {
			expect(resultFunct).toBe(test.expected)
		});
  });
});
