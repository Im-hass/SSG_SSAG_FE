import React from 'react';
import { OptionCheckInput } from '../index';

function OptionCheckInputArr(props) {
  const { array } = props;

  return (
    <>
      {array.map((item) => (
        <li key={item.id}>
          <OptionCheckInput array={item} />
        </li>
      ))}
    </>
  );
}

export default OptionCheckInputArr;
