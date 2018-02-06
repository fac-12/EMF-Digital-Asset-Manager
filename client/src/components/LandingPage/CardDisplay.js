import React from "react";
import "../../styles";
import arrowButton from "../../images/arrow-button.svg";


export default ({ assets }) =>

  Object.values(assets).slice(0,4).map(asset => (
    <li key={asset.id}>
      <div className="group-div">
        <img src="" />
          <hr />
        <span>{asset.name}</span>
        <a href="">
          <img src={arrowButton} />
        </a>
      </div>
    </li>
  ));
