import React from "react";
import { Link } from "react-router-dom";

exports.CardDisplay = ({ assets }) => {
  return Object.values(assets).map(asset => {
    return (
      <li key={asset.id}>
        <img src="" />
        <span>{asset.tag}</span>
        <div>
          <span>{asset.name}</span>
          <Link>
            <img src="" />
          </Link>
        </div>
      </li>
    );
  });
};
