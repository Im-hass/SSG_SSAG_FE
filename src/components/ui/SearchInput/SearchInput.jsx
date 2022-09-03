import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SearchInput.scss';

function SearchInput({
  value,
  isOpen,
  setIsOpen,
  searchValue,
  setSearchValue,
}) {
  const navigate = useNavigate();

  const handleSearchShow = (action) =>
    action === 'open' ? setIsOpen(true) : setIsOpen(false);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsOpen(false);
      if (searchValue.length !== 0) {
        navigate(`/search/${searchValue}`);
      } else {
        navigate(`/search/%20`);
      }
    }
  };

  return (
    <div className="header-util">
      <div className="search-box">
        {isOpen && (
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              className="open-search-input"
              name="search-input"
              type="text"
              defaultValue={searchValue !== '' ? searchValue : ''}
              placeholder="검색어를 입력하세요."
              onChange={handleInputChange}
              onKeyPress={handleSubmit}
            />
            <Link
              className="search-btn"
              to={`/search/${searchValue}`}
              onClick={() => {
                handleSearchShow('close');
              }}
              type="button"
            >
              <i className="search-icon" />
            </Link>
          </form>
        )}

        {!isOpen && (
          <div className="not-open-search-input-wrap">
            <div className="search-input-box">
              <form>
                <input
                  className="not-open-search-input"
                  type="text"
                  onFocus={() => handleSearchShow('open')}
                  defaultValue={searchValue !== '' ? value : ''}
                />
                <button
                  type="button"
                  onClick={() => {
                    handleSearchShow('open');
                  }}
                  className="search-btn"
                >
                  <i className="search-icon" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
