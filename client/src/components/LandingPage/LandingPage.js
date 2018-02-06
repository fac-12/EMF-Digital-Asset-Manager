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
        <SearchBar placeholder="How can I be more..." />
        <ul className="card-container">
          <CardDisplay assets={this.props.assets} />
        </ul>
      </div>
    );
  }
}
const mapStateToProps = ({ assets }) => ({ assets });
export default connect(mapStateToProps, actions)(LandingPage);
