import React from "react";
//routing
import { BrowserRouter, Switch, Route } from "react-router-dom";
//components
import Header from "./components/Header/index";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
//styles
import { GlobalStyle } from "./GlobalStyle";
const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:movieId" component={Movie} />
      <Route exact path="/*" component={NotFound} />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
