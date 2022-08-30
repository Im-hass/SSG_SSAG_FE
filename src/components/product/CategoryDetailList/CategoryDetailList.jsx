import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../../store/auth-context';
import './CategoryDetailList.scss';
import { ProductList } from '../ProductList/index';

function CategoryDetailList({ mediumCategoryList, datas, handleProductList }) {
  const ctx = useContext(AuthContext);

  const { lgId, mdId, smId } = useParams();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [smallCateList, setSmallCateList] = useState();
  const [hasMId, setHasMid] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (Number(mdId) === 0) {
      setHasMid(false);
    } else {
      setHasMid(true);
      axios
        .get(`http://13.209.26.150:9000/comm-users/category/small/${mdId}`)
        .then((res) => {
          setSmallCateList(res.data.result.smallCategoryList);
        });
    }
  }, [hasMId, mdId, smId]);

  return (
    <>
      <div id="m_top_catelist" className="m_catelst_wrap_v2">
        <div className={`cmgrid_full_box ${isNavOpen ? 'nav-modal' : ''}`}>
          <div className={`cmctg_nav ${isNavOpen ? 'is_open' : ''}`}>
            <div className="cmctg_top">
              <h3>전체메뉴</h3>
              <span className="cmctg_toggle">
                <button
                  type="button"
                  aria-expanded="false"
                  onClick={handleNavOpen}
                >
                  <span className="btn_label ty_off">
                    <span className="blind">메뉴 펼치기</span>
                  </span>
                  <span className="btn_label ty_on">
                    <span className="blind">메뉴 접기</span>
                  </span>
                </button>
              </span>
            </div>
            <div className="cmctg_scroll">
              <ul className="cmctg_menu">
                {mediumCategoryList &&
                  mediumCategoryList.map((data) => (
                    <li
                      key={data.mediumCategoryId}
                      className="cmctg_item"
                      role="menuitem"
                      onClick={() =>
                        isNavOpen ? handleNavOpen() : setIsNavOpen(false)
                      }
                      onKeyDown={() =>
                        isNavOpen ? handleNavOpen() : setIsNavOpen(false)
                      }
                    >
                      <Link
                        to={`/products/${lgId}/${data.mediumCategoryId}`}
                        className={`clickable cmctg_lnk ${
                          Number(mdId) === data.mediumCategoryId ? 'on' : ''
                        }`}
                        onClick={() => {
                          handleProductList(lgId, data.mediumCategoryId);
                        }}
                      >
                        <span className="cmctg_txt">
                          {data.mediumCategoryTitle}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        {hasMId && smallCateList && (
          <div className="m_catelst">
            <ul className="lst_cate">
              {smallCateList.map((data) => (
                <li key={data.smallCategoryId}>
                  <Link
                    to={`/products/${lgId}/${mdId}/${data.smallCategoryId}`}
                    className={`clickable smallCate ${
                      Number(smId) === data.smallCategoryId ? 'on' : ''
                    }`}
                    onClick={() => {
                      handleProductList(lgId, mdId, data.smallCategoryId);
                    }}
                  >
                    <span>{data.smallCategoryTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div id="m_dimmed" className={`${isNavOpen ? 'mcom_dimmed' : ''}`} />
      </div>
      <ProductList datas={datas} isLogin={ctx.isLogin} />
    </>
  );
}

export default CategoryDetailList;
