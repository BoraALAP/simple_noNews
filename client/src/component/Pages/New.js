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
  const source = { ...item.geo_facet };
  const [id, setId] = useState({});
  const [time, setTime] = useState({
    year: "",
    month: "",
    day: ""
  });
  const imageUrl = { ...item.multimedia };
  const img = { ...imageUrl[4] };

  const findcode = string => {
    var n = string.split("/");
    setId(n[n.length - 1]);
  };

  useEffect(() => {
    const string = item.short_url;
    if (string !== undefined) {
      findcode(string);
    }
  }, [item]);

  useEffect(() => {
    const func = async () => {
      setItem({ ...props.location.state });
      const date = await new Date(props.location.state.published_date);
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
      <ImageContainer
        url={img.url}
        id={id}
        published_date={item.published_date}
        title={item.title}
      />
      <Content>
        <h3>{item.title}</h3>
        <BottomSection>
          <small>{source[0]}</small>
          <small>
            {time.day} - {time.month} - {time.year}
          </small>
        </BottomSection>
        <p>{item.abstract}</p>
        <OutButton link={`https://nyti.ms/${id}`}>Go to Article</OutButton>
        <Comments id={id} />
      </Content>
    </Container>
  );
};

export default New;
