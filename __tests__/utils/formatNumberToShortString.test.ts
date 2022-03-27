import { formatNumberToShortString } from "../../src/utils";

describe("formatNumberToShortString utility function", () => {
	test("Values are formatted properly", async () => {
		expect(formatNumberToShortString(3400)).toBe('3.4K');
		expect(formatNumberToShortString(123600)).toBe('124K');
		expect(formatNumberToShortString(1000000)).toBe('1M');
		expect(formatNumberToShortString(1200000)).toBe('1.2M');
		expect(formatNumberToShortString(505000000)).toBe('505M');
  });
});
