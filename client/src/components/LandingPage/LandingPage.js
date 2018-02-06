import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CardDisplay from "./CardDisplay";
import * as actions from "../../actions";

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ""
    };
  }

  onValueSearch = value => {
    this.setState({ searchValue: value });
  };

  submitSearch = e => {
    e.preventDefault();
  };

  onChange = e => {
    this.onValueSearch(e.currentTarget.value);
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.searchValue}
            onChange={this.onChange}
            placeholder="How Can I be More..."
            className="search-input"
          />
          <input type="submit" value="submit" onClick={this.submitSearch} />
        </div>

        <CardDisplay assets={this.props.assets} />
      </div>
    );
  }
}
const mapStateToProps = ({ assets }) => ({ assets });
export default connect(mapStateToProps, actions)(LandingPage);
