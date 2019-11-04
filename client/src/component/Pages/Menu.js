import React from "react";

import PopupsContainer from "./PopupsContainer"; 

const Menu = (props) => {
  return (
    <PopupsContainer show={props.active}>
      <h1>Menu</h1>
    </PopupsContainer> 
  );
};

export default Menu;