import logo from "./logo.svg";
import React from "react";
import Mycomponent from "./excample/Mycomponent";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./navigation/Nav";
import Home from "./excample/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Mycomponent from "./excample/Mycomponents"; // để sử dụng component.js thì cần improt
import ListTodos from "./todos/ListTodos";
import ListUser from "./users/ListUser";
import DetailUser from "./users/DetailUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          {/* <a
          className="App-link"
          href="https://www.facebook.com/profile.php?id=100030925532732"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook
        </a> */}
          {/* <Home /> */}
          {/* <ListTodos /> */}
          {/* <Mycomponent /> */}

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodos />
            </Route>
            <Route path="/about">
              <Mycomponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
          {/* // react Router */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
