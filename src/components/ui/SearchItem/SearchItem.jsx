import React from 'react';

function SearchItem({ data }) {
  const { to, word } = data;

  return (
    <li key={word}>
      <a
        // href="javascript:srch.mdl.submit({word},'')"
        href={to}
        className="box"
      >
        {word}
      </a>
      <button
        type="button"
        // onClick="javascript:srch.mdl.auto.del(4);"
        onClick=""
        className="cgsearch_keyword_del"
      >
        <span className="blind">삭제</span>
      </button>
    </li>
  );
}

export default SearchItem;
