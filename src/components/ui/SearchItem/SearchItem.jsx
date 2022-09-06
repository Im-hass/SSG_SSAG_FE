import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import './SearchItem.scss';

import { isOpenState } from '../../../recoil/states';

function SearchItem({ data }) {
  const navigate = useNavigate();
  const [, setIsOpen] = useRecoilState(isOpenState);
  const { word } = data;

  const handleSearchClose = () => {
    setIsOpen(false);
    navigate(`/search/${word}`);
  };

  return (
    <li key={word}>
      <button
        type="button"
        className="box search-word"
        onClick={handleSearchClose}
      >
        {word}
      </button>
      <button type="button" className="cgsearch_keyword_del">
        <span className="blind">삭제</span>
      </button>
    </li>
  );
}

export default SearchItem;
