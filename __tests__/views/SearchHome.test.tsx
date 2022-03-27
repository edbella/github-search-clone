import userEvent from "@testing-library/user-event";
import SearchHome from "../../src/views/Search";
import { render, screen } from "../../src/test-utils";

describe("Search Home Component", () => {
	test("it loads and displays search button with the search input", async () => {
		render(<SearchHome />);
		const searchGithubText = screen.getByRole("button", {
			name: "Search Github",
		});
		const input = screen.getByPlaceholderText("");

		// Mimic type event
		userEvent.type(input, "Hello React");

		// Expect the search github test to be found
		expect(searchGithubText).toBeInTheDocument();

		// Expect the input field to be resent
		expect(input).toBeInTheDocument();

		// Expect text to be in search box
		expect(input).toHaveValue("Hello React");
	});
});
