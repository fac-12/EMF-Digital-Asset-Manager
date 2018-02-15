import React, { Component } from "react";
import { connect } from "react-redux";
import CardDisplay from "./CardDisplay";
import * as actions from "../../actions";
import SearchBar from "./SearchBar";
import LandingPageInfo from "./LandingPageInfo";
import { filterAssets } from "../../selectors/filters";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-section">
        <div className="layer">
          <LandingPageInfo />
          <SearchBar placeholder="How can I be more..." />
          {this.props.assets ? (
            <h2 className="subTags">Latest Assets</h2>
          ) : null}
          <ul className="card-container">
            <CardDisplay
              assets={this.props.assets}
              subtags={this.props.subTags}
              end={4}
            />
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  assets: state.assets.length === 0 ? state.assets : filterAssets(state),
  subTags: state.subTags
});
export default connect(mapStateToProps, actions)(LandingPage);
