import React from 'react';

function MainPage() {
  const data1 = {
    advertBidId: '',
    giftBtnShowType: '',
    giftBtnActType: 'N',
    itemChrctDivCd: '10',
    itemLnkd:
      'https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000034164356&amp;siteNo=6004&amp;salestrNo=6005',
    giftBtnMsg: '선물하기 불가 상품입니다.',
    bothSsgMorningShppYn: 'N',
    goItemDetailYn: 'Y',
    drctPurchYn: 'N',
    itemId: '1000034164356',
    dealItemYn: 'Y',
    advertExtensTeryDivCd: '',
    cleaningLabYn: 'N',
    siteNo: '6004',
    useForcedSsg: 'N',
    cartPsblType: '',
    uitemId: '00000',
    infloSiteNo: '6004',
    salestrNo: '6005',
    msgItemDetail:
      '이 상품은 옵션이 있는 상품 입니다.\n상품상세에서 옵션을 선택해주세요.',
  };
  const data2 = {
    advertBidId: '',
    giftBtnShowType: '',
    giftBtnActType: 'N',
    itemChrctDivCd: '10',
    itemLnkd:
      'https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000035003465&amp;siteNo=6004&amp;salestrNo=6005',
    giftBtnMsg: '선물하기 불가 상품입니다.',
    bothSsgMorningShppYn: 'N',
    goItemDetailYn: 'Y',
    drctPurchYn: 'N',
    itemId: '1000035003465',
    dealItemYn: 'Y',
    advertExtensTeryDivCd: '',
    cleaningLabYn: 'N',
    siteNo: '6004',
    useForcedSsg: 'N',
    cartPsblType: '',
    uitemId: '00000',
    infloSiteNo: '6004',
    salestrNo: '6005',
    msgItemDetail:
      '이 상품은 옵션이 있는 상품 입니다.\n상품상세에서 옵션을 선택해주세요.',
  };
  const data3 = {
    advertBidId: '',
    giftBtnShowType: '',
    giftBtnActType: 'N',
    itemChrctDivCd: '10',
    itemLnkd:
      'https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000376696315&amp;siteNo=6009&amp;salestrNo=1002',
    giftBtnMsg: '선물하기 불가 상품입니다.',
    bothSsgMorningShppYn: 'N',
    goItemDetailYn: 'Y',
    drctPurchYn: 'N',
    itemId: '1000376696315',
    dealItemYn: 'Y',
    advertExtensTeryDivCd: '',
    cleaningLabYn: 'N',
    siteNo: '6009',
    useForcedSsg: 'N',
    cartPsblType: '',
    uitemId: '00000',
    infloSiteNo: '6004',
    salestrNo: '1002',
    msgItemDetail:
      '이 상품은 옵션이 있는 상품 입니다.\n상품상세에서 옵션을 선택해주세요.',
  };

  return (
    <div className="body_sm body_ios" cz-shortcut-listen="true">
      <a href="#m_container" className="skip_navi">
        본문 바로가기
      </a>

      <div
        id="m_wrap"
        className="mcom_wrap sm_v3 sm_page_main has_smhero_banner"
      >
        <header
          id="m_header"
          className="mcom_header react-area"
          style={{ transform: 'translateY(0px)' }}
        >
          <div id="m_header_banner" style={{ display: 'none' }} />

          <div id="m_gnb" className="mcom_gnb v2">
            <div className="gnb_mall">
              <h1>
                <span className="gnb_mall_logo v3">
                  <a
                    href="https://m.ssg.com"
                    className="gnb_logo_ssg clickable"
                    data-react-tarea="웹공통_N|GNB|SSG"
                    // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                  >
                    <span className="blind">SSG</span>
                  </a>
                  <a
                    href="/"
                    className="gnb_logo_now clickable"
                    data-react-tarea="웹공통_N|GNB|홈"
                    // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                  >
                    <span className="gnb_logo">
                      <span className="blind">신세계몰</span>
                    </span>
                  </a>
                </span>
              </h1>
              <button
                className="gnb_mall_gate clickable"
                type="button"
                aria-expanded="false"
                // onClick="javascript:ssg_react.directCall({tarea: '웹공통_N|GNB|몰이동'});"
              >
                <span className="btn_label ty_off">
                  <span className="blind">몰 목록 펼치기</span>
                </span>
                <span className="btn_label ty_on">
                  <span className="blind">몰 목록 접기</span>
                </span>
              </button>
              <div className="gnb_mall_layer v2">
                <h2 className="gnb_mall_ssg">
                  <a
                    href="https://m.ssg.com"
                    className="gnb_mall_ssglnk clickable"
                    data-react-tarea="웹공통_N|GNB|SSG"
                    // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                  >
                    <span className="blind">SSG.COM</span>
                  </a>
                </h2>
                <ul className="gnb_mall_lst">
                  <li>
                    <a
                      href="https://m-emart.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|이마트몰"
                      // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="em" />
                      </span>
                      <span className="gnb_mall_name">이마트몰</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com"
                      className="gnb_mall_lnk on clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|신세계몰"
                      // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="sm" />
                      </span>
                      <span className="gnb_mall_name">신세계몰</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-traders.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|트레이더스"
                      // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="tr" />
                      </span>
                      <span className="gnb_mall_name">트레이더스</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/dept/main.ssg"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|신세계백화점"
                      // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="sd" />
                      </span>
                      <span className="gnb_mall_name">신세계백화점</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-earlymorning.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|새벽배송"
                      // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="mnmorning" />
                      </span>
                      <span className="gnb_mall_name">새벽배송</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-casamia.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|까사미아"
                      // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="mncasamia" />
                      </span>
                      <span className="gnb_mall_name">까사미아</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-starbucks.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|STARBUCKS"
                      // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="mnstarbucks" />
                      </span>
                      <span className="gnb_mall_name">STARBUCKS</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-chicor.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|CHICOR"
                      // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="mnchicor" />
                      </span>
                      <span className="gnb_mall_name">CHICOR</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-tv.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|신세계TV쇼핑"
                      // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="tv" />
                      </span>
                      <span className="gnb_mall_name">신세계TV쇼핑</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-triip.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|여행"
                      // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="mntrip" />
                      </span>
                      <span className="gnb_mall_name">여행</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-sivillage.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|S.I.VILLAGE"
                      // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="si" />
                      </span>
                      <span className="gnb_mall_name">S.I.VILLAGE</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-starfield.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|스타필드"
                      // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="sf" />
                      </span>
                      <span className="gnb_mall_name">스타필드</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-premiumoutlets.ssg.com"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰이동_클릭|프리미엄아울렛"
                      // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
                    >
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="outlet" />
                      </span>
                      <span className="gnb_mall_name">프리미엄아울렛</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/specialStore/lg01/main.ssg?v=20220717"
                      className="gnb_mall_lnk clickable"
                      data-react-tarea="웹공통_N|몰이동 레이어|몰탭광고_클릭"
                      // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','Y',365);"
                    >
                      <span className="gnb_mall_thumb">
                        <img
                          className="ssg_lazy"
                          src="//sstatic.ssgcdn.com/cmpt/gnb/202206/0000000048_2022060315252889151044419104_717.png"
                          data-src="//sstatic.ssgcdn.com/cmpt/gnb/202206/0000000048_2022060315252889151044419104_717.png"
                          alt="LG전자"
                          data-ll-status="observed"
                        />
                      </span>
                      <span className="gnb_mall_name">LG전자</span>
                      <span className="gnb_mall_bedge ty_ad">AD</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="gnb_util">
              <div className="gnb_util_search">
                <fieldset>
                  <form id="m_sch_bottom_form" onSubmit="return false;">
                    <div className="gnb_search_inpbox">
                      <div className="gnb_search_inpbox_sbox">
                        <input
                          type="search"
                          id="globalSearchInput"
                          className="gnb_search_inpbox_inp"
                          autoComplete="off"
                          value=""
                        />
                        <button
                          type="button"
                          id="globalSearchButton"
                          className="gnb_search_inpbox_src"
                        >
                          <i className="icon icon_search">
                            <span className="blind">검색</span>
                          </i>
                        </button>
                      </div>
                    </div>
                  </form>
                </fieldset>
              </div>
              <a
                id="mHeaderCartBtn"
                // href="javascript:mobileCommonFn.goCartViewPage('https://pay.ssg.com/m/cart/dmsShpp.ssg')"
                href="/"
                className="gnb_util_mn ty_cart clickable"
                data-react-tarea="웹공통_N|GNB|장바구니"
                // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
              >
                <i className="icon icon_cart">
                  <span id="mHeaderCartNm" className="blind">
                    장바구니
                  </span>
                </i>
                <span
                  className="cmnoti_cartshare"
                  id="cmnoti_cartshare"
                  style={{ display: 'none' }}
                >
                  <span className="blind">함께 장보기</span>
                </span>
                <span className="cmnoti_push" id="cartCnt_header">
                  <span className="blind" id="cartCntSpan">
                    담은 상품 수
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="cgsearch cgsearch_v3">
            <div className="cgsearch_cover" id="m_sch_top">
              <div className="cgsearch_inpbox_wrap">
                <div className="cgsearch_inpbox_back">
                  <button type="button">
                    <span className="blind">이전으로</span>
                  </button>
                </div>
                <div className="cgsearch_inpbox">
                  <div className="cgsearch_inpbox_sbox">
                    <input
                      id="query"
                      name="query"
                      type="text"
                      placeholder="검색어를 입력하세요."
                      autoComplete="off"
                      className="cgsearch_inpbox_inp"
                      value=""
                    />
                    <input type="hidden" id="query_sub" value="" />
                    <input type="hidden" id="srch_site_no" value="6004" />
                    <input type="hidden" id="select_site_no" value="6004" />
                    <input type="hidden" id="srch_header_type" value="mall" />
                    <input type="hidden" id="isSpcShopSrchYn" value="" />
                    <input type="hidden" id="specialShopId" value="" />
                    <input type="hidden" id="isModuleSrchYn" value="" />
                    <input type="hidden" id="modulePropId" value="" />
                    <input
                      type="hidden"
                      id="skipHeaderTopYn"
                      name="skipHeaderTopYn"
                      value=""
                    />
                    <button
                      type="button"
                      className="cgsearch_inpbox_src"
                      id="cgsearch_src"
                    >
                      <span className="blind">검색</span>
                    </button>
                    <button
                      type="button"
                      className="cgsearch_inpbox_del"
                      id="cgsearch_del"
                      style={{ display: 'none' }}
                    >
                      <span className="blind">검색</span>
                    </button>
                  </div>
                </div>
                <div className="cgsearch_inpbox_util">
                  <a
                    id="mHeaderCartBtn_search"
                    // href="javascript:mobileCommonFn.goCartViewPage('https://pay.ssg.com/m/cart/dmsShpp.ssg')"
                    href="/"
                    className="cgsearch_util_mn ty_cart"
                  >
                    <i className="icon icon_cart">
                      <span id="mHeaderCartNm_search" className="blind">
                        장바구니
                      </span>
                    </i>
                    <span
                      className="cmnoti_cartshare"
                      id="cmnoti_cartshare_search"
                      style={{ display: 'none' }}
                    >
                      <span className="blind">함께 장보기</span>
                    </span>
                    <span className="cmnoti_push" id="cartCnt_search">
                      <span className="blind" id="searchCartCntSpan">
                        담은 상품 수
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="cgsearch_cover_autocomp" id="m_srh2">
                <div className="cgsearch_cover_short" id="ac_short_list" />
                <div className="cgsearch_cover_recomm">
                  <ul className="cgsearch_recomm_keylist" id="ac_kwd_list" />
                </div>
              </div>

              <div className="cgsearch_recomm_keyword" id="m_srh1">
                <div
                  className="cgsearch_none_result"
                  id="mbr_kwd_alert_nolist"
                  style={{ display: 'none' }}
                >
                  <p>최근검색어가 없습니다</p>
                </div>
                <div className="cgsearch_latest_keyword" id="mbr_kwd_alert_all">
                  <h3 className="cgsearch_latest_title">최근검색어</h3>
                  <ul className="cgsearch_latest_keylst" id="mbr_kwd_list" />
                  <button
                    type="button"
                    className="cgsearch_delete_all"
                    data-value="mbr"
                  >
                    검색어 전체 삭제
                  </button>
                </div>
                <div className="cgsearch_recomm_tag" id="now_hot_all">
                  <h3 className="cgsearch_recomm_title">추천태그</h3>
                  <div className="cgsearch_recomm_container">
                    <ul className="cgsearch_recomm_lst" id="now_hot_list" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="m_container" className="mcom_container" data-iframe-height="">
          <div
            className="smhero_banner_wrap"
            style={{ paddingBottom: '390px' }}
          >
            <div
              id="smhero_banner"
              className="smhero_banner"
              style={{ opacity: '0.23' }}
            >
              <div className="smhero_swiper">
                <div className="swiper-container swiper-container-horizontal swiper-container-autoheight swiper-container-ios">
                  <ul
                    className="swiper-wrapper"
                    style={{
                      transitionDuration: '0ms',
                      transform: 'translate3d(-1560px, 0px, 0px)',
                      height: '390px',
                    }}
                  >
                    <li
                      className="swiper-slide swiper-slide-duplicate"
                      data-swiper-slide-index="14"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001162"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913325326621104739110_315.jpg&amp;w=750&amp;t=03519c7706a760a4a16a14e074e4d8f2663d1fb2"
                              alt="8월 유행하는 유아동 상품"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                8월 유행하는 유아동 상품
                              </span>
                              <span className="smhero_titmain_tx" />
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                잡지로 만나는 유아동소식 With 스타일러
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="swiper-slide"
                      data-swiper-slide-index="0"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001250"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202208/2022080114085258428785450978_125.jpg&amp;w=750&amp;t=90391597d521e894b5ecdf583a578e1f06b2a46d"
                              alt="메타버쓱 사전체험"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                메타버쓱 사전체험
                              </span>
                              <span className="smhero_titmain_tx" />
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                오픈런 달리기 1위에 도전하세요
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="swiper-slide"
                      data-swiper-slide-index="1"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="https://m-shinsegaemall.ssg.com/page/giftshop.ssg"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072608260942820708147070_658.jpg&amp;w=750&amp;t=d65266aea064cab1c07cc2575acaede3f84664bd"
                              alt="2022 추석 신세계몰 사전예약"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                2022 추석 신세계몰 사전예약
                              </span>
                              <span className="smhero_titmain_tx" />
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                최대 150만원 적립 얼리버드 혜택전
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="swiper-slide swiper-slide-prev"
                      data-swiper-slide-index="2"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001307"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913301745431834913283_620.jpg&amp;w=750&amp;t=1b1ed0795e074eba045ba768cadf532d6fc57a87"
                              alt="이번주 스마일클럽 뷰티 50% 할인 쿠폰"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                이번주 스마일클럽 뷰티 50% 할인 쿠폰
                              </span>
                              <span className="smhero_titmain_tx" />
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                지금 가입하면 스타벅스 커피!
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="swiper-slide swiper-slide-active"
                      data-swiper-slide-index="3"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001281"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913304369217802728780_525.jpg&amp;w=750&amp;t=5c8be47341b46bc16a8642b10f6972422a3c1632"
                              alt="썸머 뷰티 페스타"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                썸머 뷰티 페스타
                              </span>
                              <span className="smhero_titmain_tx" />
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                선착순 ~50% 쿠폰 + SSG머니 적립 혜택까지!
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="swiper-slide swiper-slide-next"
                      data-swiper-slide-index="4"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000000858&amp;siteNo=6005"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072212410632637519657751_177.jpg&amp;w=750&amp;t=5fb329ba27478b7d4525020b30169d6b922858a7"
                              alt="현대카드 PLCC 에디션2 런칭스마일클럽 전용 카드"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                현대카드 PLCC 에디션2 런칭
                              </span>
                              <span className="smhero_titmain_tx">
                                스마일클럽 전용 카드
                              </span>
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                최대 8만원 혜택+상품혜택
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="swiper-slide"
                      data-swiper-slide-index="5"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001261"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913310790664651684565_707.jpg&amp;w=750&amp;t=5b871240a48353e25ad9ff5dff289f45612dd4df"
                              alt="여름방학 건강생활"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                여름방학 건강생활
                              </span>
                              <span className="smhero_titmain_tx" />
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                수능 D-100! 건강식품 등 최대 2만원 할인
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="swiper-slide"
                      data-swiper-slide-index="6"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="https://m.ssg.com/plan/planShop.ssg?dispCmptId=6000441518"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072918224012543803047380_893.jpg&amp;w=750&amp;t=6b5ea4d842fe95a21cd46d2c7915d655c09e259c"
                              alt="스마일클럽 명절 GIFT 12% 쿠폰"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                스마일클럽 명절 GIFT 12% 쿠폰
                              </span>
                              <span className="smhero_titmain_tx" />
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                건강식품 인기 5대 브랜드 혜택
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="swiper-slide"
                      data-swiper-slide-index="7"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="https://m.ssg.com/event/eventDetail.ssg?promId=1100901861"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913323540717143969714_331.jpg&amp;w=750&amp;t=e398da7ffa129f3598daeccc68baf21d21970a16"
                              alt="까사미아 ~50%정기세일 LAST WEEK"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                까사미아 ~50%
                              </span>
                              <span className="smhero_titmain_tx">
                                정기세일 LAST WEEK
                              </span>
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                최대 5만원 쿠폰+카드청구할인
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="swiper-slide"
                      data-swiper-slide-index="8"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="https://event.ssg.com/eventDetail.ssg?nevntId=1000000001021&amp;siteNo=6005"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072212411584454127440512_845.jpg&amp;w=750&amp;t=7d5c89c3b4546d5ff3db4eaa2879a18f507720cd"
                              alt="추석에는 선물하기로 쓱- 1탄"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                추석에는 선물하기로 쓱- 1탄
                              </span>
                              <span className="smhero_titmain_tx" />
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                선물하기 서비스 이용하면,
                              </span>
                              <span className="csmhero_titsub_tx">
                                SSG머니부터 러쉬 기프트까지!
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="swiper-slide"
                      data-swiper-slide-index="9"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="https://m.ssg.com/ssgLive/detail.ssg?scomBrocOrgaId=wl3jk2zr4xv1o4xn"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913333973515614677561_438.jpg&amp;w=750&amp;t=b67be987bc62686b2d1d168d4f8139378f3cb2f3"
                              alt="르네휘테르 8/4(목) 11AM"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                르네휘테르 8/4(목) 11AM
                              </span>
                              <span className="smhero_titmain_tx" />
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                &apos;역대급&apos; 혜택 LIVE!
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="swiper-slide"
                      data-swiper-slide-index="10"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="/plan/planShop.ssg?dispCmptId=6000442252"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913343480652650124365_974.jpg&amp;w=750&amp;t=2adf10b70c4873e9ed082eaad4020bc9d8152005"
                              alt="해외명품 패밀리세일"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                해외명품 패밀리세일
                              </span>
                              <span className="smhero_titmain_tx" />
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                LUXURY SUMMER CLOSET
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="swiper-slide"
                      data-swiper-slide-index="11"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="https://department.ssg.com/plan/planShop.ssg?dispCmptId=6000421551"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913335838782863655386_118.jpg&amp;w=750&amp;t=5387d3ffe1377b5bd76f6d16d2d1e7fa881e5ab2"
                              alt="신세계 명품 뷰티 위크랑콤, 입생로랑, 키엘, 비오템 외"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                신세계 명품 뷰티 위크
                              </span>
                              <span className="smhero_titmain_tx">
                                랑콤, 입생로랑, 키엘, 비오템 외
                              </span>
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                ~15% 할인 + 10% 다운로드 쿠폰까지
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="swiper-slide"
                      data-swiper-slide-index="12"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="/plan/planShop.ssg?dispCmptId=6000442908"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913341733933287742428_142.jpg&amp;w=750&amp;t=b8117fa2e8fef47251f61f89e5311b6a53a48003"
                              alt="식단관리 TOP 200 기획전"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                식단관리 TOP 200 기획전
                              </span>
                              <span className="smhero_titmain_tx" />
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                무더위를 이겨낼 건강식단 식품 ~32%할인
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="swiper-slide"
                      data-swiper-slide-index="13"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="https://m.ssg.com/event/eventDetail.ssg?promId=1100902115"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913320535371780134278_470.jpg&amp;w=750&amp;t=6c9a015bf777d5ed7093cbe210339913773d97c6"
                              alt="8월 프리미엄 리뷰"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                8월 프리미엄 리뷰
                              </span>
                              <span className="smhero_titmain_tx" />
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                유아동용품/패션 구매 후
                              </span>
                              <span className="csmhero_titsub_tx">
                                리뷰작성하면 ~20만원 SSG머니
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="swiper-slide"
                      data-swiper-slide-index="14"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001162"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913325326621104739110_315.jpg&amp;w=750&amp;t=03519c7706a760a4a16a14e074e4d8f2663d1fb2"
                              alt="8월 유행하는 유아동 상품"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                8월 유행하는 유아동 상품
                              </span>
                              <span className="smhero_titmain_tx" />
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                잡지로 만나는 유아동소식 With 스타일러
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="swiper-slide swiper-slide-duplicate"
                      data-swiper-slide-index="0"
                      style={{ width: '390px' }}
                    >
                      <div className="smhero_bn gate_unit">
                        <a
                          className="smhero_bnlink"
                          href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001250"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="swiper-lazy swiper-lazy-loaded"
                              src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202208/2022080114085258428785450978_125.jpg&amp;w=750&amp;t=90391597d521e894b5ecdf583a578e1f06b2a46d"
                              alt="메타버쓱 사전체험"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                메타버쓱 사전체험
                              </span>
                              <span className="smhero_titmain_tx" />
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                오픈런 달리기 1위에 도전하세요
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="swiper-pagination swiper-pagination-custom">
                  <span className="blind">현재 배너</span>
                  <span className="swiper-pagination-current">04</span>
                  <span className="swiper-pagination-separator">-</span>
                  <span className="blind">전체 배너</span>
                  <span className="swiper-pagination-total">15</span>
                </div>
                <div className="swiper-ctrls">
                  <div className="swiper_autoplay">
                    <button type="button" className="btn_autoplay pause">
                      <span className="label_pause">
                        <span className="blind">배너 목록 자동 재생 정지</span>
                      </span>
                      <span className="label_play">
                        <span className="blind">배너 목록 자동 재생 시작</span>
                      </span>
                    </button>
                  </div>
                  <div className="swiper_moreview">
                    <button type="button" className="btn_moreview">
                      <span className="blind">배너 전체보기</span>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="smhero_viewer"
                role="dialog"
                tabIndex="-1"
                aria-hidden="true"
              >
                <div
                  className="smhero_wrap"
                  role="document"
                  // tabIndex="0"
                >
                  <div className="smhero_scroll">
                    <div className="smhero_head">
                      <h3 className="smhero_head_tit">전체보기</h3>
                      <button type="button" className="smhero_close">
                        <span className="blind">배너 전체보기 닫기</span>
                      </button>
                    </div>
                    <div className="smhero_cont">
                      <ul
                        className="smhero_bnlist"
                        data-areaid="smhero"
                        data-impyn="Y"
                      >
                        <li>
                          <div className="smhero_bn gate_unit">
                            <a
                              className="smhero_bnlink"
                              href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001250"
                            >
                              <div className="smhero_thumb">
                                <img
                                  className="ssg_lazy"
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202208/2022080114085258428785450978_125.jpg&amp;w=750&amp;t=90391597d521e894b5ecdf583a578e1f06b2a46d"
                                  alt="메타버쓱 사전체험"
                                  data-ll-status="observed"
                                />
                              </div>
                              <div className="smhero_tit">
                                <h3 className="smhero_titmain">
                                  <span className="smhero_titmain_tx">
                                    메타버쓱 사전체험
                                  </span>
                                  <span className="smhero_titmain_tx" />
                                </h3>
                                <div className="smhero_titsub">
                                  <span className="csmhero_titsub_tx">
                                    오픈런 달리기 1위에 도전하세요
                                  </span>
                                  <span className="csmhero_titsub_tx" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="smhero_bn gate_unit">
                            <a
                              className="smhero_bnlink"
                              href="https://m-shinsegaemall.ssg.com/page/giftshop.ssg"
                            >
                              <div className="smhero_thumb">
                                <img
                                  className="ssg_lazy"
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072608260942820708147070_658.jpg&amp;w=750&amp;t=d65266aea064cab1c07cc2575acaede3f84664bd"
                                  alt="2022 추석 신세계몰 사전예약"
                                  data-ll-status="observed"
                                />
                              </div>
                              <div className="smhero_tit">
                                <h3 className="smhero_titmain">
                                  <span className="smhero_titmain_tx">
                                    2022 추석 신세계몰 사전예약
                                  </span>
                                  <span className="smhero_titmain_tx" />
                                </h3>
                                <div className="smhero_titsub">
                                  <span className="csmhero_titsub_tx">
                                    최대 150만원 적립 얼리버드 혜택전
                                  </span>
                                  <span className="csmhero_titsub_tx" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="smhero_bn gate_unit">
                            <a
                              className="smhero_bnlink"
                              href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001307"
                            >
                              <div className="smhero_thumb">
                                <img
                                  className="ssg_lazy"
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913301745431834913283_620.jpg&amp;w=750&amp;t=1b1ed0795e074eba045ba768cadf532d6fc57a87"
                                  alt="이번주 스마일클럽 뷰티 50% 할인 쿠폰"
                                  data-ll-status="observed"
                                />
                              </div>
                              <div className="smhero_tit">
                                <h3 className="smhero_titmain">
                                  <span className="smhero_titmain_tx">
                                    이번주 스마일클럽 뷰티 50% 할인 쿠폰
                                  </span>
                                  <span className="smhero_titmain_tx" />
                                </h3>
                                <div className="smhero_titsub">
                                  <span className="csmhero_titsub_tx">
                                    지금 가입하면 스타벅스 커피!
                                  </span>
                                  <span className="csmhero_titsub_tx" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="smhero_bn gate_unit">
                            <a
                              className="smhero_bnlink"
                              href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001281"
                            >
                              <div className="smhero_thumb">
                                <img
                                  className="ssg_lazy"
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913304369217802728780_525.jpg&amp;w=750&amp;t=5c8be47341b46bc16a8642b10f6972422a3c1632"
                                  alt="썸머 뷰티 페스타"
                                  data-ll-status="observed"
                                />
                              </div>
                              <div className="smhero_tit">
                                <h3 className="smhero_titmain">
                                  <span className="smhero_titmain_tx">
                                    썸머 뷰티 페스타
                                  </span>
                                  <span className="smhero_titmain_tx" />
                                </h3>
                                <div className="smhero_titsub">
                                  <span className="csmhero_titsub_tx">
                                    선착순 ~50% 쿠폰 + SSG머니 적립 혜택까지!
                                  </span>
                                  <span className="csmhero_titsub_tx" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="smhero_bn gate_unit">
                            <a
                              className="smhero_bnlink"
                              href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000000858&amp;siteNo=6005"
                            >
                              <div className="smhero_thumb">
                                <img
                                  className="ssg_lazy"
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072212410632637519657751_177.jpg&amp;w=750&amp;t=5fb329ba27478b7d4525020b30169d6b922858a7"
                                  alt="현대카드 PLCC 에디션2 런칭스마일클럽 전용 카드"
                                  data-ll-status="observed"
                                />
                              </div>
                              <div className="smhero_tit">
                                <h3 className="smhero_titmain">
                                  <span className="smhero_titmain_tx">
                                    현대카드 PLCC 에디션2 런칭
                                  </span>
                                  <span className="smhero_titmain_tx">
                                    스마일클럽 전용 카드
                                  </span>
                                </h3>
                                <div className="smhero_titsub">
                                  <span className="csmhero_titsub_tx">
                                    최대 8만원 혜택+상품혜택
                                  </span>
                                  <span className="csmhero_titsub_tx" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="smhero_bn gate_unit">
                            <a
                              className="smhero_bnlink"
                              href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001261"
                            >
                              <div className="smhero_thumb">
                                <img
                                  className="ssg_lazy"
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913310790664651684565_707.jpg&amp;w=750&amp;t=5b871240a48353e25ad9ff5dff289f45612dd4df"
                                  alt="여름방학 건강생활"
                                  data-ll-status="observed"
                                />
                              </div>
                              <div className="smhero_tit">
                                <h3 className="smhero_titmain">
                                  <span className="smhero_titmain_tx">
                                    여름방학 건강생활
                                  </span>
                                  <span className="smhero_titmain_tx" />
                                </h3>
                                <div className="smhero_titsub">
                                  <span className="csmhero_titsub_tx">
                                    수능 D-100! 건강식품 등 최대 2만원 할인
                                  </span>
                                  <span className="csmhero_titsub_tx" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="smhero_bn gate_unit">
                            <a
                              className="smhero_bnlink"
                              href="https://m.ssg.com/plan/planShop.ssg?dispCmptId=6000441518"
                            >
                              <div className="smhero_thumb">
                                <img
                                  className="ssg_lazy"
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072918224012543803047380_893.jpg&amp;w=750&amp;t=6b5ea4d842fe95a21cd46d2c7915d655c09e259c"
                                  alt="스마일클럽 명절 GIFT 12% 쿠폰"
                                  data-ll-status="observed"
                                />
                              </div>
                              <div className="smhero_tit">
                                <h3 className="smhero_titmain">
                                  <span className="smhero_titmain_tx">
                                    스마일클럽 명절 GIFT 12% 쿠폰
                                  </span>
                                  <span className="smhero_titmain_tx" />
                                </h3>
                                <div className="smhero_titsub">
                                  <span className="csmhero_titsub_tx">
                                    건강식품 인기 5대 브랜드 혜택
                                  </span>
                                  <span className="csmhero_titsub_tx" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="smhero_bn gate_unit">
                            <a
                              className="smhero_bnlink"
                              href="https://m.ssg.com/event/eventDetail.ssg?promId=1100901861"
                            >
                              <div className="smhero_thumb">
                                <img
                                  className="ssg_lazy"
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913323540717143969714_331.jpg&amp;w=750&amp;t=e398da7ffa129f3598daeccc68baf21d21970a16"
                                  alt="까사미아 ~50%정기세일 LAST WEEK"
                                  data-ll-status="observed"
                                />
                              </div>
                              <div className="smhero_tit">
                                <h3 className="smhero_titmain">
                                  <span className="smhero_titmain_tx">
                                    까사미아 ~50%
                                  </span>
                                  <span className="smhero_titmain_tx">
                                    정기세일 LAST WEEK
                                  </span>
                                </h3>
                                <div className="smhero_titsub">
                                  <span className="csmhero_titsub_tx">
                                    최대 5만원 쿠폰+카드청구할인
                                  </span>
                                  <span className="csmhero_titsub_tx" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="smhero_bn gate_unit">
                            <a
                              className="smhero_bnlink"
                              href="https://event.ssg.com/eventDetail.ssg?nevntId=1000000001021&amp;siteNo=6005"
                            >
                              <div className="smhero_thumb">
                                <img
                                  className="ssg_lazy"
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072212411584454127440512_845.jpg&amp;w=750&amp;t=7d5c89c3b4546d5ff3db4eaa2879a18f507720cd"
                                  alt="추석에는 선물하기로 쓱- 1탄"
                                  data-ll-status="observed"
                                />
                              </div>
                              <div className="smhero_tit">
                                <h3 className="smhero_titmain">
                                  <span className="smhero_titmain_tx">
                                    추석에는 선물하기로 쓱- 1탄
                                  </span>
                                  <span className="smhero_titmain_tx" />
                                </h3>
                                <div className="smhero_titsub">
                                  <span className="csmhero_titsub_tx">
                                    선물하기 서비스 이용하면,
                                  </span>
                                  <span className="csmhero_titsub_tx">
                                    SSG머니부터 러쉬 기프트까지!
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="smhero_bn gate_unit">
                            <a
                              className="smhero_bnlink"
                              href="https://m.ssg.com/ssgLive/detail.ssg?scomBrocOrgaId=wl3jk2zr4xv1o4xn"
                            >
                              <div className="smhero_thumb">
                                <img
                                  className="ssg_lazy"
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913333973515614677561_438.jpg&amp;w=750&amp;t=b67be987bc62686b2d1d168d4f8139378f3cb2f3"
                                  alt="르네휘테르 8/4(목) 11AM"
                                  data-ll-status="observed"
                                />
                              </div>
                              <div className="smhero_tit">
                                <h3 className="smhero_titmain">
                                  <span className="smhero_titmain_tx">
                                    르네휘테르 8/4(목) 11AM
                                  </span>
                                  <span className="smhero_titmain_tx" />
                                </h3>
                                <div className="smhero_titsub">
                                  <span className="csmhero_titsub_tx">
                                    &apos;역대급&apos; 혜택 LIVE!
                                  </span>
                                  <span className="csmhero_titsub_tx" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="smhero_bn gate_unit">
                            <a
                              className="smhero_bnlink"
                              href="/plan/planShop.ssg?dispCmptId=6000442252"
                            >
                              <div className="smhero_thumb">
                                <img
                                  className="ssg_lazy"
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913343480652650124365_974.jpg&amp;w=750&amp;t=2adf10b70c4873e9ed082eaad4020bc9d8152005"
                                  alt="해외명품 패밀리세일"
                                  data-ll-status="observed"
                                />
                              </div>
                              <div className="smhero_tit">
                                <h3 className="smhero_titmain">
                                  <span className="smhero_titmain_tx">
                                    해외명품 패밀리세일
                                  </span>
                                  <span className="smhero_titmain_tx" />
                                </h3>
                                <div className="smhero_titsub">
                                  <span className="csmhero_titsub_tx">
                                    LUXURY SUMMER CLOSET
                                  </span>
                                  <span className="csmhero_titsub_tx" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="smhero_bn gate_unit">
                            <a
                              className="smhero_bnlink"
                              href="https://department.ssg.com/plan/planShop.ssg?dispCmptId=6000421551"
                            >
                              <div className="smhero_thumb">
                                <img
                                  className="ssg_lazy"
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913335838782863655386_118.jpg&amp;w=750&amp;t=5387d3ffe1377b5bd76f6d16d2d1e7fa881e5ab2"
                                  alt="신세계 명품 뷰티 위크랑콤, 입생로랑, 키엘, 비오템 외"
                                  data-ll-status="observed"
                                />
                              </div>
                              <div className="smhero_tit">
                                <h3 className="smhero_titmain">
                                  <span className="smhero_titmain_tx">
                                    신세계 명품 뷰티 위크
                                  </span>
                                  <span className="smhero_titmain_tx">
                                    랑콤, 입생로랑, 키엘, 비오템 외
                                  </span>
                                </h3>
                                <div className="smhero_titsub">
                                  <span className="csmhero_titsub_tx">
                                    ~15% 할인 + 10% 다운로드 쿠폰까지
                                  </span>
                                  <span className="csmhero_titsub_tx" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="smhero_bn gate_unit">
                            <a
                              className="smhero_bnlink"
                              href="/plan/planShop.ssg?dispCmptId=6000442908"
                            >
                              <div className="smhero_thumb">
                                <img
                                  className="ssg_lazy"
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913341733933287742428_142.jpg&amp;w=750&amp;t=b8117fa2e8fef47251f61f89e5311b6a53a48003"
                                  alt="식단관리 TOP 200 기획전"
                                  data-ll-status="observed"
                                />
                              </div>
                              <div className="smhero_tit">
                                <h3 className="smhero_titmain">
                                  <span className="smhero_titmain_tx">
                                    식단관리 TOP 200 기획전
                                  </span>
                                  <span className="smhero_titmain_tx" />
                                </h3>
                                <div className="smhero_titsub">
                                  <span className="csmhero_titsub_tx">
                                    무더위를 이겨낼 건강식단 식품 ~32%할인
                                  </span>
                                  <span className="csmhero_titsub_tx" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="smhero_bn gate_unit">
                            <a
                              className="smhero_bnlink"
                              href="https://m.ssg.com/event/eventDetail.ssg?promId=1100902115"
                            >
                              <div className="smhero_thumb">
                                <img
                                  className="ssg_lazy"
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913320535371780134278_470.jpg&amp;w=750&amp;t=6c9a015bf777d5ed7093cbe210339913773d97c6"
                                  alt="8월 프리미엄 리뷰"
                                  data-ll-status="observed"
                                />
                              </div>
                              <div className="smhero_tit">
                                <h3 className="smhero_titmain">
                                  <span className="smhero_titmain_tx">
                                    8월 프리미엄 리뷰
                                  </span>
                                  <span className="smhero_titmain_tx" />
                                </h3>
                                <div className="smhero_titsub">
                                  <span className="csmhero_titsub_tx">
                                    유아동용품/패션 구매 후
                                  </span>
                                  <span className="csmhero_titsub_tx">
                                    리뷰작성하면 ~20만원 SSG머니
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="smhero_bn gate_unit">
                            <a
                              className="smhero_bnlink"
                              href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001162"
                            >
                              <div className="smhero_thumb">
                                <img
                                  className="ssg_lazy"
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913325326621104739110_315.jpg&amp;w=750&amp;t=03519c7706a760a4a16a14e074e4d8f2663d1fb2"
                                  alt="8월 유행하는 유아동 상품"
                                  data-ll-status="observed"
                                />
                              </div>
                              <div className="smhero_tit">
                                <h3 className="smhero_titmain">
                                  <span className="smhero_titmain_tx">
                                    8월 유행하는 유아동 상품
                                  </span>
                                  <span className="smhero_titmain_tx" />
                                </h3>
                                <div className="smhero_titsub">
                                  <span className="csmhero_titsub_tx">
                                    잡지로 만나는 유아동소식 With 스타일러
                                  </span>
                                  <span className="csmhero_titsub_tx" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="m_topnav"
            className="mcom_topnav react-area"
            style={{ marginLeft: '0px' }}
          >
            <h2 className="blind">서비스 매장 바로가기</h2>
            <ul className="topnav_menu" role="navigation">
              <li className="topnav_item">
                <a
                  href="/page/home.ssg"
                  className="topnav_lnk on clickable"
                  data-react-tarea="스와이프|매장클릭|홈"
                >
                  <span className="topnav_txt">홈</span>
                </a>
              </li>
              <li className="topnav_item">
                <a
                  href="/page/giftshop.ssg"
                  className="topnav_lnk clickable"
                  data-react-tarea="스와이프|매장클릭|추석"
                >
                  <span className="topnav_txt">추석</span>
                  <span className="cmnoti_push">
                    <span className="blind">신규 카테고리 메뉴</span>
                    <span aria-hidden="true">N</span>
                  </span>
                </a>
              </li>
              <li className="topnav_item">
                <a
                  href="/page/ssgluxury.ssg"
                  className="topnav_lnk clickable"
                  data-react-tarea="스와이프|매장클릭|명품관"
                >
                  <span className="topnav_txt">명품관</span>
                </a>
              </li>
              <li className="topnav_item">
                <a
                  href="/page/happybuy.ssg"
                  className="topnav_lnk clickable"
                  data-react-tarea="스와이프|매장클릭|해피라운지"
                >
                  <span className="topnav_txt">해피라운지</span>
                </a>
              </li>
              <li className="topnav_item">
                <a
                  href="/page/best.ssg"
                  className="topnav_lnk clickable"
                  data-react-tarea="스와이프|매장클릭|베스트"
                >
                  <span className="topnav_txt">베스트</span>
                </a>
              </li>
              <li className="topnav_item">
                <a
                  href="/page/ssgdept.ssg"
                  className="topnav_lnk clickable"
                  data-react-tarea="스와이프|매장클릭|백화점"
                >
                  <span className="topnav_txt">백화점</span>
                </a>
              </li>
              <li className="topnav_item">
                <a
                  href="/page/brand.ssg"
                  className="topnav_lnk clickable"
                  data-react-tarea="스와이프|매장클릭|브랜드"
                >
                  <span className="topnav_txt">브랜드</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="ly_change">
            <div className="tit_change">
              <h3>대체 상품</h3>
              <a href="/#" className="btn_close">
                <span className="blind">닫기</span>
              </a>
            </div>
            <div className="cont_change" style={{ height: '786px' }}>
              <div className="mcom_scroll" />
            </div>
          </div>
          <div
            id="m_content"
            className="react-area"
            data-globalid="홈"
            data-areaid="ad_list"
          >
            <div className="cmgrid_module">
              <div className="cmgrid_list" data-equal-height="false">
                <div className="cmgrid_full_box">
                  <div
                    className="cmitem_blank"
                    style={
                      {
                        // --blank-width: '375',
                        // --blank-height: '5',
                        // --blank-bg-color: '#ffffff'
                      }
                    }
                  />
                </div>
                <div className="cmgrid_full_box" data-page-set-id="106">
                  <div className="cmitem_quick_unit ty_horizontal_scroll">
                    <div className="cmitem_quick_cont">
                      <ul className="cmitem_quick_lst">
                        <li>
                          <a
                            href="https://m-shinsegaemall.ssg.com/page/ssgluxury.ssg"
                            className="clickable"
                            rel="nofollow"
                            data-react-tarea="홈|버티컬카테고리|배너_클릭|명품"
                          >
                            <span
                              className="cmitem_quick_thmb ssg_lazy"
                              data-bg="url('//sui.ssgcdn.com/cmpt/banner/202207/2022072216460396994225724522_92.png')"
                              data-ll-status="loading"
                              style={{
                                backgroundImage:
                                  "url('//sui.ssgcdn.com/cmpt/banner/202207/2022072216460396994225724522_92.png')",
                              }}
                            />
                            <span className="cmitem_quick_tx" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://m-shinsegaemall.ssg.com/page/fashion.ssg"
                            className="clickable"
                            rel="nofollow"
                            data-react-tarea="홈|버티컬카테고리|배너_클릭|패션"
                          >
                            <span
                              className="cmitem_quick_thmb ssg_lazy"
                              data-bg="url('//sui.ssgcdn.com/cmpt/banner/202207/2022072216423296939917157991_956.png')"
                              data-ll-status="loading"
                              style={{
                                backgroundImage:
                                  "url('//sui.ssgcdn.com/cmpt/banner/202207/2022072216423296939917157991_956.png')",
                              }}
                            />
                            <span className="cmitem_quick_tx" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://m-shinsegaemall.ssg.com/page/beauty.ssg"
                            className="clickable"
                            rel="nofollow"
                            data-react-tarea="홈|버티컬카테고리|배너_클릭|뷰티"
                          >
                            <span
                              className="cmitem_quick_thmb ssg_lazy"
                              data-bg="url('//sui.ssgcdn.com/cmpt/banner/202207/2022072216431332432781237278_289.png')"
                              data-ll-status="loading"
                              style={{
                                backgroundImage:
                                  "url('//sui.ssgcdn.com/cmpt/banner/202207/2022072216431332432781237278_289.png')",
                              }}
                            />
                            <span className="cmitem_quick_tx" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://m-shinsegaemall.ssg.com/page/life.ssg"
                            className="clickable"
                            rel="nofollow"
                            data-react-tarea="홈|버티컬카테고리|배너_클릭|라이프"
                          >
                            <span
                              className="cmitem_quick_thmb ssg_lazy"
                              data-bg="url('//sui.ssgcdn.com/cmpt/banner/202207/2022072216435453442063698206_435.png')"
                              data-ll-status="loading"
                              style={{
                                backgroundImage:
                                  "url('//sui.ssgcdn.com/cmpt/banner/202207/2022072216435453442063698206_435.png')",
                              }}
                            />
                            <span className="cmitem_quick_tx" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="cmgrid_full_box js-set-header"
                  data-page-set-id="112"
                >
                  <div className="cmtit_heading v2">
                    <div className="cmtit_txtbx">
                      <h3 className="cmtit_maintxt">Happy Lounge</h3>
                      <p className="cmtit_subtxt">
                        당신의 쇼핑이 특별해지는, 매일 오전 9시
                      </p>
                    </div>
                    <div className="cmtit_txtbtn">
                      <a
                        href="https://m-shinsegaemall.ssg.com/page/happybuy.ssg"
                        className="cmtit_txtbtn_link"
                      >
                        전체보기
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="cmgrid_full_box cmitem_ty_deal v2"
                  data-page-set-id="112"
                  data-has-next="false"
                >
                  <div className="cmitem_unit" data-unittype="item">
                    <div className="cmitem_goods">
                      <div className="cmitem_gridbx ty_rect">
                        <div className="cmitem_thmb">
                          <a
                            href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000034164356&amp;siteNo=6004&amp;salestrNo=6005"
                            className="cmitem_thmb_link clickable"
                            data-react-tarea="홈|해피라운지_상품|상품_클릭|[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外"
                          >
                            <div className="cmitem_thmb_imgbx">
                              <img
                                className="cmitem_thmb_img"
                                src="//sitem.ssgcdn.com/56/43/16/item/1000034164356_i1_500.jpg"
                                alt="[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外"
                                onError="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="cmitem_other">
                          <ul className="cmitem_other_list ty_full">
                            <li>
                              <a href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000034164356&amp;siteNo=6004&amp;salestrNo=6005&amp;dealCmptItemId=">
                                <div className="cmitem_other_thmb">
                                  <img
                                    src="https://sitem.ssgcdn.com/19/30/17/item/1000413173019_i1_150.jpg"
                                    alt="다른 옵션 이미지"
                                    onError="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=75&amp;h=75&amp;t=781223af222f4db27c6e21aadb6e00f614598dab'"
                                  />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000034164356&amp;siteNo=6004&amp;salestrNo=6005&amp;dealCmptItemId=">
                                <div className="cmitem_other_thmb">
                                  <img
                                    src="https://sitem.ssgcdn.com/84/95/32/item/1000388329584_i1_150.jpg"
                                    alt="다른 옵션 이미지"
                                    onError="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=75&amp;h=75&amp;t=781223af222f4db27c6e21aadb6e00f614598dab'"
                                  />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000034164356&amp;siteNo=6004&amp;salestrNo=6005&amp;dealCmptItemId=">
                                <div className="cmitem_other_thmb">
                                  <img
                                    src="https://sitem.ssgcdn.com/55/21/84/item/1000064842155_i1_150.jpg"
                                    alt="다른 옵션 이미지"
                                    onError="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=75&amp;h=75&amp;t=781223af222f4db27c6e21aadb6e00f614598dab'"
                                  />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000034164356&amp;siteNo=6004&amp;salestrNo=6005"
                                className="clickable"
                                data-react-tarea="홈|해피라운지_상품|상품_클릭|[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外"
                              >
                                <div className="cmitem_other_thmb ty_more">
                                  <i
                                    className="icon ty_xs icon_plusmark"
                                    aria-hidden="true"
                                  />
                                  <span className="blind">상품 더보기</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cmitem_detailbx ty_deal_text2">
                        <div className="cmitem_tx_thmb">
                          <a
                            href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000034164356&amp;siteNo=6004&amp;salestrNo=6005"
                            className="cmitem_tx_thmb_link clickable"
                            data-react-tarea="홈|해피라운지_상품|상품_클릭|[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外"
                          >
                            <div className="cmitem_tit_selling">
                              <span className="cmitem_tit_txt1">
                                조아맘/시크폭스 外
                              </span>
                              <span className="cmitem_tit_txt2">
                                BEST 아이템 제안
                              </span>
                            </div>
                            <div className="cmitem_tit">
                              <span className="cm_mall_text">
                                <i className="sm">신세계몰</i>
                              </span>
                              <span className="cmitem_goods_tit">
                                [브리치] 오늘의 베스트! 시원한 썸머 데일리룩
                                BEST50 원피스/반팔티 外
                              </span>
                            </div>
                            <div className="cmitem_pricewrap ty_smcolor">
                              <div className="cmitem_price_row cmitem_ty_newpr">
                                <div className="new_price">
                                  <span className="blind">판매가격</span>
                                  <em className="ssg_price">15,486</em>
                                  <span className="ssg_tx">
                                    원<span className="cm_tx_opt">~</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="cmitem_row_control">
                          <div className="cmitem_sideinfo_block">
                            <span className="cmitem_tag ty_deal ty_outline">
                              3,294개 구매중
                            </span>
                          </div>
                          <div className="cmitem_btn_wrap">
                            <span className="cmlike _js_cmlike interestIt">
                              <input
                                type="hidden"
                                name="attnDivCd"
                                value="10"
                              />
                              <input
                                type="hidden"
                                name="attnDivDtlCd"
                                value="10"
                              />
                              <input type="hidden" name="siteNo" value="6004" />
                              <input
                                type="hidden"
                                name="attnTgtIdnfNo1"
                                value="1000034164356"
                              />
                              <input
                                type="hidden"
                                name="attnTgtIdnfNo2"
                                value="6005"
                              />
                              <input
                                type="hidden"
                                name="uitemId"
                                value="00000"
                              />
                              <input
                                type="hidden"
                                name="notiTitle"
                                value="[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外"
                              />
                              <input
                                type="hidden"
                                name="notiImgPath"
                                value="//sitem.ssgcdn.com/56/43/16/item/1000034164356_i1_500.jpg"
                              />
                              <input type="hidden" name="checked" value="N" />
                              <input
                                type="hidden"
                                name="useForcedSsgYn"
                                value="N"
                              />
                              <button
                                type="button"
                                className="cmlike_btn _js_cmlike_btn clickable"
                                data-position="clip"
                                data-react-tarea="홈|해피라운지_상품|상품_좋아요|[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外_"
                                data-react-tarea-dtl-cd="t00003"
                              >
                                <span className="cmlike_ico">
                                  <i className="cmlike_primary_m" />
                                  <span className="sr_off">
                                    <span className="blind">관심상품 취소</span>
                                  </span>
                                  <span className="sr_on">
                                    <span className="blind">관심상품 등록</span>
                                  </span>
                                </span>
                              </button>{' '}
                            </span>
                            <button
                              type="button"
                              className="cmitem_btn_cart clickabl"
                              onClick={`frontCommCart.put(this, '');`}
                              data-react-tarea="홈|해피라운지_상품|상품_장바구니담기|[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外"
                            >
                              <span className="blind">장바구니 담기</span>
                            </button>
                            <span
                              style={{ display: 'none' }}
                              className="disp_cart_data"
                              data-cart-type="10"
                              data-cart-inflo-site-no="6004"
                              data-cart-ordqty="1"
                            >
                              {/* {data1} */}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="cmgrid_full_box cmitem_ty_deal v2"
                  data-page-set-id="112"
                  data-has-next="false"
                >
                  <div className="cmitem_unit" data-unittype="item">
                    <div className="cmitem_goods">
                      <div className="cmitem_gridbx ty_rect">
                        <div className="cmitem_thmb">
                          <a
                            href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000376696315&amp;siteNo=6009&amp;salestrNo=1002"
                            className="cmitem_thmb_link clickable"
                            data-react-tarea="홈|해피라운지_상품|상품_클릭|(남성) 22 S/S 시즌오프 30% &amp; Best Item 50종을 한 눈에 쓱~~"
                          >
                            <div className="cmitem_thmb_imgbx">
                              <img
                                className="cmitem_thmb_img"
                                src="//sitem.ssgcdn.com/15/63/69/item/1000376696315_i1_500.jpg"
                                alt="(남성) 22 S/S 시즌오프 30% &amp; Best Item 50종을 한 눈에 쓱~~"
                                onError="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="cmitem_other">
                          <ul className="cmitem_other_list ty_full">
                            <li>
                              <a href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000376696315&amp;siteNo=6009&amp;salestrNo=1002&amp;dealCmptItemId=">
                                <div className="cmitem_other_thmb">
                                  <img
                                    src="https://sitem.ssgcdn.com/13/55/82/item/1000312825513_i1_150.jpg"
                                    alt="다른 옵션 이미지"
                                    onError="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=75&amp;h=75&amp;t=781223af222f4db27c6e21aadb6e00f614598dab'"
                                  />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000376696315&amp;siteNo=6009&amp;salestrNo=1002&amp;dealCmptItemId=">
                                <div className="cmitem_other_thmb">
                                  <img
                                    src="https://sitem.ssgcdn.com/28/54/26/item/1000301265428_i1_150.jpg"
                                    alt="다른 옵션 이미지"
                                    onError="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=75&amp;h=75&amp;t=781223af222f4db27c6e21aadb6e00f614598dab'"
                                  />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000376696315&amp;siteNo=6009&amp;salestrNo=1002&amp;dealCmptItemId=">
                                <div className="cmitem_other_thmb">
                                  <img
                                    src="https://sitem.ssgcdn.com/41/60/21/item/1000299216041_i1_150.jpg"
                                    alt="다른 옵션 이미지"
                                    onError="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=75&amp;h=75&amp;t=781223af222f4db27c6e21aadb6e00f614598dab'"
                                  />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000376696315&amp;siteNo=6009&amp;salestrNo=1002"
                                className="clickable"
                                data-react-tarea="홈|해피라운지_상품|상품_클릭|(남성) 22 S/S 시즌오프 30% &amp; Best Item 50종을 한 눈에 쓱~~"
                              >
                                <div className="cmitem_other_thmb ty_more">
                                  <i
                                    className="icon ty_xs icon_plusmark"
                                    aria-hidden="true"
                                  />
                                  <span className="blind">상품 더보기</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cmitem_detailbx ty_deal_text2">
                        <div className="cmitem_tx_thmb">
                          <a
                            href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000376696315&amp;siteNo=6009&amp;salestrNo=1002"
                            className="cmitem_tx_thmb_link clickable"
                            data-react-tarea="홈|해피라운지_상품|상품_클릭|(남성) 22 S/S 시즌오프 30% &amp; Best Item 50종을 한 눈에 쓱~~"
                          >
                            <div className="cmitem_tit_selling">
                              <span className="cmitem_tit_txt1">
                                여름은 역시 라코스테
                              </span>
                              <span className="cmitem_tit_txt2">
                                베스트아이템 50!
                              </span>
                            </div>
                            <div className="cmitem_tit">
                              <span className="cm_mall_text">
                                <i className="sd">신세계백화점</i>
                              </span>
                              <span className="cmitem_goods_tit">
                                (남성) 22 S/S 시즌오프 30% &amp; Best Item
                                50종을 한 눈에 쓱~~
                              </span>
                            </div>
                            <div className="cmitem_pricewrap ty_smcolor">
                              <div className="cmitem_price_row cmitem_ty_newpr">
                                <div className="new_price">
                                  <span className="blind">판매가격</span>
                                  <em className="ssg_price">20,700</em>
                                  <span className="ssg_tx">
                                    원<span className="cm_tx_opt">~</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="cmitem_row_control">
                          <div className="cmitem_sideinfo_block">
                            <span className="cmitem_tag ty_deal ty_outline">
                              525개 구매중
                            </span>
                          </div>
                          <div className="cmitem_btn_wrap">
                            <span className="cmlike _js_cmlike interestIt">
                              <input
                                type="hidden"
                                name="attnDivCd"
                                value="10"
                              />
                              <input
                                type="hidden"
                                name="attnDivDtlCd"
                                value="10"
                              />
                              <input type="hidden" name="siteNo" value="6009" />
                              <input
                                type="hidden"
                                name="attnTgtIdnfNo1"
                                value="1000376696315"
                              />
                              <input
                                type="hidden"
                                name="attnTgtIdnfNo2"
                                value="1002"
                              />
                              <input
                                type="hidden"
                                name="uitemId"
                                value="00000"
                              />
                              <input
                                type="hidden"
                                name="notiTitle"
                                value="(남성) 22 S/S 시즌오프 30% &amp; Best Item 50종을 한 눈에 쓱~~"
                              />
                              <input
                                type="hidden"
                                name="notiImgPath"
                                value="//sitem.ssgcdn.com/15/63/69/item/1000376696315_i1_500.jpg"
                              />
                              <input type="hidden" name="checked" value="N" />
                              <input
                                type="hidden"
                                name="useForcedSsgYn"
                                value="N"
                              />
                              <button
                                type="button"
                                className="cmlike_btn _js_cmlike_btn clickable"
                                data-position="clip"
                                data-react-tarea="홈|해피라운지_상품|상품_좋아요|(남성) 22 S/S 시즌오프 30% &amp; Best Item 50종을 한 눈에 쓱~~_"
                                data-react-tarea-dtl-cd="t00003"
                              >
                                <span className="cmlike_ico">
                                  <i className="cmlike_primary_m" />
                                  <span className="sr_off">
                                    <span className="blind">관심상품 취소</span>
                                  </span>
                                  <span className="sr_on">
                                    <span className="blind">관심상품 등록</span>
                                  </span>
                                </span>
                              </button>{' '}
                            </span>
                            <button
                              type="button"
                              className="cmitem_btn_cart clickabl"
                              onClick={`frontCommCart.put(this, '');`}
                              data-react-tarea="홈|해피라운지_상품|상품_장바구니담기|(남성) 22 S/S 시즌오프 30% &amp; Best Item 50종을 한 눈에 쓱~~"
                            >
                              <span className="blind">장바구니 담기</span>
                            </button>
                            <span
                              style={{ display: 'none' }}
                              className="disp_cart_data"
                              data-cart-type="10"
                              data-cart-inflo-site-no="6004"
                              data-cart-ordqty="1"
                            >
                              {/* {data3} */}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="cmgrid_full_box cmitem_ty_deal v2"
                  data-page-set-id="112"
                  data-has-next="false"
                >
                  <div className="cmitem_unit" data-unittype="item">
                    <div className="cmitem_goods">
                      <div className="cmitem_gridbx ty_rect">
                        <div className="cmitem_thmb">
                          <a
                            href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000035003465&amp;siteNo=6004&amp;salestrNo=6005"
                            className="cmitem_thmb_link clickable"
                            data-react-tarea="홈|해피라운지_상품|상품_클릭|[트렌드연합] 지금 입기좋은 패션 제안! 티셔츠/원피스 外 ~32% OFF"
                          >
                            <div className="cmitem_thmb_imgbx">
                              <img
                                className="cmitem_thmb_img"
                                src="//sitem.ssgcdn.com/65/34/00/item/1000035003465_i1_500.jpg"
                                alt="[트렌드연합] 지금 입기좋은 패션 제안! 티셔츠/원피스 外 ~32% OFF"
                                onError="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="cmitem_other">
                          <ul className="cmitem_other_list ty_full">
                            <li>
                              <a href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000035003465&amp;siteNo=6004&amp;salestrNo=6005&amp;dealCmptItemId=">
                                <div className="cmitem_other_thmb">
                                  <img
                                    src="https://sitem.ssgcdn.com/99/60/21/item/1000449216099_i1_150.jpg"
                                    alt="다른 옵션 이미지"
                                    onError="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=75&amp;h=75&amp;t=781223af222f4db27c6e21aadb6e00f614598dab'"
                                  />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000035003465&amp;siteNo=6004&amp;salestrNo=6005&amp;dealCmptItemId=">
                                <div className="cmitem_other_thmb">
                                  <img
                                    src="https://sitem.ssgcdn.com/55/69/70/item/1000390706955_i1_150.jpg"
                                    alt="다른 옵션 이미지"
                                    onError="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=75&amp;h=75&amp;t=781223af222f4db27c6e21aadb6e00f614598dab'"
                                  />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000035003465&amp;siteNo=6004&amp;salestrNo=6005&amp;dealCmptItemId=">
                                <div className="cmitem_other_thmb">
                                  <img
                                    src="https://sitem.ssgcdn.com/80/75/64/item/1000397647580_i1_150.jpg"
                                    alt="다른 옵션 이미지"
                                    onError="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=75&amp;h=75&amp;t=781223af222f4db27c6e21aadb6e00f614598dab'"
                                  />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000035003465&amp;siteNo=6004&amp;salestrNo=6005"
                                className="clickable"
                                data-react-tarea="홈|해피라운지_상품|상품_클릭|[트렌드연합] 지금 입기좋은 패션 제안! 티셔츠/원피스 外 ~32% OFF"
                              >
                                <div className="cmitem_other_thmb ty_more">
                                  <i
                                    className="icon ty_xs icon_plusmark"
                                    aria-hidden="true"
                                  />
                                  <span className="blind">상품 더보기</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cmitem_detailbx ty_deal_text2">
                        <div className="cmitem_tx_thmb">
                          <a
                            href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000035003465&amp;siteNo=6004&amp;salestrNo=6005"
                            className="cmitem_tx_thmb_link clickable"
                            data-react-tarea="홈|해피라운지_상품|상품_클릭|[트렌드연합] 지금 입기좋은 패션 제안! 티셔츠/원피스 外 ~32% OFF"
                          >
                            <div className="cmitem_tit_selling">
                              <span className="cmitem_tit_txt1">
                                더운 여름 찰떡 코디
                              </span>
                              <span className="cmitem_tit_txt2">
                                여름 신상 원피스外
                              </span>
                            </div>
                            <div className="cmitem_tit">
                              <span className="cm_mall_text">
                                <i className="sm">신세계몰</i>
                              </span>
                              <span className="cmitem_goods_tit">
                                [트렌드연합] 지금 입기좋은 패션 제안!
                                티셔츠/원피스 外 ~32% OFF
                              </span>
                            </div>
                            <div className="cmitem_pricewrap ty_smcolor">
                              <div className="cmitem_price_row cmitem_ty_newpr">
                                <div className="new_price">
                                  <span className="blind">판매가격</span>
                                  <em className="ssg_price">14,155</em>
                                  <span className="ssg_tx">
                                    원<span className="cm_tx_opt">~</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="cmitem_row_control">
                          <div className="cmitem_sideinfo_block">
                            <span className="cmitem_tag ty_deal ty_outline">
                              2,418개 구매중
                            </span>
                          </div>
                          <div className="cmitem_btn_wrap">
                            <span className="cmlike _js_cmlike interestIt">
                              <input
                                type="hidden"
                                name="attnDivCd"
                                value="10"
                              />
                              <input
                                type="hidden"
                                name="attnDivDtlCd"
                                value="10"
                              />
                              <input type="hidden" name="siteNo" value="6004" />
                              <input
                                type="hidden"
                                name="attnTgtIdnfNo1"
                                value="1000035003465"
                              />
                              <input
                                type="hidden"
                                name="attnTgtIdnfNo2"
                                value="6005"
                              />
                              <input
                                type="hidden"
                                name="uitemId"
                                value="00000"
                              />
                              <input
                                type="hidden"
                                name="notiTitle"
                                value="[트렌드연합] 지금 입기좋은 패션 제안! 티셔츠/원피스 外 ~32% OFF"
                              />
                              <input
                                type="hidden"
                                name="notiImgPath"
                                value="//sitem.ssgcdn.com/65/34/00/item/1000035003465_i1_500.jpg"
                              />
                              <input type="hidden" name="checked" value="N" />
                              <input
                                type="hidden"
                                name="useForcedSsgYn"
                                value="N"
                              />
                              <button
                                type="button"
                                className="cmlike_btn _js_cmlike_btn clickable"
                                data-position="clip"
                                data-react-tarea="홈|해피라운지_상품|상품_좋아요|[트렌드연합] 지금 입기좋은 패션 제안! 티셔츠/원피스 外 ~32% OFF_"
                                data-react-tarea-dtl-cd="t00003"
                              >
                                <span className="cmlike_ico">
                                  <i className="cmlike_primary_m" />
                                  <span className="sr_off">
                                    <span className="blind">관심상품 취소</span>
                                  </span>
                                  <span className="sr_on">
                                    <span className="blind">관심상품 등록</span>
                                  </span>
                                </span>
                              </button>{' '}
                            </span>
                            <button
                              type="button"
                              className="cmitem_btn_cart clickabl"
                              onClick={`frontCommCart.put(this, '');`}
                              data-react-tarea="홈|해피라운지_상품|상품_장바구니담기|[트렌드연합] 지금 입기좋은 패션 제안! 티셔츠/원피스 外 ~32% OFF"
                            >
                              <span className="blind">장바구니 담기</span>
                            </button>
                            <span
                              style={{ display: 'none' }}
                              className="disp_cart_data"
                              data-cart-type="10"
                              data-cart-inflo-site-no="6004"
                              data-cart-ordqty="1"
                            >
                              {/* {data2} */}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="cmgrid_full_box js-set-header"
                  data-page-set-id="114"
                >
                  <div className="cmtit_heading">
                    <div className="cmtit_txtbx">
                      <h3 className="cmtit_maintxt">New Service</h3>
                      <p className="cmtit_subtxt">
                        새롭게 오픈한 서비스를 소개해드려요
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cmgrid_full_box">
                  <div className="cmhero_banner cmhero_banner_ty_sd_scroll ty_bn100">
                    <div className="cmhero_swiper" id="_cmhero_swiper">
                      <div className="swiper-container swiper-container-horizontal swiper-container-ios">
                        <ul className="swiper-wrapper">
                          <li
                            className="swiper-slide swiper-slide-active"
                            style={{ width: '328.158px', marginRight: '5px' }}
                          >
                            <div className="cmhero_bn">
                              <a
                                className="cmhero_bnlnk"
                                href="https://m-shinsegaemall.ssg.com/page/giftshop.ssg"
                                data-react-tarea="홈|신규서비스_배너|배너_클릭|명절"
                              >
                                <img
                                  src="//sui.ssgcdn.com/cmpt/banner/202207/2022072217195349135856376585_644.png"
                                  alt="명절"
                                />
                              </a>
                            </div>
                            <div className="cmhero_tit">
                              <a
                                className="cmhero_titlnk"
                                href="https://m-shinsegaemall.ssg.com/page/giftshop.ssg"
                                data-react-tarea="홈|신규서비스_배너|배너_클릭|명절"
                              >
                                <h3 className="cmhero_titmain">
                                  <span className="cmhero_titmain_tx">
                                    2022 추석 명절
                                  </span>
                                </h3>
                                <div className="cmhero_titsub">
                                  <span className="ccmhero_titsub_tx">
                                    미리 준비하는 올 추석 명절 선물
                                  </span>
                                </div>
                              </a>
                            </div>
                          </li>
                          <li
                            className="swiper-slide swiper-slide-next"
                            style={{ width: '328.158px', marginRight: '5px' }}
                          >
                            <div className="cmhero_bn">
                              <a
                                className="cmhero_bnlnk"
                                href="https://m.ssg.com/page/mondaymoon/main/_v21.ssg?mccode=6005"
                                data-react-tarea="홈|신규서비스_배너|배너_클릭|먼데이문"
                              >
                                <img
                                  src="//sui.ssgcdn.com/cmpt/banner/202207/2022072217190693512854525285_422.jpg"
                                  alt="먼데이문"
                                />
                              </a>
                            </div>
                            <div className="cmhero_tit">
                              <a
                                className="cmhero_titlnk"
                                href="https://m.ssg.com/page/mondaymoon/main/_v21.ssg?mccode=6005"
                                data-react-tarea="홈|신규서비스_배너|배너_클릭|먼데이문"
                              >
                                <h3 className="cmhero_titmain">
                                  <span className="cmhero_titmain_tx">
                                    MONDAY MOON
                                  </span>
                                </h3>
                                <div className="cmhero_titsub">
                                  <span className="ccmhero_titsub_tx">
                                    럭셔리 뷰티부터 다양한 뷰티 컨텐츠까지!
                                  </span>
                                </div>
                              </a>
                            </div>
                          </li>
                          <li
                            className="swiper-slide"
                            style={{ width: '328.158px', marginRight: '5px' }}
                          >
                            <div className="cmhero_bn">
                              <a
                                className="cmhero_bnlnk"
                                href="https://m-shinsegaemall.ssg.com/page/ssgluxury.ssg"
                                data-react-tarea="홈|신규서비스_배너|배너_클릭|명품관"
                              >
                                <img
                                  src="//sui.ssgcdn.com/cmpt/banner/202207/2022072510290015700334005033_491.png"
                                  alt="명품관"
                                />
                              </a>
                            </div>
                            <div className="cmhero_tit">
                              <a
                                className="cmhero_titlnk"
                                href="https://m-shinsegaemall.ssg.com/page/ssgluxury.ssg"
                                data-react-tarea="홈|신규서비스_배너|배너_클릭|명품관"
                              >
                                <h3 className="cmhero_titmain">
                                  <span className="cmhero_titmain_tx">
                                    SSG Luxury
                                  </span>
                                </h3>
                                <div className="cmhero_titsub">
                                  <span className="ccmhero_titsub_tx">
                                    명품의 신세계를 만나다
                                  </span>
                                </div>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="swiper-ctrls">
                        <div className="swiper-pagination swiper-pagination-progressbar">
                          <span
                            className="swiper-pagination-progressbar-fill"
                            style={{
                              transform:
                                'translate3d(0px, 0px, 0px) scaleX(0.333333) scaleY(1)',
                              transitionDuration: '300ms',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="cmhero_viewer"
                      role="dialog"
                      tabIndex="-1"
                      aria-hidden="true"
                    >
                      <div
                        className="cmhero_wrap"
                        role="document"
                        // tabIndex="0"
                      >
                        <div className="cmhero_scroll">
                          <div className="cmhero_head">
                            <h3 className="cmhero_head_tit">전체보기</h3>
                            <button type="button" className="cmhero_close">
                              <span className="blind">배너 전체보기 닫기</span>
                            </button>
                          </div>
                          <div className="cmhero_cont">
                            <ul className="cmhero_bnlst">
                              <li>
                                <div className="cmhero_bn">
                                  <a
                                    className="cmhero_bnlnk"
                                    href="https://m-shinsegaemall.ssg.com/page/giftshop.ssg"
                                    data-react-tarea="홈|신규서비스_배너|배너_클릭|명절"
                                  >
                                    <img
                                      className="ssg_lazy"
                                      src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                      data-src="//sui.ssgcdn.com/cmpt/banner/202207/2022072217195349135856376585_644.png"
                                      alt="명절"
                                      data-ll-status="observed"
                                    />
                                  </a>
                                </div>
                                <div className="cmhero_tit">
                                  <a
                                    className="cmhero_titlnk"
                                    href="https://m-shinsegaemall.ssg.com/page/giftshop.ssg"
                                    data-react-tarea="홈|신규서비스_배너|배너_클릭|명절"
                                  >
                                    <h3 className="cmhero_titmain">
                                      <span className="cmhero_titmain_tx">
                                        2022 추석 명절
                                      </span>
                                    </h3>
                                    <div className="cmhero_titsub">
                                      <span className="ccmhero_titsub_tx">
                                        미리 준비하는 올 추석 명절 선물
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div className="cmhero_bn">
                                  <a
                                    className="cmhero_bnlnk"
                                    href="https://m.ssg.com/page/mondaymoon/main/_v21.ssg?mccode=6005"
                                    data-react-tarea="홈|신규서비스_배너|배너_클릭|먼데이문"
                                  >
                                    <img
                                      className="ssg_lazy"
                                      src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                      data-src="//sui.ssgcdn.com/cmpt/banner/202207/2022072217190693512854525285_422.jpg"
                                      alt="먼데이문"
                                      data-ll-status="observed"
                                    />
                                  </a>
                                </div>
                                <div className="cmhero_tit">
                                  <a
                                    className="cmhero_titlnk"
                                    href="https://m.ssg.com/page/mondaymoon/main/_v21.ssg?mccode=6005"
                                    data-react-tarea="홈|신규서비스_배너|배너_클릭|먼데이문"
                                  >
                                    <h3 className="cmhero_titmain">
                                      <span className="cmhero_titmain_tx">
                                        MONDAY MOON
                                      </span>
                                    </h3>
                                    <div className="cmhero_titsub">
                                      <span className="ccmhero_titsub_tx">
                                        럭셔리 뷰티부터 다양한 뷰티 컨텐츠까지!
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div className="cmhero_bn">
                                  <a
                                    className="cmhero_bnlnk"
                                    href="https://m-shinsegaemall.ssg.com/page/ssgluxury.ssg"
                                    data-react-tarea="홈|신규서비스_배너|배너_클릭|명품관"
                                  >
                                    <img
                                      className="ssg_lazy"
                                      src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                      data-src="//sui.ssgcdn.com/cmpt/banner/202207/2022072510290015700334005033_491.png"
                                      alt="명품관"
                                      data-ll-status="observed"
                                    />
                                  </a>
                                </div>
                                <div className="cmhero_tit">
                                  <a
                                    className="cmhero_titlnk"
                                    href="https://m-shinsegaemall.ssg.com/page/ssgluxury.ssg"
                                    data-react-tarea="홈|신규서비스_배너|배너_클릭|명품관"
                                  >
                                    <h3 className="cmhero_titmain">
                                      <span className="cmhero_titmain_tx">
                                        SSG Luxury
                                      </span>
                                    </h3>
                                    <div className="cmhero_titsub">
                                      <span className="ccmhero_titsub_tx">
                                        명품의 신세계를 만나다
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cmgrid_full_box" data-page-set-id="115">
                  <div className="cmitem_quick_unit ty_horizontal">
                    <div className="cmitem_quick_cont">
                      <ul className="cmitem_quick_lst ty_view5 is_moreset">
                        <li>
                          <a
                            href="https://m-shinsegaemall.ssg.com/page/giftshop.ssg"
                            className="clickable"
                            data-react-tarea="홈|서비스퀵링크|배너_클릭|명절"
                          >
                            <span
                              className="cmitem_quick_thmb ssg_lazy"
                              data-bg="url('//sui.ssgcdn.com/cmpt/banner/202207/2022072018095879442344852334_902.png')"
                              data-ll-status="loading"
                              style={{
                                backgroundImage:
                                  "url('//sui.ssgcdn.com/cmpt/banner/202207/2022072018095879442344852334_902.png')",
                              }}
                            />
                            <span className="cmitem_quick_tx">명절</span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://m-shinsegaemall.ssg.com/page/happybuy.ssg"
                            className="clickable"
                            data-react-tarea="홈|서비스퀵링크|배너_클릭|해피라운지"
                          >
                            <span
                              className="cmitem_quick_thmb ssg_lazy"
                              data-bg="url('//sui.ssgcdn.com/cmpt/banner/202207/2022072018085132408328907832_886.png')"
                              data-ll-status="loading"
                              style={{
                                backgroundImage:
                                  "url('//sui.ssgcdn.com/cmpt/banner/202207/2022072018085132408328907832_886.png')",
                              }}
                            />
                            <span className="cmitem_quick_tx">해피라운지</span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://m-shinsegaemall.ssg.com/special/index.ssg"
                            className="clickable"
                            data-react-tarea="홈|서비스퀵링크|배너_클릭|공식브랜드관"
                          >
                            <span
                              className="cmitem_quick_thmb ssg_lazy"
                              data-bg="url('//sui.ssgcdn.com/cmpt/banner/202207/2022072018090271094493915549_213.png')"
                              data-ll-status="loading"
                              style={{
                                backgroundImage:
                                  "url('//sui.ssgcdn.com/cmpt/banner/202207/2022072018090271094493915549_213.png')",
                              }}
                            />
                            <span className="cmitem_quick_tx">
                              공식
                              <br />
                              브랜드관
                            </span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://m-shinsegaemall.ssg.com/page/ssgdept.ssg"
                            className="clickable"
                            data-react-tarea="홈|서비스퀵링크|배너_클릭|백화점(N)"
                          >
                            <span
                              className="cmitem_quick_thmb ssg_lazy"
                              data-bg="url('//sui.ssgcdn.com/cmpt/banner/202206/2022062117422173428272685827_495.png')"
                              data-ll-status="loading"
                              style={{
                                backgroundImage:
                                  "url('//sui.ssgcdn.com/cmpt/banner/202206/2022062117422173428272685827_495.png')",
                              }}
                            />
                            <span className="cmitem_quick_tx">백화점</span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://m-shinsegaemall.ssg.com/page/ssgluxury.ssg"
                            className="clickable"
                            data-react-tarea="홈|서비스퀵링크|배너_클릭|SSG럭셔리"
                          >
                            <span
                              className="cmitem_quick_thmb ssg_lazy"
                              data-bg="url('//sui.ssgcdn.com/cmpt/banner/202206/2022062209260465823396706339_622.png')"
                              data-ll-status="loading"
                              style={{
                                backgroundImage:
                                  "url('//sui.ssgcdn.com/cmpt/banner/202206/2022062209260465823396706339_622.png')",
                              }}
                            />
                            <span className="cmitem_quick_tx">SSG럭셔리</span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="http://member.ssg.com/m/membership/gate.ssg?mccode=6005"
                            className="clickable"
                            data-react-tarea="홈|서비스퀵링크|배너_클릭|스마일클럽 ( 7/18 ~ 뉴 딱지 제거 )"
                          >
                            <span
                              className="cmitem_quick_thmb ssg_lazy"
                              data-bg="url('//sui.ssgcdn.com/cmpt/banner/202207/2022071814342769215729184572_167.png')"
                              data-ll-status="loading"
                              style={{
                                backgroundImage:
                                  "url('//sui.ssgcdn.com/cmpt/banner/202207/2022071814342769215729184572_167.png')",
                              }}
                            />
                            <span className="cmitem_quick_tx">스마일클럽</span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://m-shinsegaemall.ssg.com/event/eventMain.ssg"
                            className="clickable"
                            data-react-tarea="홈|서비스퀵링크|배너_클릭|이벤트"
                          >
                            <span
                              className="cmitem_quick_thmb ssg_lazy"
                              data-bg="url('//sui.ssgcdn.com/cmpt/banner/202208/2022080210585625059006668900_230.png')"
                              data-ll-status="loading"
                              style={{
                                backgroundImage:
                                  "url('//sui.ssgcdn.com/cmpt/banner/202208/2022080210585625059006668900_230.png')",
                              }}
                            />
                            <span className="cmitem_quick_tx">이벤트</span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://m.ssg.com/page/giftsub.ssg?mGnbYn=N&amp;mccode=6005"
                            className="clickable"
                            data-react-tarea="홈|서비스퀵링크|배너_클릭|선물하기"
                          >
                            <span
                              className="cmitem_quick_thmb ssg_lazy"
                              data-bg="url('//sui.ssgcdn.com/cmpt/banner/202207/2022072018091578124885200588_919.png')"
                              data-ll-status="loading"
                              style={{
                                backgroundImage:
                                  "url('//sui.ssgcdn.com/cmpt/banner/202207/2022072018091578124885200588_919.png')",
                              }}
                            />
                            <span className="cmitem_quick_tx">선물하기</span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://m-shinsegaemall.ssg.com/page/best.ssg"
                            className="clickable"
                            data-react-tarea="홈|서비스퀵링크|배너_클릭|베스트"
                          >
                            <span
                              className="cmitem_quick_thmb ssg_lazy"
                              data-bg="url('//sui.ssgcdn.com/cmpt/banner/202207/2022072220331105257687978768_380.png')"
                              data-ll-status="loading"
                              style={{
                                backgroundImage:
                                  "url('//sui.ssgcdn.com/cmpt/banner/202207/2022072220331105257687978768_380.png')",
                              }}
                            />
                            <span className="cmitem_quick_tx">베스트</span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://m-shinsegaemall.ssg.com/page/newarrivals.ssg"
                            className="clickable"
                            data-react-tarea="홈|서비스퀵링크|배너_클릭|신상품"
                          >
                            <span
                              className="cmitem_quick_thmb ssg_lazy"
                              data-bg="url('//sui.ssgcdn.com/cmpt/banner/202207/2022072018093759774844126584_698.png')"
                              data-ll-status="loading"
                              style={{
                                backgroundImage:
                                  "url('//sui.ssgcdn.com/cmpt/banner/202207/2022072018093759774844126584_698.png')",
                              }}
                            />
                            <span className="cmitem_quick_tx">신상품</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="cmgrid_full_box">
                  <div
                    className="cmitem_blank"
                    style={
                      {
                        // --blank-width: '375',
                        // --blank-height: '30',
                        // --blank-bg-color: '#ffffff'
                      }
                    }
                  />
                </div>
                <div className="cmgrid_full_box" data-page-set-id="116">
                  <div className="cmbnr_promo">
                    <div className="cmbnr_promo_bn">
                      <a
                        href="https://m-shinsegaemall.ssg.com/page/dept/home.ssg?ldt=menu&amp;mccode=6009"
                        className="cmbnr_lnk clickable"
                        data-react-tarea="홈|신세계백화점랜딩배너|배너_클릭|백화점 배너"
                      >
                        <span className="cmbnr_img">
                          <img
                            className="ssg_lazy loaded"
                            src="//sui.ssgcdn.com/cmpt/banner/202202/2022021109162446068589319858_569.jpg"
                            data-src="//sui.ssgcdn.com/cmpt/banner/202202/2022021109162446068589319858_569.jpg"
                            alt="백화점 배너"
                            data-ll-status="loaded"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cmgrid_full_box">
                  <div
                    className="cmitem_blank"
                    style={
                      {
                        // --blank-width: '375',
                        // --blank-height: '30',
                        // --blank-bg-color: '#ffffff'
                      }
                    }
                  />
                </div>
                <div
                  className="cmgrid_full_box js-set-header"
                  data-page-set-id="117"
                >
                  <div className="cmtit_heading">
                    <div className="cmtit_txtbx">
                      <h3 className="cmtit_maintxt">이번 주 카드 프로모션</h3>
                      <p className="cmtit_subtxt">
                        SSGPAY로 결제하셔도 혜택 받을 수 있어요
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cmgrid_full_box" data-page-set-id="117">
                  <div className="cmitem_cardbenfit_unit ty_horizontal">
                    <div className="cmitem_cardbnfit_tit">
                      <span className="cmitem_cardbnfit_tittx" />
                      <span className="cmitem_cardbnfit_tittx" />
                    </div>
                    <div className="cmitem_cardbnfit_cont">
                      <ul className="cmitem_cardbnfit_lst">
                        <li
                          className="cmitem_cardbnfit_item"
                          style={{ backgroundColor: '#363635' }}
                        >
                          <a
                            href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000000858&amp;siteNo=6005&amp;recruitmentPath=L6007001&amp;eventCode=HPG02"
                            className="clickable"
                            data-react-tarea="홈|카드행사_배너|배너_클릭|SSG.COM카드 ED2 220718~_banrId=2003185343"
                          >
                            <div className="cmitem_cardbnfit_discount">
                              <span className="cmitem_cardbnfit_rate">
                                <em>~3</em>만원
                              </span>
                              <span className="cmitem_cardbnfit_bi">
                                <img
                                  src="https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi74.png"
                                  data-src="https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi74.png"
                                  alt="SSG.COM카드"
                                  className="ssg_lazy loaded"
                                  data-ll-status="loaded"
                                />
                              </span>
                            </div>
                            <div className="cmitem_cardbnfit_info">
                              <span className="card_info_tx">
                                <span className="card_info_tx1">
                                  SSG.COM카드
                                </span>
                                <span className="card_info_tx2">Edition2</span>
                              </span>
                              <span className="card_info_name">
                                <span className="card_info_name1">
                                  첫결제할인
                                </span>
                                <span className="card_info_name2" />
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          className="cmitem_cardbnfit_item"
                          style={{ backgroundColor: '#006bff' }}
                        >
                          <a
                            href="/event/eventDetail.ssg?promId=1100575267"
                            className="clickable"
                            data-react-tarea="홈|카드행사_배너|배너_클릭|SSG.COM삼성카드_220801~_banrId=2002761841"
                          >
                            <div className="cmitem_cardbnfit_discount">
                              <span className="cmitem_cardbnfit_rate">
                                <em>~6</em>만원
                              </span>
                              <span className="cmitem_cardbnfit_bi">
                                <img
                                  src="https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi75.png"
                                  data-src="https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi75.png"
                                  alt="SSG.COM카드"
                                  className="ssg_lazy loaded"
                                  data-ll-status="loaded"
                                />
                              </span>
                            </div>
                            <div className="cmitem_cardbnfit_info">
                              <span className="card_info_tx">
                                <span className="card_info_tx1">SSG.COM</span>
                                <span className="card_info_tx2">삼성카드</span>
                              </span>
                              <span className="card_info_name">
                                <span className="card_info_name1">
                                  첫결제쿠폰/
                                </span>
                                <span className="card_info_name2">
                                  즉시할인
                                </span>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          className="cmitem_cardbnfit_item"
                          style={{ backgroundColor: '#777777' }}
                        >
                          <a
                            href="/event/eventDetail.ssg?promId=1100904882"
                            className="clickable"
                            data-react-tarea="홈|카드행사_배너|배너_클릭|현대카드 SSGPAY 5% 청구할인 (8/4)_banrId=2002630319"
                          >
                            <div className="cmitem_cardbnfit_discount">
                              <span className="cmitem_cardbnfit_rate">
                                <em>5%</em>
                              </span>
                              <span className="cmitem_cardbnfit_bi">
                                <img
                                  src="https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi08.png"
                                  data-src="https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi08.png"
                                  alt="SSG.COM카드"
                                  className="ssg_lazy loaded"
                                  data-ll-status="loaded"
                                />
                              </span>
                            </div>
                            <div className="cmitem_cardbnfit_info">
                              <span className="card_info_tx">
                                <span className="card_info_tx1">현대카드</span>
                                <span className="card_info_tx2">
                                  쓱페이결제시
                                </span>
                              </span>
                              <span className="card_info_name">
                                <span className="card_info_name1" />
                                <span className="card_info_name2">
                                  청구할인
                                </span>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          className="cmitem_cardbnfit_item"
                          style={{ backgroundColor: '#645b4c' }}
                        >
                          <a
                            href="https://m.ssg.com/event/eventDetail.ssg?promId=1100905073"
                            className="clickable"
                            data-react-tarea="홈|카드행사_배너|배너_클릭|KB국민카드 해피라운지 8% 청구할인 (8/4~5)_banrId=2002292819"
                          >
                            <div className="cmitem_cardbnfit_discount">
                              <span className="cmitem_cardbnfit_rate">
                                <em>8%</em>
                              </span>
                              <span className="cmitem_cardbnfit_bi">
                                <img
                                  src="https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi02.png"
                                  data-src="https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi02.png"
                                  alt="SSG.COM카드"
                                  className="ssg_lazy loaded"
                                  data-ll-status="loaded"
                                />
                              </span>
                            </div>
                            <div className="cmitem_cardbnfit_info">
                              <span className="card_info_tx">
                                <span className="card_info_tx1">
                                  KB국민카드
                                </span>
                                <span className="card_info_tx2" />
                              </span>
                              <span className="card_info_name">
                                <span className="card_info_name1">
                                  해피라운지
                                </span>
                                <span className="card_info_name2">
                                  청구할인
                                </span>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          className="cmitem_cardbnfit_item"
                          style={{ backgroundColor: '#e21c24' }}
                        >
                          <a
                            href="https://m.ssg.com/event/eventDetail.ssg?promId=1100904602"
                            className="clickable"
                            data-react-tarea="홈|카드행사_배너|배너_클릭|롯데카드 대상상품 10% 할인 (8/1~7)_banrId=2002720955"
                          >
                            <div className="cmitem_cardbnfit_discount">
                              <span className="cmitem_cardbnfit_rate">
                                <em>10%</em>
                              </span>
                              <span className="cmitem_cardbnfit_bi">
                                <img
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi38.png"
                                  alt="SSG.COM카드"
                                  className="ssg_lazy"
                                  data-ll-status="observed"
                                />
                              </span>
                            </div>
                            <div className="cmitem_cardbnfit_info">
                              <span className="card_info_tx">
                                <span className="card_info_tx1">롯데카드</span>
                                <span className="card_info_tx2" />
                              </span>
                              <span className="card_info_name">
                                <span className="card_info_name1">
                                  대상상품
                                </span>
                                <span className="card_info_name2">
                                  청구할인
                                </span>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          className="cmitem_cardbnfit_item"
                          style={{ backgroundColor: '#006bff' }}
                        >
                          <a
                            href="/event/eventDetail.ssg?promId=1100905085"
                            className="clickable"
                            data-react-tarea="홈|카드행사_배너|배너_클릭|SSG.COM삼성 7% 즉시할인 (8/4)_banrId=2002600672"
                          >
                            <div className="cmitem_cardbnfit_discount">
                              <span className="cmitem_cardbnfit_rate">
                                <em>7%</em>
                              </span>
                              <span className="cmitem_cardbnfit_bi">
                                <img
                                  src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                  data-src="https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi06.png"
                                  alt="SSG.COM카드"
                                  className="ssg_lazy"
                                  data-ll-status="observed"
                                />
                              </span>
                            </div>
                            <div className="cmitem_cardbnfit_info">
                              <span className="card_info_tx">
                                <span className="card_info_tx1">SSG.COM</span>
                                <span className="card_info_tx2">삼성카드</span>
                              </span>
                              <span className="card_info_name">
                                <span className="card_info_name1">
                                  즉시할인
                                </span>
                                <span className="card_info_name2">
                                  (~3만원)
                                </span>
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid_loader">
                <div className="grid_loading">
                  <div className="dot1" />
                  <div className="dot2" />
                  <div className="dot3" />
                </div>
              </div>
            </div>
          </div>

          <footer id="m_footer" className="mcom_footer react-area">
            <div className="footer_notiwrap">
              <div className="footer_noti">
                <p className="noti_tit">공지</p>
                <ul className="noti_dsc">
                  <li>
                    <a href="http://m.ssg.com/customer/noticeList.ssg?siteNo=6004&amp;bbsId=1&amp;postngId=1177650441&amp;postTeryIdnfNo=6004">
                      [SSG.COM &apos;스타벅스 서머 캐리백&apos; 구매 고객 대...
                    </a>
                  </li>
                  <li>
                    <a href="http://m.ssg.com/customer/noticeList.ssg?siteNo=6009&amp;bbsId=1&amp;postngId=1177650441&amp;postTeryIdnfNo=6009">
                      [SSG.COM &apos;스타벅스 서머 캐리백&apos; 구매 고객 대...
                    </a>
                  </li>
                  <li>
                    <a href="http://m.ssg.com/customer/noticeList.ssg?siteNo=6009&amp;bbsId=1&amp;postngId=1177655171&amp;postTeryIdnfNo=6009">
                      SSG.COM 이용약관 및 전자금융거래이용약관 개정 안...
                    </a>
                  </li>
                </ul>
              </div>
              <span className="sp_head noti_arrow">&nbsp;</span>
            </div>
            <div className="mcom_service_wrap">
              <div className="mcom_service_area">
                <p className="mcom_service_info">
                  <span className="mcom_info_mall">
                    SSG.COM 고객센터 / 전자금융거래 분쟁처리
                  </span>
                  <br />
                  <span className="mcom_tel_tx">1577-3419 /</span>
                  <span className="mcom_email_tx">ssg@ssg.com</span>
                </p>
                <div className="mcom_service_btnarea">
                  <a
                    href="tel:1577-3419"
                    className="mcom_service_btn clickable"
                    data-react-tarea="푸터|전화연결"
                  >
                    <em>전화걸기</em>
                  </a>
                  <a
                    href="http://talk.ssg.com/webchat?gateType=cs"
                    className="mcom_service_btn clickable"
                    data-react-tarea="푸터|고객상담톡"
                  >
                    <em>1:1 고객센터</em>
                  </a>
                </div>
              </div>
            </div>
            <div className="mcom_btnbx_warp">
              <ul className="mcom_btnbx_list">
                <li id="footer_loginBtn">
                  <a
                    // href="javascript:mobileLogin('login');"
                    href="/"
                    className="clickable"
                    data-react-tarea="푸터|로그인"
                  >
                    로그인
                  </a>
                </li>
                <li id="footer_logoutBtn" style={{ display: 'none' }}>
                  <a
                    // href="javascript:logout();"
                    href="/"
                    className="clickable"
                    data-react-tarea="푸터|로그아웃"
                  >
                    로그아웃
                  </a>
                </li>
                <li id="footer_joinMemberBtn">
                  <a
                    href="/#"
                    className="clickable"
                    data-react-tarea="푸터|회원가입"
                    onClick={`appBroswer('https://member.ssg.com/m/member/join/simpleJoinIntro.ss', 'stack'); return false;`}
                  >
                    회원가입
                  </a>
                </li>
                <li>
                  <a
                    href="https://m-shinsegaemall.ssg.com/comm/app/appLink.ssg?mobilAppSvcNo=2"
                    className="clickable"
                    data-react-tarea="푸터|앱다운로드"
                  >
                    앱다운로드
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="clickable"
                    data-react-tarea="푸터|PC버전"
                    onClick={`appBroswer('https://shinsegaemall.ssg.com',pc','Y'); return false;`}
                  >
                    PC버전
                  </a>
                </li>
              </ul>
            </div>
            <div className="mcom_mall_wrap v2">
              <div className="mcom_mall_box">
                <span className="mcom_mall_name">(주)에스에스지닷컴</span>
                <address>
                  대표자: 강희석<span className="bar">|</span>사업자등록번호:
                  870-88-01143
                  <br />
                  통신판매업 신고번호: 제2022-서울강남-03751호
                  <a
                    href="/#"
                    onClick={`appBroswer('https://www.ftc.go.kr/bizCommPop.do?wrkr_no=870880114', 'stack');return false;`}
                    className="txt_link"
                  >
                    사업자 정보확인
                  </a>
                  <br />
                  개인정보보호 책임자: 김우진<span className="bar">|</span>주소:
                  서울특별시 강남구 테헤란로 231
                  <br />
                  호스팅서비스 사업자 : (주)에스에스지닷컴
                </address>
              </div>
              <div className="mcom_noti_wrap">
                <p className="mcom_noti_tip">
                  우리은행 채무지급보증 안내
                  <a
                    href="/#"
                    onClick={`appBroswer('https://m.ssg.com/comm/popupWooriService.ssg', 'stac', 'Y'); return false;`}
                    className="txt_link"
                  >
                    서비스가입사실 확인
                  </a>
                </p>
                <p className="mcom_noti_txt">
                  당사는 고객님이 현금 결제한 금액에 대해 우리은행과
                  <br />
                  채무지급 보증 계약을 체결하여 안전거래를 보장하고 있습니다.
                </p>
              </div>
              <div className="mcom_cont_info">
                <h3 className="blind">SSG.COM 정책 및 약관</h3>
                <ul className="mcom_cont_lst">
                  <li>
                    <a
                      href="/#"
                      title="새창열림"
                      onClick={`appBroswer('https://company.ssg.com', 'stac', 'Y'); return false;`}
                    >
                      <span>회사소개</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      title="새창열림"
                      onClick={`appBroswer('https://m.ssg.com/comm/commInfo.ssg?type=clause&amp;_mpop=new',stack','Y'); return false;`}
                    >
                      이용약관
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      title="새창열림"
                      onClick={`appBroswer('https://member.ssg.com/m/policies/tradeTerms.ssg', 'stac', 'Y'); return false;`}
                    >
                      전자금융거래이용약관
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      title="새창열림"
                      onClick={`appBroswer('https://member.ssg.com/m/policies/privacy.ssg', 'stac', 'Y'); return false;`}
                    >
                      <strong>개인정보처리방침</strong>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      title="새창열림"
                      onClick={`appBroswer('https://member.ssg.com/m/policies/youthProtection.ssg', 'stac', 'Y'); return false;`}
                    >
                      청소년보호방침
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      title="새창열림"
                      onClick={`appBroswer('https://member.ssg.com/m/policies/consumerDispute.ssg', 'stac', 'Y'); return false;`}
                    >
                      소비자분쟁해결기준
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      title="새창열림"
                      onClick={`appBroswer('https://partners.ssgadm.com/m/', 'stac', 'Y'); return false;`}
                    >
                      <span>입점상담</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mcom_noti_wrap ty2">
                <p className="mcom_noti_txt">
                  ㈜에스에스지닷컴 사이트의 상품/판매자/쇼핑정보, 컨텐츠, UI
                  등에 대한 무단 복제, 전송, 배포, 스크래핑 등의 행위는
                  저작권법, 콘텐츠사업 진흥법 등에 의하여 엄격히 금지됩니다.
                </p>
              </div>
              <p className="mcom_copyright">
                Copyright ⓒ SSG.COM Corp. All rights reserved.
              </p>
            </div>
          </footer>
        </div>

        <input type="hidden" name="skipBottomBackBtn" value="Y" />
        <input type="hidden" name="floatingLayerType" value="" />
        <input type="hidden" name="couldDisplayYn" value="true" />
        <input type="hidden" name="headerDisableYn" value="" />
        <input type="hidden" name="dealCmptItemView" value="" />
        <input type="hidden" name="mcom_toolbar_view_yn" value="Y" />
        <input type="hidden" name="viewOnApp" value="N" />

        <div id="m_toolbar" className="mcom_toolbar_v2 react-area">
          <ul className="toolbar_menu" role="navigation">
            <li className="toolbar_item">
              <a
                href="/comm/getmCategoryLnb.ssg"
                className="toolbar_lnk ty_category clickable"
                data-react-tarea="웹공통_N|웹바|카테고리|신세계몰"
              >
                <i className="icon ty_lg icon_category" aria-hidden="true" />
                <span className="toolbar_txt">카테고리</span>
              </a>
            </li>
            <li className="toolbar_item">
              <a
                href="/#"
                className="toolbar_lnk ty_search"
                onClick="globalSearchUI().floatGlobalSearch();return false;"
              >
                <i className="icon ty_lg icon_search" aria-hidden="true" />
                <span className="toolbar_txt">통합검색</span>
              </a>
            </li>
            <li className="toolbar_item">
              <a
                href="/"
                className="toolbar_lnk ty_home clickable"
                data-react-tarea="웹공통_N|웹바|홈|신세계몰"
              >
                <i className="icon ty_lg icon_house" aria-hidden="true" />
                <span className="toolbar_txt">홈</span>
              </a>
            </li>
            <li className="toolbar_item" id="bottomOrderInfoLi">
              <a
                // href="javascript:gnbPageMoveTo.mySsg();"
                href="/"
                className="toolbar_lnk ty_myssg clickable"
                data-react-tarea="웹공통_N|웹바|MY_SSG"
                // onClick={javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);}
              >
                <i className="icon ty_lg icon_person" aria-hidden="true" />
                <span className="toolbar_txt">MY</span>
                <span
                  className="cmnoti_push"
                  id="bottomOrderCnt"
                  style={{ display: 'none' }}
                >
                  <span className="blind" id="bottomOrderCntSpan">
                    새 메세지 수
                  </span>
                </span>
              </a>
            </li>
            <li className="toolbar_item" id="bottomHistryLi">
              <a
                href="//m.ssg.com/comm/mHistoryList.ssg"
                className="toolbar_lnk ty_history clickable"
                id="_btn_history"
                data-react-tarea="웹공통_N|웹바|최근본"
              >
                <i className="icon ty_lg icon_eye" aria-hidden="true" />
                <span
                  id="mHistory_toolbar_thumb"
                  className="toolbar_thumb"
                  style={{ display: 'none' }}
                >
                  <img
                    id="bottomToolbarThumbImg"
                    alt="최근본 상품 이미지"
                    onError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=120&amp;h=120&amp;t=c0a0ff138401522845f7de2cd29ae2b124f3ccea'"
                  />
                </span>
                <span id="mHistory_toolbar_txt" className="toolbar_txt">
                  최근본
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div id="m_floating" className="mcom_floating_v2 react-area">
          <div className="floating_right" id="floating_right_id">
            <div className="floating_notice" id="floating_notice">
              <div className="floating_talk">
                <a href="/#" className="btn_talk ty_csbot" id="_ssgCs">
                  <span className="btn_talk_label">
                    <span className="label_txt">고객센터톡</span>
                    <span className="cmnoti_push" style={{ display: 'none' }}>
                      <span className="blind">새 메세지 수</span>
                    </span>
                  </span>
                  <span className="floating_btn">
                    <i className="icon ty_lg icon_talk" aria-hidden="true" />
                  </span>
                </a>
                <a href="/#" className="btn_talk ty_chat" id="_seller">
                  <span className="btn_talk_label">
                    <span className="label_txt">채팅</span>
                    <span className="cmnoti_push" style={{ display: 'none' }}>
                      <span className="blind">새 메세지 수</span>
                    </span>
                  </span>
                  <span className="floating_btn">
                    <i
                      className="icon ty_md icon_chat_individual"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </div>
              <button
                className="floating_btn floating_btn_notice ty_notice"
                type="button"
                aria-expanded="false"
              >
                <span className="blind">알림함</span>
                <i className="icon ty_lg icon_talk" aria-hidden="true" />
                <i
                  className="icon ty_sm icon_close icon_close_white"
                  aria-hidden="true"
                />
                <span className="cmnoti_push" style={{ display: 'none' }}>
                  <span className="blind">새로운 메세지 확인</span>
                </span>
              </button>
            </div>

            <div className="floating_top is_visible">
              <a
                // href="javascript:window.scrollTo(0,0)"
                href="/"
                className="floating_btn ty_top clickable"
                data-react-tarea="웹공통_N|버튼_영역|위로"
              >
                <span className="blind">TOP</span>
                <i className="icon ty_sm icon_arrow_top" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        id="_layerLikeCouponBtn"
        className="store-modal-alert-open blind"
        data-layer-target="#_layerLikeCoupon"
        data-no-click-outside=""
      >
        스토어 좋아요
      </button>
      <section
        className="store_modal ty_alert"
        role="dialog"
        tabIndex="-1"
        aria-hidden="true"
        id="_layerLikeCoupon"
      >
        <div
          className="store_modal_wrap"
          role="document"
          // tabIndex="0"
        >
          <div className="store_modal_cont">
            <h3 className="store_modal_tit">
              좋아하는 스토어로 등록되었습니다.
            </h3>
            <div className="store_modal_coupon" />
            <div className="store_modal_desc">
              <p className="store_modal_tx ty_gray">
                발급된 쿠폰은 MY SSG &gt; 쿠폰함에서 확인하실 수 있습니다.
              </p>
            </div>
          </div>
          <footer className="store_modal_foot">
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
      </section>
      <div
        className="ly_app react-area"
        id="lyApp"
        style={{ display: 'none' }}
      />

      <div className="ly_app ty2" id="lyVvip" style={{ display: 'none' }} />

      <div
        id="com_channel_ban"
        className="channel_ban _fixed_banner"
        style={{ display: 'none' }}
      />
      <div
        id="notice_b2e_pop"
        className="channel_ban _fixed_banner"
        style={{ display: 'none' }}
      />

      <div
        id="com_extend_ban"
        className="extend_ban _fixed_banner"
        style={{ display: 'none' }}
      />

      <div
        className="ly_mnmorning"
        id="popup_lymnmorning"
        style={{ display: 'none' }}
      />

      <div
        className="cmnotipop_wrap v3"
        id="cmNotipopWrap"
        style={{ display: 'none' }}
      />

      <div
        className="cmnotipop_wrap v3"
        id="cmPromopopWrap"
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default MainPage;
