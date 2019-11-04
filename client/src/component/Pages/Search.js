import React from "react";
import PopupsContainer from "./PopupsContainer"; 

const Search = (props) => {
  return (
    <PopupsContainer show={props.active}>
      <h1>Search</h1>
    </PopupsContainer> 
  );
};

export default Search;