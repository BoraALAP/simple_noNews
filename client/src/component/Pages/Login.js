import React, { useState, useContext } from "react";
import styled from "styled-components";

import base from "../../data/base";
import { Context } from "../../data/store";

import firebase from "firebase/app";
import "firebase/firestore";

import TextField from "@material-ui/core/TextField";
import { Button } from "../UI/Button";

const Container = styled.main`
  margin: 70px 0px; 
  padding 24px;
  background-color: ${props => props.theme.color.bg};
  display: grid;
  grid-gap: 1.5em;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 0.875em;
`;

const Login = props => {
  const { dispatch } = useContext(Context);

  const [info, setInfo] = useState({ email: "", password: "", result: "" });

  const updateUser = user => {
    setInfo({ ...info, result: "" });
    dispatch({ type: "SIGN_IN", id: user.user.uid });
    props.history.push("/");
  };

  const handleChange = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    base
      .auth()
      .signInWithEmailAndPassword(info.email, info.password)
      .then(u => {
        updateUser(u);
      })
      .catch(error => {
        setInfo({ ...info, result: error.message });
      });
  };

  const handleGoogle = e => {
    e.preventDefault();
    const google = new firebase.auth.GoogleAuthProvider();

    base
      .auth()
      .signInWithPopup(google)
      .then(u => {
        updateUser(u);
      })
      .catch(function(error) {
        setInfo({ ...info, result: error.message });
      });
  };

  return (
    <Container>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="standard-email"
          label="email"
          name="email"
          value={info.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          id="standard-password"
          label="password"
          name="password"
          value={info.password}
          type="password"
          onChange={handleChange}
          margin="normal"
        />
        <Button variant="contained">Sign-in</Button>
      </Form>

      {info.error !== "" && <p>{info.result}</p>}

      <p> Or </p>

      <Button variant="contained" onClick={handleGoogle}>
        Sign-in with Google
      </Button>
    </Container>
  );
};

export default Login;
