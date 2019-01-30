import React from "react";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
