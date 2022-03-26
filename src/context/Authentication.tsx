import {
	createContext,
	useContext,
	useRef,
	useState,
	useEffect,
	ReactNode,
} from "react";
import Loader from "../reusables/Loader";
import { isEmpty } from "../utils";
import { AuthContext, AuthState } from "./types";

// Initialize context
const AuthenticationContext = createContext<AuthContext>(null);

export const AuthenticationContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
  const [authState, setAuthState] = useState<AuthState>({});
  const [isValidating, setValidationStatus] = useState(false);

	// Update auth state
	const updateAuthState = ({ userData, isAuthenticated }: AuthState): void => {
		if (!isEmpty(userData)) {
			const payload = { ...authState.userData, ...userData };
			localStorage.setItem("userData", JSON.stringify(payload));
			setAuthState((prevAuthState) => ({ ...prevAuthState, userData: payload }));
		}

		if (isAuthenticated) {
			localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
			setAuthState((prevAuthState) => ({ ...prevAuthState, isAuthenticated }));
		}
	};

	// Logout user
	const logoutUser = (): void => {
		localStorage.clear();
		setAuthState({});
	};

	// Check existing user
  const checkExistingUser = () => {
    // Set validation status
    setValidationStatus(true);

		const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
		const userData = JSON.parse(localStorage.getItem("userData"));

    // Update state
    updateAuthState({ userData, isAuthenticated });
    
    // Set validation status
    setValidationStatus(false);
	};

	// Check existing user on mount
	useEffect(() => {
		checkExistingUser();
	}, []);

	return (
		<AuthenticationContext.Provider
			value={{ authState, updateAuthState, logoutUser }}
		>
			{isValidating ? <Loader /> : <>{children}</>}
		</AuthenticationContext.Provider>
	);
};

// Export hook as default
const useAuthentication = () => useContext<AuthContext>(AuthenticationContext);

export default useAuthentication;
