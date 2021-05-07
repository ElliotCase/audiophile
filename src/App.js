import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./scss/App.scss";

//import components
import Home from "./components/home/Home";
import HeadPhones from "./components/categories/Headphones/Headphones";
import Speakers from "./components/categories/Speakers/Speakers";
import Earphones from "./components/categories/Earphones/Earphones";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories/headphones" component={HeadPhones} />
        <Route path="/categories/speakers" component={Speakers} />
        <Route path="/categories/earphones" component={Earphones} />
      </Switch>
    </div>
  );
}

export default App;
