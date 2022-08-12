import React from 'react';
import SearchList from '../SearchList/SearchList';
import './SearchBox.scss';

const datas = [
  { productId: 5, word: '아이패드' },
  { productId: 6, word: '애플워치' },
  { productId: 7, word: '갤럭시 워치' },
];

function SearchBox() {
  return (
    <div id="m_wrap" className="search-wrap">
      {datas.length === 0 ? (
        <div className="search-none-result">
          <p>최근 검색어가 없습니다</p>
        </div>
      ) : (
        <SearchList datas={datas} />
      )}

      <div className="cgsearch_recomm_tag" id="now_hot_all">
        <h3 className="recomm_title">추천태그</h3>
        <div className="cgsearch_recomm_container">
          <ul className="cgsearch_recomm_lst" id="now_hot_list">
            <li>
              <a href="http://m.shinsegaemall.ssg.com/mall/search.ssg?query=%23데오드란트">
                <span className="cgsearch_recomm_img">
                  <img
                    src="//sui.ssgcdn.com/cmpt/banner/202208/2022080516540766110801992080_411.PNG"
                    alt=""
                  />
                </span>
                <span className="cgsearch_recomm_txt">
                  #겨터파크
                  <br />
                  문제없지
                </span>
              </a>
            </li>
            <li>
              <a href="http://m.shinsegaemall.ssg.com/mall/search.ssg?query=%23셀프네일">
                <span className="cgsearch_recomm_img">
                  <img
                    src="//sui.ssgcdn.com/cmpt/banner/202208/2022080516543313728281406828_989.PNG"
                    alt=""
                  />
                </span>
                <span className="cgsearch_recomm_txt">
                  #매력만점
                  <br />
                  네일아트
                </span>
              </a>
            </li>
            <li>
              <a href="http://m.shinsegaemall.ssg.com/mall/search.ssg?query=%23빨래용">
                <span className="cgsearch_recomm_img">
                  <img
                    src="//sui.ssgcdn.com/cmpt/banner/202208/2022080516545680379857510095_980.PNG"
                    alt=""
                  />
                </span>
                <span className="cgsearch_recomm_txt">
                  #여름빨래
                  <br />
                  뽀송하게!
                </span>
              </a>
            </li>
            <li>
              <a href="http://m.shinsegaemall.ssg.com/mall/search.ssg?query=%23선글라스">
                <span className="cgsearch_recomm_img">
                  <img
                    src="//sui.ssgcdn.com/cmpt/banner/202208/2022080516551843460401697040_21.PNG"
                    alt=""
                  />
                </span>
                <span className="cgsearch_recomm_txt">
                  #멋쟁이
                  <br />
                  여름아이템
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
