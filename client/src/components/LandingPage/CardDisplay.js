import React from "react";
import { Link } from "react-router-dom";
import renderImage from "../../helper/fileImages";
import arrow from "../../images/arrow-button.svg";

export default ({ assets, end, subtags }) => {
  return Object.values(assets)
    .slice(0, end)
    .map(asset => {
      return (
        <li key={asset.id} className="cardTry">
          <Link to={`/Dashboard/${asset.id}`}>
            <section className="card">
              <div className="top">
                <span>
                  {asset.category
                    .filter((tag, i, arr) => arr.indexOf(tag) === i)
                    .map(tag => `${tag} `)}
                </span>
                {renderImage(asset)}
              </div>

              <div>
                <span>{asset.tag}</span>
                {/* <span>Subcategories{subtags.map(name => <li>{name}</li>)}</span> */}

                <div className="bottom">
                  <span>{asset.name}</span>
                  <img src={arrow} className="image2" />
                </div>
              </div>
            </section>
          </Link>
        </li>
      );
    });
};
