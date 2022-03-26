import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const userData = JSON.parse(localStorage.getItem('userData'));
  const { tokenDetails: { access_token: token } } = userData;
  
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : "",
    }
  }
});

// Define cache
const cache = new InMemoryCache();

// Define Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default client;