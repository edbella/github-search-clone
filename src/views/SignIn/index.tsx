import LoginGithub from "react-login-github";
import clsx from "clsx";
import { useState, useEffect } from "react";
import axios from "axios";
import useAuthentication from "../../context/Authentication";
import { useNavigate } from "react-router-dom";
import APP_PATHS from "../../config/paths.routes";
import Loader from "../../reusables/Loader";

const SignIn = () => {
	const [errorResponse, setError] = useState("");
	const {
		updateAuthState,
		authState: { isAuthenticated },
	} = useAuthentication();
	const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

	// Handle successful sign in
  const handleSuccess = async ({ code }) => {
    // Enable loading state
    setIsLoading(true);

		// Await authentication call
		const {
			data: { data },
		} = await axios.post(
			"https://9uj0ihoex6.execute-api.eu-west-1.amazonaws.com/dev/auth",
			{ code }
		);

		// Payload
		const payload = {
			tokenDetails: data,
    };
    
     // Disable loading state
     setIsLoading(false);

		// Save token details to state and authenticate user
		updateAuthState({ userData: payload, isAuthenticated: true });

		// Navigate forward
		navigate(APP_PATHS.HOME);
	};

	// Handle failure sign in
	const handleFailure = (response) => {
		setError(`${response?.message}. Try again`);
	};

  // Run on mount
  useEffect(() => {
    // Update document title
    document.title = 'Sign In';

    // If user is already authenticated then push away from here
		if (isAuthenticated) {
			navigate(APP_PATHS.HOME);
		}
	}, []);

	return (
    <div className="h-screen p-4 bg-white flex flex-col gap-1 justify-center items-center">
      {isLoading && <Loader />}
			<LoginGithub
				clientId={import.meta.env.VITE_GITHUB_CLIENT_ID}
				scope="read:user,repo"
				onSuccess={handleSuccess}
				onFailure={handleFailure}
				onRequest={() => setError("")}
				disabled={isLoading}
				buttonText="Login to Github"
				className="text-white bg-[#5e5e5e] rounded min-w-[180px] px-4 py-3 font-semibold font-openSans"
			/>
			<p
				className={clsx(
					"bg-red-200 text-red-700 rounded transition-[height] duration-300 ease-in-out text-xs",
					!!errorResponse ? "h-auto py-1 px-2.5" : "h-0"
				)}
			>
				{errorResponse}
			</p>
		</div>
	);
};

export default SignIn;
