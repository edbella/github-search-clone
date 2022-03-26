import _get from "lodash.get";
import clsx from "clsx";
import { searchGroupResult } from "../constants";
import { SearchGroupProps } from "../types";
import { formatNumberToShortString } from "../../../utils";

const SearchGroup = ({
	graphqlResult,
	currentView,
	handleChange,
}: SearchGroupProps) => {
	return (
		<div className="bg-white rounded p-8 sticky top-[120px] col-span-1 space-y-2">
			{searchGroupResult.map(({ key, title }) => {
        const value = _get(graphqlResult, key);
        const isActive = currentView == key;

				return (
					<button
						key={key}
						className={clsx(
							"p-2 rounded flex justify-between items-center w-full gap-3 transition-all duration-200 ease-in-out",
							isActive ? "bg-gray-100" : "bg-white hover:bg-gray-50"
            )}
            onClick={() => handleChange(key)}
					>
						<p className="text-stone-600 font-light text-base font-openSans">{title}</p>
						<p className="font-semibold text-xs p-1.5 rounded-full bg-gray-200 text-stone-700 font-openSans">
							{formatNumberToShortString(value)}
						</p>
					</button>
				);
			})}
		</div>
	);
};

export default SearchGroup;
