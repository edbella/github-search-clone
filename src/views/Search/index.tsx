import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_USER_DETAILS } from "../../config/queries";
import AvatarHeader from "../../reusables/AvatarHeader";
import Loader from "../../reusables/Loader";
import GitHubMark from "../../assets/images/GitHub-Mark.png";
import GitHubLogo from "../../assets/images/GitHub-Logo.png";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const SearchHome = () => {
	const { loading, error, data } = useQuery(GET_USER_DETAILS);

	// Run on mount
	useEffect(() => {
		// Update document title
		document.title = "Home";
	}, []);

	if (loading) {
		return <Loader />;
	}

	console.log({ data, error });

	return (
		<div className="p-5 max-w-screen-2xl mx-auto gap-36 flex flex-col">
			<AvatarHeader
				name="John Doe"
				imgUrl="https://avatars.githubusercontent.com/u/30025478?u=823876381611b3db548c894cac1d6f0ddb592232&v=4"
			/>

			<form className="flex flex-col gap-6 items-center">
				<div className="flex items-center justify-center gap-1 pointer-events-none">
					<img
						alt="Github Mark"
						src={GitHubMark}
						className="w-16 h-16 object-cover"
					/>
					<img alt="Github Logo" src={GitHubLogo} className="h-14" />
				</div>

				<div className="relative w-full max-w-lg ">
					<input
						type="text"
						className="w-full py-2.5 px-3 pr-10 align-text-bottom rounded-full border border-gray-400 font-openSans bg-white !outline-none focus:border-gray-700"
					/>
					<SearchIcon className="absolute top-[50%] right-4 -translate-y-[50%] text-2xl text-stone-500 pointer-events-none" />
				</div>

				<button className="text-white bg-[#5e5e5e] rounded min-w-[180px] px-4 py-2 font-semibold font-openSans">
					Search Github
				</button>
			</form>
		</div>
	);
};

export default SearchHome;
