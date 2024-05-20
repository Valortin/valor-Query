const { ApolloClient, InMemoryCache, gql, HttpLink } = require('@apollo/client/core');
const fetch = require('node-fetch');

const API_URL = 'https://gateway.thegraph.com/api/<API_KEY>/subgraphs/id/<SUBGRAPH_ID>';

const client = new ApolloClient({
  link: new HttpLink({ uri: API_URL, fetch }),
  cache: new InMemoryCache(),
});

const GET_TOKENS = gql`
  query {
    tokens {
      id
      symbol
      name
      decimals
    }
  }
`;

const GET_MARKETS = gql`
  query {
    markets(first: 7) {
      borrowRate
      cash
      collateralFactor
    }
  }
`;

const runQuery = async () => {
  try {
    const tokensData = await client.query({ query: GET_TOKENS });
    console.log('Tokens data:', tokensData.data);

    const marketsData = await client.query({ query: GET_MARKETS });
    console.log('Markets data:', marketsData.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

runQuery();