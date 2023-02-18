import React, { useEffect, useState } from "react";
import "../components/Pokeman.css";

function PokemanCard({ aPokemon }) {
  const [pokeDetails, setPokeDetails] = useState();
  const [isLoading, setIsloading] = useState(false);

  const getPokemonDetails = async () => {
    try {
      setIsloading(true);
      const response = await fetch(aPokemon?.[1]);
      const data = await response?.json();
      setPokeDetails([
        {
          name: data.name,
          height: data.height,
          weight: data.weight,
          url: data.sprites.front_default,
          types: data.types,
        },
      ]);
      console.log(pokeDetails);
      setIsloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPokemonDetails();
  }, [aPokemon]);
  return (
    <div className="pokeman-card-main">
      {pokeDetails ? (
        <>
          <div className="title-div">
            <span>{pokeDetails[0].name}</span>
          </div>

          <div className="img-div">
            <img src={pokeDetails[0].url} alt="poke" height={200} width={200} />
          </div>

          <div className="sub-details-div">
            <p>Height : {pokeDetails[0].height}</p>
            <p>Width : {pokeDetails[0].weight} </p>
            <p>
              Types : {pokeDetails[0].types?.[0].type.name}
              {"  "} {pokeDetails[0].types?.[1]?.type.name}
            </p>
          </div>
        </>
      ) : (
        <p>Select POKEMON</p>
      )}
    </div>
  );
}

export default PokemanCard;
