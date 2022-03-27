import { formatNumber } from "../../src/utils";

describe("formatNumber utility function", () => {
	test("Values are formatted properly", async () => {
		expect(formatNumber(3400)).toBe('3,400');
		expect(formatNumber(123600)).toBe('123,600');
		expect(formatNumber(1000000)).toBe('1,000,000');
  });
});
