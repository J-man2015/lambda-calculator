import React from "react";

const Display = props => {
  return (
    <div className="display">
      <div className="display-text">{props.banana}</div>
    </div>
  );
};

export default Display;