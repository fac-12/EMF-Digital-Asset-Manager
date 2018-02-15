import React, { Component } from "react";
import { connect } from "react-redux";
import renderImage from "../../helper/fileImages";

class SinglePageDisplay extends Component {
  render() {
    const { id } = this.props.match.params;
    const { assets, subTags } = this.props;

    if (!assets[id]) {
      return <div>loading</div>;
    }
    const {
      name,
      uploaded_at,
      last_edit_at,
      filetype,
      file,
      link,
      locations,
      tags
    } = assets[id];

    return (
      <div className="single-main-div">
        <div className="single-page-display">
          <div className="main-left-div">
            <div>
              <h3>{name}</h3>
            </div>
            <div className="img-single">{renderImage({ filetype })}</div>
          </div>

          <div className="main-right-div">
            <div className="top-right-div">
              <h3> Description</h3>
              {uploaded_at ? (
                <div>
                  Uploaded At:{new Date(uploaded_at).toLocaleDateString()}
                </div>
              ) : null}
              {last_edit_at ? (
                <div>
                  Last Edited:{new Date(last_edit_at).toLocaleDateString()}
                </div>
              ) : null}
              {link ? (
                <div>
                  Link To File:<a className="single-link" href={link}>
                    {link}
                  </a>
                </div>
              ) : null}
              {locations.length
                ? locations.map(location => (
                  <div key={location}>{location}</div>
                ))
                : null}
            </div>

            <div className="bottom-right-div">
              <h3>Categories</h3>
              {tags.length
                ? tags.slice(0, 3).map(tag => (
                  <span className="cat-tag" key={tag}>
                    {subTags[tag].name}{" "}
                  </span>
                ))
                : null}
            </div>
            <div className="btn-container">
              {file ? (
                <a className="link-button" href={file} target="_blank">
                  view{" "}
                </a>
              ) : (
                <a className="link-button" href={link} target="_blank">
                  view{" "}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ assets, subTags }) => ({ assets, subTags });
export default connect(mapStateToProps)(SinglePageDisplay);
