import React, { Component } from "react";
import { getPokemons } from "./PokemonAPIHandler";
import Lister from "./PokemonLister";

export default class PokemonDisplayer extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
    };
    this.fetchPokemons();
  }

  fetchPokemons() {
    getPokemons()
      .then(res => this.setState({ pokemons: res.data.results }))
      .catch(error => console.log(error));
  }

  render() {
    const {pokemons} = this.state;
    return (
      <div>
        <Lister pokemons={pokemons}></Lister>
      </div>
    );
  }
}
