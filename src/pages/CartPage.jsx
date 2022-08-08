import React from 'react';
import { MobileHeader } from '../components/ui/index';

function CartPage() {
  return (
    <div
      id="m_wrap"
      className="reveal-left-wrap reveal-right-wrap mcom_wrap sticky_mnodr_acdo ssg scr_up v3"
    >
      <div id="bannerList" />
      <div className="bnr_top_mmbrs">
        <a
          href="https://member.ssg.com/m/membership/gate.ssg"
          className="cartTracking"
          data-tracking-cd="00044_000000245_t00060"
          data-tracking-value="멤버십띠배너"
        >
          <i className="badge ty_s badge_mmbrs_white">
            <span className="blind">스마일클럽</span>
          </i>
          <span className="txt_mmbrs" />
          <span className="link_mmbrs">
            <i className="icon ty_xs icon_chevron_right" aria-hidden="true" />
            <span className="blind">스마일클럽 바로가기</span>
          </span>
        </a>
      </div>

      <MobileHeader title="장바구니" />

      <div
        id="m_container"
        className="reveal-left-contents reveal-right-contents mcom_container mnodr_container_step ty_headfix"
      >
        <div id="m_content">
          <div className="mnodr_info">
            <div className="mnodr_info_header">
              <div className="mnodr_info_row">
                <i className="mnodr_ic ic_power" />
                <span className="mnodr_info_tit ty2">로그인을 해보세요.</span>
              </div>
              <p className="mnodr_tx_desc mnodr_tx_gray">
                장바구니에 담아두신 상품을 나중에도 확인하실 수 있습니다.
              </p>
            </div>
            <div className="mnodr_info_contents">
              <div className="mnodr_info_btnarea">
                <button
                  className="mnodr_info_btn"
                  type="button"
                  name="loginBtn"
                >
                  로그인 하기
                </button>
              </div>
            </div>
          </div>
          <div
            className="mnodr_odrplus"
            id="divAddOrdInfo"
            style={{ display: 'none' }}
          />

          <div className="mnodr_control_wrap">
            <div className="mnodr_control mnodr_sticky">
              <div className="mnodr_control_group">
                <span className="mnodr_chk">
                  <input
                    type="checkbox"
                    id="chk_all"
                    name="btChekAll"
                    className="blind cartTracking"
                    data-tracking-cd="00044_000000199_t00060"
                    data-tracking-value="전체선택"
                  />
                  <label htmlFor="chk_all">
                    <span className="blind">모든상품전체선택</span>
                  </label>
                </span>
                <label htmlFor="chk_all" className="mnodr_control_tx">
                  <span className="df">전체</span>
                  <span className="sm">전체</span>
                </label>

                <span className="mnodr_control_tx">
                  <a
                    // href="javascript:void(0);"
                    href="/"
                    className="mnodr_control_link layer_filter cartTracking"
                    data-type="cartMove"
                    data-tracking-cd="00044_000000199_t00060"
                    data-tracking-value="배송방법바꾸기"
                  >
                    <span className="mnodr_selbox_tx"> 배송방법바꾸기 </span>
                  </a>
                  <a
                    href="/"
                    style={{ display: 'none' }}
                    className="modal-fix-open"
                    data-layer-target="#_layerMoveProduct"
                  >
                    ㅇㅅㅇ
                  </a>
                </span>
              </div>
              <span className="mnodr_control_delete">
                <a
                  // href="javascript:void(0);"
                  href="/"
                  className="df cartTracking"
                  name="btDelChekItemAll"
                  data-tracking-cd="00044_000000199_t00060"
                  data-tracking-value="품절상품삭제"
                >
                  품절상품삭제
                </a>
                <a
                  // href="javascript:void(0);"
                  href="/"
                  className="sm cartTracking"
                  name="btDelChekItemAll"
                  data-tracking-cd="00044_000000199_t00060"
                  data-tracking-value="품절상품삭제"
                >
                  품절삭제
                </a>
              </span>
            </div>

            <div
              id="_acdo_parcel"
              name="progress_20"
              className="mnodr_acdo v2 ty_parcel progress_20 addOrdTab addOrd_"
              data-o-acdo=""
              data-tracking-cd="00044_000000204_t10000"
            >
              <div className="mnodr_acdo_header">
                <span className="mnodr_chk ty_group">
                  <input
                    type="checkbox"
                    className="blind codr_inp_chk cartTracking"
                    name="btChekShppGrp"
                    id="20"
                    data-tracking-cd="00044_000000204_t00060"
                    data-tracking-value="전체선택"
                  />
                  <label htmlFor="20">
                    <span className="blind">택배배송상품전체선택</span>
                  </label>
                </span>
                <div className="mnodr_acdo_titwrap">
                  <div className="mnodr_acdo_titarea">
                    <label htmlFor="20">
                      <span className="blind">택배배송상품전체선택</span>
                      <h3 className="mnodr_acdo_tit">택배배송</h3>
                    </label>

                    <p className="mnodr_acdo_subtit" />
                  </div>
                </div>
              </div>

              <div className="mnodr_acdo_cont">
                <div className="mnodr_unit">
                  <div
                    id="mnodr_unit_5092900303"
                    className="pay_item_area mnodr_unit_item"
                  >
                    <div className="mnodr_unit_thmb">
                      <span className="mnodr_chk">
                        <input
                          type="checkbox"
                          className="blind cartTracking"
                          id="chk_order_5092900303"
                          name="cbCartId"
                          value="5092900303"
                          data-tracking-cd="00044_000000204_t00060"
                          data-tracking-value="상품개별선택"
                        />
                        <label htmlFor="chk_order_5092900303">
                          <span className="blind">상품선택</span>
                        </label>
                      </span>
                      <span className="mnodr_unit_img" aria-hidden="true">
                        <img
                          src="https://sitem.ssgcdn.com/13/55/82/item/1000312825513_i1_140.jpg"
                          alt="(남성)배색 립 캐주얼 양말 3족 세트(RA122B-52G)3컬러 SET"
                          id="img5092900303"
                          width="75"
                          height="75"
                          // onError="javascript:this.src='https://sui.ssgcdn.com/ui/sd/img/common/noImg_140.gif';this.alt='상품 이미지 준비중입니다.';"
                        />
                      </span>
                    </div>
                    <div className="mnodr_unit_cont">
                      <div className="mnodr_unit_info">
                        <span className="cm_mall_text">
                          <i className="sd">신세계백화점</i>
                        </span>
                        <em>강남점</em>
                      </div>
                      <div className="mnodr_unit_util">
                        <button
                          type="button"
                          className="mnodr_unit_pin1 cartTracking"
                          name="btKeep"
                          data-tracking-cd="00044_000000204_t00060"
                          data-tracking-value="계속담아두기"
                        >
                          <i className="mnodr_ic ic_pin">
                            <span className="blind">계속 담아두기</span>
                          </i>
                        </button>
                        <button
                          type="button"
                          className="mnodr_unit_del cartTracking"
                          name="btnDel"
                          data-tracking-cd="00044_000000204_t00060"
                          data-tracking-value="상품삭제"
                        >
                          <i className="mnodr_ic ic_del">
                            <span className="blind">상품 삭제</span>
                          </i>
                        </button>
                      </div>

                      <p className="mnodr_unit_tit">
                        <a
                          className="cartTracking"
                          data-tracking-cd="00044_000000204_t00001"
                          data-tracking-value="1000312825513"
                          // href="javascript:void(0);"
                          href="/"
                          name="itemNmBtn"
                          data-link="http://m.shinsegaemall.ssg.com/item/itemView.ssg?itemId=1000312825513&amp;siteNo=6009&amp;salestrNo=1004"
                        >
                          <strong className="mnodr_unit_brd"> 라코스테</strong>
                          <span className="mnodr_unit_name">
                            (남성)배색 립 캐주얼 양말 3족 세트(RA122B-52G)3컬러
                            SET
                          </span>
                        </a>
                      </p>
                      <div className="mnodr_unit_prdpay">
                        <div className="mnodr_unit_l">
                          <div className="mnodr_unit_oldprice">
                            <del>
                              <span className="blind">정상가격</span>
                              <em className="ssg_price itemSellprc">23,000</em>
                              <span className="ssg_tx">원</span>
                            </del>

                            <button
                              type="button"
                              className="mnodr_btn_detail modal-alert-open"
                              data-layer-target="#_layerDiscountInfo_5092900303"
                            >
                              <i className="mnodr_ic ic_detail">
                                <span className="blind">자세히 보기</span>
                              </i>
                            </button>
                            <div
                              className="mnodr_modal ty_alert"
                              role="dialog"
                              tabIndex="-1"
                              aria-hidden="true"
                              id="_layerDiscountInfo_5092900303"
                            >
                              <div
                                className="mnodr_modal_wrap"
                                role="document"
                                // tabIndex="0"
                              >
                                <div className="mnodr_modal_cont">
                                  <h3 className="mnodr_modal_tit">
                                    할인내역 정보
                                  </h3>
                                  <dl className="mnodr_priceitem ty_narrow">
                                    <dt>
                                      <span className="mnodr_priceitem_stit">
                                        판매가
                                      </span>
                                    </dt>
                                    <dd>
                                      <strong className="mnodr_tx_primary">
                                        <em className="ssg_price itemSellprc">
                                          23,000
                                        </em>
                                        <span className="ssg_tx">원</span>
                                      </strong>
                                    </dd>
                                  </dl>

                                  <div className="prom_list">
                                    <dl className="mnodr_priceitem ty_narrow">
                                      <dt>
                                        <span className="mnodr_priceitem_stit">
                                          상품즉시할인
                                        </span>
                                      </dt>
                                      <dd>
                                        <strong className="mnodr_tx_point">
                                          <em className="ssg_price">-2,300</em>
                                          <span className="ssg_tx">원</span>
                                        </strong>
                                      </dd>
                                    </dl>
                                  </div>

                                  <dl className="mnodr_priceitem ty_total">
                                    <dt>
                                      <span className="mnodr_priceitem_stit">
                                        최적가
                                      </span>
                                    </dt>
                                    <dd>
                                      <strong className="mnodr_tx_primary">
                                        <em className="ssg_price itemOrdAmt">
                                          20,700
                                        </em>
                                        <span className="ssg_tx">원</span>
                                      </strong>
                                    </dd>
                                  </dl>
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
                          <div className="mnodr_unit_newprice">
                            <span className="blind">판매가격</span>
                            <em className="ssg_price itemOrdAmt">20,700</em>
                            <span className="ssg_tx">원</span>
                          </div>
                        </div>

                        <div className="mnodr_unit_r">
                          <div className="mnodr_amount">
                            <div className="mnodr_opa_area">
                              <span className="blind">현재수량</span>
                              <span className="mnodr_opa_tx ordQty">1</span>
                            </div>
                            <button
                              type="button"
                              name="btUpdOrdQtyMinus"
                              className="mnodr_btn_minus cartTracking"
                              data-tracking-cd="00044_000000204_t00060"
                              data-tracking-value="수량-"
                            >
                              <i className="mnodr_ic ic_minus">
                                <span className="blind">주문수량빼기</span>
                              </i>
                            </button>
                            <button
                              type="button"
                              name="btUpdOrdQtyPlus"
                              className="mnodr_btn_plus cartTracking"
                              data-max-psbl-qty="10"
                              data-tracking-cd="00044_000000204_t00060"
                              data-tracking-value="수량+"
                            >
                              <i className="mnodr_ic ic_plus">
                                <span className="blind">주문수량더하기</span>
                              </i>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="mnodr_unit_btnarea ty_fillbtn">
                        <button
                          type="button"
                          name="btOrd"
                          className="mnodr_unit_btn ty_point cartTracking"
                          data-cart-id="5092900303"
                          data-tracking-cd="00044_000000204_t00060"
                          data-tracking-value="바로구매"
                        >
                          <span>바로구매</span>
                        </button>
                      </div>
                      <div className="mnodr_unit_detail" />
                    </div>
                  </div>
                </div>

                <div className="mnodr_acdo_summary" id="shppGrp0">
                  <strong className="mnodr_tx_gray4 notranslate">
                    <span className="ssg_price codr_subtotal_sum">
                      20,700원 + 배송비 3,000원 = 23,700원
                    </span>
                    <span className="ssg_tx">&nbsp;(3만원이상 무료배송)</span>
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div className="mnodr_thickhr" />
          <div className="mnodr_total" id="cartInformation">
            <div className="mnodr_form_sec">
              <h3 className="mnodr_form_tit">
                <strong>결제 예정금액</strong>
              </h3>
              <dl className="mnodr_priceitem ty_narrow">
                <dt>
                  <span className="mnodr_priceitem_stit">주문금액</span>
                </dt>
                <dd>
                  <span className="mnodr_tx_primary">
                    +<em className="ssg_price viewAmt_sellprc">23,000</em>
                    <span className="ssg_tx">원</span>
                  </span>
                </dd>
              </dl>
              <dl className="mnodr_priceitem ty_narrow">
                <dt>
                  <span className="mnodr_priceitem_stit">상품할인</span>
                </dt>
                <dd>
                  <span className="mnodr_tx_primary">
                    -<em className="ssg_price viewAmt_dcprc">2,300</em>
                    <span className="ssg_tx">원</span>
                  </span>
                </dd>
              </dl>
              <dl className="mnodr_priceitem ty_narrow">
                <dt>
                  <span className="mnodr_priceitem_stit">배송비</span>
                </dt>
                <dd>
                  <span className="mnodr_tx_primary">
                    +<em className="ssg_price viewAmt_shppcst">3,000</em>
                    <span className="ssg_tx">원</span>
                  </span>
                </dd>
              </dl>
              <dl className="mnodr_priceitem ty_total">
                <dt>
                  <span className="mnodr_tx_point mnodr_priceitem_stit">
                    총 결제예정금액
                  </span>
                </dt>
                <dd>
                  <span className="mnodr_priceitem_total">
                    <em className="ssg_price viewAmt_paymt">23,700</em>
                    <span className="ssg_tx">원</span>
                  </span>
                </dd>
              </dl>
            </div>
          </div>

          <div className="mnodr_thickhr" />
          <div className="mnodr_buyoften v2" id="recommendationCartItem" />
          <div className="mnodr_thickhr" />

          <div className="mnodr_footinfo">
            <button
              type="button"
              className="mnodr_cmplccbn cartTracking"
              name="plccBtn"
              style={{
                backgroundImage:
                  "url('https://sui.ssgcdn.com/cmpt/banner/202207/2022071216423641510009634100_30.png')",
              }}
              onClick="location.href='https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000000858&amp;siteNo=6005recruitmentPath=L6007001&amp;eventCode=HPG02'"
              data-tracking-cd="00044_000000209_t00001"
              data-tracking-value="2003010236"
            >
              <span className="mnodr_cmplccbn_logo">
                <img
                  src="https://sui.ssgcdn.com/cmpt/banner/202207/2022071216424180894012693501_964.png"
                  alt="SSG.COM CARD"
                />
              </span>
              <span className="mnodr_cmplccbn_desc">
                스마일클럽 가입비 지원 + 최대 12% 적립
              </span>
            </button>
            <button
              type="button"
              className="mnodr_cmplccbn cartTracking"
              name="ssPlccBtn"
              style={{
                backgroundImage:
                  "url('https://sui.ssgcdn.com/cmpt/banner/202202/2022022109481447918457898845_569.png')",
              }}
              onClick="location.href='https://m.ssg.com/event/eventDetail.ssg?promId=1100580609'"
              data-tracking-cd="00044_000000209_t00001"
              data-tracking-value="2003010238"
            >
              <span className="mnodr_cmplccbn_logo">
                <img
                  src="https://sui.ssgcdn.com/cmpt/banner/202202/2022022110000988966866483786_123.png"
                  alt="SSG.COM CARD"
                />
              </span>
              <span className="mnodr_cmplccbn_desc">
                SSG MONEY 1% 적립 + 4% 추가적립
              </span>
            </button>
            <button
              type="button"
              className="mnodr_footinfo_row layer_filter cartTracking"
              data-type="cardDiscount"
              data-tracking-cd="00044_000000209_t00060"
              data-tracking-value="청구할인혜택보기"
            >
              <i className="mnodr_ic ic_card_icon" />
              <p className="mnodr_footinfo_tit">
                <strong className="mnodr_tx_point">트레이더스삼성카드</strong>
                <span className="mnodr_tx_primary">
                  {' '}
                  외 6개 카드혜택 확인하기
                </span>
              </p>
              <span className="mnodr_arr">
                <i className="mnodr_ic ic_arr ty_arr_right">
                  <span className="blind">청구할인 혜택안내</span>
                </i>
              </span>
            </button>
            <a
              href="/"
              style={{ display: 'none' }}
              className="modal-fix-open"
              data-layer-target="#_layerDiscountCharge"
            >
              ㅇㅅㅇ
            </a>

            <div
              className="mnodr_modal ty_full"
              role="dialog"
              tabIndex="-1"
              aria-hidden="true"
              id="_layerDiscountCharge"
            >
              <div
                className="mnodr_modal_wrap"
                role="document"
                // tabIndex="0"
              />
            </div>
          </div>

          <div className="mnodr_cartinfo">
            <div className="mnodr_form_sec">
              <h3 className="mnodr_form_tit">
                <strong>장바구니 상품안내</strong>
              </h3>
              <ul className="mnodr_bullst ty2">
                <li>장바구니에 담은 상품은 최대 150개까지 보관됩니다.</li>
                <li>
                  상품 우측 상단의 핀셋 아이콘으로 ‘계속 담아두기’를 설정해
                  두시면 시간이 지나도 상품이 삭제되지 않습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mnodr_toolbar2">
          <div className="mnodr_toolbar_float">
            <div className="mnodr_toolbar_floatlt">
              <div className="mnodr_toolbar_fitem topbtn on">
                <a
                  // href="javascript:void(0);"
                  href="/"
                  id="cartTopBtn"
                  className="floating_btn topbtn on cartTracking"
                  data-tracking-cd="00044_000000210_t00060"
                  data-tracking-value="탑버튼"
                >
                  <span className="blind">TOP</span>
                  <i className="icon ty_sm icon_arrow_top" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="mnodr_toolbar_ctn">
            <div className="mnodr_toolbar_cont">
              <p className="mnodr_tx_desc" id="bar_price">
                <span className="mnodr_cnt">전체상품 1개</span>
                <span className="ssg_tx" id="toolbarCst">
                  20,700원 + 배송비 3,000원 =
                </span>
                <span className="mnodr_tx_total">
                  <span className="ssg_tx" id="toolbarTotCst">
                    {' '}
                    23,700원
                  </span>
                </span>
              </p>
              <p
                id="dmndDisplay"
                className="mnodr_tx_desc mnodr_tx_point"
                style={{ display: 'block' }}
              >
                <a
                  // href="javascript:void(0);"
                  href="/"
                  className="mnodr_tx_link2 layer_filter cartTracking"
                  data-btn-target="#_layerDiscountCharge"
                  data-type="cardDiscount"
                  data-tracking-cd="00044_000000094_t00060"
                  data-tracking-value="청구할인혜택보기"
                >
                  청구할인 혜택보기
                  <i
                    className="icon ty_xs icon_chevron_right"
                    aria-hidden="true"
                  />
                </a>
              </p>
            </div>
          </div>

          <div className="mnodr_btn_area">
            <button
              type="button"
              className="mnodr_btn ty_line ty_m cartTracking"
              id="mnodr_btn_gift2"
              data-tracking-cd="00044_000000094_t00060"
              data-tracking-value="선물하기"
            >
              <i className="icon ty_md icon_gift" aria-hidden="true" />
              <span className="mnodr_txt_gift">선물하기</span>
            </button>
            <button
              type="button"
              className="mnodr_btn ty_point ty_m cartTracking"
              name="btOrdCheckbox"
              data-prom-yn=""
              data-tracking-cd="00044_000000094_t00060"
              data-tracking-value="주문하기"
            >
              <span className="mnodr_btn_tx">주문하기</span>
            </button>
          </div>
        </div>
        <div
          className="mnodr_modal ty_alert"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerCloseSale"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_cont">
              <h3 className="mnodr_tx_tit">마감세일 상품</h3>
              <p className="mnodr_tx_desc3">
                이마트몰 NE.O에서만 판매되는 한정수량 파격가 상품입니다.
                한정수량 재고소진 시 가격이 달라질 수 있으니 결제 시 다시
                확인해주시기 바랍니다.
              </p>
              <p className="mnodr_tx_desc">
                <span className="mnodr_tx_point">
                  ※ 유통기한이 다소 짧을 수 있습니다.
                </span>
              </p>
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

        <div
          className="mnodr_modal ty_alert"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerGoodByeSale"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_cont">
              <h3 className="mnodr_tx_tit">굿바이세일 상품</h3>
              <p className="mnodr_tx_desc3">
                이마트몰 NE.O에서만 판매되는 재고처리 파격가 상품입니다.
              </p>
              <p className="mnodr_tx_desc">
                <span className="mnodr_tx_point">
                  ※ 유통기한이 다소 짧을 수 있습니다.
                </span>
              </p>
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

        <div
          className="mnodr_modal ty_alert"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerNotApply"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_cont">
              <h3 className="mnodr_tx_tit">일부 혜택 적용 불가</h3>
              <p className="mnodr_tx_desc3">
                <span className="mnodr_tx_point">
                  ※ 본 상품은 아래의 혜택 적용이 불가합니다.
                </span>
              </p>
              <div className="mnodr_notapply">
                <dl className="mnodr_notapply_item">
                  <dt>카드 혜택</dt>
                  <dd>
                    <ul>
                      <li>청구할인</li>
                      <li>무이자할부</li>
                      <li>특별 카드 행사</li>
                    </ul>
                  </dd>
                </dl>
                <dl className="mnodr_notapply_item">
                  <dt>적립 혜택</dt>
                  <dd>
                    <ul>
                      <li>신세계포인트</li>
                      <li>SSG MONEY (적립 및 즉시할인)</li>
                    </ul>
                  </dd>
                </dl>
              </div>
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

        <div
          className="mnodr_modal ty_alert"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerWeightSystem"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_cont">
              <h3 className="mnodr_tx_tit">중량관리상품 안내</h3>
              <p className="mnodr_tx_desc3">
                100g 중량단위로 판매되는 상품입니다. <br />
                주문하신 중량보다 적게 배송될 경우, 차액을 SSG MONEY으로
                환불해드립니다.
              </p>
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

        <div
          className="mnodr_modal ty_alert"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerAdultAuth"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_cont">
              <h3 className="mnodr_tx_tit">신분증지참 안내</h3>
              <p className="mnodr_tx_desc3">
                신분증을 지참하여 매장에 방문하면 주류 매장픽업 상품을 수령하실
                수 있습니다.
              </p>
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

        <div
          className="mnodr_modal ty_full"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerMoveProduct"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_head">
              <h3 className="mnodr_modal_tit">배송방법바꾸기</h3>
              <button
                type="button"
                className="mnodr_modal_close modal-close-btn"
                tabIndex="0"
              >
                <i className="mnodr_ic ic_close">
                  <span className="blind">팝업닫기</span>
                </i>
              </button>
            </div>
            <div className="mnodr_modal_cont">
              <div className="mnodr_modal_scroll">
                <div className="mnodr_prdmove">
                  <div className="mnodr_prdmove_header">
                    <h3
                      className="mnodr_prdmove_tit"
                      // tabIndex="0"
                      id="moveCartSeleteCnt"
                    >
                      ㅇㅅㅇ
                    </h3>
                  </div>

                  <div className="mnodr_prdmove_conts mnodr-tgleprt-group">
                    <ul role="presentation" className="mnodr_thmblst" />

                    <div
                      type="button"
                      className="mnodr_btn_area"
                      style={{ display: 'none' }}
                      id="moveCartMoreBtn"
                    >
                      <a
                        // href="javascript:void(0);"
                        href="/"
                        className="mnodr_btn ty_tgle mnodr-tgleprt-item"
                      >
                        <span
                          className="mnodr_btn_tx full"
                          // tabIndex="0"
                        >
                          선택상품 전체보기
                        </span>
                        <span
                          className="mnodr_btn_tx summary"
                          // tabIndex="0"
                        >
                          선택상품 간략보기
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mnodr_prdmove">
                  <div className="mnodr_prdmove_header">
                    <h3
                      className="mnodr_prdmove_tit"
                      // tabIndex="0"
                    >
                      <span className="mnodr_prdmove_cart">
                        <i className="mnodr_ic ic_cart" />
                      </span>
                      <span>배송방법 선택</span>
                    </h3>
                  </div>
                  <div className="mnodr_prdmove_conts">
                    <ul className="mnodr_prdmove_mvlst" id="shppChangeList">
                      <li className="mnodr_prdmove_mvitm">
                        <div className="mnodr_rdotab">
                          <input
                            type="radio"
                            className="blind mnodr_rdotab_inp"
                            name="cartTypeMove"
                            id="_ui_prdmove01_02"
                            value="early"
                            tabIndex="-1"
                          />
                          <label
                            htmlFor="_ui_prdmove01_02"
                            className="mnodr_rdotab_label"
                            // tabIndex="0"
                          >
                            <div className="mnodr_rdotab_ctn">
                              <div className="mnodr_rdotab_left">
                                <i className="mnodr_rdotab_btn" />
                              </div>
                              <div className="mnodr_rdotab_right ty2">
                                <div className="mnodr_rdotab_row">
                                  <strong className="mnodr_tx_primary">
                                    새벽배송
                                  </strong>
                                </div>
                                <p className="mnodr_tx_gray" />
                              </div>
                            </div>
                          </label>
                        </div>
                      </li>
                      <li className="mnodr_prdmove_mvitm">
                        <div className="mnodr_rdotab">
                          <input
                            type="radio"
                            className="blind mnodr_rdotab_inp"
                            name="cartTypeMove"
                            id="_ui_prdmove01_03"
                            value="ssg10"
                            tabIndex="-1"
                          />
                          <label
                            htmlFor="_ui_prdmove01_03"
                            className="mnodr_rdotab_label"
                            // tabIndex="0"
                          >
                            <div className="mnodr_rdotab_ctn">
                              <div className="mnodr_rdotab_left">
                                <i className="mnodr_rdotab_btn" />
                              </div>
                              <div className="mnodr_rdotab_right ty2">
                                <div className="mnodr_rdotab_row">
                                  <strong className="mnodr_tx_primary">
                                    이마트몰 쓱배송
                                  </strong>
                                </div>
                                <p className="mnodr_tx_gray" />
                              </div>
                            </div>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <footer className="mnodr_modal_foot">
              <div className="mnodr_btn_area">
                <button
                  type="button"
                  className="mnodr_btn ty_point ty_lg"
                  id="moveConfirmBtn"
                >
                  <strong
                  // tabIndex="0"
                  >
                    <span className="mnodr_prdmove_cnt" />개 배송방법 바꾸기
                  </strong>
                </button>
              </div>
            </footer>
          </div>
        </div>

        <a
          // href="javascript:void(0);"
          href="/"
          className="blind modal-alert-open"
          id="_layerLoginBtn"
          data-layer-target="#_layerLogin"
          style={{ display: 'none' }}
        >
          ㅇㅅㅇ
        </a>
        <div
          className="mnodr_modal ty_alert"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerLogin"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_cont">
              <p className="mnodr_tx_tit">
                <strong>
                  로그인을 하시면 <br />
                  장바구니에 담아두신 상품을 <br />
                  나중에도 확인하실 수 있습니다.
                </strong>
              </p>
            </div>
            <footer className="mnodr_modal_foot">
              <div className="mnodr_btn_area">
                <button
                  className="mnodr_btn ty_gray ty_sm modal-close-btn"
                  type="button"
                >
                  닫기
                </button>
                <a
                  // href="javascript:void(0);"
                  href="/"
                  name="loginBtn"
                  className="mnodr_btn ty_point ty_sm modal-close-btn"
                >
                  로그인하기
                </a>
              </div>
            </footer>
            <button className="modal-close-btn blind" type="button">
              <span className="blind">팝업닫기</span>
            </button>
          </div>
        </div>
        <a
          // href="javascript:void(0)"
          href="/"
          className="blind modal-alert-open"
          id="_layerSmileBtn"
          data-layer-target="#_layerSmile"
        >
          ㅇㅅㅇ
        </a>
        <div
          className="mnodr_modal ty_alert"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerSmile"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_cont">
              <p className="mnodr_tx_tit" id="popup_smile_title" />
              <p
                className="mnodr_tx_desc mnodr_tx_gray2"
                id="popup_smile_sub_title"
              />
            </div>
            <footer className="mnodr_modal_foot">
              <div className="mnodr_btn_area">
                <a
                  // href="javascript:void(0)"
                  href="/"
                  className="mnodr_btn ty_gray modal-close-btn"
                  id="popup_smile_btn1"
                  data-exec-code=""
                  data-tracking-cd=""
                  data-tracking-value=""
                >
                  ㅇㅅㅇ
                </a>
                <a
                  href="https://member.ssg.com/m/membership/gate.ssg"
                  className="mnodr_btn ty_point modal-close-btn cartTracking"
                  id="popup_smile_btn2"
                  data-tracking-cd=""
                  data-tracking-value=""
                >
                  ㅇㅅㅇ
                </a>
              </div>
            </footer>
            <button className="modal-close-btn blind" type="button">
              <span className="blind">팝업닫기</span>
            </button>
          </div>
        </div>
        <div id="mcom_footer">
          <div className="mcom_footer mcom_footer_order mcom_footer_order_v2 ty_bg ty_space_lg">
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
    </div>
  );
}

export default CartPage;
