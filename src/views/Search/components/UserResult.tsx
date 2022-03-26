import React, { Fragment } from "react";
import { dayJs, formatNumberToShortString } from "../../../utils";
import { UserResultEdge } from "../types";

const UserResult = ({ node }: UserResultEdge) => {
	const { name, bio, company } = node;

	return (
		<div className="bg-white rounded p-6 col-span-1 space-y-2 font-openSans">
			<div className="flex gap-4 items-center">
				<h3 className="font-bold text-xl text-black">{name ?? "N/A"}</h3>
				<h3 className="font-light text-xl text-gray-400">{company}</h3>
			</div>
			<p className="font-light text-xs text-gray-400">
				{bio ?? "No bio information available"}
			</p>
		</div>
	);
};

export default UserResult;
