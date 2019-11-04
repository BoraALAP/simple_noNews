import React from "react";

import PopupsContainer from "./PopupsContainer"; 

const Likes = (props) => {
  return (
    <PopupsContainer show={props.active}>
      <h1>Likes</h1>
    </PopupsContainer>
  );
};

export default Likes;
