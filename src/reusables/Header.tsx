import { useLocation, useNavigate } from "react-router-dom";
import useAuthentication from "../context/Authentication";
import AvatarHeader from "./AvatarHeader";
import SearchBar from "./SearchBar";
import { HeaderProps } from "./types";
import GithubMark from "./GithubMark";
import APP_PATHS from "../config/paths.routes";

const Header = ({
	handleSearchSubmit,
	handleChange,
	searchValue,
}: HeaderProps) => {
	const {
		authState: { isAuthenticated },
	} = useAuthentication();
	const { pathname } = useLocation();

	// Check if current path is home
	const isHome = pathname === APP_PATHS.HOME;

	if (isAuthenticated) {
		return (
			<>
				{isHome ? (
						<AvatarHeader />
				) : (
					<div className="p-5 bg-white drop-shadow sticky top-0 z-[999999]">
						<div className=" max-w-screen-2xl mx-auto grid grid-cols-3 gap-3">
							<GithubMark />

							<form
								className="flex flex-col gap-6 items-center"
								onSubmit={handleSearchSubmit}
							>
								<SearchBar
									placeholder="Search"
									onChange={handleChange}
									value={searchValue}
									required
								/>
								<button type="submit" className="hidden">
									Search Github
								</button>
							</form>

							<AvatarHeader />
						</div>
					</div>
				)}
			</>
		);
	}

	return null;
};

export default Header;
