import React from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom/index';
import { isOpenState, searchValueState } from '../../../store/states';
import { HeaderBackArrow } from '../index';
import './MobileHeaderSearch.scss';

function MobileHeaderSearch() {
  const [, setIsOpen] = useRecoilState(isOpenState);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);

  const handleSearchShow = (action) =>
    action === 'open' ? setIsOpen(true) : setIsOpen(false);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter' || e.key === 'Click') {
      e.preventDefault();
      if (searchValue.length !== 0) {
        navigate(`/search/${searchValue}`);
      } else {
        navigate(`/search/%20`);
      }
      handleSearchShow();
    }
  };

  return (
    <div className="m_head_inparea2">
      <div className="addr_ipbx">
        <HeaderBackArrow />
        <span className="inpbx2">
          <input
            type="text"
            id="query"
            name="query"
            autoComplete="off"
            placeholder="검색어를 입력하세요."
            onChange={handleInputChange}
            onKeyPress={handleSubmit}
          />
          <label htmlFor="query">
            <span className="blind">검색하기</span>
          </label>
          <input type="hidden" id="select_site_no" value="6005" />
        </span>

        <button type="button" className="addr_del">
          <span className="blind">검색단어 초기화</span>
        </button>
      </div>
      <button className="mcom_b_def" type="button" onClick={handleSubmit}>
        <span className="inp_ico_srch">
          <span className="blind">검색</span>
        </span>
      </button>
    </div>
  );
}

export default MobileHeaderSearch;
