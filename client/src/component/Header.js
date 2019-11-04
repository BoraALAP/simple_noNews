import React,{useContext} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Context } from "../data/store";


const HeaderStyle = styled.header` 
  width: 100%;
  display:grid;
  position:fixed;
  top:0;
  grid-auto-flow: column;
  justify-content:left;
  align-items: baseline;
  grid-gap: 8px
  padding:16px 24px;
  z-index:10;
  box-shadow: ${props => props.theme.boxshadow};
  background-color:${props => props.theme.color.bg};
  justify-content: space-between;
  box-sizing: border-box;
`;

const Header = () => {
  const {store, dispatch} = useContext(Context)

  const toggleChecked = () => {
    dispatch({type:'DARK_MODE'})
  };

  return (
    <HeaderStyle>
      <Link to={"/"}>
        <h1>NONEWS</h1>
        <h6>WITH SOME NEWS</h6>
      </Link>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={store.darkMode} onChange={toggleChecked} />}
          label="Dark"
        />
      </FormGroup>
    </HeaderStyle>
  );
};

export default Header;
