import React, { useReducer, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import "firebase/auth";
import "firebase/firestore";
import firebase from "./data/base";

import { ThemeProvider } from "styled-components";

import Header from "./component/Header";
import Navigation from "./component/Navigation";
import News from "./component/Pages/News";
import Login from "./component/Pages/Login";
import New from "./component/Pages/New";
import Popups from "./component/Pop-ups";

import { initialState, Context, appReducer } from "./data/store";
import { LightTheme, DarkTheme } from "./styles/Themes";
import GlobalStyle from "./styles/Global";
import Search from "./component/Pages/Search";
import Category from "./component/Pages/Category";
import Likes from "./component/Pages/Likes";

function App() {
  const [store, dispatch] = useReducer(appReducer, initialState);
  const [activePopup, setActivePopup] = useState({})

  const auth = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // console.log(user);
      } else {
        // console.log("no user");
      }
    });
  };

  const data = () => {
    firebase
      .firestore()
      .collection("users")
      .get()
      .then(data => {
        // data.forEach(doc => console.log(`${doc.id}`));
      });
  };

  const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
      <Route
        {...rest}
        render={props =>
          store.sign ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
  };

  useEffect(() => {
    auth();
    data();
    
  }, []);

  const handlePopup = (e) => {
    setActivePopup(e.currentTarget.getAttribute('name'))
  }


  return (
    <Router>
      <Context.Provider value={{ store, dispatch }}>
        <ThemeProvider theme={store.darkMode ? DarkTheme : LightTheme}>
          <div className="App">
            <GlobalStyle />
            <Header />
            <Switch>
              <Route path="/" render={props => store.sign ? <News /> : <Login />} exact />
              <Route path="/login" component={Login} exact/>
              <Route path="/category" component={Category} exact/>
              <Route path="/likes" component={Likes} exact/>
              <Route path="/search" component={Search} exact/>
              <Route path="/news/:id" component={New} />
              <Route path="/news" component={News} />
              
            </Switch>
            <Navigation clicks={handlePopup}/>
            <Popups active={activePopup}/>
          </div>
        </ThemeProvider>
      </Context.Provider>
    </Router>
  );
}

export default App;
