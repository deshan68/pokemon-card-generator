import React, { useEffect, useState } from "react";
import PokemonSelection from "./PokemonSelection";

function Home() {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=150";
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const getList = async () => {
    setIsloading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setPokemonList(data.results);
      setIsloading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <PokemonSelection pokemonList={pokemonList} isLoading={isLoading} />
    </div>
  );
}

export default Home;
