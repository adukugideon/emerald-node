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
import Support from "./app/containers/SupportPage";
import Nft from "./app/containers/NFTPage";
import Liquidity from "./app/containers/LiquidityPage";
import RewardPage from "./app/containers/RewardPage";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    bg-gradient-to-t 
    from-gray-900 
    to-black 
    pb-20 
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
          <Route exact path="/support">
            <Support />
          </Route>
          <Route exact path="/nft">
            <Nft />
          </Route>
          <Route exact path="/liquidity">
            <Liquidity />
          </Route>
          <Route exact path="/reward">
            <RewardPage />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
