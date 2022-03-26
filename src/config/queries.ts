import { gql } from "@apollo/client";

export const GET_USER_DETAILS = gql`
	query getUserData {
		viewer {
			name
			avatarUrl
		}
	}
`;
