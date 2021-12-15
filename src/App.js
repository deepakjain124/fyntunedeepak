import React from "react";

import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/fotter";
import Header from "./components/header";
import Addexpense from "./pages/addexpense";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/addexpense" component={Addexpense} />
        </Switch>
        <Footer />
      </Router>{" "}
    </>
  );
};
export default App;
