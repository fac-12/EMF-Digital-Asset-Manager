import React, { Component } from "react";
import { connect } from "react-redux";

class SinglePageDisplay extends Component {
  render() {
    const { id } = this.props.match.params;
    const { assets } = this.props;
    if (!assets[id]) {
      return <div>loading</div>;
    }
    return <div>{assets[id].name}</div>;
  }
}

const mapStateToProps = ({ assets }) => ({ assets });
export default connect(mapStateToProps)(SinglePageDisplay);
