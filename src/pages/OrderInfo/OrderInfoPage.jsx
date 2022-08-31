import React from 'react';
import { MobileHeader } from '../../components/ui/index';

function OrderInfoPage() {
  return (
    <div>
      <MobileHeader title="나의주문내역" />
      <ul className="mnodr_tab">
        <li className="on ty2">
          <a href="/" className="orderInfoTracking">
            <span className="mnodr_tab_tx ty_deliv">주문배송</span>
          </a>
        </li>
        <li className="ty2">
          <a href="/" className="orderInfoTracking">
            <span className="mnodr_tab_tx ty_hotel">호텔예약</span>
          </a>
        </li>
        <li className="ty2">
          <a href="/" className="orderInfoTracking">
            <span className="mnodr_tab_tx ty_air">항공권예약</span>
          </a>
        </li>
      </ul>

      <div className="mnodr_filter_head">
        <div className="mnodr_control_tx ty_flthead">
          <div className="mnodr_selbox ty_flthead" data-o-selbox="">
            <a
              href="/"
              className="mnodr_selbox_selected ty_flthead orderInfoTracking"
            >
              <span className="mnodr_selbox_tx" id="searchTypePeriodTitle">
                최근 3개월
              </span>
            </a>
            <ul className="mnodr_selbox_list ty_flthead">
              <li className="mnodr_selbox_item on">
                <a href="/" className="mnodr_selbox_tx">
                  <span className="mnodr_selbox_tx_prefix">최근</span>
                  <span>3개월</span>
                </a>
                <span className="blind">그룹으로 이동</span>
              </li>
              <li className="mnodr_selbox_item ">
                <a href="/" className="mnodr_selbox_tx">
                  <span className="mnodr_selbox_tx_prefix">최근</span>
                  <span>6개월</span>
                </a>
                <span className="blind">그룹으로 이동</span>
              </li>
              <li className="mnodr_selbox_item ">
                <a href="/" className="mnodr_selbox_tx">
                  <span className="mnodr_selbox_tx_prefix">최근</span>
                  <span>9개월</span>
                </a>
                <span className="blind">그룹으로 이동</span>
              </li>
              <li className="mnodr_selbox_item ">
                <a href="/" className="mnodr_selbox_tx">
                  <span className="mnodr_selbox_tx_prefix">최근</span>
                  <span>12개월</span>
                </a>
                <span className="blind">그룹으로 이동</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mnodr_control_tx ty_flthead">
          <div className="mnodr_selbox ty_flthead" data-o-selbox="">
            <a
              href="/"
              className="mnodr_selbox_selected ty_flthead orderInfoTracking"
            >
              <span className="mnodr_selbox_tx">전체</span>
            </a>
            <ul className="mnodr_selbox_list ty_flthead">
              <li className="mnodr_selbox_item on ">
                <a href="/" className="mnodr_selbox_tx">
                  전체
                </a>
                <span className="blind">그룹으로 이동</span>
              </li>
              <li className="mnodr_selbox_item ">
                <a href="/" className="mnodr_selbox_tx">
                  쓱배송
                </a>
                <span className="blind">그룹으로 이동</span>
              </li>
              <li className="mnodr_selbox_item ">
                <a href="/" className="mnodr_selbox_tx">
                  새벽배송
                </a>
                <span className="blind">그룹으로 이동</span>
              </li>
              <li className="mnodr_selbox_item ">
                <a href="/" className="mnodr_selbox_tx">
                  택배배송
                </a>
                <span className="blind">그룹으로 이동</span>
              </li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          id="btnOrderSearchDtl"
          className="codr_srch_btn modal-fix-open orderInfoTracking"
          data-tracking-cd="00014_000000096_t00060"
          data-tracking-value="상세조회"
          data-layer-target="#_layerOdrSrcDtl"
        >
          상세조회
          <span className="ico_more" />
        </button>
      </div>

      <div className="codr_odrdeliv" name="divOrordUnit">
        <input type="hidden" name="orordNo" value="20220703BB2F86" />
        <input type="hidden" name="mbrId" value="0003832406" />
        <div className="codr_odrdeliv_headtit">
          <span className="codr_odrdeliv_odrdate">2022.07.03</span>
          <span className="codr_odrdeliv_odrnum">(2022-07-03-BB2F86)</span>
          <button
            type="button"
            className="codr_btn_odrhide2"
            name="btn_delete_orderInfo"
            data-orord-no="20220703BB2F86"
            data-page-name="orderInfo"
          >
            <i className="icon ty_sm icon_close" aria-hidden="true" />
            <span className="blind">내 주문목록에서 삭제</span>
          </button>
        </div>
        <div className="codr_odrdeliv_headdetail">
          <span className="codr_odrdeliv_odrpay">
            결제금액<span className="ssg_price">98,000</span>
            <span className="ssg_tx">원</span>
          </span>
          <ul className="codr_odrdeliv_odrinfo">
            <li>
              <button
                type="button"
                className="codr_btn_arr4 bottomsheet_btn_open "
                aria-haspopup="dialog"
                data-layer-type="paymtInfo"
                data-layer-target="#mnodr_modal_paymtInfo"
                data-orord-no="20220703BB2F86"
              >
                결제정보
                <span className="codr_sp_ico codr_ico_arrgray" />
              </button>
            </li>
            <li>
              <a href="/" className="codr_btn_arr4">
                전자영수증
                <span className="codr_sp_ico codr_ico_arrgray" />
              </a>
            </li>
          </ul>
        </div>
        <div className="codr_acdo_cont">
          <div className="codr_odrdeliv_item parcel" name="divShppUnit">
            <div className="codr_odrdeliv_delivinfo">
              <span className="cm_mall_ic ty_circle_s">
                <i className="sd">
                  <span className="blind">신세계백화점</span>
                </i>
              </span>
              <strong className="codr_odrdeliv_delivtype">택배배송</strong>
              <span className="codr_dot">ㆍ</span>
              <span className="codr_store sd">
                <span className="blind">점포명</span>
                강남점
              </span>
              <div className="codr_btnarea_rgt">
                <button
                  type="button"
                  className="codr_btn_arr4 bottomsheet_btn_open"
                  aria-haspopup="dialog"
                  data-layer-type="shpplocInfo"
                  data-layer-target="#mnodr_modal_delivinfo"
                  data-orord-no="20220703BB2F86"
                  data-rep-ord-no-by-shpp-info="20220703BB2F86"
                  data-rep-ord-item-seq-by-shpp-info="1"
                  data-rep-orord-item-seq-by-shpp-info="1"
                >
                  배송지 [본가]
                  <span className="codr_sp_ico codr_ico_arrgray" />
                </button>
              </div>
            </div>

            <div className="codr_dvstate">
              <div className="codr_dvstate_bg">
                <div className="tx_area">
                  <p className="tx_state">
                    <em>한진택배&nbsp;/&nbsp;511988142234</em>
                    배송완료
                    <span className="tx_link">
                      <button
                        type="button"
                        className="codr_btn_link bottomsheet_btn_open"
                        aria-haspopup="dialog"
                        data-layer-target="#mnodr_modal_delivdetail"
                        name="shppTrackInfoBtn"
                        data-layer-type="shppTrackInfoNew"
                        data-rep-ord-no-by-shpp-info="20220703BB2F86"
                        data-rep-ord-item-seq-by-shpp-info="1"
                        data-cart-share-id=""
                      >
                        <span className="codr_ico_new">
                          <span className="blind">new</span>
                        </span>
                        배송상세현황 보기
                      </button>
                    </span>
                  </p>
                </div>
              </div>
              <ul className="codr_dvstate_lst">
                <li className="start">
                  <span className="codr_dvstate_item">결제완료</span>
                </li>
                <li className="car">
                  <span className="codr_dvstate_item">상품준비중</span>
                </li>
                <li className="car">
                  <span className="codr_dvstate_item">배송준비중</span>
                </li>
                <li className="car">
                  <span className="codr_dvstate_item">배송중</span>
                </li>
                <li className="finish on">
                  <span className="blind">현재 배송 상태</span>
                  <span className="codr_dvstate_item">배송완료</span>
                </li>
              </ul>
            </div>
            <div className="codr_unit">
              <div className="codr_unit_area " name="divItemUnit">
                <div className="codr_unit_thmb">
                  <span className="codr_unit_img" aria-hidden="true">
                    <img
                      src="https://sitem.ssgcdn.com/35/23/03/item/1000372032335_i1_140.jpg"
                      alt="상품이미지"
                    />
                  </span>
                </div>
                <div className="codr_unit_cont">
                  <div className="codr_unit_type" />
                  <p className="codr_unit_tit">
                    <a href="/" target="_blank">
                      <strong className="codr_unit_brd">설화수</strong>
                      <span className="codr_unit_name">
                        [7월]윤조마스크EX 5매
                      </span>
                    </a>
                  </p>
                  <div className="codr_unit_pricewrap">
                    <div className="codr_unit_newprice">
                      <span className="blind">판매가격</span>
                      <em className="ssg_price">98,000</em>
                      <span className="ssg_tx">원</span>
                    </div>
                    <div className="codr_unit_oldprice">
                      <del>
                        <span className="blind">정상가격</span>
                        <em className="ssg_price">120,000</em>
                      </del>
                      <span className="ssg_tx">원</span>
                    </div>
                    <span className="codr_unit_count">
                      <span className="blind">상품수량</span>2개
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="codr_btn_odrset">
          <ul>
            <li>
              <button
                type="button"
                className="codr_btn codr_put_basket"
                name="btnSaveCart"
                data-orord-no="20220703BB2F86"
              >
                <span>
                  장바구니 담기
                  <span className="codr_ico_bsk" />
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div className="codr_border" />
      </div>
      <button type="button" className="codr_btn_help v2 bottomsheet_btn_open">
        <span>
          주문에 <em>불편함</em>이 있으신가요?
        </span>
      </button>
      <div id="mcom_footer">
        <div className="mcom_footer mcom_footer_order mcom_footer_order_v2 ">
          <div className="mcom_mall_wrap v2">
            <div className="mcom_noti_wrap">
              <p className="mcom_noti_txt">
                ㈜에스에스지닷컴에서 판매되는 상품 중에는 개별 판매자가 판매하는
                오픈마켓 상품이 포함되어 있습니다.
              </p>
              <p className="mcom_noti_txt">
                오픈마켓 상품의 경우, ㈜에스에스지닷컴은 통신판매중개자로서 거래
                당사자가 아니며, 입점 판매사가 등록한 상품정보 및 거래 등에 대해
                책임을 지지 않습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderInfoPage;
