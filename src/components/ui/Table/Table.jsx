/* eslint-disable react/no-array-index-key */
import React from 'react';
// import { TableRow } from '../index';

function Table(props) {
  const { caption, colgroup, thead, tbody } = props;

  return (
    <table>
      <caption>
        <span className="blind">{caption}</span>
      </caption>
      <colgroup>
        {colgroup.map((col, i) => (
          <col key={`col-${i}`} style={{ width: `${col}` }} />
        ))}
      </colgroup>
      {thead !== undefined && (
        <thead>
          <tr>
            {thead.map((th, i) => (
              <th scope="col" key={`th-${i}`}>
                <span className="in">{th}</span>
              </th>
            ))}
          </tr>
        </thead>
      )}
      {tbody[0].length === undefined ? (
        <tbody>
          {tbody.map((row, id) => (
            <tr key={`tr-${id}`}>
              {row.items.map((item, i) => (
                <td key={`td-${i}`}>
                  <span className="in">{item}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody>
          <tr>
            {tbody.map((item, i) => (
              <td key={`tbody-${i}`}>
                <span className="in">{item}</span>
              </td>
            ))}
          </tr>
        </tbody>
      )}
    </table>
  );
}

export default Table;
