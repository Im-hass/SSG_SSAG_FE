import React from 'react';

function ProductExplain() {
  return (
    <div className="mndtl_sec mndtl_prd_wrap">
      <div className="mndtl_mall">
        <div className="mndtl_mall_badge">
          <span className="cm_mall_text">
            <i className="sm">신세계몰</i>
          </span>
        </div>
        <div className="mndtl_mall_info">
          <span className="mndtl_mall_tx">
            SSG개런티
            <a
              href="/"
              className="mndtl_ic mndtl_ic_qmark_new16 modal-layer-open"
              target=""
            >
              <span className="blind">SSG개런티 상품안내 자세히보기</span>
            </a>
          </span>
        </div>
        <button type="button" className="mndtl_btn_share modal-layer-open">
          <i className="mndtl_ic mndtl_ic_share clickable" />
          <span className="blind">공유</span>
        </button>
      </div>

      <div className="mndtl_prd_info">
        <h2 className="mndtl_prd_title">
          <a
            href="/mall/disp/brandMain.ssg?brandId=3000027757&amp;ctgId=6000200803&amp;_mpop=new"
            className="mndtl_prdtit_brand clickable"
            target="_parent"
          >
            GENTLE MONSTER(젠틀몬스터)
          </a>
          <span className="mndtl_prdtit_name">론디 01(BR)</span>
        </h2>
        <div className="mndtl_prd_price">
          <div className="mndtl_prd_newpr">
            <div className="new_price">
              <span className="blind">판매가격</span>
              <em className="ssg_price">259,000</em>
              <span className="ssg_tx">
                원<span className="cm_tx_opt" />
              </span>
            </div>
          </div>
        </div>

        <div className="mndtl_smile_lst" data-react-tarea-cd="00006_000000242">
          <div className="mndtl_smile_type" data-react-unit-type="banr">
            <a
              href="https://member.ssg.com/m/membership/gate.ssg"
              className="clickable"
              target="_parent"
            >
              <img
                className="ssg_lazy loaded"
                src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750"
                alt="스마일 클럽 무료 체험"
                srcSet="
                        https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750 3x
                      "
              />
            </a>
            <p className="blind">스마일 클럽 무료 체험</p>
          </div>
        </div>
      </div>

      <div id="itemLiveList" className="mndtl_live_v2">
        <div className="mndtl_live_wrap">
          <ul className="mndtl_live_list">
            <li>
              <div className="mndtl_live_msg">
                <p className="mndtl_live_tx">
                  상품이 딱 1개 남았어요. 구매 시 재고가 소진 될 수 있으니
                  서두르세요!&nbsp;
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductExplain;
