import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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
    this.props.storeValueFromLandingPage(this.state.term, () => {
      this.props.history.push("/Dashboard");
    });
    this.setState({ term: "" });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="search-container">
        <input
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder={
            this.props.searchTermFromLandingPage.searchValue
              ? this.props.searchTermFromLandingPage.searchValue
              : "How can I be..."
          }
          className="search-bar"
        />
        <span>
          <button type="submit" className="submit-btn">
            Go
          </button>
        </span>
      </form>
    );
  }
}

const mapStateToProps = ({ assets, tags, searchTermFromLandingPage }) => ({
  assets,
  tags,
  searchTermFromLandingPage
});

export default withRouter(connect(mapStateToProps, actions)(SearchBar));
