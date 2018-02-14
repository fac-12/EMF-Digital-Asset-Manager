import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import DashboardPage from "./Dashboard/DashboardPage";
import SinglePage from "./SinglePage/SinglePageDisplay";
import Header from "./Header";
import * as actions from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.getAllTags();
    this.props.getAllAssets();
    this.props.getAllSubTags();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Dashboard" component={DashboardPage} />
          <Route exact path="/Dashboard/:id" component={SinglePage} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ assets }) => ({ assets });

export default connect(mapStateToProps, actions)(App);
// in the props of app we can have access to the actions or the state
