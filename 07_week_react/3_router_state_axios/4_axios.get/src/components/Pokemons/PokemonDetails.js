import React, { Component } from "react";
import { getPokemon } from "./PokemonAPIHandler";
import Abilities from "./PokemonAbilities";
import Gallery from "./ImageGallery";
import "./PokemonDetails.css";

export default class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      slug: this.props.match.url
    };
    this.fetchPokemon();
  }

  fetchPokemon() {
    getPokemon(this.state.slug)
      .then(res => {
        // console.log("res", res);
        // console.log("res", Object.values(res.data.sprites));
        this.setState({ pokemon: res.data });
      })
      .catch(error => console.log(error));
  }
  render() {
    const { pokemon } = this.state;
    return (
      <article className="pokemon">
        <header className="header">
          <h1 className="title">{pokemon.name}</h1>
          {pokemon.sprite && (
            <img src={pokemon.sprites.front_default} alt={"yo"} />
          )}
        </header>
        <hr />
        <p>Base exp: {pokemon.base_experience}</p>
        <p>
          height: {pokemon.height}
          <br />
          weight: {pokemon.weight}
        </p>
        {pokemon.abilities && <Abilities abilities={pokemon.abilities} />}
        {pokemon.sprites && <Gallery images={Object.values(pokemon.sprites)} /> }
      </article>
    );
  }
}
