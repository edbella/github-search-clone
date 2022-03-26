import _get from "lodash.get";
import _chunk from "lodash.chunk";
import _uniqueId from "lodash.uniqueid";
import { useState } from "react";
import { searchGroupResult } from "../constants";
import { RepoResultEdge, SearchGroupProps, UserResultEdge } from "../types";
import { formatNumber } from "../../../utils";
import RepositoryResult from "./RepositoryResult";
import UserResult from "./UserResult";
import Pagination from "../../../reusables/Pagination";

const SearchResultList = ({
	graphqlResult,
	currentView,
	handleChange,
}: SearchGroupProps) => {
	const [currentPage, setCurrentPage] = useState<{
		[key: string]: {
			page: number;
			pageSize: number;
		};
	}>(() => {
		// Derive the pagination state keys
		const keys = searchGroupResult?.reduce((acc, searchGroup) => {
			const { key } = searchGroup;
			acc[key] = {
				page: 1,
				pageSize: 10,
			};

			return acc;
		}, {});

		return keys;
	});

	// Get the current view data
	const {
		resultTitle,
		key,
		viewType = "repo",
		dataPoint,
	} = searchGroupResult.find(({ key }) => key === currentView) ?? {};

	const count = _get(graphqlResult, key);
	const title = `${formatNumber(count)} ${resultTitle}`;
	const resultList: UserResultEdge[] | RepoResultEdge[] = _get(
		graphqlResult,
		dataPoint
	);

	// Get pagination props
	const { pageSize, page: pageNumber } = currentPage[currentView];
	const chunkedList = _chunk(resultList, pageSize);

  // Handle pagination change
	const handlePageChange = (current, pageSize) => {
		setCurrentPage((prevState) => ({
			...prevState,
			[currentView]: { page: current, pageSize },
		}));
  };

	return (
		<div className="bg-transparent col-span-3 space-y-3">
			<h1 className="font-bold text-2xl font-openSans">{title}</h1>

			<div className="flex flex-col gap-6">
				{chunkedList[pageNumber - 1]?.map((result) => {
					// If user view type is required
					if (viewType === "user") {
						return <UserResult key={_uniqueId()}  node={(result as UserResultEdge)?.node} />;
					}

					return <RepositoryResult key={_uniqueId()} node={(result as RepoResultEdge)?.node} />;
				})}
			</div>

			<div className="pt-14 py-24 flex justify-end">
				<Pagination
					total={resultList?.length}
					current={pageNumber}
					pageSize={pageSize}
					onChange={handlePageChange}
				/>
			</div>
		</div>
	);
};

export default SearchResultList;
