import React from 'react'

import Search from "./Pages/Search";
import Likes from "./Pages/Likes";
import Category from "./Pages/Category";
import Menu from "./Pages/Menu"; 

const Popups = (props) => {
  return (
    <div>
      <Search active={props.active === "search" ? true : false} />
      <Likes active={props.active === "likes" ? true : false}  />
      <Category active={props.active === "category" ? true : false}  /> 
      <Menu active={props.active === "menu" ? true : false}  />
    </div>
  )
}

export default Popups
