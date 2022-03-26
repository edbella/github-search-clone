import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../reusables/AppLayout";
import RouterGuard from "./components/RouterGuard";
import routesFile from "./routes";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					{routesFile.map(
						({
							isAuthenticatedRoute,
							key,
							element: Component,
							childrenRoutes = [],
							...rest
						}) => {
							if (childrenRoutes.length) {
								return (
									<Route
										key={key}
										{...rest}
										element={
											<RouterGuard isAuthenticatedRoute={isAuthenticatedRoute}>
												<Component />
											</RouterGuard>
										}
									>
										{childrenRoutes.map(({ key: childKey, element: ChildComponent, ...childrenRest }) => (
											<Route
												key={childKey}
												{...childrenRest}
												element={
													<RouterGuard isAuthenticatedRoute={isAuthenticatedRoute}>
														<ChildComponent />
													</RouterGuard>
												}
											/>
										))}
									</Route>
								);
							}

							return (
								<Route
									key={key}
									{...rest}
									element={
										<RouterGuard isAuthenticatedRoute={isAuthenticatedRoute}>
											<Component />
										</RouterGuard>
									}
								/>
							);
						}
					)}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
