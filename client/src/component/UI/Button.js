import React from 'react'
import styled from 'styled-components'


const Style = styled.button`
    padding: 1em 1.5em;
    background: ${props => props.theme.component.bg};
    color:${props => props.theme.component.type};
    box-shadow: ${props => props.theme.boxshadow};
    border-radius: 4px;
    border: none;
  `;


export const Submit = (props) => {
  return (
    <Style type='submit'
      value={props.text}>{props.text}
    </Style>
  )
}

export const Button = (props) => {
  return (
    <Style>
      {props.children}
    </Style>
  )
}

export const OutButton = (props) => {
  return (
    <a href={props.link} rel="noopener noreferrer" target="_blank"><Style>
      {props.children}
    </Style></a>
  )
}



