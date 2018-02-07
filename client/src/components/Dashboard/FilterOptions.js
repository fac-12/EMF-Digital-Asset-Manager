import React from "react";

export default ({ tags }) =>
  Object.values(tags).map(tag => (
    <li key={tag.id}>
      <h1>{tag.name}</h1>
    </li>
  ));
