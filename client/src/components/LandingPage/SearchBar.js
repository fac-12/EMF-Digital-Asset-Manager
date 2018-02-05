import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {} from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    thins.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    //  Ask Mo what is action called
    //  this.props
    this.props;
    this.setState({ term: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="">
        <input
          placeHolder="Enter the word you want ot search by"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="">
          <button type="submit" className="">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
