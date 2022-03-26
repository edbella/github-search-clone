import { gql } from "@apollo/client";

export const GET_USER_DETAILS = gql`
	query {
		viewer {
			name
			avatarUrl
		}
	}
`;
