import { lazy } from "react";
import APP_PATHS from "../config/paths.routes";

const SignIn = lazy(() => import("../views/SignIn"));
const SearchHome = lazy(() => import("../views/Search"));

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
    element: SearchHome,
		isAuthenticatedRoute: true,
		childrenRoutes: [
			{
				key: "search-home-view",
				path: APP_PATHS.HOME,
				element: SearchHome,
				isAuthenticatedRoute: true,
				index: true,
			},
		],
	},
];

export default routesFile;
