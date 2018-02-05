import React, { Component } from "react";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import CardDisplay from "./CardDisplay";
import * as actions from "../../actions";

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CardDisplay assets={this.props.assets} />
      </div>
    );
  }
}
const mapStateToProps = ({ assets }) => ({ assets });
export default connect(mapStateToProps, actions)(LandingPage);
