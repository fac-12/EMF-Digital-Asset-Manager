import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions";
import SearchBar from "./SearchBar";
import LandingPageInfo from "./LandingPageInfo";

class LandingPage extends Component {
  render() {
    const { tags, assets, subTags } = this.props;
    return (
      <div className="landing-section">
        <div className="layer">
          <LandingPageInfo />
          <SearchBar placeholder="How can I be more..." />
          <ul className="card-container">
            {Object.values(assets)
              .slice(0, 4)
              .map(asset => (
                <li key={asset.id}>
                  <Link to={`/Dashboard/${asset.id}`}>
                    <section className="card">
                      <img src="" />
                      <div>
                        <span>{asset.name}</span>
                        <img src="" />
                      </div>
                      <br />
                      {asset.tags.length
                        ? asset.tags.slice(0, 3).map(tag => (
                          <span key={tag}>
                            {" "}
                            <li className="red">{subTags[tag].name}</li>{" "}
                            <li>{tags[subTags[tag].group].name}</li>
                          </span>
                        ))
                        : null}
                    </section>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ assets, tags, subTags }) => ({
  assets,
  tags,
  subTags
});
export default connect(mapStateToProps, actions)(LandingPage);
