import { useQuery } from "@apollo/client";
import { useState } from "react";
import clsx from "clsx";
import { ReactComponent as ArrowDownIcon } from "../assets/icons/arrow-down.svg";
import { GET_USER_DETAILS } from "../config/queries";
import Loader from "./Loader";
import useAuthentication from "../context/Authentication";

const AvatarHeader = () => {
	const { loading, data } = useQuery(GET_USER_DETAILS);
	const { logoutUser } = useAuthentication();
	const [openDropdown, setDropdownStatus] = useState(false);

	if (loading) {
		return <Loader />;
	}

	// Toggle drop down
	const toggleDropdown = () => setDropdownStatus((prevState) => !prevState);

	const name = data?.viewer?.name;
	const avatarUrl = data?.viewer?.avatarUrl;

	return (
		<button
			className="flex gap-2 items-center max-w-[max-content] ml-auto relative"
			onClick={toggleDropdown}
		>
			<img
				alt={name}
				src={avatarUrl}
				className="w-12 h-12 object-cover rounded-full"
			/>
			<p className="font-openSans font-medium">{name}</p>
			<div className="text-stone-900">
				<ArrowDownIcon />
			</div>
			<div
				className={clsx(
					"absolute pointer-events-none opacity-0 bg-white py-4 px-6 border border-slate-200 w-full rounded transition-all duration-500 ease-in-out bottom-0 translate-y-20 before:w-0 before:h-0 after:w-0 after:h-0 after:border-[13px] after:border-transparent after:!border-b-white after:absolute after:block after:bottom-[100%] after:right-[34px] before:border-[15px] before:border-transparent before:!border-b-slate-200 before:absolute before:block before:bottom-[100%] before:right-[32px]",
					openDropdown && "pointer-events-auto opacity-100"
				)}
			>
				<div
					className="text-red-500 font-semibold font-openSans text-sm text-left"
					role="button"
					onClick={logoutUser /*  */}
				>
					Logout
				</div>
			</div>
		</button>
	);
};

export default AvatarHeader;
