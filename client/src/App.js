import React from 'react';
// add these two library import statements
import { ApolloProvider } from '@apollo/react-hooks'; //special type of react component that we'll use to provide data
import ApolloClient from 'apollo-boost'; //to get that data whenwe're ready to use it
//browserrouter and route are components that react library provides
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

//establish connection to GraphQL
//this will retrieve the token before each request
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');
//setcontext used to set HTTP deaders of every request to include bearer
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/thought/:id" component={SingleThought} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
