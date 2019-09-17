import React from 'react';
import './App.css';
import ApolloClient, {gql, InMemoryCache} from 'apollo-boost';
import fetch from 'unfetch';

const cache = new InMemoryCache();

const client = new ApolloClient({
    fetch,
    cache,
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    resolvers: {
        Query: {
            visibilityFilter: () => {
                return "SHOW_ALL";
            }
        }
    }
});

client.query({
    query: gql`
        {
            visibilityFilter @client
        }
    `
})
.then(result => console.log(JSON.stringify(result)));

function App() {
    return (
        <>
            <p>Check console f12.</p>
            <p>Chrome: {`{"data":{"visibilityFilter":"SHOW_ALL"},"loading":false,"networkStatus":7,"stale":false}`}</p>
            <p>IE10: <span style={{color: 'red'}}>{`Uncaught (in promise)Error: Network error: Object doesn't support property or method 'of'`}</span>
            </p>
            <p>IE11: {`{"data":{"visibilityFilter":"SHOW_ALL"},"loading":false,"networkStatus":7,"stale":false}`}</p>
        </>
    );
}

export default App;
