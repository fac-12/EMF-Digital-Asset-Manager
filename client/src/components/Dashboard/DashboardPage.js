import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class LandingPage extends Component {
  render() {
    return <div>anything</div>;
  }
}
const mapStateToProps = ({ assets }) => ({ assets });
export default connect(mapStateToProps, actions)(LandingPage);
