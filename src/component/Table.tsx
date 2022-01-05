import React from 'react';

export interface TableProp{
  data: (number|string) [][]
}


export default function Table(props:TableProp) {
    const data = props.data;
    const listItems = data.map((row, rowIndex) => 
      <tr key={rowIndex.toString()}>
        {row.map((column, columnIndex)=>
        <td key={columnIndex}>{column}</td>
      )}
      </tr>
    );
    return (
      <div>
        <h2>React</h2>
        <table>
          <tbody>
          {listItems}
          </tbody>
        </table>
      </div>
    );
  }