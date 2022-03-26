import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import APP_PATHS from "../../config/paths.routes";
import useAuthentication from "../../context/Authentication";

const RouterGuard = ({ isAuthenticatedRoute, children }: {isAuthenticatedRoute: boolean, children: ReactNode}) => {
	const {
		authState: { isAuthenticated },
	} = useAuthentication();
	const { pathname } = useLocation();

	// Want to check authentication for authenticated routes
	if (isAuthenticatedRoute && !isAuthenticated) {
		return <Navigate to={APP_PATHS.SIGN_IN} state={{ from: pathname }} />;
	}

	return <>{children}</>;
};

export default RouterGuard;
