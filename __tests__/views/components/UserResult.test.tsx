import UserResult from "../../../src/views/Search/components/UserResult";
import { render, screen } from "../../../src/test-utils";

const mockUserData = {
	name: "Leonardo Silva",
	bio: "Learning mode about React and Node 🔥",
	company: "@gvdasa",
	id: "MDQ6VXNlcjQ2OTQ0MDEy",
};

describe("User Result View", () => {
	test("it loads and displays a user result view", async () => {
		render(<UserResult node={mockUserData} />);
		const userName = screen.getByText(mockUserData.name);
		const userBio = screen.getByText(mockUserData.bio);
		const userCompany = screen.getByText(mockUserData.company);

		expect(userName).toBeInTheDocument();
		expect(userBio).toBeInTheDocument();
		expect(userCompany).toBeInTheDocument();
	});
});
