import { useLazyQuery } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEventHandler } from "react";
import { GET_USER_DETAILS } from "../../config/queries";
import Loader from "../../reusables/Loader";
import APP_PATHS from "../../config/paths.routes";
import LoadingSignal from "../../reusables/LoadingSignal";
import Header from "../../reusables/Header";

const SearchResults = () => {
	const [searchGithub, { loading, error, data }] =
		useLazyQuery(GET_USER_DETAILS);
	const { state } = useLocation();
	const [searchValue, setSearchValue] = useState("");
	const navigate = useNavigate();

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
			navigate(APP_PATHS.SEARCH_RESULTS, { state: { search: searchValue } });
		}
	};

	// Run on mount
	useEffect(() => {
		// Update document title
		document.title = "Search Results";

		// Check if search data exists
		const existingSearchValue = (state as { search: string })?.search;

		if (existingSearchValue) {
			// Set it to current state
			setSearchValue(existingSearchValue);

			// Run search on existing value
			searchGithub({ variables: { existingSearchValue } });
		}
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<div className="gap-8 flex flex-col bg-slate-100 min-h-screen">
			{/* Header */}
			<Header
				handleSearchSubmit={handleSearchSubmit}
				handleChange={handleChange}
				searchValue={searchValue}
			/>

			{/* Content */}
			<div className="max-w-xl mx-auto">
				{loading ? (
					<div className="bg-slate-50 h-screen flex flex-col justify-center items-center fixed left-0 top-0 w-screen overflow-hidden z-[99999]">
						<LoadingSignal />
					</div>
				) : (
					<>Hi</>
				)}
			</div>
		</div>
	);
};

export default SearchResults;
