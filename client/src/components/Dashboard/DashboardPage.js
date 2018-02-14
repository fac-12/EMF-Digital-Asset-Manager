import React, { Component } from "react";
import { connect } from "react-redux";
import { filter } from "lodash";
import * as actions from "../../actions";
import FilterOptions from "./FilterOptions";
import { filterAssets } from "../../selectors/filters";
import CardDisplay from "../LandingPage/CardDisplay";

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  updateSearch = e => {
    this.setState({ search: e.target.value });
  };

  onFilter = e => {
    this.props.setFilter(e.target.id);
  };

  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-search-bar-container">
          <input
            className="dashboard-search-bar"
            type="text"
            value={this.state.search}
            onChange={this.updateSearch}
            placeholder="How can I be more..."
          />
        </div>
        <ul className="tags-container">
          <FilterOptions tags={this.props.tags} onClick={this.onFilter} />
        </ul>

        <ul className="dashboard-card-container">
          <CardDisplay assets={this.props.assets} end={"20"} />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  assets: filterAssets(state),
  tags: state.tags,
  search: state.search,
  subTags: state.subTags
});

export default connect(mapStateToProps, actions)(DashboardPage);
