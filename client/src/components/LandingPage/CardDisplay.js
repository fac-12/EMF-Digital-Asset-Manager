import React from "react";
import { Link } from "react-router-dom";
import renderImage from "../../helper/fileImages";
import arrow from "../../images/arrow-button.svg";
import _ from "lodash";
import { v4 } from "uuid";

export default ({ assets, end, subtags }) => Object.values(assets)
  .slice(0, end)
  .map(asset => (
    <li key={asset.id} className="cardTry">
      <Link to={`/Dashboard/${asset.id}`}>
        <section className="card">
          <div className="top">
            <span>
              <ul className="tags-card">
                {asset.tags.slice(0, 3).map(tag => (
                  <li key={v4()}>
                    {subtags[tag].name}
                    {` `}
                  </li>
                ))}
              </ul>
            </span>
            {renderImage(asset)}
          </div>

          <div>
            <div className="bottom">
              <span>{asset.name}</span>
              <img src={arrow} className="image2" />
            </div>
          </div>
        </section>
      </Link>
    </li>
  ));
