import React from 'react';
import RecentShoppingHeader from '../components/common/RecentShoppingHeader/RecentShoppingHeader';
import RecentShoppingProductList from '../components/common/RecentShoppingProductList/RecentShoppingProductList';

function RecentShoppingPage() {
  return (
    <>
      <div id="m_wrap" className="mcom_wrap ssg">
        <div id="m_container" className="mcom_container" data-iframe-height="">
          <link
            rel="stylesheet"
            type="text/css"
            href="//sui.ssgcdn.com/ui/m_ssg/css/mcom_page_history.css"
          />

          <div id="m_content">
            <div className="cmhistory_wrap" id="_cmhistory_wrap">
              <RecentShoppingHeader />
              <div className="cmhistory_ct">
                <div className="cmhistory_scroll" id="_cmhistory_scroll">
                  <div className="iscroll">
                    <RecentShoppingProductList />
                  </div>
                </div>
                <div className="cmhistory_loading" style={{ display: 'none' }}>
                  <span className="cmhistory_ic_loading">
                    <span className="blind">로딩중</span>
                  </span>
                </div>
                <div className="cmhistory_nodata" style={{ display: 'none' }}>
                  <p>최근 본 쇼핑정보 없습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input type="hidden" name="skipBottomBackBtn" value="" />
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
                data-react-tarea="웹공통_N|웹바|카테고리|SSG.COM"
              >
                <i className="icon ty_lg icon_category" aria-hidden="true" />
                <span className="toolbar_txt">카테고리</span>
              </a>
            </li>
            <li className="toolbar_item">
              <a
                href="/"
                className="toolbar_lnk ty_search"
                // onClick="globalSearchUI().floatGlobalSearch();return false;"
              >
                <i className="icon ty_lg icon_search" aria-hidden="true" />
                <span className="toolbar_txt">통합검색</span>
              </a>
            </li>
            <li className="toolbar_item">
              <a
                href="/"
                className="toolbar_lnk ty_home clickable"
                data-react-tarea="웹공통_N|웹바|홈|SSG.COM"
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
                // onClick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);"
              >
                <i className="icon ty_lg icon_person" aria-hidden="true" />
                <span className="toolbar_txt">MY</span>
                <span className="cmnoti_push" id="bottomOrderCnt" style={{}}>
                  <span className="blind" id="bottomOrderCntSpan">
                    새 메세지 수
                  </span>
                  1
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
                  style={{}}
                >
                  <img
                    id="bottomToolbarThumbImg"
                    alt="최근본 상품 이미지"
                    onError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=120&amp;h=120&amp;t=c0a0ff138401522845f7de2cd29ae2b124f3ccea'"
                    src="//sitem.ssgcdn.com/97/64/62/item/1000064626497_i1_120.jpg"
                  />
                </span>
                <span
                  id="mHistory_toolbar_txt"
                  className="toolbar_txt"
                  style={{ display: 'none' }}
                >
                  최근본
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div id="m_floating" className="mcom_floating_v2 react-area">
          <div className="floating_left">
            <a
              // href="javascript:history.back();"
              href="/"
              className="floating_btn ty_back clickable"
              data-react-tarea="웹공통_N|버튼_영역|뒤로가기"
            >
              <span className="blind">이전 페이지로 가기</span>
              <i className="icon ty_sm icon_arrow_left" aria-hidden="true" />
            </a>
          </div>
          <div className="floating_right" id="floating_right_id">
            <div className="floating_notice" id="floating_notice">
              <div className="floating_talk">
                <a href="/" className="btn_talk ty_csbot" id="_ssgCs">
                  <span className="btn_talk_label">
                    <span className="label_txt">고객센터톡</span>
                    <span className="cmnoti_push" style={{ display: 'none' }} />
                  </span>
                  <span className="floating_btn">
                    <i className="icon ty_lg icon_talk" aria-hidden="true" />
                  </span>
                </a>
                <a href="/" className="btn_talk ty_chat" id="_seller">
                  <span className="btn_talk_label">
                    <span className="label_txt">채팅</span>
                    <span className="cmnoti_push" style={{ display: 'none' }} />
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
                <span className="cmnoti_push" style={{ display: 'none' }} />
              </button>
            </div>
            <div className="floating_top">
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
      <div id="wp_tg_cts" style={{ display: 'none' }} />
    </>
  );
}

export default RecentShoppingPage;
