import SearchResultView from "../../src/views/Search/SearchResults";
import { render, screen } from "../../src/test-utils";

describe("Search Results Component", () => {
	test("it loads and displays search results view", async () => {
		render(<SearchResultView />);
		const repositoriesText = screen.getByText("Repositories");
		const usersText = screen.getByText("Users");

		// Expect the the repositories group to be present
		expect(repositoriesText).toBeInTheDocument();

		// Expect the users group to be present
		expect(usersText).toBeInTheDocument();
	});
});
