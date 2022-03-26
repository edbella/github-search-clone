export type PageInfo = {
	startCursor: string;
	hasNextPage: boolean;
	endCursor: string;
};

export type Stargazers = {
	totalCount: number;
};

export type LicenseInfo = {
	name: string;
};

export type Languages = {
	name: string 
};

export type RepoResultEdge = {
	node: {
		name: string;
		description: string;
		stargazers: Stargazers;
		licenseInfo: LicenseInfo;
		updatedAt: Date;
    primaryLanguage: Languages;
    id: string;
	};
};

export type RepoSearchResult = {
	search: {
		pageInfo: PageInfo;
		repositoryCount: number;
		edges: RepoResultEdge[];
	};
};

export interface UserResultEdge {
	node: {
		name: string;
		bio: string;
    company: string;
    id: string;
	};
}

export interface UserSearchResult {
	pageInfo: PageInfo;
	userCount: number;
	edges: UserResultEdge[];
}

export type SearchGroupProps = {
	currentView: string;
	handleChange: (key: string) => void;
	graphqlResult: {
		repoResult: RepoSearchResult;
		userResult: UserSearchResult;
	};
};
