import React, { useState } from 'react';

function ProductDetailInfo() {
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
              <p align="center" style={{ textAlign: 'center' }} />
              <div
                align="center"
                className="img_wrapper"
                style={{ textAlign: 'center' }}
              >
                <img
                  src="https://rolarola.wisacdn.com/__manage__/product_3388/1fdbc5169b083a81bbb9de2090252ed1.jpg"
                  className="img_obj_23141"
                  alt="img"
                />
                <br />
                <img
                  className="img_obj_21831"
                  src="https://rolarola.wisacdn.com/__manage__/product_2964/5282d0b9a759ffcbbe92f99b749513fc.jpg"
                  alt="img"
                />
                <img
                  className="img_obj_21832"
                  src="https://rolarola.wisacdn.com/__manage__/product_2964/aeec0115e9b1849b2dcd8abe4a4b9ab3.jpg"
                  alt="img"
                />
                <br />
              </div>
              <p align="center" style={{ textAlign: 'center' }}>
                &nbsp;
              </p>
              <p align="center" style={{ textAlign: 'center' }} />
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
