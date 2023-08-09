import styles from "../styles/SpeciesSelection.module.css";

const SpeciesSelection = ({ selectedSpecies, selectSpecies }) => {
  const specieSelector = (event) => {
    console.log("especie: " + event.target.value);
    selectSpecies(event.target.value);
  };
  return (
    <>
      <div className={styles.specieFilter}>
        <div className={styles.specieFilterControl}>
          <label className={styles.label}>SELECT A SPECIE:  </label>
          <select value={selectedSpecies} onChange={specieSelector} className={styles.select}>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="">All Species</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default SpeciesSelection;
