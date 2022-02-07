import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "./App.css";
import { HomePage } from "./app/containers/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./app/components/navbar";
import Nodes from "./app/containers/Nodes";
import Mining from "./app/containers/Mining";
import Ethereum from "./app/containers/CreateNode/Ethereum";
import Polygon from "./app/containers/CreateNode/Polygon";
import Sentinel from "./app/containers/CreateNode/Sentinel";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    bg-gradient-to-t 
    from-gray-900 
    to-black 
    pb-12 
    overflow-hidden
  `};
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/nodes">
            <Nodes />
          </Route>
          <Route exact path="/mining">
            <Mining />
          </Route>
          <Route exact path="/create">
            <Ethereum />
          </Route>
          <Route exact path="/create/polygon">
            <Polygon />
          </Route>
          <Route exact path="/create/sentinel">
            <Sentinel />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
