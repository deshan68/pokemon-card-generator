import React from "react";
import PokemanCard from "./PokemanCard";
import PokemonSelection from "./PokemonSelection";

function Home() {
  return (
    <div>
      <PokemonSelection />
      <PokemanCard />
    </div>
  );
}

export default Home;
