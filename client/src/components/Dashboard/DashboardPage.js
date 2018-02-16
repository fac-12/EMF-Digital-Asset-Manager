import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import FilterOptions from "./FilterOptions";
import { filterAssets } from "../../selectors/filters";
import CardDisplay from "../LandingPage/CardDisplay";
import SearchBar from "../LandingPage/SearchBar";
class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "ALL"
    };
  }
  onFilter = e => {
    this.props.setFilter(e.target.id);
    this.setState({ selectedCategory: e.target.id });
  };

  renderTitle = () => {
    switch (this.props.filters) {
      case "ALL":
        return (
          <h1>
            {" "}
            {this.props.assets.length ? (
              <h1>
                {" "}
                {this.props.filters} ({this.props.assets.length})
              </h1>
            ) : (
              <h1>Loading...</h1>
            )}
          </h1>
        );
      case "BIOCYCLE":
        return (
          <h1>
            {this.props.assets.length ? (
              <h1>
                {" "}
                {this.props.filters} ({this.props.assets.length})
              </h1>
            ) : (
              <h1>
                No assets with the tag {this.props.filters} related to your
                search term {this.props.searchTermFromLandingPage.searchValue}
              </h1>
            )}
          </h1>
        );
      case "BUILT ENVIRONMENT":
        return (
          <h1>
            {this.props.assets.length ? (
              <h1>
                {" "}
                {this.props.filters} ({this.props.assets.length})
              </h1>
            ) : (
              <h1>
                No assets with the tag {this.props.filters} related to your
                search term {this.props.searchTermFromLandingPage.searchValue}
              </h1>
            )}
          </h1>
        );
      case "BUSINESS":
        return (
          <h1>
            {this.props.assets.length ? (
              <h1>
                {" "}
                {this.props.filters} ({this.props.assets.length})
              </h1>
            ) : (
              <h1>
                No assets with the tag {this.props.filters} related to your
                search term {this.props.searchTermFromLandingPage.searchValue}
              </h1>
            )}
          </h1>
        );

      case "DESIGN":
        return (
          <h1>
            {this.props.assets.length ? (
              <h1>
                {" "}
                {this.props.filters} ({this.props.assets.length})
              </h1>
            ) : (
              <h1>
                No assets with the tag {this.props.filters} related to your
                search term {this.props.searchTermFromLandingPage.searchValue}
              </h1>
            )}
          </h1>
        );

      case "ECONOMICS":
        return (
          <h1>
            {this.props.assets.length ? (
              <h1>
                {" "}
                {this.props.filters} ({this.props.assets.length})
              </h1>
            ) : (
              <h1>
                No assets with the tag {this.props.filters} related to your
                search term {this.props.searchTermFromLandingPage.searchValue}
              </h1>
            )}
          </h1>
        );

      case "EDUCATION (LEARNING)":
        return (
          <h1>
            {this.props.assets.length ? (
              <h1>
                {" "}
                {this.props.filters} ({this.props.assets.length})
              </h1>
            ) : (
              <h1>
                No assets with the tag {this.props.filters} related to your
                search term {this.props.searchTermFromLandingPage.searchValue}
              </h1>
            )}
          </h1>
        );

      case "ENERGY":
        return (
          <h1>
            {this.props.assets.length ? (
              <h1>
                {" "}
                {this.props.filters} ({this.props.assets.length})
              </h1>
            ) : (
              <h1>
                No assets with the tag {this.props.filters} related to your
                search term {this.props.searchTermFromLandingPage.searchValue}
              </h1>
            )}
          </h1>
        );

      case "FINANCE & LEGAL":
        return (
          <h1>
            {this.props.assets.length ? (
              <h1>
                {" "}
                {this.props.filters} ({this.props.assets.length})
              </h1>
            ) : (
              <h1>
                No assets with the tag {this.props.filters} related to your
                search term {this.props.searchTermFromLandingPage.searchValue}
              </h1>
            )}
          </h1>
        );

      case "GOVERNMENT":
        return (
          <h1>
            {this.props.assets.length ? (
              <h1>
                {" "}
                {this.props.filters} ({this.props.assets.length})
              </h1>
            ) : (
              <h1>
                No assets with the tag {this.props.filters} related to your
                search term {this.props.searchTermFromLandingPage.searchValue}
              </h1>
            )}
          </h1>
        );

      case "MANUFACTURING & ENGINEERING":
        return (
          <h1>
            {this.props.assets.length ? (
              <h1>
                {" "}
                {this.props.filters} ({this.props.assets.length})
              </h1>
            ) : (
              <h1>
                No assets with the tag {this.props.filters} related to your
                search term {this.props.searchTermFromLandingPage.searchValue}
              </h1>
            )}
          </h1>
        );

      case "MATERIALS":
        return (
          <h1>
            {this.props.assets.length ? (
              <h1>
                {" "}
                {this.props.filters} ({this.props.assets.length})
              </h1>
            ) : (
              <h1>
                No assets with the tag {this.props.filters} related to your
                search term {this.props.searchTermFromLandingPage.searchValue}
              </h1>
            )}
          </h1>
        );

      case "TECHNICAL CYCLE":
        return (
          <h1>
            {this.props.assets.length ? (
              <h1>
                {" "}
                {this.props.filters} ({this.props.assets.length})
              </h1>
            ) : (
              <h1>
                No assets with the tag {this.props.filters} related to your
                search term {this.props.searchTermFromLandingPage.searchValue}
              </h1>
            )}
          </h1>
        );

      case "TECHNOLOGY":
        return (
          <h1>
            {this.props.assets.length ? (
              <h1>
                {" "}
                {this.props.filters} ({this.props.assets.length})
              </h1>
            ) : (
              <h1>
                No assets with the tag {this.props.filters} related to your
                search term {this.props.searchTermFromLandingPage.searchValue}
              </h1>
            )}
          </h1>
        );

      default:
        return <h1> Loading </h1>;
    }
  };

  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-search-bar-container">
          <SearchBar />
        </div>
        <ul className="tags-container">
          <FilterOptions
            tags={this.props.tags}
            onClick={this.onFilter}
            selected={this.state.selectedCategory}
          />
        </ul>
        <div className="dashboard-assets-title">{this.renderTitle()}</div>

        <ul className="dashboard-card-container">
          <CardDisplay
            assets={this.props.assets}
            subtags={this.props.subTags}
            end={"154"}
          />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  assets: state.assets.length === 0 ? state.assets : filterAssets(state),
  tags: state.tags,
  searchTermFromLandingPage: state.searchTermFromLandingPage,
  subTags: state.subTags,
  filters: state.filters
});

export default connect(mapStateToProps, actions)(DashboardPage);
