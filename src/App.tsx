import { Suspense, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { AuthenticationContextProvider } from "./context/Authentication";
import Router from "./router";
import client from "./config/apolloClient";
import Loader from "./reusables/Loader";

function App() {
	const [count, setCount] = useState(0);

	return (
		<AuthenticationContextProvider>
			<ApolloProvider client={client}>
				<Suspense fallback={<Loader />}>
					<Router />
				</Suspense>
			</ApolloProvider>
		</AuthenticationContextProvider>
	);
}

export default App;
