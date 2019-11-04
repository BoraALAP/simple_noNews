import React, { useContext } from "react";
import styled from "styled-components";

import { Context } from "../data/store";
import * as firebase from "firebase/app";

import NavButton from "./UI/NavButton";
import categoryIcon from "../assets/nav/category.svg";
import likesIcon from "../assets/nav/likes.svg";
import newsIcon from "../assets/nav/news.svg";
import menuIcon from "../assets/nav/profile.svg";
import searchIcon from "../assets/nav/search.svg";

const Nav = styled.nav`
  display: grid;
  position: fixed;
  bottom: 0;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(30px, auto));
  justify-items: center;
  padding: 10px 10px;
  align-items: center;
  box-sizing: border-box;
  z-index: 1000;
  box-shadow: ${props => props.theme.boxshadow};
  background-color: ${props => props.theme.color.bg};
`;

const Navigation = props => {
  const { store, dispatch } = useContext(Context);

  const handleLogout = () =>
    firebase
      .auth()
      .signOut()
      .then(e => {
        dispatch({ type: "SIGN_OUT" });
        console.log("signout");
      })
      .catch(function(error) {
        console.log(error);
      });

  const handleActivate = e => {
    
  };

  const MenuItems = [
    {
      name: "search",
      link: "/search",
      alt: "search icon",
      icon: searchIcon,
      active: store.menuItem.search.active,
      onClick: handleActivate
    },
    {
      name: "category",
      link: "/category",
      alt: "category icon",
      icon: categoryIcon,
      active: store.menuItem.category.active,
      onClick: handleActivate
    },
    {
      name: "news",
      link: "/news",
      alt: "news icon",
      icon: newsIcon,
      active: store.menuItem.news.active,
      onClick: handleActivate
    },
    {
      name: "likes",
      link: "/likes",
      alt: "likes icon",
      icon: likesIcon,
      active: store.menuItem.likes.active,
      onClick: handleActivate
    },
    {
      name: "menu",
      link: "/menu",
      alt: "menu icon",
      icon: menuIcon, 
      active: store.menuItem.menu.active,
      onClick: handleLogout
    }
  ];

  return (
    <Nav>
      {MenuItems.map((item, index) => (
        <NavButton
          name={item.name}
          link={item.link}
          key={index}
          icon={item.icon}
          alt={item.alt}
          show={item.active}
          handleClick={item.onClick}
        />
      ))}
    </Nav>
  );
};

export default Navigation;
