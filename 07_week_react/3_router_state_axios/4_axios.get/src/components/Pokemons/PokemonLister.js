import React from "react";
import { NavLink } from "react-router-dom";
import "./PokemonLister.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function PokemonLister({ pokemons }) {
  return (
    <ul className="list pokemons">
      {pokemons.map((pokemon, index) => (
        <li className="item" key={index}>
          <span>{pokemon.name}</span>
          <NavLink to={`/pokemon/${pokemon.name}`}>
            <FontAwesomeIcon icon={faEye} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
