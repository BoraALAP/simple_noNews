import React from "react";
import NewsCard from "../UI/NewsCard";


const Featured = props => {
  return (
    <div>
      <h2>Featured</h2>
      <NewsCard featured
        data={props.data}
      />
    </div>
  );
};

export default Featured;
