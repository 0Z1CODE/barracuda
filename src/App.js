import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
// import * as actions from "./store/user/actions";
// Import Routes
// import { authProtectedRoutes, publicRoutes } from "./routes/";
import HomePage from "./pages/HomePage";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userAuthHash: null,
    };
  }

  render() {

    return (
      <React.Fragment>
        <Router>
          <Switch>
            <HomePage/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}


export default App
