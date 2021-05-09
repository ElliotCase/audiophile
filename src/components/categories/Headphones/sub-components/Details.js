import React from "react";
import Detail from "./Detail";

function Details({ whichState, noOfGrids }) {
  return (
    <div className={`details details_grids ${noOfGrids}`}>
      {whichState.map(({ id, image, title, heading, description, path }) => (
        <Detail
          key={id}
          id={id}
          image={image}
          title={title}
          heading={heading}
          description={description}
          path={path}
        />
      ))}
    </div>
  );
}

export default Details;
