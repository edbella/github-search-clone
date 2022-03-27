import RepositoryResult from "../../../src/views/Search/components/RepositoryResult";
import { render, screen } from "../../../src/test-utils";
import { dayJs, formatNumberToShortString } from "../../../src/utils";

const mockRepositoryData = {
	name: "modern-desktop-app-template",
	description: "Boilerplate for a modern desktop application.",
	stargazers: {
		totalCount: 434332,
	},
	licenseInfo: {
		name: "Creative Commons Zero v1.0 Universal",
	},
	updatedAt: "2022-03-27T20:47:23Z",
	primaryLanguage: {
		name: "JavaScript",
	},
	id: "R_kgDOHD5Vig",
};

describe("Repository Result View", () => {
	test("it loads and displays a repository result view", async () => {
		render(<RepositoryResult node={mockRepositoryData} />);
		const repoTitle = screen.getByText(mockRepositoryData.name);
		const repoDescription = screen.getByText(mockRepositoryData.description);
		const repoLanguage = screen.getByText(
			mockRepositoryData.primaryLanguage.name
		);
		const license = screen.getByText(mockRepositoryData.licenseInfo.name);
		const stars = screen.getByText(
			`${formatNumberToShortString(
				mockRepositoryData.stargazers?.totalCount
			)} Stars`
		);
		const updatedAt = screen.getByText(
			`Updated ${dayJs().to(dayJs(mockRepositoryData.updatedAt))}`
		);

		expect(repoTitle).toBeInTheDocument();
		expect(repoDescription).toBeInTheDocument();
		expect(repoLanguage).toBeInTheDocument();
		expect(license).toBeInTheDocument();
		expect(stars).toBeInTheDocument();
		expect(updatedAt).toBeInTheDocument();
	});
});
