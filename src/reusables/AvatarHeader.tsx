import {ReactComponent as ArrowDownIcon} from "../assets/icons/arrow-down.svg";

const AvatarHeader = ({ imgUrl, name }: { imgUrl: string; name: string }) => {
	return (
		<div className="flex gap-2 items-center max-w-[max-content] ml-auto">
			<img
				alt={name}
				src={imgUrl}
				className="w-12 h-12 object-cover rounded-full"
			/>
			<p className="font-openSans font-medium">{name}</p>
			<div className="text-stone-900">
				<ArrowDownIcon />
			</div>
		</div>
	);
};

export default AvatarHeader;
