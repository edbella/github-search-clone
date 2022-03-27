import SearchBar from "../../../src/reusables/SearchBar";
import { render, screen } from "../../../src/test-utils";
import userEvent from "@testing-library/user-event";

describe("Search Bar Component", () => {
	test("should render search input", () => {
		render(<SearchBar placeholder="Search" />);

		const inputField = screen.getByPlaceholderText("Search");
		userEvent.type(inputField, "Testing search component");

		expect(inputField).toHaveValue("Testing search component");
	});
});
