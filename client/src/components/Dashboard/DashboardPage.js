import React, { Component } from "react";
import { connect } from "react-redux";
import { sortBy, mapValues } from "lodash";
import * as actions from "../../actions";
import SearchBar from "../LandingPage/SearchBar";
import FilterOptions from "./FilterOptions";
import { Title } from "../../styles";

class DashboardPage extends Component {
  render() {
    const tags = mapValues(this.props.tags, o => o.name);
    const tagNames = Object.values(tags);
    console.log(tagNames.sort());
    return (
      <div>
        <SearchBar />
        <ul className="tags-container">
          <FilterOptions tags={this.props.tags} />
        </ul>
      </div>
    );
  }
}
const mapStateToProps = ({ assets, tags }) => ({ assets, tags });
export default connect(mapStateToProps, actions)(DashboardPage);
