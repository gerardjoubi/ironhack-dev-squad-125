import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import NavMain from "./partials/NavMain";
import Footer from "./partials/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Page404 from "./pages/Page404";

export default  function App() {
  return (
    <React.Fragment>
      <header id="header_main">
        <NavMain />
      </header>
      <main id="main_content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="*" component={Page404} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}
