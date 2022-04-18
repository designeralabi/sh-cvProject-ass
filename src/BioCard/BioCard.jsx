import React from "react";
const bioCard = (props) => {
  return (
    <div>
      <h1>{props.bioHeader}</h1>
      <p>{props.bioInfo}</p>
    </div>
  );
};

export default bioCard;
