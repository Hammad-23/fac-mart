import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Landing from '../screens/landing'
import LogIn from '../screens/login'
import ProductView from '../screens/productview'
import SignUp from '../screens/signup'
import Shop from '../screens/shop'
import Checkout from '../screens/checkout'

export default function Routerr() {
  return (
    <Router>
      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/checkout">
            <Checkout/>
          </Route>
        <Route path="/shop">
            <Shop/>
          </Route>
        <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/productview">
            <ProductView/>
          </Route>
          <Route path="/login">
           <LogIn/>
          </Route>
          <Route path="/">
           <Landing/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}