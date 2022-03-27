import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AvatarHeader from "../../reusables/AvatarHeader";
import SearchBar from "../../reusables/SearchBar";
import APP_PATHS from "../../config/paths.routes";
import GithubMark from "../../reusables/GithubMark";
import Header from "../../reusables/Header";

const SearchHome = () => {
	const [searchValue, setSearchValue] = useState("");
	const navigate = useNavigate();

	// Handle onchange event
	const handleChange = ({ target: { value } }) => setSearchValue(value);

	// Handle search submission
	const handleSearchSubmit = (event) => {
		event.preventDefault();

		// If search value
		if (searchValue) {
			navigate(`${APP_PATHS.SEARCH_RESULTS}?search=${searchValue}`);
		}
	};

	return (
		<div className="p-5 max-w-screen-2xl mx-auto gap-36 flex flex-col">
			<Header />

			<form
				className="flex flex-col gap-6 items-center"
				onSubmit={handleSearchSubmit}
			>
				<GithubMark
					parentClassName="justify-center pointer-events-none"
					markClassName="w-16 h-16"
					logoClassName="h-14"
				/>

				<SearchBar onChange={handleChange} value={searchValue} placeholder="" required />
				<button
					className="text-white bg-[#5e5e5e] rounded min-w-[180px] px-4 py-2 font-semibold font-openSans"
					type="submit"
				>
					Search Github
				</button>
			</form>
		</div>
	);
};

export default SearchHome;
