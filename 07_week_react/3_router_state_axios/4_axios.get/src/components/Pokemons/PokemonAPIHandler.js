import axios from "axios";

const getPokemons = (limit, offset) => axios.get("http://pokeapi.co/api/v2/pokemon/");

const getPokemon = (slug) => axios.get(`http://pokeapi.co/api/v2${slug}`);

export {getPokemons};
export {getPokemon};