import React from "react";

import styled from "styled-components";

const Style = styled.button`
  padding: 1em 1.5em;
  background: ${props => props.theme.component.bg};
  color: ${props => props.theme.component.type};
  box-shadow: ${props => props.theme.boxshadow};
  font-weight: 600;
  border-radius: 4px;
  border: none;
  display: grid;
  margin: 8px auto;
  width: 100%;
  box-sizing: border-box;
`;

export const Submit = props => {
  return (
    <Style type="submit" value={props.text}>
      {props.text}
    </Style>
  );
};

export const Button = props => {
  return <Style onClick={props.onClick}>{props.children}</Style>;
};

export const OutButton = props => {
  return (
    <a href={props.link} rel="noopener noreferrer" target="_blank">
      <Style>{props.children}</Style>
    </a>
  );
};
