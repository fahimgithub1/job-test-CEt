

export default function TableRowComponnent({id,name,selecor,agrwee}) {

  return (
        <tr>
          <td >
            {name}
          </td>
          <td>{selecor}</td>
          <td >{agrwee}</td>
        </tr>
  );
}
