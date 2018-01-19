import React from 'react';
import {render} from 'react-dom';
// Hook up Apollo-Client
import {
    ApolloClient,
    InMemoryCache,
    HttpLink
} from 'apollo-client-preset';
import {ApolloProvider} from 'react-apollo';

import App from './app';

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:8000/graphql'}),
    cache: new InMemoryCache()
});



render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
    document.getElementById('root'));