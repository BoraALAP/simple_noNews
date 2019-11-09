import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Context } from "../../data/store";
import { Button } from "../UI/Button";

const Container = styled.main`
  margin: 96px 0px 48px; 
  padding 24px;
`;

const Category = props => {
  const { dispatch } = useContext(Context);

  const categories = [
    "arts",
    "automobiles",
    "books",
    "business",
    "fashion",
    "food",
    "health",
    "home",
    "insider",
    "magazine",
    "movies",
    "national",
    "nyregion",
    "obituaries",
    "opinion",
    "politics",
    "realestate",
    "science",
    "sports",
    "sundayreview",
    "technology",
    "theater",
    "tmagazine",
    "travel",
    "upshot",
    "world"
  ];

  return (
    <Container>
      <h2>Categories:</h2>
      {categories.map((category, index) => (
        <Link to="/news" key={index}>
        <Button key={index} onClick={() => dispatch({
          type: "UPDATE_CATEGORY",
          value: category
        })}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Button>
        </Link>
      ))}
    </Container>
  );
};

export default Category;
