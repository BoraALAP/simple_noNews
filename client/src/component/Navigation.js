import React from "react";
import styled from "styled-components";


// import * as firebase from "firebase/app";

import SearchIcon from "../assets/nav/SearchIcon";
import NewsIcon from "../assets/nav/NewsIcon";
import ProfileIcon from "../assets/nav/ProfileIcon";
import CategoryIcon from "../assets/nav/CategoryIcon";
import LikesIcon from "../assets/nav/LikesIcon";
import NavButton from "./UI/NavButton";

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

  // const handleLogout = () =>
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(e => {
  //       dispatch({ type: "SIGN_OUT" });
  //       console.log("signout");
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });

  return (
    <Nav>
      <NavButton to="/search">
        <SearchIcon class="navIcon"/>
      </NavButton>
      <NavButton to="/category">
        <CategoryIcon class="navIcon" />
      </NavButton>
      <NavButton to="/news">
        <NewsIcon class="navIcon" />
      </NavButton>
      <NavButton to="/likes">
        <LikesIcon class="navIcon" />
      </NavButton>
      <NavButton to="/menu">
        <ProfileIcon class="navIcon" />
      </NavButton>
    </Nav>
  );
};

export default Navigation;
