import React, { Component } from "react";
import { connect } from "react-redux";
import fileImgs from "../../helper/fileImages";
// import pdf from "../../images/pdf.svg";

class SinglePageDisplay extends Component {
  render() {
    const { id } = this.props.match.params;
    const { assets } = this.props;

    if (!assets[id]) {
      return <div>loading</div>;
    }
  const { name,uploaded_at,last_edit_at,filetype,file,link,locations,tags } = assets[id];

  console.log(typeof fileImgs[filetype]);
    return (
      <div className="single-main-div">
        <div className="single-page-display">
        <div className="main-left-div">
          <div><h3>{name}</h3></div>
          <img className="img-container" src={fileImgs[filetype]}/>

        </div>

        <div className="main-right-div">
          <div className="top-right-div">
          <h3> Description</h3>
        {uploaded_at?(<div>Uploaded At:{(new Date(uploaded_at).toLocaleDateString())}</div>):null}
        {last_edit_at?(<div>Last Edited::{(new Date(last_edit_at).toLocaleDateString())}</div>):null}
        {link?(<div>Link To File:{link}</div>):null}
        {locations.length? locations.map(location => <div key={location}>{location}</div>):null}
      </div>

          <div className="bottom-right-div">
            <h3>Categories</h3>
            {tags.length? tags.map(tag => <span key={tag}>{tag}{" "}</span>):null}
          </div>
          {file ? (<a className="link-button" href={file} target="_blank">view </a>) : (<a href={link} target="_blank">view </a>) }
        </div>

      </div>
    </div>


    )
  }
}

const mapStateToProps = ({ assets }) => ({ assets });
export default connect(mapStateToProps)(SinglePageDisplay);
