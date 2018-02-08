import React, { Component } from "react";
import { connect } from "react-redux";
import fileImages from "../../helper/fileImages";
var link = require('../../images/left-arrow.png');
class SinglePageDisplay extends Component {
  render() {
    const { id } = this.props.match.params;
    const { assets } = this.props;

    if (!assets[id]) {
      return <div>loading</div>;
    }
  const { name,uploaded_at,last_edit_at,filetype,file,link,locations,tags } = assets[id];
  console.log(typeof fileImages[filetype]);
    return (
      <div>
        <div>
          <div>Name:{name}</div>
          <img src={link}/>

        </div>

        <div>
          <h3> Description</h3>
        {uploaded_at?(<div>Uploaded At:{uploaded_at}</div>):null}
        {last_edit_at?(<div>Last Edited:{last_edit_at}</div>): null}
        {link?(<div>Link To File:{link}</div>):null}
        {locations.length? locations.map(location => <div key={location}>{location}</div>):null}
      </div>
          <div>
            <h3>Categories</h3>
            {tags.length? tags.map(tag => <span key={tag}>{tag}{" "}</span>):null}
          </div>
            <a href={file} target="_blank">view </a>
        </div>
    )
  }
}

const mapStateToProps = ({ assets }) => ({ assets });
export default connect(mapStateToProps)(SinglePageDisplay);
