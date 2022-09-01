/* eslint-disable react/no-array-index-key */
/* eslint-disable prefer-template */
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import { useRecoilState } from 'recoil';
import { isModalOpenState } from '../../recoil/states';

import { PaymentMeansAddCardModal } from '../../components/contents/index';
import { CustomAlert } from '../../components/common/index';
import { MobileHeader } from '../../components/ui/index';
import {
  OrderChangeDestinationPage,
  OrderChangeRecipientPage,
  OrderChangeShippingMessagePage,
} from './index';
import './OrderPage.scss';

function OrderPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const productCnt = location.state.count;
  const productPrice = location.state.data.price;
  const salePrice = productPrice * (location.state.data.sale / 100);
  const totalPrice = productPrice - salePrice;
  const deliveryFee = 3000;

  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const [destinationData, setDestinationData] = useState({});
  const [recipientData, setRecipientData] = useState({});
  const [shippingMessageData, setShippingMessageData] = useState('');
  const [refundTypeData, setRefundTypeData] = useState(0);
  const [userPaymentData, setUserPaymentData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [clickPayment, setClickPayment] = useState(false);
  const sendNextPageData = {
    name: recipientData.name,
    phone: recipientData.phone,
    zipCode: destinationData.zipCode,
    streetAddr: destinationData.streetAddr,
    totalPrice: totalPrice * productCnt + deliveryFee,
  };
  console.log(recipientData, destinationData, location.state);

  const [clickBtn, setClickBtn] = useState({
    destination: false,
    recipient: false,
    message: false,
  });

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (userPaymentData.refundCheck === '주문 시 결제수단으로 환불')
      setRefundTypeData(0);
    if (userPaymentData.refundCheck === 'SSG MONEY로 환불')
      setRefundTypeData(1);
  }, [userPaymentData.refundCheck]);

  useEffect(() => {
    axios
      .all([
        axios.get('http://13.209.26.150:9000/users/shipping-addr/default', {
          headers: {
            Authorization: JSON.parse(token),
          },
        }),
        axios.get('http://13.209.26.150:9000/users/info', {
          headers: {
            Authorization: JSON.parse(token),
          },
        }),
      ])
      .then((res) => {
        setDestinationData(res[0].data.result);
        setRecipientData(res[1].data.result);
        setIsFetching(true);
        console.log(location.state);
      });
  }, []);

  const handleAddPaymentModal = () => {
    setIsModalOpen(true);
    setClickPayment(false);
  };

  const handleClickPayment = () => {
    setClickPayment((prev) => !prev);
    axios
      .get('http://13.209.26.150:9000/users/payment', {
        headers: {
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        if (res.data.result.length === 0) {
          confirmAlert({
            // eslint-disable-next-line react/no-unstable-nested-components
            customUI: ({ onClose }) => (
              <CustomAlert
                title="등록된 결제수단이 없음"
                desc="결제수단을 등록하시겠습니까?"
                btnTitle="등록"
                onAction={handleAddPaymentModal}
                onClose={onClose}
              />
            ),
          });
        } else {
          setUserPaymentData(res.data.result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickBtn = (e) => {
    if (e.target.name === 'destination')
      setClickBtn({ ...clickBtn, destination: true });
    if (e.target.name === 'recipient')
      setClickBtn({ ...clickBtn, recipient: true });
    if (e.target.name === 'message')
      setClickBtn({ ...clickBtn, message: true });
    console.log(e.target.name, clickBtn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // axios
    //   .post(
    //     'http://13.209.26.150:9000/users/order',
    //     {
    //       refundType: refundTypeData,
    //       recipient: recipientData.name,
    //       recipientPhone: recipientData.phone,
    //       addrName: destinationData.addrName,
    //       streetAddr: destinationData.streetAddr,
    //       zipCode: destinationData.zipCode,
    //       shippingMsg: shippingMessageData,
    //       orderDtoReq: [
    //         location.state.optionId,
    //         productCnt,
    //         totalPrice * productCnt + deliveryFee,
    //       ],
    //     },
    //     {
    //       headers: {
    //         Authorization: JSON.parse(token),
    //       },
    //     },
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    navigate('/completeOrder', { state: sendNextPageData });
  };

  return (
    <>
      {clickBtn.destination && (
        <OrderChangeDestinationPage
          setClickBtn={setClickBtn}
          setDestinationData={setDestinationData}
        />
      )}
      {clickBtn.recipient && (
        <OrderChangeRecipientPage
          setClickBtn={setClickBtn}
          recipientData={recipientData}
          setRecipientData={setRecipientData}
        />
      )}
      {clickBtn.message && (
        <OrderChangeShippingMessagePage
          setClickBtn={setClickBtn}
          setShippingMessageData={setShippingMessageData}
        />
      )}
      {isModalOpen && <PaymentMeansAddCardModal />}
      <form
        style={{ background: '#f5f5f5', position: 'relative' }}
        onSubmit={handleSubmit}
      >
        <MobileHeader title="결제하기" />
        {isFetching && (
          <ul className="mnodr_article_list" id="ordPageShpplocInfoDiv_1">
            <li
              className="mnodr_article_item ordPageShpplocArea fullOrdArea"
              style={{ display: 'list-item' }}
            >
              <article className="mnodr_article mnodr_delivery_infos">
                <div className="mnodr_article_head">
                  <div className="mnodr_article_headlt">
                    <h2 className="mnodr_tx_tit" style={{ fontWeight: 'bold' }}>
                      배송지 : {destinationData.addrName}
                    </h2>
                  </div>
                  <div className="mnodr_article_headrt">
                    <button
                      type="button"
                      className="mnodr_btn ty_grayline ty_xxs payTracking"
                      name="destination"
                      onClick={handleClickBtn}
                    >
                      변경
                    </button>
                  </div>
                </div>
                <div className="mnodr_article_cont ty_pull">
                  <div className="mnodr_form_sec">
                    <p className="mnodr_tx_desc">
                      [{destinationData.zipCode}] {destinationData.streetAddr}
                    </p>
                    <div className="mnodr_tx_wrap ty_space">
                      <span className="mnodr_tx_size2 mnodr_tx_gray">
                        <span id="dispRcptpeNm_0">
                          {destinationData.recipient}{' '}
                        </span>
                        /<span id="dispHpno_0"> {destinationData.phone}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        )}

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
                        -{' '}
                        <em className="ssg_price dispTotItemEnuriWithout10Amt">
                          {(salePrice * productCnt).toLocaleString()}
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
                        name="credit"
                        className={
                          'mnodr_pay_tab payTracking' +
                          (clickPayment ? ' on' : '')
                        }
                        onClick={handleClickPayment}
                      >
                        신용카드
                      </button>
                    </li>
                  </ul>
                  {clickPayment && (
                    <div
                      className="mnodr_panel_sec paymtMeansArea creditCrdPaymtMeansArea"
                      style={{ display: 'block' }}
                    >
                      <div className="mnodr_form_cont">
                        <span className="mnodr_inp_sel ty_black">
                          <select
                            id="creditCrdCdSelect"
                            title="카드를 선택하세요."
                          >
                            <option value="">카드를 선택하세요.</option>
                            {userPaymentData &&
                              userPaymentData.map((data, i) => (
                                <option key={`data-${i}`}>
                                  {data.cardCompany} / {data.cardNumber}
                                </option>
                              ))}
                          </select>
                        </span>
                      </div>
                      <div className="mnodr_form_cont">
                        <span className="mnodr_inp_sel ty_black">
                          <select
                            id="creditCrdInstallmentSelect"
                            title="카드 할부를 선택하세요."
                          >
                            <option value="">일시불</option>
                            <option
                              value="2"
                              data-noint="Y"
                              data-insm-div-cd="10"
                            >
                              2개월 무이자
                            </option>
                            <option
                              value="3"
                              data-noint="Y"
                              data-insm-div-cd="10"
                            >
                              3개월 무이자
                            </option>
                            <option
                              value="4"
                              data-noint="Y"
                              data-insm-div-cd="10"
                            >
                              4개월 무이자
                            </option>
                            <option
                              value="5"
                              data-noint="Y"
                              data-insm-div-cd="10"
                            >
                              5개월 무이자
                            </option>
                            <option
                              value="6"
                              data-noint="Y"
                              data-insm-div-cd="10"
                            >
                              6개월 무이자
                            </option>
                            <option
                              value="7"
                              data-noint="Y"
                              data-insm-div-cd="10"
                            >
                              7개월 무이자
                            </option>
                          </select>
                        </span>
                      </div>
                    </div>
                  )}
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
                    +{' '}
                    <em className="ssg_price dispTotPayOrdAmt">
                      {(productPrice * productCnt).toLocaleString()}
                    </em>
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
                    -{' '}
                    <em className="ssg_price dispTotDcAmt">
                      {' '}
                      {(salePrice * productCnt).toLocaleString()}
                    </em>
                    <span className="ssg_tx">원</span>
                  </span>
                </dd>
              </dl>
              <ul className="mnodr_paydetail_sublst dispTotDcAmtDtl">
                <li className="dispTotDcAmtWithoutCrdDcArea">
                  <span className="mnodr_paydetail_tx">상품할인</span>
                  <span className="mnodr_paydetail_money">
                    -
                    <em className="ssg_price dispTotDcAmtWithoutCrdDc">
                      {' '}
                      {(salePrice * productCnt).toLocaleString()}
                    </em>
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
                    +
                    <em className="ssg_price paySummaryTotOrdCstAmt">
                      {deliveryFee.toLocaleString()}
                    </em>
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
                    +
                    <em className="ssg_price paySummaryOrdCstAmt">
                      {' '}
                      {deliveryFee.toLocaleString()}
                    </em>
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
                      {(totalPrice * productCnt + 3000).toLocaleString()}
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
                type="submit"
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

        {isFetching && (
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
                      name="recipient"
                      onClick={handleClickBtn}
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
                            {recipientData.name}
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
                            {recipientData.phone}
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
                            {recipientData.email}
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
                              {recipientData.refundCheck}
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
        )}

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
                    name="message"
                    onClick={handleClickBtn}
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
                        {shippingMessageData}
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
                            src={location.state.data.productImg[0].imgUrl}
                            alt={location.state.data.name}
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

                          <em id="dispSalestrNm_1">
                            {location.state.data.storeName}
                          </em>
                        </div>
                        <p className="mnodr_unit_tit ">
                          <a href="/">
                            <strong
                              className="mnodr_unit_brd"
                              style={{ fontWeight: 'bold' }}
                            >
                              {location.state.data.name}
                            </strong>
                          </a>
                        </p>

                        <div className="mnodr_unit_prdpay ty_space">
                          <div className="mnodr_unit_l">
                            <div className="mnodr_unit_oldprice ty2">
                              <del>
                                <span className="blind">정상가격</span>
                                <em className="ssg_price">
                                  {productPrice.toLocaleString()}
                                </em>
                              </del>
                              <span className="ssg_tx">원</span>
                            </div>

                            <div className="mnodr_unit_newprice ty2">
                              <span className="blind">판매가격</span>
                              <em className="ssg_price">
                                {(productPrice - salePrice).toLocaleString()}
                              </em>
                              <span className="ssg_tx">원</span>
                            </div>
                          </div>
                          <div className="mnodr_unit_r">
                            <span className="mnodr_unit_option">
                              수량 {productCnt}개
                            </span>
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
          <span style={{ fontWeight: '600' }}>
            {(totalPrice * productCnt + 3000).toLocaleString()}
          </span>
          원 결제하기
        </button>
      </form>
    </>
  );
}

export default OrderPage;
