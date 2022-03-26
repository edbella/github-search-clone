import { useQuery } from "@apollo/client";
import {ReactComponent as ArrowDownIcon} from "../assets/icons/arrow-down.svg";
import { GET_USER_DETAILS } from "../config/queries";
import Loader from "./Loader";
import { AvatarHeaderProps } from "./types";

const AvatarHeader = () => {
	const { loading, data } = useQuery(GET_USER_DETAILS);

	if (loading) {
		return <Loader />;
	}

	const name = data?.viewer?.name;
	const avatarUrl = data?.viewer?.avatarUrl

	return (
		<button className="flex gap-2 items-center max-w-[max-content] ml-auto">
			<img
				alt={name}
				src={avatarUrl}
				className="w-12 h-12 object-cover rounded-full"
			/>
			<p className="font-openSans font-medium">{name}</p>
			<div className="text-stone-900">
				<ArrowDownIcon />
			</div>
		</button>
	);
};

export default AvatarHeader;
