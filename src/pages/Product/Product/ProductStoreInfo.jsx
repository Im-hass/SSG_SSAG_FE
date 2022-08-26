import React from 'react';

function ProductStoreInfo({ productData }) {
  return (
    <div className="mndtl_sec_bx">
      <div className="mndtl_store mndtl_opmarket">
        <div className="mndtl_store_thmb">
          <span className="mndtl_store_img">
            <img
              className="ssg_lazy loaded"
              src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/mnseller/img_seller_default.png&amp;w=110&amp;t=924262347d9ae9f70d63c4652c3fc42879ff3062"
              data-src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/mnseller/img_seller_default.png&amp;w=110&amp;t=924262347d9ae9f70d63c4652c3fc42879ff3062"
              alt="브랜드이미지"
              data-ll-status="loaded"
            />
          </span>
        </div>
        <div className="mndtl_store_cont">
          <a
            href="https://m.ssg.com/sellerhome/101794/main.ssg"
            className="mndtl_store_link"
            data-react-unit-type="store"
            data-react-unit-id="101794"
            data-react-unit-text='[{"type":"text","value":"(주)바이와이제이"}]'
            target="_parent"
          >
            <span
              className="mndtl_store_tit clickable"
              data-react-tarea-dtl-cd="t00055"
            >
              <span className="mndtl_store_tittx">{productData.storeName}</span>
              <i className="mndtl_ic_arr">
                <span className="blind">바로가기</span>
              </i>
            </span>
          </a>
          <div className="mndtl_store_badge">
            <a
              href="https://m.ssg.com/sellerhome/101794/main.ssg"
              className="mndtl_store_link"
              data-react-unit-type="store"
              data-react-unit-id="101794"
              data-react-unit-text='[{"type":"text","value":"(주)바이와이제이"}]'
              target="_parent"
            >
              <span className="mndtl_opmarket_store_badge superstar">
                <span className="blind">스토어등급 앰블럼</span>
              </span>
              <span className="opmarket_store_badge_txt">SUPER STAR 등급</span>{' '}
            </a>
            <a
              href="/"
              className="mndtl_ic mndtl_ic_qmark_new16 modal-layer-open clickable"
            >
              <span className="blind">스토어등급 자세히보기</span>
            </a>
          </div>

          <div className="mndtl_opmarket_info">
            <span className="mndtl_store_week">
              <strong>여성브랜드패션 주간 매출 상위 3% 스토어</strong>
            </span>
            <div className="mndtl_opmarket_btn_wrap">
              <span
                className="mndtl_opmarket_btn"
                data-react-unit-type="text"
                data-react-unit-text='[{"type":"text","value":"(주)바이와이제이"}]'
              >
                <div className="_case_text">
                  <span
                    id="sellerLike"
                    className="cmlike _js_cmlike interestIt"
                  >
                    <input type="hidden" name="attnDivCd" value="30" />
                    <input type="hidden" name="attnDivDtlCd" value="32" />
                    <input type="hidden" name="attnTgtIdnfNo1" value="101794" />
                    <input type="hidden" name="siteNo" value="6005" />
                    <button
                      type="button"
                      className="cmlike_btn _js_cmlike_btn store-modal-alert-open clickable"
                      data-react-tarea-dtl-cd="t00048"
                      data-react-tarea="상품상세|연관정보_영역|스토어_좋아요_클릭|스토어명"
                    >
                      <span className="cmlike_ico">
                        <i className="cmlike_primary_xs" />
                        <span className="sr_off">
                          <span className="blind">관심상품 취소</span>
                        </span>
                        <span className="sr_on">
                          <span className="blind">관심상품 등록</span>
                        </span>
                      </span>
                      <span className="cmlike_txt">좋아요</span>
                    </button>
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductStoreInfo;
