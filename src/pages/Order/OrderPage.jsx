import React from 'react';
import { MobileHeader } from '../../components/ui/index';

function OrderPage() {
  return (
    <div style={{ background: '#f5f5f5' }}>
      <MobileHeader title="결제하기" />
      <ul className="mnodr_article_list" id="ordPageShpplocInfoDiv_1">
        <li
          className="mnodr_article_item ordPageShpplocArea quickOrdArea"
          style={{ display: 'none' }}
        >
          <article className="mnodr_article mnodr_delivery_infos">
            <div className="mnodr_article_head">
              <div className="mnodr_article_headlt">
                <p className="mnodr_tx_desc">
                  <strong>[본가] 부산광역시 사상구</strong>
                </p>
              </div>
              <div className="mnodr_article_headrt">
                <button
                  type="button"
                  className="mnodr_btn ty_grayline ty_xxs payTracking"
                  data-pt-click="주문서|퀵오더|배송지변경"
                  name="btnShowTgtDiv"
                  data-target-div="shpplocInfoDiv_1"
                >
                  변경
                </button>
              </div>
            </div>
          </article>
        </li>
        <li
          className="mnodr_article_item ordPageShpplocArea fullOrdArea"
          style={{ display: 'list-item' }}
        >
          <article className="mnodr_article mnodr_delivery_infos">
            <div className="mnodr_article_head">
              <div className="mnodr_article_headlt">
                <h2 className="mnodr_tx_tit" style={{ fontWeight: 'bold' }}>
                  배송지 : 본가
                </h2>
              </div>
              <div className="mnodr_article_headrt">
                <button
                  type="button"
                  className="mnodr_btn ty_grayline ty_xxs payTracking"
                  data-pt-click="주문서|배송지|변경"
                  name="btnShowTgtDiv"
                  data-target-div="shpplocInfoDiv_1"
                >
                  변경
                </button>
              </div>
            </div>
            <div className="mnodr_article_cont ty_pull">
              <div className="mnodr_form_sec">
                <p className="mnodr_tx_desc">[46930] 부산광역시 사상구</p>
                <div className="mnodr_tx_wrap ty_space">
                  <span className="mnodr_tx_size2 mnodr_tx_gray">
                    <span id="dispRcptpeNm_0">최민정</span>/
                    <span id="dispHpno_0">010-0000-0000</span>
                  </span>
                  <span className="mnodr_chk">
                    <input
                      type="checkbox"
                      id="relaxNoUseYn_0"
                      name="shpploc[0].relaxNoUseYn"
                      value="Y"
                      className="blind payTracking"
                      data-pt-click="|배송지|안심번호 사용"
                    />
                    <label htmlFor="relaxNoUseYn_0">
                      <span className="mnodr_chk_tx">안심번호 사용</span>
                    </label>
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
              <input type="hidden" id="totBsellAmt" value="0" />
            </div>
            <div className="mnodr_article_cont">
              <div className="mnodr_discount_sec ty_space discountBenefitDtlArea">
                <dl className="mnodr_priceitem ty_narrow">
                  <dt>
                    <span className="mnodr_priceitem_stit">상품할인</span>
                    <button
                      type="button"
                      className="mnodr_btn_info_detail modal-fix-open payTracking"
                      data-pt-click="주문서|할인혜택|상품할인금액_상세"
                      data-layer-target="#mnodr_modal_discount_price"
                    >
                      <i className="mnodr_ic ic_info_detail">
                        <span className="blind" />
                      </i>
                    </button>
                  </dt>
                  <dd>
                    <span className="mnodr_tx_primary">
                      -{' '}
                      <em className="ssg_price dispTotItemEnuriWithout10Amt">
                        5,400
                      </em>
                      <span className="ssg_tx">원</span>
                    </span>
                  </dd>
                </dl>

                <dl
                  className="mnodr_priceitem fullOrdArea"
                  style={{ display: 'flex' }}
                >
                  <dt>
                    <span className="mnodr_priceitem_stit">
                      결제할인 (쿠폰 7장 보유)
                    </span>
                  </dt>
                  <dd>
                    <button
                      type="button"
                      className="mnodr_coupon_btn ty_blk payTracking fullOrdArea"
                      id="secCpnApplyButton"
                      data-pt-click="주문서|할인혜택|쿠폰 할인 적용하기"
                      name="btnShowTgtDiv"
                      data-target-div="divSecCpnArea"
                      style={{ display: 'inline-block' }}
                    >
                      쿠폰선택
                    </button>
                  </dd>
                </dl>

                <dl
                  className="mnodr_priceitem cardIssueCouponArea fullOrdArea"
                  data-display="Y"
                  style={{ display: 'flex' }}
                >
                  <dt>
                    <span className="mnodr_priceitem_stit">
                      카드 첫결제 혜택
                    </span>
                  </dt>
                  <dd>
                    <span className="mnodr_tx_primary">
                      -{' '}
                      <em className="ssg_price cardIssueCouponDiscountAmt">
                        0
                      </em>
                      <span className="ssg_tx">원</span>
                    </span>
                  </dd>
                </dl>
                <ul
                  className="mnodr_bene_sublst cardIssueCouponArea fullOrdArea"
                  data-display="Y"
                  style={{ display: 'block' }}
                >
                  <li
                    className="ssgcomSamsungCardIssueCouponArea fullOrdArea"
                    data-display="Y"
                    style={{ display: 'list-item' }}
                  >
                    <span className="mnodr_bene_chk">
                      <input
                        type="checkbox"
                        id="ssgcomSamsungCardIssueCouponCheckbox"
                        name="cardIssueCouponCheckbox"
                        value="75"
                        className="blind payTracking"
                        data-amt="30000"
                        data-pt-click="주문서|할인혜택|SSG.COM삼성카드30000원 할인받기"
                      />
                      <label htmlFor="ssgcomSamsungCardIssueCouponCheckbox">
                        <span className="mnodr_bene_bg" />
                        <span className="mnodr_bene_tx">
                          <strong>30,000원 할인받기</strong>
                          SSG.COM 삼성카드
                        </span>
                      </label>
                    </span>
                  </li>
                  <li
                    className="ssgcomCardEd2IssueCouponArea fullOrdArea"
                    data-display="Y"
                    style={{ display: 'list-item' }}
                  >
                    <span className="mnodr_bene_chk">
                      <input
                        type="checkbox"
                        id="ssgcomCardEd2IssueCouponCheckbox"
                        name="cardIssueCouponCheckbox"
                        value="76"
                        className="blind payTracking"
                        data-amt="10000"
                        data-pt-click="주문서|할인혜택|SSG.COM카드Edition210000원 할인받기"
                      />
                      <label htmlFor="ssgcomCardEd2IssueCouponCheckbox">
                        <span className="mnodr_bene_bg" />
                        <span className="mnodr_bene_tx">
                          <strong>
                            10,000원 할인받고
                            <br />
                            매월 스마일클럽 제공
                          </strong>
                          SSG.COM카드 Edition2
                        </span>
                      </label>
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className="mnodr_article_foot fullOrdArea"
                style={{ display: 'block' }}
              >
                <div className="mnodr_article_item">
                  <article className="mnodr_article">
                    <div className="mnodr_form_sec">
                      <div className="mnodr_form_cont">
                        <span className="mnodr_chk ">
                          <input
                            type="checkbox"
                            id="discountRecommendCheckbox1"
                            name="discountRecommendCheckbox"
                            value="10"
                            className="blind payTracking"
                            data-pt-click="주문서|할인혜택|최대 할인혜택 바로 적용"
                          />
                          <label htmlFor="discountRecommendCheckbox1">
                            혜택이 좋은 쿠폰과 카드를 추천해주세요
                          </label>
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </article>

      <article
        id="pointArticle"
        className="mnodr_article mnodr_acdo_toggle fullOrdArea on"
        style={{ display: 'block' }}
      >
        <div
          className="mnodr_article_head mnodr_acdo_btn payTracking on"
          data-pt-click="주문서|포인트|펼침"
          id="pointToggleButton"
        >
          <div className="mnodr_article_headlt">
            <h2 className="mnodr_tx_tit" style={{ fontWeight: 'bold' }}>
              포인트
              <span className="totPointAmtArea">
                : <span id="totPointAmt">20,838</span>원 보유
              </span>
            </h2>
          </div>
          <div className="mnodr_article_headrt">
            <button type="button" className="mnodr_toggle_btn">
              <span className="blind">포인트사용 보기</span>
            </button>
          </div>
        </div>
        <div className="mnodr_article_head_subtx mnodr_pt_desc">
          <span className="mnodr_tx_desc mnodr_tx_gray">
            SSG MONEY, 신세계포인트 외 제휴포인트
          </span>
        </div>
        <div className="mnodr_article_cont mnodr_acdo_cont ty_toggle">
          <div className="mnodr_point_sec">
            <div className="mnodr_form_sec ty10 pointUseDivArea">
              <p className="mnodr_tx_desc">
                SSG MONEY
                <span id="ssgMoneyBaseAmt"> : 20,409원</span>
              </p>
              <div className="mnodr_form_cont">
                <div className="mnodr_inp_btn_grp">
                  <span className="mnodr_inp_txt">
                    <input
                      type="number"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      id="ssgMoneyUseInput"
                      name="paymtMeans[1].amt"
                      value=""
                      placeholder="0원"
                      className="ty_txt_right pointUseInput"
                    />
                  </span>
                  <button
                    type="button"
                    id="ssgMoneyUseAllButton"
                    className="mnodr_btn mnodr_inp_btn pointUseAllButton payTracking"
                    data-pt-click="주문서|포인트|SSG MONEY_전액사용"
                  >
                    <span className="mnodr_btn_tx">전액사용</span>
                  </button>
                </div>
              </div>
              <input
                type="hidden"
                name="paymtMeans[1].paymtMeansCd"
                value="617"
              />
            </div>
          </div>
          <div className="mnodr_form_sec ty10 pointUseDivArea">
            <p className="mnodr_tx_desc">
              신세계포인트<span id="shinsegaePointBaseAmt"> : 429원</span>
            </p>
            <div className="mnodr_form_cont">
              <div className="mnodr_inp_btn_grp">
                <span className="mnodr_inp_txt">
                  <input
                    type="number"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    id="shinsegaePointUseInput"
                    name="paymtMeans[2].amt"
                    value=""
                    placeholder="0원"
                    className="ty_txt_right pointUseInput"
                  />
                </span>
                <button
                  type="button"
                  id="shinsegaePointUseAllButton"
                  className="mnodr_btn mnodr_inp_btn pointUseAllButton payTracking"
                  data-pt-click="주문서|포인트|신세계포인트_전액사용"
                >
                  <span className="mnodr_btn_tx">전액사용</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mnodr_form_sec ty10 pointUseDivArea">
            <p className="mnodr_tx_desc">
              OK 캐쉬백
              <span id="okCashBagBaseAmt" />
            </p>
            <div className="mnodr_form_cont">
              <div className="mnodr_inp_btn_grp">
                <span className="mnodr_inp_txt">
                  <input
                    type="number"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    id="okCashBagUseInput"
                    name="paymtMeans[4].amt"
                    value=""
                    placeholder="0원"
                    className="ty_txt_right pointUseInput"
                    disabled=""
                  />
                </span>
                <button
                  type="button"
                  id="okCashBagSearchButton"
                  className="mnodr_btn mnodr_inp_btn modal-alert-open payTracking"
                  data-pt-click="주문서|포인트|OK캐쉬백_조회"
                  data-layer-target="#_layerPointokCashbag"
                >
                  <span className="mnodr_btn_tx">조회</span>
                </button>
              </div>
            </div>
            <input
              type="hidden"
              name="paymtMeans[4].paymtMeansCd"
              value="660"
            />
          </div>
          <div className="mnodr_form_sec ty10 pointUseDivArea">
            <p className="mnodr_tx_desc">
              PAYCO포인트
              <span id="paycoPointBaseAmt" />
            </p>
            <div className="mnodr_form_cont">
              <div className="mnodr_inp_btn_grp">
                <span className="mnodr_inp_txt">
                  <input
                    type="number"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    id="paycoPointUseInput"
                    name="paymtMeans[5].amt"
                    value=""
                    placeholder="0원"
                    className="ty_txt_right pointUseInput"
                    disabled=""
                  />
                </span>
                <button
                  type="button"
                  id="paycoPointSearchButton"
                  className="mnodr_btn mnodr_inp_btn pointSearchButton payTracking"
                  data-pt-click="주문서|포인트|PAYCO포인트_조회"
                >
                  <span className="mnodr_btn_tx">조회</span>
                </button>
              </div>
            </div>
            <input
              type="hidden"
              name="paymtMeans[5].paymtMeansCd"
              value="670"
            />
          </div>
          <div className="mnodr_form_sec ty3 pointUseDivArea">
            <p className="mnodr_tx_desc">
              U+ 라이프콕
              <span id="uplusPointBaseAmt" />
            </p>
            <div className="mnodr_form_cont">
              <div className="mnodr_inp_btn_grp">
                <span className="mnodr_inp_txt">
                  <input
                    type="number"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    id="uplusPointUseInput"
                    name="paymtMeans[6].amt"
                    value=""
                    placeholder="0원"
                    className="ty_txt_right pointUseInput"
                    disabled=""
                  />
                </span>
                <button
                  type="button"
                  id="uplusPointSearchButton"
                  className="mnodr_btn mnodr_inp_btn pointSearchButton payTracking"
                  data-pt-click="주문서|포인트|U+라이프콕_조회"
                >
                  <span className="mnodr_btn_tx">조회</span>
                </button>
              </div>
            </div>
            <input
              type="hidden"
              name="paymtMeans[6].paymtMeansCd"
              value="651"
            />
          </div>
          <div className="mnodr_article_flex">
            <button
              type="button"
              className="mnodr_charge_btn payTracking"
              data-pt-click="주문서|포인트|신세계상품권_SSGMONEY_충전"
              id="ssgMoneyConvertButton"
            >
              <span className="mnodr_tx_desc2">
                <strong style={{ fontWeight: 'bold' }}>
                  신세계상품권으로 SSG MONEY를 충전할 수 있어요.
                </strong>
              </span>
              <span className="mnodr_ic_arr" />
            </button>
          </div>
        </div>
        <div className="mnodr_point_sec">
          <div className="mnodr_form_sec ty3 mnodr_acdo_toggle ty_depth2">
            <div className="mnodr_form_cont">
              <span className="mnodr_chk">
                <input
                  type="checkbox"
                  id="shinsegaePointCardSavingCheckbox"
                  className="blind payTracking pointSavingCheckbox"
                  data-pt-click="주문서|포인트|신세계포인트 카드 적립_체크"
                  checked=""
                />
                <label htmlFor="shinsegaePointCardSavingCheckbox">
                  <span className="mnodr_tx_desc">신세계포인트 카드 적립</span>
                </label>
                <button
                  type="button"
                  id="shinsegaePointToggleButton"
                  className="mnodr_acdo_btn mnodr_arrow_btn payTracking"
                  data-pt-click="주문서|포인트|신세계포인트 카드 적립_펼침"
                >
                  <span className="blind">더보기</span>
                </button>
              </span>
              <div className="mnodr_acdo_cont ty_toggle ty_depth2">
                <div className="mnodr_point_dtl">
                  <p className="mnodr_tx_desc">카드번호</p>
                  <span className="mnodr_inp_txt">
                    <input
                      type="number"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      id="shinsegaePointCardNoInput"
                      value="9350130104047207"
                      placeholder="- 를 제외한 숫자만 입력해 주세요."
                      className="pointSavingNoInput"
                      maxLength="16"
                    />
                  </span>
                  <ul className="mnodr_bullst ty5">
                    <li>
                      신세계·이마트 제휴카드 고객은 해당 카드로 결제하셔야
                      신세계포인트가 0.7% 적립됩니다. (단, 신세계씨티카드는
                      0.2%, 이마트KB/이마트SC /신세계SC 카드는 0.1% 적립)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <input type="hidden" id="paymtMeansCd" name="paymtMeansCd" value="" />
        <div className="mnodr_article_cont ty_pull">
          <div className="mnodr_ssgpay_acdowrap" id="_mnodr_pay_module">
            <div className="mnodr_ssgpay_acdo mnodr_ssgpay_acdotoggle on">
              <input
                type="radio"
                id="_mnodrpay_ssgpay"
                name="_mnodrpay_group"
                className="mnodr_ssgpay_acdotogglerdo blind payTracking"
                data-pt-click="주문서|결제방법_SSGPAY카드|선택"
                data-group-name="ssgpay"
                checked=""
              />
              <label
                htmlFor="_mnodrpay_ssgpay"
                aria-expanded="false"
                aria-controls="_mnodrpay_ssgpay_cont"
                id="_mnodrpay_ssgpay_toggle"
                className="mnodr_ssgpay_acdotogglebtn"
                aria-selected="true"
              >
                <div className="mnodr_ssgpay_acdohead">
                  <span className="mnodr_ssgpay_acdocol">
                    <h3 className="mnodr_ssgpay_acdoheadtit">
                      <span className="mnodr_ssgpay_acdoheadtx">
                        <span className="mnodr_tx_ssgpay">
                          <span className="blind">SSGPAY</span>
                        </span>
                        <span className="mnodr_tx_ssgpay_desc">카드</span>
                      </span>
                    </h3>
                  </span>
                </div>
              </label>
              <div
                className="mnodr_ssgpay_acdocont"
                id="_mnodr_ssgpay_cont"
                aria-labelledby="_mnodrpay_ssgpay_toggle"
              >
                <div
                  className="mnodr_ssgpay_slider swiper_box_wrapper ssgpayWebExpDiv ssgpayWebExpDiv_0000 ssgpayWebExpDiv_1002 ssgpayWebExpDiv_1012 ssgpayWebExpDiv_2202"
                  id="_mnodr_ssgpay_slider"
                >
                  <div className="swiper_box">
                    <div className="swiper-container swiper-container-horizontal swiper-container-ios">
                      <div
                        className="swiper-wrapper"
                        id="ssgpayWebPaymtCardSlider"
                        // style="transition-duration: 0ms; transform: translate3d(-526px, 0px, 0px);"
                      >
                        <div
                          className="swiper-slide"
                          style={{ marginRight: '20px' }}
                        >
                          <input
                            type="radio"
                            name="_mnodr_ssgpay_card"
                            id="_mnodr_ssgpay_card_default"
                            className="mnodr_ssgpay_cardrdo"
                            value=""
                            data-pt-change="주문서|결제방법_SSGPAY카드|카드넘김"
                            checked=""
                          />
                          <a href="/" className="mnodr_ssgpay_card ty_swipe">
                            <div className="mnodr_ssgpay_cardimg">
                              <span className="ic_card_swipe" />
                              <div className="mnodr_ssgpay_cardnone">
                                <p className="mnodr_tx_desc">
                                  <strong>신용카드를 선택해주세요.</strong>
                                </p>
                                <p className="mnodr_tx_desc2">
                                  카드에 따라 달라지는
                                  <br />
                                  할인혜택을 확인해보세요.
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="mnodr_ssgpay_carddetail">
                            <div className="mnodr_form_sec ssgpayWebPaymtCardDcDetailArea">
                              <div className="mnodr_card_info">
                                <i className="mnodr_ic ic_card_icon" />
                                <span className="mnodr_tx_desc ty_middle">
                                  <strong>오늘의 행사카드</strong>
                                </span>
                                <span className="mnodr_tx_gray mnodr_disc_card ssgpayWebPaymtCrdDcGuideArea">
                                  KB국민,이마트KB국민,SSG.COM 삼성
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-prev"
                          style={{ marginRight: '20px' }}
                        >
                          <input
                            type="radio"
                            name="_mnodr_ssgpay_card"
                            id="_mnodr_ssgpay_card0"
                            className="mnodr_ssgpay_cardrdo"
                            value="07"
                            data-pt-change="주문서|결제방법_SSGPAY카드|카드넘김"
                            data-cardseq="2021092517170821"
                            data-cardno="4518 **** **** 925*"
                            data-cardnicknm="신한카드(925*)"
                          />
                          <div className="mnodr_ssgpay_carditem">
                            <label
                              htmlFor="_mnodr_ssgpay_card_0"
                              className="blind"
                            >
                              신한카드(925*) 선택하기
                            </label>
                            <div className="mnodr_ssgpay_card">
                              <div
                                className="mnodr_ssgpay_cardimg"
                                style={{ backgroundColor: '#0B1966' }}
                              >
                                <span className="mnodr_ssgpay_cardtag">
                                  최근 결제카드
                                </span>
                                <span className="mnodr_ssgpay_cardbi">
                                  <img
                                    src="https://sui.ssgcdn.com/ui/m_ssg/img/order/card/ordercard-07@2x.png"
                                    alt="카드BI"
                                    aria-hidden="true"
                                  />
                                </span>
                                <div className="mnodr_ssgpay_cardform">
                                  <div className="mnodr_form_sec ty8 ty_dim">
                                    <dl className="mnodr_priceitem ty_card">
                                      <dt>
                                        <strong className="mnodr_tx_desc mnodr_tx_white paySummaryCrdDcTitleNm">
                                          결제금액
                                        </strong>
                                      </dt>
                                      <dd>
                                        <strong className="mnodr_tx_desc mnodr_tx_white">
                                          <em className="ssg_price mnodr_tx_size6">
                                            <strong className="paySummaryPayAmt">
                                              177,600
                                            </strong>
                                          </em>
                                          <span className="ssg_tx">원</span>
                                        </strong>
                                      </dd>
                                    </dl>
                                    <div
                                      className="mnodr_modal ty_alert"
                                      role="dialog"
                                      tabIndex="-1"
                                      aria-hidden="true"
                                      id="_layerSsgpayCardBenefitDetail2021092517170821"
                                    >
                                      <div
                                        className="mnodr_modal_wrap"
                                        role="document"
                                      >
                                        <div className="mnodr_modal_cont">
                                          <h1 className="mnodr_tx_tit">
                                            SSGPAY 최적가 상세
                                          </h1>
                                          <div
                                            className="mnodr_discount_sec"
                                            name="ssgpayWebPaymtCrdDcDtlArea"
                                            data-cardseq="2021092517170821"
                                          />
                                        </div>
                                        <footer className="mnodr_modal_foot">
                                          <div className="mnodr_btn_area">
                                            <button
                                              className="mnodr_btn ty_gray ty_sm modal-close-btn"
                                              type="button"
                                            >
                                              닫기
                                            </button>
                                          </div>
                                        </footer>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mnodr_ssgpay_carddetail">
                              <div className="mnodr_form_sec">
                                <dl className="mnodr_form_dl">
                                  <dt className="ty_mid">
                                    <label
                                      htmlFor="_mnodr_ssgpay_card0_sel"
                                      className="mnodr_ssgpay_cardinfo"
                                    >
                                      <span className="mnodr_ssgpay_cardname mnodr_tx_desc2">
                                        신한카드(925*)
                                      </span>
                                      <span className="mnodr_ssgpay_cardnum mnodr_tx_desc2">
                                        4518 **** **** 925*
                                      </span>
                                    </label>
                                  </dt>
                                  <dd>
                                    <span className="mnodr_inp_sel">
                                      <select
                                        id="_mnodr_ssgpay_card0_sel"
                                        className="ssgpayWebPaymtInstallmentSelect"
                                        data-cardseq="2021092517170821"
                                        title="무이자 할부"
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
                                        <option value="8" data-noint="N">
                                          8개월
                                        </option>
                                        <option value="9" data-noint="N">
                                          9개월
                                        </option>
                                        <option value="10" data-noint="N">
                                          10개월
                                        </option>
                                        <option value="11" data-noint="N">
                                          11개월
                                        </option>
                                        <option value="12" data-noint="N">
                                          12개월
                                        </option>
                                      </select>
                                    </span>
                                  </dd>
                                </dl>
                              </div>
                              <div className="mnodr_form_sec">
                                <ul
                                  className="mnodr_form_lst ty_space"
                                  name="ssgpayWebPaymtDtlArea"
                                  data-cardseq="2021092517170821"
                                >
                                  <li>
                                    <span className="mnodr_chk ">
                                      <input
                                        type="checkbox"
                                        id="_mnodr_ssgpay_card0_discount22"
                                        name="ssgpayWebPaymtCrdPointUseCheckbox"
                                        className="blind "
                                        data-cardseq="2021092517170821"
                                      />
                                      <label htmlFor="_mnodr_ssgpay_card0_discount22">
                                        <span className="mnodr_tx_label">
                                          카드포인트 사용
                                        </span>
                                      </label>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-active"
                          style={{ marginRight: '20px' }}
                        >
                          <input
                            type="radio"
                            name="_mnodr_ssgpay_card"
                            id="_mnodr_ssgpay_card_dummy_76"
                            className="mnodr_ssgpay_cardrdo"
                            value="dummy_76"
                            data-crdcd="76"
                            data-pt-change="주문서|결제방법_SSGPAY카드|카드넘김"
                          />
                          <div className="mnodr_ssgpay_carditem">
                            <label
                              htmlFor="_mnodr_ssgpay_card_dummy_76"
                              className="blind"
                            >
                              SSG.COM카드 Edition2 선택하기
                            </label>
                            <div className="mnodr_ssgpay_card">
                              <div
                                className="mnodr_ssgpay_cardimg"
                                style={{ backgroundColor: '#FC336D' }}
                              >
                                <span className="mnodr_ssgpay_cardbi">
                                  <img
                                    src="https://sui.ssgcdn.com/ui/m_ssg/img/order/card/ordercard-76@2x.png"
                                    alt="카드BI"
                                    aria-hidden="true"
                                  />
                                </span>
                                <div className="mnodr_ssgpay_firstbene">
                                  <strong className="mnodr_ssgpay_firstbene_tit">
                                    매월 스마일클럽 제공
                                  </strong>
                                  <span className="mnodr_ssgpay_firstbene_tx">
                                    + 쓱/새벽배송 12% 적립
                                  </span>
                                  <button
                                    type="button"
                                    className="mnodr_ssgpay_btn_firstbene"
                                    name="ssgcomCardIssueButton"
                                    data-crdcd="76"
                                    data-pt-click="주문서|결제방법_SSGPAY카드|SSG.COM카드Edition2_할인받기"
                                  >
                                    <span>혜택 받기</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="mnodr_ssgpay_carddetail">
                              <div className="mnodr_form_sec" />
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          style={{ marginRight: '20px' }}
                        >
                          <input
                            type="radio"
                            name="_mnodr_ssgpay_card"
                            id="_mnodr_ssgpay_card_dummy_75"
                            className="mnodr_ssgpay_cardrdo"
                            value="dummy_75"
                            data-crdcd="75"
                            data-pt-change="주문서|결제방법_SSGPAY카드|카드넘김"
                          />
                          <div className="mnodr_ssgpay_carditem">
                            <label
                              htmlFor="_mnodr_ssgpay_card_dummy_75"
                              className="blind"
                            >
                              SSG.COM 삼성카드 선택하기
                            </label>
                            <div className="mnodr_ssgpay_card">
                              <div
                                className="mnodr_ssgpay_cardimg"
                                style={{ backgroundColor: '#7e8083' }}
                              >
                                <span className="mnodr_ssgpay_cardbi">
                                  <img
                                    src="https://sui.ssgcdn.com/ui/m_ssg/img/order/card/ordercard-06@2x.png"
                                    alt="카드BI"
                                    aria-hidden="true"
                                  />
                                </span>
                                <div className="mnodr_ssgpay_firstbene">
                                  <strong className="mnodr_ssgpay_firstbene_tit">
                                    카드 혜택 바로 적용
                                  </strong>
                                  <span className="mnodr_ssgpay_firstbene_tx">
                                    SSGPAY 등록 시 즉시 사용 가능
                                  </span>
                                  <button
                                    type="button"
                                    className="mnodr_ssgpay_btn_firstbene"
                                    name="ssgcomCardIssueButton"
                                    data-crdcd="75"
                                    data-pt-click="주문서|결제방법_SSGPAY카드|SSG.COM삼성카드_할인받기"
                                  >
                                    <span>혜택 받기</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="mnodr_ssgpay_carddetail">
                              <div className="mnodr_form_sec" />
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ marginRight: '20px' }}
                        >
                          <input
                            type="radio"
                            name="_mnodr_ssgpay_card"
                            id="_mnodr_ssgpay_card5"
                            className="mnodr_ssgpay_cardrdo"
                            value=""
                            data-pt-change="주문서|결제방법_SSGPAY카드|카드넘김"
                          />
                          <a
                            href="/"
                            className="mnodr_ssgpay_card ty_add modal-fix-open"
                            id="ssgpayWebPaymtCrdRegisterAnchor"
                            data-pt-click="주문서|결제방법_SSGPAY카드|카드추가하기"
                          >
                            <div className="mnodr_ssgpay_cardimg">
                              <div className="mnodr_ssgpay_cardnone">
                                <span className="mnodr_tx_desc">
                                  카드 추가하기
                                </span>
                              </div>
                            </div>
                            <div className="mnodr_article_headbubble ty_center">
                              <p>
                                카드를 등록하고 결제하신 분들은
                                <br />
                                청구할인을 약 3배 더 받았어요
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mnodr_ssgpay_acdo mnodr_ssgpay_acdotoggle">
            <input
              type="radio"
              id="_mnodrpay_ssgpay_account"
              name="_mnodrpay_group"
              className="mnodr_ssgpay_acdotogglerdo blind payTracking"
              data-pt-click="주문서|결제방법_SSGPAY계좌|선택"
              data-group-name="ssgpayAcct"
            />
            <label
              htmlFor="_mnodrpay_ssgpay_account"
              aria-expanded="false"
              aria-controls="_mnodrpay_ssgpay_account_cont"
              id="_mnodrpay_ssgpay_account_toggle"
              className="mnodr_ssgpay_acdotogglebtn"
              aria-selected="true"
            >
              <div className="mnodr_ssgpay_acdohead">
                <span className="mnodr_ssgpay_acdocol">
                  <h3 className="mnodr_ssgpay_acdoheadtit">
                    <span className="mnodr_ssgpay_acdoheadtx">
                      <span className="mnodr_tx_ssgpay">
                        <span className="blind">SSGPAY</span>
                      </span>
                      <span className="mnodr_tx_ssgpay_desc">계좌</span>
                    </span>
                  </h3>
                </span>
              </div>
            </label>
            <div
              className="mnodr_ssgpay_acdocont"
              id="_mnodrpay_ssgpay_account_cont"
              aria-labelledby="_mnodrpay_ssgpay_account_toggle"
            >
              <div className="mnodr_selected_carditem ssgpayWebExpDiv ssgpayWebExpDiv_0000 ssgpayWebPaymtAcctArea">
                <div className="mnodr_selected_card">
                  <div
                    className="mnodr_selected_cardbox ty_account"
                    id="ssgpayWebPaymtAcctBackgroundArea"
                    style={{ background: '#645b4' }}
                  >
                    <span className="mnodr_ssgpay_cardbi">
                      <img
                        src="https://sui.ssgcdn.com/ui/m_ssg/img/com_v2/bank/orderbank-04@3x.png"
                        id="ssgpayWebPaymtAcctImgArea"
                        alt="은행BI"
                        aria-hidden="true"
                      />
                    </span>
                    <button
                      type="button"
                      className="mnodr_card_chg_btn modal-fix-open payTracking"
                      data-layer-target="#mnodr_modal_account_select"
                      data-pt-click="주문서|결제방법_SSGPAY계좌|계좌변경"
                    >
                      <span className="mnodr_tx_link">계좌변경</span>
                    </button>
                    <span
                      className="mnodr_account_num"
                      id="ssgpayWebPaymtAcctMaskNum"
                    >
                      1233344****
                    </span>
                  </div>
                </div>
              </div>
              <div className="mnodr_form_sec ty7 ssgpayWebExpDiv ssgpayWebExpDiv_0000 ssgpayWebPaymtAcctArea">
                <div className="mnodr_infobx">
                  <ul className="mnodr_priceinfo_lst">
                    <li>
                      <dl className="mnodr_priceitem ty_card">
                        <dt>
                          <strong className="mnodr_tx_desc paySummaryCrdDcTitleNm">
                            결제금액
                          </strong>
                        </dt>
                        <dd>
                          <strong className="mnodr_tx_desc">
                            <em className="ssg_price mnodr_tx_size6">
                              <strong className="paySummaryPayAmt">
                                177,600
                              </strong>
                            </em>
                            <span className="ssg_tx">원</span>
                          </strong>
                        </dd>
                      </dl>
                    </li>
                  </ul>
                  <div
                    className="mnodr_modal ty_alert"
                    role="dialog"
                    tabIndex="-1"
                    aria-hidden="true"
                    id="_layerSsgpayAcctBenefitDetailBest"
                  >
                    <div className="mnodr_modal_wrap" role="document">
                      <div className="mnodr_modal_cont">
                        <h1 className="mnodr_tx_tit">SSGPAY 최적가 상세</h1>
                        <div
                          className="mnodr_discount_sec"
                          name="ssgpayWebPaymtAcctDcDtlArea"
                        />
                      </div>
                      <footer className="mnodr_modal_foot">
                        <div className="mnodr_btn_area">
                          <button
                            className="mnodr_btn ty_gray ty_sm modal-close-btn"
                            type="button"
                          >
                            닫기
                          </button>
                        </div>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mnodr_modal ty_full"
                role="dialog"
                tabIndex="-1"
                aria-hidden="true"
                id="mnodr_modal_account_select"
              >
                <div className="mnodr_modal_wrap" role="document">
                  <div className="mnodr_modal_head">
                    <h3 className="mnodr_modal_tit">계좌 변경하기</h3>
                    <button
                      type="button"
                      className="mnodr_modal_close modal-close-btn payTracking"
                      data-pt-click="주문서|결제방법_SSGPAY계좌|계좌변경하기_닫기"
                      id="ssgpayWebPaymtAcctListLayerCloseButton"
                    >
                      <i className="mnodr_ic ic_close">
                        <span className="blind">팝업닫기</span>
                      </i>
                    </button>
                  </div>
                  <div className="mnodr_modal_cont">
                    <div className="mnodr_modal_scroll">
                      <div className="mnodr_form_sec ty3">
                        <ul
                          className="mnodr_pay_account_rdolst"
                          id="ssgpayWebPaymtAcctListArea"
                        >
                          <li>
                            <div
                              className="mnodr_selected_cardbox ty_account_pop"
                              style={{ backgroundColor: '#0B1966' }}
                            >
                              <input
                                type="radio"
                                className="blind"
                                name="_ui_account_select"
                                id="_ui_account_select_0"
                                value="088"
                                data-ssgbankcd="26"
                                data-acctseq="2019102301355764"
                                data-banknm="신한은행"
                                data-masknum="1104773*****"
                                checked=""
                              />
                              <label htmlFor="_ui_account_select_0">
                                <span className="mnodr_ssgpay_cardbi">
                                  <img
                                    src="https://sui.ssgcdn.com/ui/m_ssg/img/com_v2/bank/orderbank-26@3x.png"
                                    alt="신한은행"
                                    aria-hidden="true"
                                  />
                                </span>
                                <span className="mnodr_account_num">
                                  1104773*****
                                </span>
                              </label>
                            </div>
                          </li>
                        </ul>
                        <button
                          type="button"
                          className="mnodr_btn_addaccount payTracking"
                          data-pt-click="주문서|결제방법_SSGPAY카드|계좌변경하기_계좌추가하기"
                          name="ssgpayWebPaymtAcctRegisterButton"
                        >
                          <span className="mnodr_btn_addaccount_tx">
                            계좌 추가하기
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mnodr_ssgpay_acdo mnodr_ssgpay_acdotoggle on otherPaymtMeansArea">
            <input
              type="radio"
              id="_mnodrpay_etc"
              name="_mnodrpay_group"
              className="mnodr_ssgpay_acdotogglerdo blind payTracking"
              data-pt-click="주문서|결제방법_다른 결제수단|선택"
              data-group-name="etc"
            />
            <label
              htmlFor="_mnodrpay_etc"
              aria-expanded="false"
              aria-controls="_mnodrpay_etc_cont"
              id="_mnodrpay_etc_toggle"
              className="mnodr_ssgpay_acdotogglebtn"
              aria-selected="true"
            >
              <div className="mnodr_ssgpay_acdohead">
                <span className="mnodr_ssgpay_acdocol">
                  <h3 className="mnodr_ssgpay_acdoheadtit">
                    <span className="mnodr_ssgpay_acdoheadtx">일반결제</span>
                  </h3>
                </span>
              </div>
            </label>
            <div
              className="mnodr_ssgpay_acdocont"
              id="_mnodrpay_etc_cont"
              aria-labelledby="_mnodrpay_etc_toggle"
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
                    <span className="bdg_tx">APP</span>
                    <button
                      type="button"
                      id="ssgpayAppPaymtMeansButton"
                      name="otherPaymtMeansCdButton"
                      className="mnodr_pay_tab payTracking"
                      data-pt-click="주문서|결제방법_다른 결제수단|SSGPAY앱"
                      role="tab"
                    >
                      <span className="mnodr_ic ic_ssgpay">
                        <span className="blind">SSGPAY</span>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      id="kakaopayPaymtMeansButton"
                      name="otherPaymtMeansCdButton"
                      className="mnodr_pay_tab payTracking"
                      data-pt-click="주문서|결제방법_다른 결제수단|카카오페이"
                      role="tab"
                    >
                      <span className="mnodr_ic ic_kakaopay">
                        <span className="blind">카카오 페이</span>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      id="paycoPaymtMeansButton"
                      name="otherPaymtMeansCdButton"
                      className="mnodr_pay_tab payTracking"
                      data-pt-click="주문서|결제방법_다른 결제수단|PAYCO"
                      role="tab"
                    >
                      <span className="mnodr_ic ic_payco">
                        <span className="blind">PAYCO</span>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      id="mobilePayPaymtMeansButton"
                      name="otherPaymtMeansCdButton"
                      className="mnodr_pay_tab payTracking"
                      data-pt-click="주문서|결제방법_다른 결제수단|휴대폰 소액결제"
                      role="tab"
                    >
                      <span>휴대폰 소액결제</span>
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
                  <li>
                    <button
                      type="button"
                      id="paygatePaymtMeansButton"
                      name="otherPaymtMeansCdButton"
                      className="mnodr_pay_tab payTracking"
                      data-pt-click="주문서|결제방법_다른 결제수단|해외발급 신용카드"
                      role="tab"
                    >
                      <span>해외발급 신용카드</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      id="ubpayPaymtMeansButton"
                      name="otherPaymtMeansCdButton"
                      className="mnodr_pay_tab payTracking"
                      data-pt-click="주문서|결제방법_다른 결제수단|UBPAY"
                      role="tab"
                    >
                      <span>UBPAY</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      id="alipayPaymtMeansButton"
                      name="otherPaymtMeansCdButton"
                      className="mnodr_pay_tab payTracking"
                      data-pt-click="주문서|결제방법_다른 결제수단|Alipay"
                      role="tab"
                    >
                      <span>Alipay</span>
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
                  +{' '}
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
                  <div className="mnodr_togglechk_cont mnodr_acdo_cont ty_toggle">
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
                  data-pt-click="주문서|주문자정보|변경"
                  name="btnShowTgtDiv"
                  data-target-div="notiInfoDiv"
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
                        최민정
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
                        010-8450-1543
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
                        saiani@naver.com
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
                          주문 시 결제수단으로 환불받기
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
                  data-pt-click="주문서|배송요청사항|변경"
                  name="btnShowTgtDiv"
                  data-target-div="rcptInfoDiv_1"
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
                      문 앞에 놓고 가주세요.
                    </p>
                    <input
                      type="hidden"
                      id="deliShppMemo_0"
                      name="shpploc[0].deliShppMemo"
                      value="문 앞에 놓고 가주세요."
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
        <input type="hidden" id="isOrdMakeItem" value="false" />
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
