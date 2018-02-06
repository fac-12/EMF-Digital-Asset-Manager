import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CardDisplay from "./CardDisplay";
import * as actions from "../../actions";
import SearchBar from "./SearchBar";

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar />
        <CardDisplay assets={this.props.assets} />
      </div>
    );
  }
}
const mapStateToProps = ({ assets }) => ({ assets });
export default connect(mapStateToProps, actions)(LandingPage);
