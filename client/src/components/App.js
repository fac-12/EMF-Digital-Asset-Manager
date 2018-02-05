import React, { Component} from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import * as actions from "../actions";


class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Route path="/" component={LandingPage} />
      </BrowserRouter>
    )
  }
}


export default connect(null,actions)(App);
//in the props of app we can have access to the actions or the state
