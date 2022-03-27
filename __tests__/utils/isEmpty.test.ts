import { isEmpty } from "../../src/utils";

describe("IsEmpty utility function", () => {
  // Truthy values
	test("All values to be truth", async () => {
		const emptyObject = {};
		const nullObject = null;
		const emptyString = "";
		const emptyArray = [];

		expect(isEmpty(emptyObject)).toBeTruthy();
		expect(isEmpty(nullObject)).toBeTruthy();
		expect(isEmpty(emptyString)).toBeTruthy();
		expect(isEmpty(emptyArray)).toBeTruthy();
  });
  
  // Falsy values
  test("All values to be false", async () => {
		const objData = {name: 'hello'};
		const stringText = "njfdbvdf";
		const arrayObj = ['hfsd', 'fnbdf'];

		expect(isEmpty(objData)).toBeFalsy();
		expect(isEmpty(stringText)).toBeFalsy();
		expect(isEmpty(arrayObj)).toBeFalsy();
	});
});
