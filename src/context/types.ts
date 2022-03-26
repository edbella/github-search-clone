export type AuthState = {
	isAuthenticated?: boolean;
	userData?: {
		tokenDetails?: {
			access_token: string;
			scope: string;
			token_type: string;
		};
	};
};

export type AuthContext = {
	authState?: AuthState;
	updateAuthState?: (authState: AuthState) => void;
	logoutUser?: () => void;
};
