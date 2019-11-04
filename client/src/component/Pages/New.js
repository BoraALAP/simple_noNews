import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ImageContainer from "../UI/ImageContainer";
import Comments from "../Module/Comments";
import { OutButton } from "../UI/Button";

const Container = styled.div`
  padding: 68px 0px;
`;

const Content = styled.div`
  padding: 0px 24px;
`;

const BottomSection = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.color.accent};
  padding: 16px 0px;
`;

const New = props => {
  const [item, setItem] = useState({});
  const source = { ...item.source };
  const [time, setTime] = useState({
    year: "",
    month: "",
    day: ""
  });

  useEffect(() => {
    const func = async () => {
      setItem({ ...props.location.state });
      const date = await new Date(props.location.state.publishedAt);
      setTime({
        year: date.getFullYear().toString(),
        month: date.getMonth().toString(),
        day: date.getDate().toString()
      });
    };
    func();
  }, [props.location.state]);

  return (
    <Container>
      <ImageContainer url={item.urlToImage} />
      <Content>
        <h3>{item.title}</h3>
        <BottomSection>
          <small>{source.name}</small>
          <small>
            {time.day} - {time.month} - {time.year}
          </small>
        </BottomSection>
        <p>{item.content}</p>
        <OutButton link={item.url}>Go to Article</OutButton>
        <Comments id={item.url} />
      </Content>
    </Container>
  );
};

export default New;
