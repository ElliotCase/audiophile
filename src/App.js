import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./scss/App.scss";

//import components

//categories
import Home from "./components/home/Home";
import HeadPhones from "./components/categories/Headphones/Headphones";
import Speakers from "./components/categories/Speakers/Speakers";
import Earphones from "./components/categories/Earphones/Earphones";
//products
import xx99_mark_i from "./components/products/Headphones/XX99_Mark_I";
import xx99_mark_ii from "./components/products/Headphones/XX99_Mark_II";
import xx59 from "./components/products/Headphones/XX59";
import zx9 from "./components/products/Speakers/ZX9";
import zx7 from "./components/products/Speakers/ZX7";
import yx1 from "./components/products/Earphones/YX1";

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
        <Route
          path="/products/headphones/xx99-mark-i"
          component={xx99_mark_i}
        />
        <Route
          path="/products/headphones/xx99-mark-ii"
          component={xx99_mark_ii}
        />
        <Route path="/products/headphones/xx59" component={xx59} />
        <Route path="/products/speakers/zx9" component={zx9} />
        <Route path="/products/speakers/zx7" component={zx7} />
        <Route path="/products/earphones/yx1" component={yx1} />
      </Switch>
    </div>
  );
}

export default App;
