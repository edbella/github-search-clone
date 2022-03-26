import { gql } from "@apollo/client";

export const GET_USER_DETAILS = gql`
	query getUserData {
		viewer {
			name
			avatarUrl
		}
	}
`;

export const SEARCH_GITHUB_USERS = gql`
query searchGithubUsers($query: String!, $after: String) {
  search(query: $query, type: USER, first: 100, after: $after) {
    pageInfo {
      startCursor
      hasNextPage
      endCursor
    }
    userCount
    edges {
      node {
        ... on User {
          name
          bio
          company
          id
        }
      }
    }
  }
}
`

export const SEARCH_GITHUB_REPOS = gql`
query searchGithubRepos($after: String, $query: String!) {
  search(query: $query, type: REPOSITORY, first: 100, after: $after) {
    pageInfo {
      startCursor
      hasNextPage
      endCursor
    }
    repositoryCount
    edges {
      node {
        ... on Repository {
          name
          description
          stargazers {
            totalCount
          }
          licenseInfo {
            name
          }
          updatedAt
          primaryLanguage {
            name
          }
          id
        }
      }
    }
  }
}
`
