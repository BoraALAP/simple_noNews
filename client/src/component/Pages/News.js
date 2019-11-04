import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import uuid from "uuid";

import Featured from "../Module/Featured";
import NewsCard from "../UI/NewsCard";

const Container = styled.main`
  margin: 70px 0px; 
  padding 24px;
`;

const apiKey = "4eea0958bd6f43dda118acc084c7b357";
const url = "https://newsapi.org/v2/";
const sources = "=google-news-ca";

const News = props => {
  const [topNews, setTopNews] = useState({});
  const [news, setNews] = useState([]);

  const getTop = async () => {
    const fetchNews = await axios.get(
      `${url}top-headlines?sources${sources}&apiKey=${apiKey}&pageSize=1`
    );
    const data = await fetchNews.data.articles[0];
    await setTopNews({ id: uuid.v4(), ...data });
  };

  const getNews = async () => {
    const fetchNews = await axios.get(
      `${url}top-headlines?sources${sources}&apiKey=${apiKey}&pageSize=20`
    );
    const data = await [...fetchNews.data.articles];
    const arr = data.shift()
    const result = await data.map(item => {
      return { id: uuid.v4(), ...item };
    });
    await setNews([...result]);
  };

  useEffect(() => {
    getTop();
    getNews();    
  }, []);

  return (
    <Container>
      <Featured data={topNews} />
      {news.map((newsitem, index) => (
        <NewsCard data={newsitem} key={index} />
      ))}
    </Container>
  );
};

export default News;
