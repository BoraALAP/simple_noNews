import React from "react";
import styled from "styled-components";

const Icon = styled.img`
  max-height: 1.25em;
  max-width: 1.25em;
  display: grid;

  &.active {
    filter: brightness(0.8) drop-shadow(2px 2px 2px 0, 0, 0, 0.2);
    transform: scale(1.15);
  }
`;

const IconContainer = props => {
  return (
    <Icon
      src={props.icon}
      alt={props.alt}
      className={props.active ? "active" : ""}
    />
  );
};

export default IconContainer;
