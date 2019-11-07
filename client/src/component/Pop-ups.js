import React from 'react'

import Search from "./Pages/Search";
import Menu from "./Pages/Menu"; 

const Popups = (props) => {
  return (
    <div>
      <Search active={props.active === "search" ? true : false} />
      <Menu active={props.active === "menu" ? true : false}  />
    </div>
  )
}

export default Popups
