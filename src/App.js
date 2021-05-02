import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scss/App.scss";
//import components
import Home from "./components/Home";
import HeadPhones from "./components/categories/Headphones";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categories/headphones" component={HeadPhones} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
