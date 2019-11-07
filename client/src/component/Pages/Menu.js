import React from "react";

import PopupsContainer from "./PopupsContainer"; 

const Menu = (props) => {
  return (
    <PopupsContainer show={props.active}>
      <h2>Menu</h2>
    </PopupsContainer> 
  );
};

export default Menu;