import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 24px;
  box-shadow: ${props => props.theme.boxshadow};
  border-bottom: 3px solid ${props => props.theme.color.accent};
  margin-bottom: 24px;
  border-radius: ${props => props.theme.radius};
`;

const Img = styled.div`
  height: 120px;
  width: 100%;
  background: ${props => `url(${props.source})`};
  background-size: cover;
  background-position: center center;
  margin-bottom:16px;
`;

const BottomSection = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`;

const NewsCard = props => {
  const data = { ...props.data };
  const imgContainer = { ...data.multimedia };
  const image = {...imgContainer[3]}

  const source = {...data.geo_facet}
  
  const [time, setTime] = useState({
    year: "",
    month: "",
    day: ""
  });

  useEffect(() => {
    const func = async () => {
      const date = await new Date(props.data.published_date);
      setTime({
        year: date.getFullYear().toString(),
        month: date.getMonth().toString(),
        day: date.getDate().toString()
      });
    };
    func();
  }, [props.data]);

  return (
    <Link
      to={{
        pathname: `news/${data.id}`,
        state: { ...data }
      }}
    >
      <Container>
        {props.featured && <Img source={image.url} />}
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <BottomSection>
          <small>{source[0]}</small>
          <small>
            {time.day} - {time.month} - {time.year}
          </small>
        </BottomSection>
      </Container>
    </Link>
  );
};

export default NewsCard;
