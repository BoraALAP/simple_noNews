import React, { useReducer } from "react";
import uuid from "uuid";
import newsContext from "./newsContext";
import newsReducer from "./newsReducer";

import { LIKE_NEWS } from "../types";

const NewsState = props => {
  const initialState = {};

  const [state, dispatch] = useReducer(newsReducer, initialState);

  const like_news = id => {
    dispatch({ type: LIKE_NEWS, payload: id });
  };
  return (
    <newsContext.Provider
      value={{
        like_news
      }}
    >
      {props.children}
    </newsContext.Provider>
  );
};

export default NewsState;
