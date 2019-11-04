import React from "react";
import styled from "styled-components";
import IconContainer from "./IconContainer";
import heartIcon from "../../assets/heart.svg";

const Container = styled.div`
  display: grid;
`;
const Img = styled.div`
  height: 120px;
  width: 100%;
  background: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center center;
`;

const Circle = styled.button`
  background: ${props => props.theme.color.bg};
  border-radius: 50%;
  padding: 1.25em;
  position: absolute;
  top: 164px;
  right: 24px;
  display: grid;
  justify-self: end;
  box-sizing: content-box;
  border: none;
  box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.2);
`;

const ImageContainer = props => {
  return (
    <Container>
      <Circle>
        <IconContainer icon={heartIcon} alt="like the news" />
      </Circle>
      <Img src={props.url} />
    </Container>
  );
};

export default ImageContainer;
