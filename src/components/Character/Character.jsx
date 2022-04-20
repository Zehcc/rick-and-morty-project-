import React from "react";
import { Link } from "react-router-dom";

const Character = ({ character }) => {
  return (
    <Link to={`/characters/character${character.id}`}>
      <div className={character.species.toLowerCase().replace(" ", "")}>
        <img src={character.image} alt={character.name} />
        <p>{character.name}</p>
        <p>
          {character.status === "Alive"
            ? "💖"
            : character.status === "Dead"
            ? "💀"
            : "❓"}
        </p>
      </div>
    </Link>
  );
};

export default Character;
