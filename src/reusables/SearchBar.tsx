import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";

const SearchBar = ({ ...rest }) => {
	return (
		<div className="relative w-full max-w-lg ">
			<input
				type="text"
				name="search-bar"
        className="w-full py-2.5 px-3 pr-10 align-text-bottom rounded-full border border-gray-400 font-openSans bg-white !outline-none focus:border-gray-700"
        {...rest}
			/>
			<SearchIcon className="absolute top-[50%] right-4 -translate-y-[50%] text-2xl text-stone-500 pointer-events-none" />
		</div>
	);
};

export default SearchBar;
