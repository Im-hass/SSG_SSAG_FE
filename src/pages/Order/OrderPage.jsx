import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, Link } from 'react-router-dom';

import { MobileHeader } from '../../components/ui/index';

function OrderPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [destinationInfo, setDestinationInfo] = useState({});
  const [recipientInfo, setRecipientInfo] = useState({});
  const [shippingMessageInfo, setShippingMessageInfo] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (location.state.checkedMessage !== undefined)
      setShippingMessageInfo(location.state.checkedMessage);
    console.log(location.state);

    axios
      .get('http://13.209.26.150:9000/users/shipping-addr/default', {
        headers: {
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        setDestinationInfo(res.data.result);
      });

    axios
      .get('http://13.209.26.150:9000/users/info', {
        headers: {
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        setRecipientInfo(res.data.result);
      });
  }, []);

  const handleChangeRecipient = () => {
    navigate('/orderChangeRecipient', { state: { recipientInfo } });
  };

  const handleChangeShippingMessage = () => {
    navigate('/orderChangeShippingMessage');
  };

  return (
    <div style={{ background: '#f5f5f5' }}>
      <MobileHeader title="결제하기" />
      <ul className="mnodr_article_list" id="ordPageShpplocInfoDiv_1">
        <li
          className="mnodr_article_item ordPageShpplocArea fullOrdArea"
          style={{ display: 'list-item' }}
        >
          <article className="mnodr_article mnodr_delivery_infos">
            <div className="mnodr_article_head">
              <div className="mnodr_article_headlt">
                <h2 className="mnodr_tx_tit" style={{ fontWeight: 'bold' }}>
                  배송지 : {destinationInfo.addrName}
                </h2>
              </div>
              <div className="mnodr_article_headrt">
                <Link
                  to="/orderDestination"
                  className="mnodr_btn ty_grayline ty_xxs payTracking"
                  name="btnShowTgtDiv"
                >
                  변경
                </Link>
              </div>
            </div>
            <div className="mnodr_article_cont ty_pull">
              <div className="mnodr_form_sec">
                <p className="mnodr_tx_desc">
                  [{destinationInfo.zipCode}] {destinationInfo.streetAddr}
                </p>
                <div className="mnodr_tx_wrap ty_space">
                  <span className="mnodr_tx_size2 mnodr_tx_gray">
                    <span id="dispRcptpeNm_0">{destinationInfo.recipient}</span>
                    /<span id="dispHpno_0">{destinationInfo.phone}</span>
                  </span>
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>

      <article className="mnodr_article" id="discountBenefitArticle">
        <ul className="mnodr_article_cont">
          <li className="mnodr_article_item">
            <div className="mnodr_article_head">
              <div className="mnodr_article_headlt">
                <h2 className="mnodr_tx_tit" style={{ fontWeight: 'bold' }}>
                  할인혜택
                </h2>
              </div>
            </div>
            <div className="mnodr_article_cont">
              <div className="mnodr_discount_sec ty_space discountBenefitDtlArea">
                <dl className="mnodr_priceitem ty_narrow">
                  <dt>
                    <span
                      className="mnodr_priceitem_stit"
                      style={{ marginRight: '7px' }}
                    >
                      상품할인
                    </span>
                  </dt>
                  <dd>
                    <span className="mnodr_tx_primary">
                      -
                      <em className="ssg_price dispTotItemEnuriWithout10Amt">
                        5,400
                      </em>
                      <span className="ssg_tx">원</span>
                    </span>
                  </dd>
                </dl>
              </div>
            </div>
          </li>
        </ul>
      </article>

      <article
        className="mnodr_article fullOrdArea"
        id="paymtMthdArticle"
        style={{ display: 'block' }}
      >
        <div className="mnodr_article_head">
          <div className="mnodr_article_headlt">
            <h2 className="mnodr_tx_tit" style={{ fontWeight: 'bold' }}>
              결제방법
            </h2>
            <span className="crdDcccc" />
          </div>
        </div>
        <div
          className="mnodr_article_cont ty_pull"
          style={{ marginTop: '20px' }}
        >
          <div className="mnodr_ssgpay_acdo mnodr_ssgpay_acdotoggle on otherPaymtMeansArea">
            <div
              className="mnodr_ssgpay_acdocont"
              aria-labelledby="_mnodrpay_etc_toggle"
              style={{ display: 'block' }}
            >
              <div className="mnodr_pay_bx">
                <ul className="modr_pay_lst" role="tablist">
                  <li>
                    <button
                      type="button"
                      id="creditCardPaymtMeansButton"
                      name="otherPaymtMeansCdButton"
                      className="mnodr_pay_tab payTracking"
                      data-pt-click="주문서|결제방법_다른 결제수단|신용카드"
                      role="tab"
                    >
                      <span>신용카드</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      id="virtualAccountPaymtMeansButton"
                      name="otherPaymtMeansCdButton"
                      className="mnodr_pay_tab payTracking"
                      data-pt-click="주문서|결제방법_다른 결제수단|무통장 입금"
                      role="tab"
                    >
                      <span>무통장 입금</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      id="realBankPaymtMeansButton"
                      name="otherPaymtMeansCdButton"
                      className="mnodr_pay_tab payTracking"
                      data-pt-click="주문서|결제방법_다른 결제수단|실시간 계좌이체"
                      role="tab"
                    >
                      <span>실시간 계좌이체</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article
        className="mnodr_article fullOrdArea"
        style={{ display: 'block' }}
      >
        <div className="mnodr_article_head">
          <div className="mnodr_article_headlt">
            <h2 className="mnodr_tx_tit" style={{ fontWeight: 'bold' }}>
              결제 예정금액
            </h2>
          </div>
        </div>
        <div className="mnodr_article_cont ty_pull">
          <div className="mnodr_form_sec">
            <dl className="mnodr_priceitem ty_narrow">
              <dt>
                <span className="mnodr_priceitem_stit">주문금액</span>
              </dt>
              <dd>
                <span className="mnodr_tx_primary">
                  + <em className="ssg_price dispTotPayOrdAmt">180,000</em>
                  <span className="ssg_tx">원</span>
                </span>
              </dd>
            </dl>
            <dl className="mnodr_priceitem ty_narrow">
              <dt>
                <span className="mnodr_priceitem_stit">할인금액</span>
              </dt>
              <dd>
                <span className="mnodr_tx_point">
                  - <em className="ssg_price dispTotDcAmt">5,400</em>
                  <span className="ssg_tx">원</span>
                </span>
              </dd>
            </dl>
            <ul className="mnodr_paydetail_sublst dispTotDcAmtDtl">
              <li className="dispTotDcAmtWithoutCrdDcArea">
                <span className="mnodr_paydetail_tx">상품할인</span>
                <span className="mnodr_paydetail_money">
                  -{' '}
                  <em className="ssg_price dispTotDcAmtWithoutCrdDc">5,400</em>
                  <span className="ssg_tx">원</span>
                </span>
              </li>
            </ul>
            <dl className="mnodr_priceitem ty_narrow">
              <dt>
                <span className="mnodr_priceitem_stit">배송비</span>
              </dt>
              <dd>
                <span className="mnodr_tx_primary">
                  +<em className="ssg_price paySummaryTotOrdCstAmt">3,000</em>
                  <span className="ssg_tx">원</span>
                </span>
              </dd>
            </dl>
            <ul
              className="mnodr_paydetail_sublst paySummaryTotOrdCstDtl"
              style={{ display: 'block' }}
            >
              <li>
                <span className="mnodr_paydetail_tx">배송비</span>
                <span className="mnodr_paydetail_money">
                  +<em className="ssg_price paySummaryOrdCstAmt">3,000</em>
                  <span className="ssg_tx">원</span>
                </span>
              </li>
            </ul>
            <dl className="mnodr_priceitem ty_total">
              <dt>
                <strong
                  className="mnodr_priceitem_stit"
                  style={{ fontWeight: 'bold' }}
                >
                  총 결제예정금액
                </strong>
              </dt>
              <dd>
                <strong className="mnodr_tx_primary mnodr_priceitem_total v2">
                  +
                  <em className="ssg_price paySummaryPayAmt paySummaryTgtPaymtAmt">
                    177,600
                  </em>
                  <span className="ssg_tx">원</span>
                </strong>
              </dd>
            </dl>
          </div>
        </div>
      </article>

      <article className="mnodr_article">
        <div className="mnodr_article_cont">
          <div className="mnodr_toggle_sec">
            <div className="mnodr_form_sec">
              <div className="mnodr_form_cont">
                <div className="mnodr_togglechk_all mnodr_acdo_toggle">
                  <span className="mnodr_chk">
                    <span className="mnodr_tx_label ty_chk_bold">
                      주문정보 및 서비스 약관에 동의합니다.
                    </span>
                    <button
                      type="button"
                      className="mnodr_acdo_btn mnodr_arrow_btn"
                    >
                      <span className="blind">더보기</span>
                    </button>
                  </span>
                  <div
                    className="mnodr_togglechk_cont mnodr_acdo_cont ty_toggle"
                    style={{ display: 'block' }}
                  >
                    <div className="mnodr_tx_wrap ty_indent">
                      <span className="mnodr_tx_desc2">
                        전자금융거래 이용약관
                      </span>
                      <button
                        className="mnodr_tx_link mnodr_tx_gray modal-fix-open"
                        id="electronicFinancialTransactionShowButton"
                        type="button"
                      >
                        약관보기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mnodr_article_foot">
          <div className="mnodr_btn_area">
            <button
              type="button"
              name="processPaymtButton"
              className="mnodr_btn ty_point ty_m payTracking"
              data-pt-click="주문서|결제예정금액|결제하기"
            >
              <span className="mnodr_btn_tx">
                <strong>결제하기</strong>
              </span>
            </button>
          </div>
        </div>
      </article>

      <ul className="mnodr_article_list fullOrdArea">
        <li className="mnodr_article_item">
          <article className="mnodr_article mnodr_delivery_infos">
            <div className="mnodr_article_head">
              <div className="mnodr_article_headlt">
                <h2 className="mnodr_tx_tit" style={{ fontWeight: 'bold' }}>
                  주문자 정보
                </h2>
              </div>
              <div className="mnodr_article_headrt">
                <button
                  type="button"
                  className="mnodr_btn ty_grayline ty_xxs payTracking"
                  name="btnShowTgtDiv"
                  onClick={handleChangeRecipient}
                >
                  변경
                </button>
              </div>
            </div>
            <div className="mnodr_article_cont ty_pull">
              <div className="mnodr_form_sec">
                <div className="mnodr_form_cont">
                  <dl className="mnodr_dl_desc">
                    <dt>
                      <span className="mnodr_tx_desc mnodr_tx_gray">
                        주문자명
                      </span>
                    </dt>
                    <dd>
                      <p className="mnodr_tx_desc" id="ordpeNmStr">
                        {recipientInfo.name}
                      </p>
                    </dd>
                  </dl>
                  <dl className="mnodr_dl_desc">
                    <dt>
                      <span className="mnodr_tx_desc mnodr_tx_gray">
                        연락처
                      </span>
                    </dt>
                    <dd>
                      <p className="mnodr_tx_desc" id="ordpeHpnoStr">
                        {recipientInfo.phone}
                      </p>
                    </dd>
                  </dl>
                  <dl className="mnodr_dl_desc">
                    <dt>
                      <span className="mnodr_tx_desc mnodr_tx_gray">
                        이메일
                      </span>
                    </dt>
                    <dd>
                      <p className="mnodr_tx_desc" id="ordpeEmailStr">
                        {recipientInfo.email}
                      </p>
                    </dd>
                  </dl>
                  <dl className="mnodr_dl_desc">
                    <dt>
                      <span className="mnodr_tx_desc mnodr_tx_gray">
                        품절시 환불
                      </span>
                    </dt>
                    <dd>
                      <p className="mnodr_tx_desc">
                        <span id="rfdMthdStrArea">
                          {recipientInfo.refundCheck &&
                            '주문 시 결제수단으로 환불받기'}
                        </span>
                      </p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>

      <ul
        className="mnodr_article_list fullOrdArea"
        id="ordPageShppRcptInfoDiv_1"
      >
        <li className="mnodr_article_item">
          <article className="mnodr_article mnodr_delivery_infos">
            <div className="mnodr_article_head">
              <div className="mnodr_article_headlt">
                <h2 className="mnodr_tx_tit" style={{ fontWeight: 'bold' }}>
                  배송 요청사항
                </h2>
              </div>
              <div className="mnodr_article_headrt">
                <button
                  type="button"
                  className="mnodr_btn ty_grayline ty_xxs payTracking"
                  name="btnShowTgtDiv"
                  onClick={handleChangeShippingMessage}
                >
                  변경
                </button>
              </div>
            </div>
            <div className="mnodr_article_cont ty_pull">
              <div className="mnodr_form_sec">
                <dl className="mnodr_dl_desc">
                  <dt>
                    <span className="mnodr_tx_desc mnodr_tx_gray">
                      택배배송 요청사항
                    </span>
                  </dt>
                  <dd>
                    <p className="mnodr_tx_desc" id="deliShppMemoTxt_0">
                      {shippingMessageInfo}
                    </p>
                    <input
                      type="hidden"
                      id="deliShppMemo_0"
                      name="shpploc[0].deliShppMemo"
                    />
                  </dd>
                </dl>
              </div>
            </div>
          </article>
        </li>
      </ul>

      <ul className="mnodr_article_list fullOrdArea">
        <li className="mnodr_article_item">
          <article className="mnodr_article">
            <div className="mnodr_article_head">
              <div className="mnodr_article_headlt">
                <h2 className="mnodr_tx_tit" style={{ fontWeight: 'bold' }}>
                  택배배송
                </h2>
              </div>
            </div>

            <div className="mnodr_article_cont ty_pull">
              <div className="mnodr_form_sec">
                <div className="mnodr_unit">
                  <div className="mnodr_unit_item">
                    <div className="mnodr_unit_thmb">
                      <span className="mnodr_unit_img" aria-hidden="true">
                        <img
                          src="https://sitem.ssgcdn.com/03/29/38/item/1000042382903_i1_140.jpg"
                          alt="조말론 잉글리쉬 페어 앤 프리지아 코롱 30ml★리본포장"
                          width="85"
                          height="85"
                        />
                      </span>
                    </div>
                    <div className="mnodr_unit_cont">
                      <div className="mnodr_unit_info ty2">
                        <span className="cm_mall_text">
                          <i className="sm">신세계몰</i>
                        </span>

                        <em id="dispSalestrNm_1">(주) 에이온코스퍼</em>
                      </div>
                      <p className="mnodr_unit_tit ">
                        <a href="/">
                          <strong className="mnodr_unit_brd">
                            조말론향수{' '}
                          </strong>
                          <span className="mnodr_unit_name">
                            조말론 잉글리쉬 페어 앤 프리지아 코롱 30ml★리본포장
                          </span>
                        </a>
                      </p>

                      <div className="mnodr_unit_prdpay ty_space">
                        <div className="mnodr_unit_l">
                          <div className="mnodr_unit_oldprice ty2">
                            <del>
                              <span className="blind">정상가격</span>
                              <em className="ssg_price">89,000</em>
                            </del>
                            <span className="ssg_tx">원</span>
                          </div>

                          <div className="mnodr_unit_newprice ty2">
                            <span className="blind">판매가격</span>
                            <em className="ssg_price">86,330</em>
                            <span className="ssg_tx">원</span>
                          </div>
                        </div>
                        <div className="mnodr_unit_r">
                          <span className="mnodr_unit_option">수량 1개</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>

      <div id="divFooter" style={{ display: 'block' }}>
        <div id="mcom_footer">
          <div className="mcom_footer mcom_footer_order mcom_footer_order_v2 ty_bg ">
            <div className="mcom_mall_wrap v2">
              <div className="mcom_noti_wrap">
                <p className="mcom_noti_txt">
                  ㈜에스에스지닷컴에서 판매되는 상품 중에는 개별 판매자가
                  판매하는 오픈마켓 상품이 포함되어 있습니다.
                </p>
                <p className="mcom_noti_txt">
                  오픈마켓 상품의 경우, ㈜에스에스지닷컴은 통신판매중개자로서
                  거래 당사자가 아니며, 입점 판매사가 등록한 상품정보 및 거래
                  등에 대해 책임을 지지 않습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mnodr_btn ty_point ty_m payTracking"
        style={{ position: 'fixed', bottom: 0 }}
      >
        <span style={{ fontWeight: '600' }}>160,140원</span> 결제하기
      </button>
    </div>
  );
}

export default OrderPage;
