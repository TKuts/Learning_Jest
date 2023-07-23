const reverseString = require("../task/task_01");

// test("Review revers of string", () => {
//   expect(reverseString("hello www")).toBe("www olleh");
// });
// test("Review revers of string 2", () => {
//   expect(reverseString("blin ha")).toBe("ah nilb");
// });

describe("My review", () => {
  const testCases = [
    {
      inString: "hello",
      expected: "olleh",
    },
    {
      inString: "blin ha",
      expected: "ah nilb",
    },
    {
      inString: "Hello how are you?",
      expected: "?uoy era woh olleH",
    },
  ];
  testCases.forEach((test) =>
    it(`Checking the line ${test.inString} waiting for ${test.expected}`, () => {
			const revert = reverseString(test.inString)
			expect(revert).toBe(test.expected)
		})
  );
});
