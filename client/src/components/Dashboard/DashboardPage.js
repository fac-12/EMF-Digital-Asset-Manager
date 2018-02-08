import React, { Component } from "react";
import { connect } from "react-redux";
import {  filter } from "lodash";
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
        asset.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
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
          {<CardDisplay assets={filteredAssets} end={"10"} />}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = ({ assets, tags }) => ({ assets, tags });
export default connect(mapStateToProps, actions)(DashboardPage);
