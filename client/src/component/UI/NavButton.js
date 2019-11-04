import React from "react";
import styled from "styled-components";
import IconContainer from "./IconContainer";
import { Link } from 'react-router-dom';

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

const NavButton = ( props ) => {
  return (
    <Button
      className={props.show ? "menu_active" : ""}
      onClick={props.handleClick}
      name={props.name}
    >
      <Link to={props.link}>
      <IconContainer
        icon={props.icon}
        alt={props.alt}
        active={props.show}
      />
      <div className="line" />
      </Link>
    </Button>
  );
};

export default NavButton;
