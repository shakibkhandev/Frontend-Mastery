import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App.jsx'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
