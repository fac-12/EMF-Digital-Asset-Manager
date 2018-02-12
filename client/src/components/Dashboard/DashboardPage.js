import React, { Component } from "react";
import { connect } from "react-redux";
import { filter } from "lodash";
import * as actions from "../../actions";
import FilterOptions from "./FilterOptions";
import { Link } from "react-router-dom";

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      localAssets: ""
    };
    this.addingCategoryToSubtags = this.addingCategoryToSubtags.bind(this);
    this.addingCategoryToAsset = this.addingCategoryToAsset.bind(this);
  }

  updateSearch = e => {
    this.setState({ search: e.target.value });
  };

  addingCategoryToSubtags(subTags, groupTag) {
    return subTags.map(elemSubTags =>
      Object.assign(elemSubTags, {
        category: groupTag.filter(
          elemGroupTags => elemSubTags.group === elemGroupTags.id
        )[0].name
      })
    );
  }

  addingCategoryToAsset(assets, subTags) {
    return assets.map(
      asset =>
        asset.tags.length > 0
          ? Object.assign(asset, {
              Category: subTags
                .filter(subTagElem => asset.tags.includes(subTagElem.id))
                .reduce((acc, cur) => acc.concat(cur.category), [])
            })
          : {}
    );
  }

  componentDidMount() {
    const localAssets = this.addingCategoryToAsset(
      Array.from(this.props.assets),
      this.addingCategoryToSubtags(
        Array.from(this.props.subTags),
        Array.from(this.props.tags)
      )
    );
  }

  render() {
    const { tags, subTags, assets } = this.props;
    console.log(
      this.addingCategoryToAsset(
        Array.from(this.props.assets),
        this.addingCategoryToSubtags(
          Array.from(this.props.subTags),
          Array.from(this.props.tags)
        )
      )
    );
    let filteredAssets = filter(
      this.props.assets,
      asset =>
        asset.name
          .toLowerCase()
          .indexOf(
            (this.state.search.length !== 0
              ? this.state.search
              : this.props.search.searchValue || ""
            ).toLowerCase()
          ) !== -1
    );

    return (
      <div className="dashboard-container">
        <div className="dashboard-search-bar-container">
          <input
            className="dashboard-search-bar"
            type="text"
            value={this.state.search}
            onChange={this.updateSearch}
            placeholder="How can I be more..."
          />
        </div>
        <ul className="tags-container">
          <FilterOptions tags={this.props.tags} />
        </ul>

        <ul className="dashboard-card-container">
          {Object.values(filteredAssets)
            .slice(0, 20)
            .map(asset => {
              return (
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
                              <li className="red">{subTags[tag].name}</li>
                            </span>
                          ))
                        : null}
                    </section>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ assets, tags, search, subTags }) => ({
  assets,
  tags,
  subTags,
  search
});
export default connect(mapStateToProps, actions)(DashboardPage);
