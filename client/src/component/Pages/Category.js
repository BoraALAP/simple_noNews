import React, { useContext } from "react";
import styled from "styled-components";
import PopupsContainer from "./PopupsContainer";

import { Context } from "../../data/store";

const Button = styled.button`
  width: 100%;
  padding: 16px 24px;
`;

const Category = props => {
  const { dispatch } = useContext(Context);

  const categories = ["Science", "Finance", "Technology", "Politics", "Stock"];

  return (
    <PopupsContainer show={props.active}>
      <h1>Categories:</h1>
      {categories.map((category, index) => (
        <Button
          key={index}
          onClick={e => {
            dispatch({
              type: "UPDATE_CATEGORY",
              value: e.currentTarget.textContent.toLowerCase()
            });
          }}
        >
          {category}
        </Button>
      ))}
    </PopupsContainer>
  );
};

export default Category;
