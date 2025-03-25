import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import TransactionDetails from './components/TransactionDetails';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/transaction-details" component={TransactionDetails} />
        <Route path="/product-list" component={ProductList} />
      </Switch>
    </Router>
  );
};

export default App;