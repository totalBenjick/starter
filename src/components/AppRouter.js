import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { TopBar } from "./TopBar";
import { HomeScreen } from "../components/HomeScreen";
import { MostWatched } from "./MostWatched/MostWatched";
import { TopFans } from "./TopFans/TopFans";
import { Trending } from "./Trending";
import { Loader } from "./Loader/Loader";
import { UserContext } from "../context/UserContext";
import { SingleView } from "./SingleView/SingleView";
import { MyList } from "./MyList/MyList";

export const AppRouter = () => {
  const { loading } = useContext(UserContext);
  console.log(loading);
  return (
    <Router>
      <div>
        <TopBar />

        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen} />

            <Route exact path="/mostwatched" component={MostWatched} />
            <Route exact path="/topfans" component={TopFans} />
            <Route exact path="/trending" component={Trending} />
            <Route exact path="/favorites" component={MyList} />
            <Route path="/tv/:id" component={SingleView} />

            <Redirect to="/" />
          </Switch>
        </div>
        {loading && <Loader />}
      </div>
    </Router>
  );
};
