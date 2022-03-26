import { useLazyQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SEARCH_GITHUB_REPOS, SEARCH_GITHUB_USERS } from "../../config/queries";
import LoadingSignal from "../../reusables/LoadingSignal";
import Header from "../../reusables/Header";
import SearchGroup from "./components/SearchGroup";
import { searchGroupResult } from "./constants";
import SearchList from "./components/SearchResultList";

const SearchResults = () => {
	/* Queries */
	const [
		searchGithubUsers,
		{ loading: loadingUserResult, error: userError, data: userResult },
	] = useLazyQuery(SEARCH_GITHUB_USERS);
	const [
		searchGithubRepos,
		{ loading: loadingRepoResult, error: repoError, data: repoResult },
	] = useLazyQuery(SEARCH_GITHUB_REPOS);

	const [searchParams, setSearchParams] = useSearchParams();
	const [searchValue, setSearchValue] = useState("");
	const [activeView, setActiveView] = useState(() => searchGroupResult[0]?.key);

	// Handle onchange event
	const handleChange = (event) => {
		const value = (event?.target as HTMLInputElement)?.value;
		setSearchValue(value);
	};

	// Handle search submission
	const handleSearchSubmit = (event) => {
		event.preventDefault();

		// If search value
		if (searchValue) {
			// Run search on existing value
			searchGithubRepos({
				variables: { query: `${searchValue} sort:updated-desc` },
			});
			searchGithubUsers({
				variables: { query: `${searchValue} sort:updated-desc` },
			});

			setSearchParams({search: searchValue})
		}
	};

	// Run on mount
	useEffect(() => {
		// Update document title
		document.title = "Search Results";

		// Check if search data exists
		const query = searchParams.get("search");

		if (query) {
			// Set it to current state
			setSearchValue(query);

			// Run search on existing value
			searchGithubRepos({ variables: { query: `${query} sort:updated-desc` } });
			searchGithubUsers({ variables: { query: `${query} sort:updated-desc` } });
		}
	}, []);

	// Define loading instance
	const loading = loadingRepoResult || loadingUserResult;

	// Define error state
	const error = repoError || userError;

	// Combine results
	const graphqlResult = { repoResult, userResult };

	return (
		<div className="gap-8 flex flex-col bg-[#f9fafa] min-h-screen">
			{/* Header */}
			<Header
				handleSearchSubmit={handleSearchSubmit}
				handleChange={handleChange}
				searchValue={searchValue}
			/>

			{/* Content */}
			<div className="max-w-screen-xl mx-auto w-full">
				{/* Handle loading state */}
				{loading ? (
					<div className="flex flex-col justify-center items-center min-h-[200px]">
						<LoadingSignal />
					</div>
				) : (
						<>
							{/* Handle error state */}
						{error ? (
							<div className="bg-white min-h-[250px] flex flex-col justify-center items-center ">
								<p className="font-openSans text-base text-center">
									Error fetching search results. Please try again
								</p>
							</div>
						) : (
							<div className="grid sm:grid-cols-4 gap-6 items-start relative">
								<SearchGroup
									graphqlResult={graphqlResult}
									currentView={activeView}
									handleChange={setActiveView}
								/>

								<SearchList
									graphqlResult={graphqlResult}
									currentView={activeView}
									handleChange={setActiveView}
								/>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default SearchResults;
