import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const Button = styled.button`
  padding: 0.75em;
  cursor: pointer;
  .line {
    height: 3px;
    width: 16px;
    bottom: 0;
    background-color: ${props => props.theme.color.accent};
    position: absolute;

    display: none;
  }

  &.menu_active {
    .line {
      display: grid;
    }
  }
`;

const Icon = styled.div`
  max-height: 1.25em;
  max-width: 1.25em;
  display: grid;

  &.active {
    filter: brightness(0.8) drop-shadow(2px 2px 2px 0, 0, 0, 0.2);
    transform: scale(1.15);
  }
`;

const NavButton = props => {
  return (
    <Button
      className={props.show ? "menu_active" : ""}
      onClick={props.handleClick}
      name={props.name}
    >
      <NavLink to={props.to} activeClassName="selected">
        <Icon alt={props.alt} active={props.show}>
          {props.children}
        </Icon>
        <div className="line" />
      </NavLink>
    </Button>
  );
};

export default NavButton;
