const isWeek = require("../task/task_06");

describe("search what day of the week", () => {
  const tests = [
    {
      date: new Date("2023-07-23"),
      waitDay: "Sunday",
      expected: true,
    },
    {
      date: new Date("2023-07-22"),
      waitDay: "Saturday",
      expected: true,
    },
    {
      date: new Date("2023-07-25"),
      waitDay: "Monday",
      expected: false,
    },
  ];

	tests.forEach(test => {
		it(`if now: ${test.waitDay}, should be: ${test.expected}`, ()=> {
			const day = isWeek(test.date)
			expect(day).toBe(test.expected)
		})
	})
});
