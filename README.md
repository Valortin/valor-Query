### README.md

# Graph Apollo Client Repository

This repository contains a Node.js application that queries a subgraph deployed on The Graph using Apollo Client.

## Setup

1. Clone the repository:
   ```sh
   git clone url-of-repo
   graph-apollo-client-repo.git
   cd graph-apollo-client-repo
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Update the `API_URL` variable in `index.js` with your API key and subgraph ID:
   ```javascript
   const API_URL = 'https://gateway.thegraph.com/api/<API_KEY>/subgraphs/id/<SUBGRAPH_ID>';
   ```

4. Run the script:
   ```sh
   node index.js
   ```

## Dependencies

- `@apollo/client`: Apollo Client for making GraphQL queries.
- `graphql`: A reference implementation of GraphQL for JavaScript.
- `node-fetch`: A lightweight module that brings `window.fetch` to Node.js.

## Example Queries

This repository includes example queries to fetch token data and market data.

### Get Tokens

Fetches token ID, symbol, name, and decimals.

### Get Markets

Fetches market data including borrow rate, cash, and collateral factor.


### Conclusion

This configuration offers a Node.js application that uses Apollo Client to query a subgraph on The Graph. This method makes use of Apollo Client's features to enable more complex data processing and GraphQL querying.


