import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.setState({ term: "" });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input value={this.state.term} onChange={this.onInputChange} />
        <span>
          <button type="submit"> submit </button>
        </span>
      </form>
    );
  }
}

const mapStateToProps = ({ assets, tags }) => ({ assets, tags });

export default connect(mapStateToProps, actions)(SearchBar);
