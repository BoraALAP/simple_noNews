import React from "react";
import styled from "styled-components";
import NewsCard from "../UI/NewsCard";

const H2 = styled.h2`
  
`

const Featured = props => {
  return (
    <div>
      <H2>Featured</H2>
      <NewsCard featured
        data={props.data}
      />
    </div>
  );
};

export default Featured;
