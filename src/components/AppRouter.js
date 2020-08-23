import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { TopBar } from "./TopBar";
import { HomeScreen } from "../components/HomeScreen";
import { MostWatched } from "./MostWatched/MostWatched";
import { TopFans } from "./TopFans";
import { WatchNow } from "./WatchNow";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <TopBar />

        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen} />

            <Route exact path="/mostwatched" component={MostWatched} />
            <Route exact path="/topfans" component={TopFans} />
            <Route exact path="/watchnow" component={WatchNow} />

            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
