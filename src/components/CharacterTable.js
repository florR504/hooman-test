import CharacterRow from "./CharacterRow";
import styles from "../styles/CharacterTable.module.css";
const CharacterTable = ({ characters }) => {
  return (
    <table className={styles.table}>
      <tbody className={styles.tbody}>
        {characters.map((character, index) => (
          <CharacterRow
            character={character}
            index={index}
            key={character.id}
          />
        ))}
      </tbody>
    </table>
  );
};
export default CharacterTable;
