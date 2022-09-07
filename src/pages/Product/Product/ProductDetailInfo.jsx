import React, { useState } from 'react';

function ProductDetailInfo({ productDetailData }) {
  const [isDetailInfoOpen, setisDetailInfoOpen] = useState('');

  const handleDetailInfoOpen = () =>
    isDetailInfoOpen !== 'on'
      ? setisDetailInfoOpen('on')
      : setisDetailInfoOpen('');

  return (
    <div
      className={`mndtl_detail_wrap ${isDetailInfoOpen}`}
      data-react-tarea-cd="00006_000000009"
    >
      <div className="mndtl_detail_info">
        <ul className="mndtl_detail_infolist">
          <li>상품번호 : 1000304287202</li>
          <li>모델 : RML1DK-CD22137M034</li>
        </ul>

        <div
          className="mndtl_detail_err"
          data-react-unit-type="text"
          data-react-unit-text='[{"type":"tarea_addt_val","value":"신고하기"}]'
        >
          <i className="mndtl_ic mndtl_ic_warning" />
          <p className="mndtl_err_txt">
            상품정보에
            <br />
            문제가 있나요?
          </p>
          <a
            href="/comm/reportError.ssg?itemId=1000304287202&amp;siteNo=6004&amp;salestrNo=6005"
            className="mndtl_btn_err clickable"
            data-react-tarea-dtl-cd="t00060"
            target="_parent"
          >
            <span>신고하기</span>
          </a>
        </div>
      </div>
      <div className="mndtl_detail_cont type_1800">
        <div className="mndtl_detail_area ty_detail">
          <div className="mndtl_tmpl_detail">
            <div className="mndtl_tmpl_html">
              <p style={{ textAlign: 'center' }} />
              <div className="img_wrapper" style={{ textAlign: 'center' }}>
                {productDetailData &&
                  productDetailData.map((detailData) => (
                    <img
                      key={detailData.detailImgId}
                      alt={detailData.originName}
                      src={detailData.imgUrl}
                    />
                  ))}
                <br />
              </div>
              <p style={{ textAlign: 'center' }}>&nbsp;</p>
              <p style={{ textAlign: 'center' }} />
              <p />
            </div>

            <div className="blind" id="itemNutritionGrid" />

            <div id="itemAppeProp" />
          </div>
        </div>

        <div
          className="mndtl_detail_more"
          data-react-unit-type="text"
          data-react-unit-text='[{"type":"tarea_addt_val","value":"펼쳐보기"}]'
        >
          <button
            type="button"
            className="mndtl_detail_btnmore clickable"
            data-react-tarea-dtl-cd="t00060"
            aria-hidden="true"
            aria-current="false"
            onClick={handleDetailInfoOpen}
          >
            <span className="sr_off">상세정보 펼쳐보기</span>
            <span className="sr_on">상세정보 접기</span>
            <i className="mndtl_ico_arr" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailInfo;
