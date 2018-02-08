import React from "react";
import { Link } from "react-router-dom";
export default ({ assets, end }) => {
  return Object.values(assets)
    .slice(0, end)
    .map(asset => (
      <li key={asset.id}>
        <Link to={`/Dashboard/${asset.id}`}>
          <section className="card">
            <img src="" />
            <span>{asset.tag}</span>
            <div>
              <span>{asset.name}</span>
              <img src="" />
            </div>
          </section>
        </Link>
      </li>
    ));
};
