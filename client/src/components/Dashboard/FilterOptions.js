import React from "react";
import { mapValues } from "lodash";
import { v4 } from "uuid";

export default ({ tags }) => {
  const tagNames = Object.values(mapValues(tags, o => o.name)).sort();

  return tagNames.slice(0, 6).map(tag => (
    <li key={v4()}>
      <h1>{tag}</h1>
    </li>
  ));
};
