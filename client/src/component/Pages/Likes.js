import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../UI/NewsCard";
import styled from "styled-components";

const Container = styled.main`
  margin: 96px 0px 48px; 
  padding 24px;
`;

const Likes = props => {
  const [likes, setLikes] = useState([]);
  const [selected, setSelected] = useState({})
  useEffect(() => {
    const func = async () => {
      const res = await axios.get("http://localhost:8000/api/likes");
      setLikes(res.data.reverse());
    };
    func();
  }, []);

  return (
    <Container>
      <h2>Likes</h2>
      {likes.map((like, index) => (
        <NewsCard data={like} key={index}/>
      ))}
    </Container>
  );
};

export default Likes;
