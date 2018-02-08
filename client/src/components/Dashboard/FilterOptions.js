import React from "react";

export default ({ tags }) =>
  Object.values(tags)
    .slice(0, 6)
    .map(tag => (
      <li key={tag.id}>
        <h1>{tag.name}</h1>
      </li>
    ));
