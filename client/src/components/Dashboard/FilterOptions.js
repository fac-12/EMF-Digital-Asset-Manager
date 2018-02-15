import React, { Component } from "react";
import { mapValues } from "lodash";
import { v4 } from "uuid";
import { connect } from "react-redux";
import * as actions from "../../actions";

export default class FilterOptions extends Component {
  displayCategory = (tags, onClick, selected) => {
    let tagNames = Object.values(mapValues(tags, o => o.name)).sort();

    tagNames.unshift("ALL");

    return tagNames.map(tag => {
      return (
        <button
          key={v4()}
          id={tag}
          className={selected === tag ? "filter-selected" : "filter-tag"}
          onClick={onClick}
        >
          {tag}
        </button>
      );
    });
  };

  render() {
    const { tags, onClick, selected } = this.props;

    return <li>{this.displayCategory(tags, onClick, selected)}</li>;
  }
}
