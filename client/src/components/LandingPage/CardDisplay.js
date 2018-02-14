import React from "react";
import { Link } from "react-router-dom";
import renderImage from "../../helper/fileImages"

export default ({ assets, end }) => {
  return Object.values(assets)
    .slice(0, end)
    .map(asset =>{
      return (
      <li key={asset.id}>
        <Link to={`/Dashboard/${asset.id}`}>
          <section className="card">
        <div>
            {renderImage(asset)}
        </div>
            <span>{asset.tag}</span>
            <div>
              <span>{asset.name}</span>
              <img src="" />
            </div>
          </section>
        </Link>
      </li>
    )});
};
