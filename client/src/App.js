import React from 'react';
// add these two library import statements
import { ApolloProvider } from '@apollo/react-hooks'; //special type of react component that we'll use to provide data
import ApolloClient from 'apollo-boost'; //to get that data whenwe're ready to use it

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

//establish connection to GraphQL
const client = new ApolloClient({
  uri: '/graphql'
});
// const client = new ApolloClient({
//   uri: 'http://localhost:3002/graphql'
// });
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
