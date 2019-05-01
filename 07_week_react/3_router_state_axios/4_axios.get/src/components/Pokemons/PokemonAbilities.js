import React from "react";

const extractAbilityName = obj => obj.name;

export default function PokemonAbilities({ abilities }) {
  return (
    <ul className="list abilities">
      {abilities.map((o, index) => (
        <li key={index}>
          <span>{extractAbilityName(o.ability)}</span>
        </li>
      ))}
    </ul>
  );
}
