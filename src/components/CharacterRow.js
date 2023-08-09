const CharacterRow = ({ character, index }) => {
  return (
    <tr key={index}>
      <td>
        <b>ID: </b>
        {character.id}
      </td>
      <td>
        <b>Name: </b>
        {character.name}
      </td>
      <td>
        <b>Status: </b>
        {character.status}
      </td>
      <td>
        <b>Species: </b> {character.species}
      </td>
    </tr>
  );
};
export default CharacterRow;
