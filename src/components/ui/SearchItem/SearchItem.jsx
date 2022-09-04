import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isOpenState } from '../../../recoil/states';

function SearchItem({ data }) {
  const [setIsOpen] = useRecoilState(isOpenState);
  const { word } = data;

  const handleSearchClose = () => {
    setIsOpen(false);
  };

  return (
    <li key={word}>
      <Link to={`/search/${word}`} className="box" onClick={handleSearchClose}>
        {word}
      </Link>
      <button type="button" className="cgsearch_keyword_del">
        <span className="blind">삭제</span>
      </button>
    </li>
  );
}

export default SearchItem;
