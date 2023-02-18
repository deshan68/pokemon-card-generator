import "../components/Pokeman.css";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function PokemonSelection() {
  return (
    <div>
      <Select className="pokemon-selection" options={options} />
    </div>
  );
}

export default PokemonSelection;
