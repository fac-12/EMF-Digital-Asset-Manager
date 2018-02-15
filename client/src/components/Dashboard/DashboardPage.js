import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import FilterOptions from "./FilterOptions";
import { filterAssets } from "../../selectors/filters";
import CardDisplay from "../LandingPage/CardDisplay";
import SearchBar from "../LandingPage/SearchBar";
class DashboardPage extends Component {
  onFilter = e => {
    this.props.setFilter(e.target.id);
  };

  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-search-bar-container">
          <SearchBar />
        </div>
        <ul className="tags-container">
          <FilterOptions tags={this.props.tags} onClick={this.onFilter} />
        </ul>

        <ul className="dashboard-card-container">
          <CardDisplay
            assets={this.props.assets}
            subtags={this.props.subTags}
            end={"20"}
          />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  assets: state.assets.length === 0 ? state.assets : filterAssets(state),
  tags: state.tags,
  searchTermFromLandingPage: state.searchTermFromLandingPage,
  subTags: state.subTags,
  filters: state.filters
});

export default connect(mapStateToProps, actions)(DashboardPage);
