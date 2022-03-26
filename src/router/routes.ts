import { lazy } from "react";
import APP_PATHS from "../config/paths.routes";

const AppLayout = lazy(() => import("../reusables/AppLayout"));
const SignIn = lazy(() => import("../views/SignIn"));
const SearchHome = lazy(() => import("../views/Search"));
const SearchResults = lazy(() => import('../views/Search/SearchResults'));

const routesFile = [
	{
		key: "sign in",
		path: APP_PATHS.SIGN_IN,
		element: SignIn,
		isAuthenticatedRoute: false,
		index: true,
	},
	{
		key: "search-home",
    path: APP_PATHS.HOME,
    element: AppLayout,
		isAuthenticatedRoute: true,
		childrenRoutes: [
			{
				key: "search-home-view",
				path: APP_PATHS.HOME,
				element: SearchHome,
				isAuthenticatedRoute: true,
				index: true,
			},
			{
				key: "search-results-view",
				path: APP_PATHS.SEARCH_RESULTS,
				element: SearchResults,
				isAuthenticatedRoute: true,
			},
		],
	},
];

export default routesFile;
