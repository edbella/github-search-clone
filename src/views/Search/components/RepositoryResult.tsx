import React, { Fragment } from "react";
import { dayJs, formatNumberToShortString } from "../../../utils";
import { RepoResultEdge } from "../types";

const RepositoryResult = ({ node }: RepoResultEdge) => {
	const {
		name = "N/A",
		description = "No description available",
		stargazers,
		licenseInfo,
		updatedAt,
		primaryLanguage,
	} = node;

	const stars = `${formatNumberToShortString(stargazers?.totalCount)} Stars`;
	const updatedAtFromNow = `Updated ${dayJs().to(dayJs(updatedAt))}`;
	const license = licenseInfo?.name;
	const topLanguage = primaryLanguage?.name ?? "";

	// Define required details in an array
	const otherInfo = [stars, topLanguage, license, updatedAtFromNow];

	return (
		<div className="bg-white rounded p-6 col-span-1 space-y-3 font-openSans">
			<div>
				<h3 className="font-bold text-xl text-black">{name}</h3>
				<p className="font-light text-base text-gray-400 line-clamp-3">{description}</p>
			</div>

			<div className="font-light text-xs text-gray-400 flex justify-start items-center gap-1.5">
				{otherInfo?.map((info, index) => {
					if (info) {
						const isLastItem = index + 1 === otherInfo?.length;
						return (
							<Fragment key={info}>
								<p className="text-inherit font-[inherit]">{info}</p>
								{!isLastItem && <div className="w-[1.5px] h-3 bg-gray-300" />}
							</Fragment>
						);
					}
				})}
			</div>
		</div>
	);
};

export default RepositoryResult;
