import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isOpenState, searchValueState } from '../../../recoil/states';
import './SearchInput.scss';

function SearchInput() {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);

  const handleOpenSearch = (action) =>
    action === 'open' ? setIsOpen(true) : setIsOpen(false);

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    setIsOpen(false);
  };

  return (
    <div className="header-util">
      <div className="search-box">
        {isOpen && (
          <form className="search-form">
            <input
              className="open-search-input"
              name="search-input"
              type="text"
              placeholder="검색어를 입력하세요."
              onChange={handleSearchInput}
              defaultValue={searchValue !== '' ? searchValue : ''}
            />
            <Link
              className="search-btn"
              to={`/search/${searchValue}`}
              onClick={handleSearch}
            >
              <i className="search-icon" />
            </Link>
          </form>
        )}

        {!isOpen && (
          <div className="not-open-search-input-wrap">
            <div className="search-input-box">
              <input
                className="not-open-search-input"
                type="text"
                onFocus={() => handleOpenSearch('open')}
                defaultValue={searchValue !== '' ? searchValue : ''}
              />
              <button className="search-btn" type="button">
                <i className="search-icon" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
