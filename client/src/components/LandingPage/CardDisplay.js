import React from "react";
import "../../styles";
import arrowButton from "../../images/arrow-button.svg";


export default ({ assets }) => {
  return Object.values(assets).slice(0,4).map(asset => (

      <li key={asset.id}>

        <img src="" />
      

        <span>{asset.name}</span>
        <a href="">
          <img src={arrowButton} />
        </a>

    </li>

  ));
};
