import "../components/Pokeman.css";
import Select from "react-select";
import { useEffect, useState } from "react";
import PokemanCard from "./PokemanCard";

function PokemonSelection({ pokemonList, isLoading }) {
  const [options, setOptions] = useState([]);
  const [aPokemon, setAPokemon] = useState([]);

  useEffect(() => {
    setOptions(
      pokemonList?.map((item) => {
        return { value: item.name, label: item.name, url: item.url };
      })
    );
  }, [isLoading]);
  return (
    <div>
      <Select
        className="pokemon-selection"
        options={options}
        isLoading={isLoading}
        isSearchable
        onChange={(e) => setAPokemon([e.value, e.url])}
      />
      <PokemanCard pokemonList={pokemonList} aPokemon={aPokemon} />
    </div>
  );
}

export default PokemonSelection;
