/* eslint-disable prefer-template */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { MobileHeader } from '../../components/ui/index';
import {
  OrderChangeDestinationPage,
  OrderChangeRecipientPage,
  OrderChangeShippingMessagePage,
} from './index';

function OrderPage() {
  const date = new Date();
  const location = useLocation();

  const productCnt = location.state.count;
  const productPrice = location.state.data.price;
  const salePrice = productPrice * (location.state.data.sale / 100);
  const totalPrice = productPrice - salePrice;
  // const deliveryFee = location.state.delivery;

  const [changeTitle, setChangeTitle] = useState('결제하기');
  const [userData, setUserData] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [submitForm, setSubmitForm] = useState({
    refundType: 0,
    recipient: '',
    recipientPhone: '',
    addrName: '',
    streetAddr: '',
    zipCode: '',
    shippingMsg: '',
    orderDtoReq: [0, 0, 0],
  });

  const [clickBtn, setClickBtn] = useState({
    destination: false,
    recipient: false,
    message: false,
  });

  const [clickPayment, setClickPayment] = useState({
    credit: false,
    deposit: false,
  });

  const token = localStorage.getItem('token');

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
        setUserData({
          destination: res[0].data.result,
          recipient: res[1].data.result,
        });
        setStatus('fetching');
      });
    console.log(userData);
  }, []);

  const handleClickPayment = (e) => {
    if (e.target.name === 'credit') {
      setClickPayment({
        credit: true,
        deposit: false,
      });
    }
    if (e.target.name === 'deposit') {
      setClickPayment({
        credit: false,
        deposit: true,
      });
    }
  };

  const handleClickBtn = (e) => {
    if (e.target.name === 'destination') setChangeTitle('배송지 선택');
    if (e.target.name === 'recipient') setChangeTitle('주문자정보 변경');
    if (e.target.name === 'message') setChangeTitle('수령위치 선택');
    setClickBtn({ ...clickBtn, [e.target.name]: !clickBtn[e.target.name] });
    if (Object.values(clickBtn).every((v) => v === false) === true) {
      setChangeTitle('결제하기');
    }
    console.log();
  };

  return (
    { status === 'fetching') && (
    <div style={{ background: '#f5f5f5' }}>
      <MobileHeader title={changeTitle} />
      {clickBtn.destination && (
        <OrderChangeDestinationPage setClickBtn={setClickBtn} />
      )}
      {clickBtn.recipient && (
        <OrderChangeRecipientPage setClickBtn={setClickBtn} />
      )}
      {clickBtn.message && (
        <OrderChangeShippingMessagePage setClickBtn={setClickBtn} />
      )}
      <ul className="mnodr_article_list" id="ordPageShpplocInfoDiv_1">
        <li
          className="mnodr_article_item ordPageShpplocArea fullOrdArea"
          style={{ display: 'list-item' }}
        >
          <article className="mnodr_article mnodr_delivery_infos">
            <div className="mnodr_article_head">
              <div className="mnodr_article_headlt">
                <h2 className="mnodr_tx_tit" style={{ fontWeight: 'bold' }}>
                  배송지 : {userData.destination.addrName}
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
                  [{userData.destination.zipCode}]{' '}
                  {userData.destination.streetAddr}
                </p>
                <div className="mnodr_tx_wrap ty_space">
                  <span className="mnodr_tx_size2 mnodr_tx_gray">
                    <span id="dispRcptpeNm_0">
                      {userData.destination.recipient}{' '}
                    </span>
                    /<span id="dispHpno_0"> {userData.destination.phone}</span>
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
                      -{' '}
                      <em className="ssg_price dispTotItemEnuriWithout10Amt">
                        {salePrice.toLocaleString()}
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
                        (clickPayment.credit ? ' on' : '')
                      }
                      onClick={handleClickPayment}
                    >
                      신용카드
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      name="deposit"
                      className={
                        'mnodr_pay_tab payTracking' +
                        (clickPayment.deposit ? ' on' : '')
                      }
                      onClick={handleClickPayment}
                    >
                      무통장 입금
                    </button>
                  </li>
                </ul>
                {clickPayment.credit && (
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
                          <option
                            value="07"
                            isptype=""
                            title="신한카드(925*)"
                            cardseq="2021092517170821"
                            hyundaimpointyn="Y"
                          >
                            신한카드(925*) / 4518 **** **** 925*
                          </option>
                          <option
                            value="76"
                            isptype="20"
                            title="SSG.COM카드 EDITION2"
                          >
                            SSG.COM카드 EDITION2
                          </option>
                          <option value="74" isptype="20" title="SSG.COM카드">
                            SSG.COM카드
                          </option>
                          <option
                            value="66"
                            isptype="20"
                            title="이마트e카드(현대카드)"
                          >
                            이마트e카드(현대카드)
                          </option>
                          <option value="08" isptype="20" title="현대카드">
                            현대카드
                          </option>
                          <option
                            value="64"
                            isptype="10"
                            title="이마트KB국민카드"
                          >
                            이마트KB국민카드
                          </option>
                          <option value="02" isptype="10" title="KB국민카드">
                            KB국민카드
                          </option>
                          <option
                            value="62"
                            isptype="20"
                            title="이마트삼성카드"
                          >
                            이마트삼성카드
                          </option>
                          <option
                            value="75"
                            isptype="20"
                            title="SSG.COM 삼성카드"
                          >
                            SSG.COM 삼성카드
                          </option>
                          <option
                            value="61"
                            isptype="20"
                            title="신세계삼성카드"
                          >
                            신세계삼성카드
                          </option>
                          <option
                            value="67"
                            isptype="20"
                            title="트레이더스삼성카드"
                          >
                            트레이더스삼성카드
                          </option>
                          <option value="06" isptype="20" title="삼성카드">
                            삼성카드
                          </option>
                          <option
                            value="63"
                            isptype="20"
                            title="이마트신한카드"
                          >
                            이마트신한카드
                          </option>
                          <option
                            value="70"
                            isptype="20"
                            title="신세계신한카드"
                          >
                            신세계신한카드
                          </option>
                          <option value="07" isptype="20" title="신한카드">
                            신한카드
                          </option>
                          <option value="01" isptype="10" title="비씨카드">
                            비씨카드
                          </option>
                          <option
                            value="73"
                            isptype="20"
                            title="신세계하나체크카드"
                          >
                            신세계하나체크카드
                          </option>
                          <option value="03" isptype="20" title="하나카드">
                            하나카드
                          </option>
                          <option value="38" isptype="20" title="롯데카드">
                            롯데카드
                          </option>
                          <option value="11" isptype="20" title="NH카드">
                            NH카드
                          </option>
                          <option
                            value="72"
                            isptype="10"
                            title="카카오뱅크카드"
                          >
                            카카오뱅크카드
                          </option>
                          <option
                            value="89"
                            isptype="20"
                            title="신세계씨티카드"
                          >
                            신세계씨티카드
                          </option>
                          <option value="16" isptype="20" title="씨티카드">
                            씨티카드
                          </option>
                          <option
                            value="65"
                            isptype="10"
                            title="이마트우리체크카드"
                          >
                            이마트우리체크카드
                          </option>
                          <option value="15" isptype="10" title="우리카드">
                            우리카드
                          </option>
                          <option
                            value="18"
                            isptype="10"
                            title="IBK기업은행카드"
                          >
                            IBK기업은행카드
                          </option>
                          <option value="69" isptype="10" title="이마트SC카드">
                            이마트SC카드
                          </option>
                          <option value="68" isptype="10" title="신세계SC카드">
                            신세계SC카드
                          </option>
                          <option value="17" isptype="10" title="SC은행카드">
                            SC은행카드
                          </option>
                          <option value="71" isptype="10" title="SSGPAY카드">
                            SSGPAY카드
                          </option>
                          <option value="22" isptype="10" title="광주카드">
                            광주카드
                          </option>
                          <option value="13" isptype="10" title="수협카드">
                            수협카드
                          </option>
                          <option value="21" isptype="10" title="제주카드">
                            제주카드
                          </option>
                          <option value="23" isptype="10" title="전북카드">
                            전북카드
                          </option>
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
                {clickPayment.deposit && (
                  <div className="mnodr_panel_sec paymtMeansArea virtualAccountPaymtMeansArea">
                    <div className="mnodr_form_cont">
                      <span className="mnodr_inp_sel ty_black">
                        <select
                          id="virtualAccountBankSelect"
                          title="입금은행을 선택하세요."
                        >
                          <option value="">입금은행을 선택하세요.</option>
                          <option value="03">기업은행</option>
                          <option value="04">국민은행</option>
                          <option value="11">농협중앙회</option>
                          <option value="20">우리은행</option>
                          <option value="23">SC제일은행</option>
                          <option value="26">신한은행</option>
                          <option value="31">대구은행</option>
                          <option value="32">부산은행</option>
                          <option value="71">우체국</option>
                          <option value="81">하나은행</option>
                        </select>
                      </span>
                    </div>
                    <div className="mnodr_form_cont ty_space">
                      <span className="mnodr_inp_txt">
                        <input
                          type="text"
                          placeholder="입금자명을 입력해 주세요."
                          title="입금자명을 입력해 주세요."
                        />
                      </span>
                    </div>
                    <div className="mnodr_form_cont ty_space">
                      <p className="mnodr_tx_desc">
                        입금기한 :{' '}
                        <span className="mnodr_tx_point">
                          {date.getFullYear()}년 {date.getMonth() + 1}월{' '}
                          {date.getDate() + 1}일까지{' '}
                        </span>
                        미입금시 자동취소
                      </p>
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
                    {/* {deliveryFee.toLocaleString()} */}
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
                    {/* {deliveryFee.toLocaleString()} */}
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
                        {userData.recipient.name}
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
                        {userData.recipient.phone}
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
                        {userData.recipient.email}
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
                          {userData.recipient.refundCheck}
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
                      {/* {orderInfo.message} */}
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
    </div>
    )}
  );
}

export default OrderPage;
