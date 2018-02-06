import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SinglePageDisplay from "./SinglePage/SinglePageDisplay";
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
          {/* <Route exact path="/singlepage" component={SinglePageDisplay} /> */}
          <Route exact path="/" component={LandingPage} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ assets }) => ({ assets });

export default connect(mapStateToProps, actions)(App);
// in the props of app we can have access to the actions or the state
