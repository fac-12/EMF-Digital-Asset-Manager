import React, { Component } from "react";
import { connect } from "react-redux";
import CardDisplay from "../SinglePage/CardDisplay";
import * as actions from "../../actions";
import SearchBar from "./SearchBar";
import LandingPageInfo from "./LandingPageInfo";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-section">
        <div className="layer">
          <LandingPageInfo />
          <SearchBar placeholder="How can I be more..." />
          <ul className="card-container">
            <CardDisplay assets={this.props.assets} />
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ assets }) => ({ assets });
export default connect(mapStateToProps, actions)(LandingPage);
