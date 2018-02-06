import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import DashboardPage from "./Dashboard/DashboardPage";
import * as actions from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.getAllTags();
    this.props.getAllAssets();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Dashboard" component={DashboardPage} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ assets }) => ({ assets });

export default connect(mapStateToProps, actions)(App);
// in the props of app we can have access to the actions or the state
