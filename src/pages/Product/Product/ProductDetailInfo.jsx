import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductLiveMsg from './ProductLiveMsg';

function ProductDetailInfo() {
  const [more, setMore] = useState(false);
  const handleMore = () => {
    setMore(!more);
  };
  return (
    <div className="mndtl_sec_cont" id="_detailinfo">
      <ProductLiveMsg />
      <div className="mndtl_sec_caution_text mndtl_tx_point">
        <h3 className="mndtl_caution_tit">직거래 유도 주의 안내</h3>
        <div className="mndtl_caution_desc">
          판매자가 쓱톡/문자 등을 이용하여 <br />
          현금 입금을 유도하는 경우 사기 가능성이 있으니 거부하시고
          <br />
          SSG.COM 고객센터로 신고 해 주시기 바랍니다.
        </div>
      </div>

      <div className="mndtl_sec_subject">
        <h3 className="mndtl_sec_tit">상세정보</h3>
      </div>

      <div
        className={more ? 'mndtl_detail_wrap on' : 'mndtl_detail_wrap'}
        data-react-tarea-cd="00006_000000009"
      >
        <div className="mndtl_detail_info">
          <ul className="mndtl_detail_infolist">
            <li>상품번호 : 1000310147566</li>

            <li>모델 : 론디 01(BR)</li>
          </ul>

          <div className="mndtl_detail_err">
            <i className="mndtl_ic mndtl_ic_warning" />
            <p className="mndtl_err_txt">
              상품정보에
              <br />
              문제가 있나요?
            </p>
            <Link to=".." className="mndtl_btn_err clickable" target="_parent">
              <span>신고하기</span>
            </Link>
          </div>

          <div className="mndtl_detail_md">
            <div className="mndtl_md_cont">
              <div className="mndtl_md_bx">
                <p>
                  &lt;교환안내&gt;
                  <br />
                  상품 불량의 경우 구매처에서 동일 제품으로 교환 가능하며,
                  단순변심 등의 경우 배송완료 후 7일 이내 반품 가능합니다.
                  <br />
                  <br />
                  &lt; 2022 뉴패키지 &gt; <br />
                  젠틀몬스터 선글라스 제품은 2022년 뉴패키지로 발송됩니다.{' '}
                  <br />
                  콜라보 제품은 스페셜 패키지로 포장 발송 됩니다. <br />
                  <br />
                  &lt; 선물 포장 &gt; <br />
                  젠틀몬스터 공식 온라인 스토어에서 구매하는 모든 분들께 선물
                  포장 서비스를 제공해 드립니다.
                  <br />
                  <br />
                  &lt; 기본 피팅 서비스 &gt;
                  <br />
                  온라인에서 주문하시는 젠틀몬스터의 모든 제품은 기본 피팅 후
                  발송 됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mndtl_detail_cont type_1800">
          <div className="mndtl_detail_area ty_detail">
            <div className="mndtl_tmpl_detail">
              <div className="mndtl_tmpl_html">
                론디 01(BR)은 사각 형태의 블랙 플랫바 선글라스입니다. 라운딩
                처리된 프런트가 부드러운 분위기를 연출합니다. 슬림한 프런트와
                템플의 실버 메탈 장식 디테일이 매력적인 제품입니다. 99.9% UV
                차단이 되는 브라운 그라디언트 렌즈를 사용하였습니다.
              </div>

              <div className="blind" id="itemNutritionGrid" />

              <div id="itemAppeProp" />
            </div>
          </div>

          <div className={more ? 'mndtl_detail_more on' : 'mndtl_detail_more'}>
            <button
              type="button"
              className="mndtl_detail_btnmore clickable"
              onClick={handleMore}
            >
              <span className="sr_off">상세정보 펼쳐보기</span>
              <span className="sr_on">상세정보 접기</span>
              <i className="mndtl_ico_arr" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailInfo;
