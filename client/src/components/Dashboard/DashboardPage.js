import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class DashboardPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>anything</div>;
  }
}
const mapStateToProps = ({ assets }) => ({ assets });
export default connect(mapStateToProps, actions)(DashboardPage);
