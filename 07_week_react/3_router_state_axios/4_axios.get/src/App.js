import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Pokemons from "./components/Pokemons/PokemonManager";
import Pokemon from "./components/Pokemons/PokemonDetails";
import NavMain from "./components/NavMain/NavMain";
// import Fake from "./components/FakeComp";

export default function App() {
  return (
    <React.Fragment>
      <NavMain />
      <main id="main_content">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Pokemons} />
          <Route path="/pokemon/*" component={Pokemon} />
        </Switch>
      </main>
    </React.Fragment>
  );
}
