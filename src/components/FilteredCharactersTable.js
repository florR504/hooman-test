import CharacterTable from "./CharacterTable";
import SpeciesSelection from "./SpeciesSelection";
import React, { useState } from "react";

const FilteredCharacterTable = ({ characters }) => {
  const [selectedSpecies, setSelectedSpecies] = useState(undefined);

  const handleSpecies = (specie) => {
    setSelectedSpecies(specie);
  };

  let filteredBySpecies = characters;

  if (selectedSpecies) {
    filteredBySpecies = characters.filter(
      (character) => character.species === selectedSpecies
    );
  }

  return (
    <>
      <SpeciesSelection
        selectedSpecies={selectedSpecies}
        selectSpecies={handleSpecies}
      ></SpeciesSelection>
      <CharacterTable characters={filteredBySpecies} />
    
    </>
  );
};
export default FilteredCharacterTable;
