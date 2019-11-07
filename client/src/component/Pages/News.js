import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Featured from "../Module/Featured";
import NewsCard from "../UI/NewsCard";
import { Context } from "../../data/store";

const Container = styled.main`
  margin: 70px 0px; 
  padding 24px;
`;

const News = props => {
  const { store } = useContext(Context);
  const [topNews, setTopNews] = useState({});
  const [news, setNews] = useState([]);

  // const REACT_APP_NEWSAPIKEY = "4eea0958bd6f43dda118acc084c7b357";
  // const url = "https://newsapi.org/v2/";
  // const sources = "google-news-ca";

  // const url = "https://hacker-news.firebaseio.com"
  // const looking = '/v0/newstories'

  // const newsAppId = "7839361d-fa21-43eb-bf4d-aa68d4c97eee"
  const newsAPIKey = "1UidCRZ84hAhrOJACuu1PPs4lQzQsda5";
  // const newsSecret = "ZV3xACwjGBlsERDm"
  // const category = "world"
  const url = `https://api.nytimes.com/svc/topstories/v2/${store.category}.json?api-key=`;

  const findcode = string => {
    var n = string.split("/");
    return n[n.length - 1]
  };

  useEffect(() => {
    const getTop = async () => { 
      const fetchNews = await axios.get(
        // `${url}top-headlines?sources=${sources}&apiKey=${REACT_APP_NEWSAPIKEY}&pageSize=1`
        // `${url}${looking}`,
        `${url}${newsAPIKey}`
      );
      const data = await fetchNews.data.results[0];
      await setTopNews({ id: findcode(data.short_url), ...data });
    };
  
    const getNews = async () => {
      const fetchNews = await axios.get(
        // `${url}top-headlines?sources=${sources}&apiKey=${REACT_APP_NEWSAPIKEY}&pageSize=20`
        // `${url}${looking}`
        `${url}${newsAPIKey}`
      );
      const data = await [...fetchNews.data.results];
      const arr = data.shift();
      const result = await data.map(item => {
        return { id: findcode(item.short_url), ...item };
      });
      await setNews([...result]);
    };
    getTop();
    getNews();
  }, [url]);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

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
