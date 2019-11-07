import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: grid;
`;
const Img = styled.div`
  height: 280px;
  width: 100%;
  background: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center center;
  margin-bottom: 24px;
`;

const Circle = styled.button`
  background: ${props => props.theme.color.bg};
  border-radius: 50%;
  padding: 1.25em;
  position: absolute;
  top: 324px;
  right: 24px;
  display: grid;
  justify-self: end;
  box-sizing: content-box;
  border: none;
  box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.2);
  &.active {
    background: ${props => props.theme.component.bg};
    .icon {
      fill: ${props => props.theme.component.type};
    }
  }
`;

const ImageContainer = props => {
  const [like, setLike] = useState(false);
  const likeIt = async () => {
    await setLike(!like);
    if (!like) {
      await axios.post("http://localhost:8000/api/likes", {
        id: props.id,
        title: props.title,
        published_date: props.published_date
      });
    } else {
      await axios.delete(`http://localhost:8000/api/likes/${props.id}`);
    }
  };

  useEffect(() => {
    const isItLiked = async () => {
      const res = await axios.get("http://localhost:8000/api/likes");
      const data = res.data;
      data.map(item => {
        if (item.id === props.id) {
          setLike(true);
        } 
      });
    };
    isItLiked();
  }, [props.id]);
  
  return (
    <Container>
      <Circle className={like ? "active" : null} onClick={likeIt}>
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="icon"
            d="M10 3.17963L9.28576 2.45075C8.40733 1.55432 7.18597 1 5.83333 1C3.16396 1 1 3.16396 1 5.83333C1 7.35301 1.70008 8.84472 2.80591 9.85139L2.84768 9.88941L2.8849 9.9319L9.54191 17.5303L16.6206 10.3241L16.6794 10.2642L16.7473 10.215C18.1015 9.2342 19 7.55536 19 5.83333C19 3.16396 16.836 1 14.1667 1C12.814 1 11.5927 1.55432 10.7142 2.45075L10 3.17963ZM10.2027 18.2846L9.5 19L8.83917 18.2457L2.13273 10.5909C0.830575 9.40547 0 7.65014 0 5.83333C0 2.61167 2.61167 0 5.83333 0C7.37993 0 8.78594 0.601883 9.82993 1.58419C9.88774 1.63859 9.94444 1.69416 10 1.75085C10.0556 1.69416 10.1123 1.63859 10.1701 1.58419C11.2141 0.601883 12.6201 0 14.1667 0C17.3883 0 20 2.61167 20 5.83333C20 7.88733 18.9384 9.86275 17.334 11.0249L10.2027 18.2846Z"
          />
        </svg>
      </Circle>
      <Img src={props.url} />
    </Container>
  );
};

export default ImageContainer;
