import React, { Component } from "react";
import { connect } from "react-redux";
import { filter } from "lodash";
import * as actions from "../../actions";
import SearchBar from "../LandingPage/SearchBar";
import FilterOptions from "./FilterOptions";

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

  render() {
    let filteredAssets = filter(
      this.props.assets,
      asset =>
        asset.name
          .toLowerCase()
          .indexOf(
            (this.state.search.length != 0
              ? this.state.search
              : this.props.search.searchValue || ""
            ).toLowerCase()
          ) !== -1
    );

    return (
      <div>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch}
        />
        <ul className="tags-container">
          <FilterOptions tags={this.props.tags} />
          <CardDisplay assets={filteredAssets} end={"10"} />
        </ul>
      </div>
    );
  }
}
const mapStateToProps = ({ assets, tags, search }) => ({
  assets,
  tags,
  search
});
export default connect(mapStateToProps, actions)(DashboardPage);
