import React from 'react';
import { Header, Footer } from '../components/common';

function ProductDetailPage() {
  return (
    <>
      <Header />
      <link
        rel="stylesheet"
        type="text/css"
        href="//sui.ssgcdn.com/ui/m_ssg/css/mndtl_v2.css?v=20220802"
      />
      <div id="m_wrap" className="mcom_wrap sm_v3">
        <div id="m_container" className="mcom_container" data-iframe-height>
          <div id="m_content" data-globalid="item_view" className="react-area">
            <div
              className="mndtl_wrap ty_default"
              data-react-comm-type="item"
              data-react-comm-id="1000335775423"
              data-react-salestr-no="6005"
              data-react-site-no="6004"
            >
              <h2 className="blind">상품상세</h2>

              {/* scroll header */}
              <div
                className="mndtl_header fixed ani_fixedin ani_cont_fixedin"
                // mndtl_header fixed ani_fixedin ani_cont_fixedin
                data-react-tarea-cd="00006_000000027"
              >
                {/* 뒤로가기 버튼 */}
                <div className="mndtl_lft">
                  <a
                    href="/"
                    className="mndtl_btn_back clickable"
                    target="_parent"
                  >
                    <span className="blind">이전 페이지</span>
                  </a>
                </div>
                {/* 상품 정보/상세, 리뷰, Q&A, 추천 */}
                <div className="mndtl_cntr">
                  {/* 상품 정보 */}
                  <div className="mndtl_unit_tit" aria-hidden="true">
                    <strong className="mndtl_unit_brd">APPLE(애플)</strong>
                    <span className="mndtl_unit_name">
                      아이패드 에어 5세대 WiFi 256GB 블루 MM9N3KH/A
                    </span>
                  </div>
                  {/* 상세, 리뷰, Q&A, 추천 */}
                  <div className="mndtl_prdtab" aria-hidden="false">
                    <ul className="mndtl_prdtab_list">
                      <li
                        className=""
                        data-react-unit-type="text"
                        data-react-unit-text='[{"type":"text","value":"상세정보탭"}]'
                      >
                        <a
                          href="/"
                          className="mndtl_prdtab_link clickable"
                          data-react-tarea-dtl-cd="t00014"
                          data-cont-target="#_detailinfo"
                          target=""
                        >
                          상세
                        </a>
                      </li>
                      <li
                        className=""
                        data-react-unit-type="text"
                        data-react-unit-text='[{"type":"text","value":"고객리뷰탭"}]'
                      >
                        <a
                          href="/"
                          className="mndtl_prdtab_link clickable"
                          data-react-tarea-dtl-cd="t00014"
                          data-cont-target="#_detailreview"
                          target=""
                        >
                          리뷰<span className="mndtl_prdtab_num"> 0 </span>
                        </a>
                      </li>
                      <li
                        className=""
                        data-react-unit-type="text"
                        data-react-unit-text='[{"type":"text","value":"QnA탭"}]'
                      >
                        <a
                          href="/"
                          className="mndtl_prdtab_link clickable"
                          data-react-tarea-dtl-cd="t00014"
                          data-cont-target="#_detailqna"
                          target=""
                        >
                          Q&amp;A
                          <span className="mndtl_prdtab_num"> 9</span>
                        </a>
                      </li>

                      <li
                        className=""
                        data-react-unit-type="text"
                        data-react-unit-text='[{"type":"text","value":"추천상품탭"}]'
                      >
                        <a
                          href="/"
                          className="mndtl_prdtab_link clickable"
                          data-react-tarea-dtl-cd="t00014"
                          data-cont-target="#_detailgoods"
                          target=""
                        >
                          추천
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* 상품 이미지 */}
                <div className="mndtl_rgt">
                  <div className="mndtl_unit_thmb">
                    <a href="/" target="_parent">
                      <div
                        className="mndtl_unit_img"
                        style={{
                          backgroundImage:
                            "url('https://sitem.ssgcdn.com/23/54/77/item/1000335775423_i1_30.jpg')",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* swiper 상품 이미지 */}
              <div
                className="mndtl_swiper_wrap"
                data-react-tarea-cd="00006_000000006"
              >
                <div className="mndtl_swiper swiper-container-horizontal swiper-container-android">
                  <ul
                    className="mndtl_swiper_list swiper-wrapper"
                    style={{
                      transitionDuration: '0ms',
                      transform: 'translate3d(-412px, 0px, 0px)',
                    }}
                  >
                    {/* swiper-slide swiper-slide-prev */}
                    {/* swiper-slide swiper-slide-active */}
                    {/* swiper-slide swiper-slide-next */}
                    <li
                      className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                      id="itemImg8"
                      data-swiper-slide-index="8"
                      style={{ width: '412px' }}
                    >
                      <img
                        className="swiper-lazy swiper-lazy-loaded"
                        src="https://sitem.ssgcdn.com/23/54/77/item/1000335775423_i9_750.jpg"
                        alt="상품이미지9"
                        onError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
                      />
                    </li>
                    <li
                      className="swiper-slide swiper-slide-active"
                      id="itemImg0"
                      data-react-unit-type="item"
                      data-react-unit-text='[{"type":"text","value":"재생"}]'
                      data-swiper-slide-index="0"
                      style={{ width: '412px' }}
                    >
                      <img
                        src="https://sitem.ssgcdn.com/23/54/77/item/1000335775423_i1_750.jpg"
                        alt="상품이미지1"
                        onError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
                      />
                    </li>
                    <li
                      className="swiper-slide swiper-slide-next"
                      id="itemImg1"
                      data-swiper-slide-index="1"
                      style={{ width: '412px' }}
                    >
                      <img
                        className="swiper-lazy swiper-lazy-loaded"
                        src="https://sitem.ssgcdn.com/23/54/77/item/1000335775423_i2_750.jpg"
                        alt="상품이미지2"
                        onError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
                      />
                    </li>
                    <li
                      className="swiper-slide"
                      id="itemImg2"
                      data-swiper-slide-index="2"
                      style={{ width: '412px' }}
                    >
                      <img
                        className="swiper-lazy"
                        data-src="https://sitem.ssgcdn.com/23/54/77/item/1000335775423_i3_750.jpg"
                        src="https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806"
                        alt="상품이미지3"
                        onError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
                      />
                    </li>
                    <li
                      className="swiper-slide"
                      id="itemImg3"
                      data-swiper-slide-index="3"
                      style={{ width: '412px' }}
                    >
                      <img
                        className="swiper-lazy"
                        data-src="https://sitem.ssgcdn.com/23/54/77/item/1000335775423_i4_750.jpg"
                        src="https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806"
                        alt="상품이미지4"
                        onError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
                      />
                    </li>
                    <li
                      className="swiper-slide"
                      id="itemImg4"
                      data-swiper-slide-index="4"
                      style={{ width: '412px' }}
                    >
                      <img
                        className="swiper-lazy"
                        data-src="https://sitem.ssgcdn.com/23/54/77/item/1000335775423_i5_750.jpg"
                        src="https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806"
                        alt="상품이미지5"
                        onError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
                      />
                    </li>
                    <li
                      className="swiper-slide"
                      id="itemImg5"
                      data-swiper-slide-index="5"
                      style={{ width: '412px' }}
                    >
                      <img
                        className="swiper-lazy"
                        data-src="https://sitem.ssgcdn.com/23/54/77/item/1000335775423_i6_750.jpg"
                        src="https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806"
                        alt="상품이미지6"
                        onError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
                      />
                    </li>
                    <li
                      className="swiper-slide"
                      id="itemImg6"
                      data-swiper-slide-index="6"
                      style={{ width: '412px' }}
                    >
                      <img
                        className="swiper-lazy"
                        data-src="https://sitem.ssgcdn.com/23/54/77/item/1000335775423_i7_750.jpg"
                        src="https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806"
                        alt="상품이미지7"
                        onError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
                      />
                    </li>
                    <li
                      className="swiper-slide"
                      id="itemImg7"
                      data-swiper-slide-index="7"
                      style={{ width: '412px' }}
                    >
                      <img
                        className="swiper-lazy"
                        data-src="https://sitem.ssgcdn.com/23/54/77/item/1000335775423_i8_750.jpg"
                        src="https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806"
                        alt="상품이미지8"
                        onError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
                      />
                    </li>
                    <li
                      className="swiper-slide swiper-slide-duplicate-prev"
                      id="itemImg8"
                      data-swiper-slide-index="8"
                      style={{ width: '412px' }}
                    >
                      <img
                        className="swiper-lazy swiper-lazy-loaded"
                        src="https://sitem.ssgcdn.com/23/54/77/item/1000335775423_i9_750.jpg"
                        alt="상품이미지9"
                        onError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
                      />
                    </li>
                    <li
                      className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                      id="itemImg0"
                      data-react-unit-type="item"
                      data-react-unit-text='[{"type":"text","value":"재생"}]'
                      data-swiper-slide-index="0"
                      style={{ width: '412px' }}
                    >
                      <img
                        src="https://sitem.ssgcdn.com/23/54/77/item/1000335775423_i1_750.jpg"
                        alt="상품이미지1"
                        onError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
                      />
                    </li>
                  </ul>
                  <div className="mndtl_swiper_pagination swiper-pagination-custom">
                    <div className="mndtl_swiper_pagenum">
                      <span className="blind">현재 슬라이드</span>
                      <span className="on">01/</span>
                      <span className="blind">전체 슬라이드</span>
                      <span className="">09</span>
                    </div>
                  </div>
                </div>
                <div className="mndtl_ic_badge">
                  <div className="ic_left_bottom" data-react-unit-type="text">
                    <a
                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000335775423&amp;src_area=ssglensdetail"
                      className="mndtl_btn_lens clickable"
                      data-react-tarea-dtl-cd="t00008"
                      data-react-tarea="상품상세|대표 이미지 영역|SSG렌즈"
                      target="_parent"
                    >
                      <i className="mndtl_ic mndtl_ic_lens" />
                      <em className="blind">SSG.lens 바로가기</em>
                    </a>
                  </div>
                </div>
              </div>

              {/* 신세계몰, APPLE(애플), 아이패드 에어 5세대 ..., 가격, 스마일클럽, 상품 재고 */}
              <div
                className="mndtl_sec mndtl_prd_wrap"
                data-react-tarea-cd="00006_000000005"
              >
                {/* <div className="mndtl_mall">
                  <div className="mndtl_mall_badge">
                    <span className="cm_mall_text">
                      <i className="sm">신세계몰</i>
                    </span>
                  </div>
                  <div className="mndtl_mall_info" />
                  <button
                    type="button"
                    className="mndtl_btn_share modal-layer-open"
                    data-layer-target=".cdtl_modal_share"
                    data-react-unit-type="text"
                    data-react-unit-text='[{"type":"tarea_addt_val","value":"상품_공유하기"}]'
                  >
                    <i
                      className="mndtl_ic mndtl_ic_share clickable"
                      data-react-tarea-dtl-cd="t00060"
                    />
                    <span className="blind">공유</span>
                  </button>
                </div>

                <div className="mndtl_prd_info">
                  <h2
                    className="mndtl_prd_title"
                    data-react-unit-type="brand"
                    data-react-unit-id="2000000375"
                  >
                    <a
                      href="/mall/disp/brandMain.ssg?brandId=2000000375&amp;ctgId=6000209194&amp;_mpop=new"
                      className="mndtl_prdtit_brand clickable"
                      data-react-tarea-dtl-cd="t00053"
                      target="_parent"
                    >
                      APPLE(애플)
                    </a>
                    <span className="mndtl_prdtit_name">
                      아이패드 에어 5세대 WiFi 256GB 블루 MM9N3KH/A
                    </span>
                  </h2>
                  <div className="mndtl_prd_price">
                    <div className="mndtl_prd_oldpr">
                      <div className="old_price">
                        <del>
                          <span className="blind">정상가격</span>
                          <em className="ssg_price">979,000</em>
                          <span className="ssg_tx">원</span>
                        </del>
                      </div>
                      <div className="mndtl_tx_sale mndtl_coupon">쿠폰포함</div>
                    </div>
                    <div
                      className="mndtl_prd_newpr"
                      data-react-unit-type="text"
                      data-react-unit-text='[{"type":"text","value":"할인내역"}]'
                    >
                      <div className="mndtl_prd_per">
                        <span className="blind">할인율</span>
                        <span>4%</span>
                      </div>
                      <div className="new_price">
                        <span className="blind">판매가격</span>
                        <em className="ssg_price">939,840</em>
                        <span className="ssg_tx">
                          원<span className="cm_tx_opt" />
                        </span>
                      </div>
                      <a
                        href="/"
                        className="mndtl_ic mndtl_ic_qmark_new24 modal-layer-open clickable"
                        data-react-tarea-dtl-cd="t00020"
                        data-layer-target=".cdtl_modal_sale"
                        target=""
                      >
                        <span className="blind">가격 자세히보기</span>
                      </a>
                    </div>
                  </div>

                  <div
                    className="mndtl_smile_lst"
                    data-react-tarea-cd="00006_000000242"
                  >
                    <div
                      className="mndtl_smile_type"
                      data-react-unit-type="banr"
                    >
                      <a
                        href="https://member.ssg.com/m/membership/gate.ssg"
                        className="clickable"
                        data-react-tarea="상품상세|멤버십_영역|배너클릭"
                        data-react-tarea-dtl-cd="t00001"
                        data-react-comm-type="item"
                        data-react-comm-id="1000335775423"
                        target="_parent"
                      >
                        <img
                          className="ssg_lazy loaded"
                          src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750"
                          data-src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750"
                          data-srcset="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750 3x"
                          alt="스마일 클럽 무료 체험"
                          data-ll-status="loaded"
                          srcSet="
                      https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750 3x
                    "
                        />
                      </a>
                      <p className="blind">스마일 클럽 무료 체험</p>
                    </div>
                  </div>
                </div>

                <div
                  id="itemLiveList"
                  className="mndtl_live_v2"
                  data-observable-unit="true"
                  data-react-tarea-cd="00006_000000001"
                >
                  <div className="mndtl_live_wrap">
                    <ul className="mndtl_live_list">
                      <li>
                        <div className="mndtl_live_msg">
                          <p className="mndtl_live_tx">
                            상품이 딱 9개 남았어요. 구매 시 재고가 소진 될 수
                            있으니 서두르세요!&nbsp;
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>

              {/* 카드혜택가, 무아지 할부, 이벤트, 이벤트, 배송정보 */}
              <div
                className="mndtl_sec mndtl_info_wrap"
                data-react-tarea-cd="00006_000000012"
              >
                {/* <div className="mndtl_info_item">
                  <div className="mndtl_info_card">
                    <dl className="mndtl_info_dl mndtl_toggle">
                      <dt>카드혜택가</dt>
                      <dd>
                        <button
                          type="button"
                          className="mndtl_card_btnmore mndtl_toggle_btn"
                        >
                          <span className="mndtl_info_price">
                            <em className="ssg_price">892,848</em>
                            <span className="ssg_tx">원</span>
                          </span>
                          <i className="mndtl_ic mndtl_ic_toggle">
                            <span className="blind">
                              <span className="sr_off">카드혜택가 펼치기</span>
                              <span className="sr_on">카드혜택가 접기</span>
                            </span>
                          </i>
                        </button>
                        <div className="mndtl_card_cont mndtl_toggle_cont">
                          <dl className="mndtl_info_dl mndtl_toggle">
                            <dt>
                              <span className="mndtl_card_name">
                                트레이더스삼성, 삼성, 신세계삼성, 이마트삼성카드
                              </span>
                              , 행사
                              <a
                                href="/"
                                className="mndtl_txt_btn modal-layer-open"
                                data-layer-target="#id_cdtl_modal_cardbenefit_1"
                                target=""
                              >
                                더보기
                              </a>
                            </dt>
                            <dd>
                              <span className="mndtl_info_desc">
                                SSG PAY 7만원 이상 결제 시 892,848원
                              </span>
                            </dd>
                          </dl>
                          <dl className="mndtl_info_dl mndtl_toggle">
                            <dt>
                              <span className="mndtl_card_name">
                                SSG.COM 삼성카드
                              </span>
                              , 행사
                              <a
                                href="/"
                                className="mndtl_txt_btn modal-layer-open"
                                data-layer-target="#id_cdtl_modal_cardbenefit_2"
                                target=""
                              >
                                더보기
                              </a>
                            </dt>
                            <dd>
                              <span className="mndtl_info_desc">
                                SSG PAY 7만원 이상 결제 시 892,848원
                              </span>
                              <a
                                href="//m.ssg.com/event/eventDetail.ssg?promId=1100575267"
                                className="mndtl_info_btn"
                                target="_parent"
                              >
                                <span className="mndtl_info_tx">
                                  SSG MONEY 1% 적립 + 4% 추가 적립
                                </span>
                                <i className="mndtl_ic_arr" />
                              </a>
                            </dd>
                          </dl>
                        </div>
                      </dd>
                    </dl>
                  </div>

                  <div className="mndtl_info_installment">
                    <dl className="mndtl_info_dl">
                      <dt>무이자 할부</dt>
                      <dd>
                        <a
                          href="/mitem/mItemCardBenefit.ssg?itemId=1000335775423&amp;siteNo=6004&amp;_mpop=new"
                          className="mndtl_txt_btn"
                          target="_parent"
                        >
                          카드사별 무이자 혜택
                        </a>
                      </dd>
                    </dl>
                  </div>

                  <div
                    className="mndtl_info_benefit"
                    data-react-tarea-cd="00006_000000004"
                  >
                    <dl className="mndtl_info_dl">
                      <dt>이벤트</dt>
                      <dd
                        data-react-unit-type="text"
                        data-react-unit-text='[{"type":"text","value":"이벤트"}]'
                      >
                        <em className="mndtl_info_tit emphasis">
                          메타버쓱 오픈런 사전체험 1위에 도전하세요
                        </em>
                        <span className="mndtl_info_desc">
                          2022.08.01 ~ 2022.08.07
                        </span>
                        <a
                          href="http://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001250  "
                          className="mndtl_info_btn clickable"
                          data-react-tarea-dtl-cd="t00026"
                          target="_parent"
                        >
                          <span className="mndtl_info_tx">바로가기</span>
                          <i className="mndtl_ic_arr" />
                        </a>
                      </dd>
                    </dl>
                    <dl className="mndtl_info_dl">
                      <dt>이벤트</dt>
                      <dd
                        data-react-unit-type="text"
                        data-react-unit-text='[{"type":"text","value":"이벤트"}]'
                      >
                        <em className="mndtl_info_tit emphasis">
                          추석에는 선물하기로 쓱- 1탄 - SSG머니부터 러쉬
                          기프트까지!
                        </em>
                        <span className="mndtl_info_desc">
                          2022.07.21 ~ 2022.08.07
                        </span>
                        <a
                          href="http://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001021"
                          className="mndtl_info_btn clickable"
                          data-react-tarea-dtl-cd="t00026"
                          target="_parent"
                        >
                          <span className="mndtl_info_tx">바로가기</span>
                          <i className="mndtl_ic_arr" />
                        </a>
                      </dd>
                    </dl>
                  </div>

                  <div className="mndtl_info_delivery">
                    <dl className="mndtl_info_dl">
                      <dt>배송정보</dt>

                      <dd>
                        <em className="mndtl_info_tit"> 택배배송</em>
                        <span className="mndtl_info_parcel">
                          CJ대한통운
                          <a
                            href="/"
                            className="mndtl_ic mndtl_ic_qmark_new16 modal-layer-open"
                            data-layer-target=".cdtl_modal_delivcmpny"
                            target=""
                          >
                            <span className="blind">택배사 정보 안내 팝업</span>
                          </a>
                        </span>
                        <span className="mndtl_info_desc">
                          8/8(월)도착 예정
                          <a
                            href="/"
                            className="mndtl_ic mndtl_ic_qmark_new16 modal-layer-open"
                            data-layer-target=".cdtl_modal_delivery"
                            target="_parent"
                          >
                            <span className="blind">배송기간 안내 팝업</span>
                          </a>
                          <br />
                          배송비 무료
                        </span>
                      </dd>
                    </dl>
                  </div>

                  <div className="mndtl_info_note" />
                </div> */}

                {/* 뭔지 모르겠음 */}
                {/* <div id="item_usell_div" /> */}
              </div>

              <div className="mndtl_sec mndtl_cont_wrap" id="detailDescTab">
                <div className="mndtl_sec_cont" id="_detailinfo">
                  {/* 상품 재고 live alert */}
                  {/* <div
                    className="mndtl_live"
                    id="mndtl_live_cont"
                    data-react-tarea-cd="00006_000000001"
                  >
                    <div className="mndtl_live_wrap">
                      <ul className="mndtl_live_list swiper-wrapper">
                        <li className="mndtl_live_bx swiper-slide">
                          <div
                            className="mndtl_live_msg"
                            data-react-unit-type="text"
                            data-react-unit-text='[{"type":"tarea_addt_val","value":"닫기"}]'
                          >
                            <p className="mndtl_live_tx">
                              상품이 딱 9개 남았어요. 구매 시 재고가 소진 될 수
                              있으니 서두르세요!&nbsp;
                            </p>
                            <button
                              type="button"
                              className="mndtl_btn_liveclose clickable"
                              data-react-tarea-dtl-cd="t00060"
                            >
                              <i className="mndtl_ic_cancle" />
                              <span className="blind">라이브 메시지 닫기</span>
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div> */}

                  {/* 직거래 유도 주의 안내 */}
                  {/* <div className="mndtl_sec_caution_text mndtl_tx_point">
                    <h3 className="mndtl_caution_tit">직거래 유도 주의 안내</h3>
                    <div className="mndtl_caution_desc">
                      판매자가 쓱톡/문자 등을 이용하여 <br />
                      현금 입금을 유도하는 경우 사기 가능성이 있으니 거부하시고
                      <br />
                      SSG.COM 고객센터로 신고 해 주시기 바랍니다.
                    </div>
                  </div> */}

                  {/* 상세정보 */}
                  {/* <div className="mndtl_sec_subject">
                    <h3 className="mndtl_sec_tit">상세정보</h3>
                  </div> */}

                  {/* 상품번호, 신고, 상품 설명 이미지 */}
                  {/* <div
                    className="mndtl_detail_wrap"
                    data-react-tarea-cd="00006_000000009"
                  >
                    <div className="mndtl_detail_info">
                      <ul className="mndtl_detail_infolist">
                        <li>상품번호 : 1000335775423</li>
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
                          href="/comm/reportError.ssg?itemId=1000335775423&amp;siteNo=6004&amp;salestrNo=6005"
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
                            <p align="center">
                              <img
                                src="https://gi.esmplus.com/bestvshop/mall/top/top.jpg"
                                alt=""
                              />
                              <img
                                src="https://gi.esmplus.com/bestvshop/2022_img/iPad/iPad_Air_5/reservation_iPadAir5.jpg"
                                alt=""
                              />
                              <img
                                src="https://gi.esmplus.com/bestvshop/AppleCare_SSG/iPad_AppleCare.jpg"
                                alt=""
                              />
                              <img
                                src="https://gi.esmplus.com/bestvshop/2022_img/iPad/iPad_Air_5/iPad_Air_5.jpg"
                                alt=""
                              />
                              <img
                                src="https://gi.esmplus.com/bestvshop/mall/top/mall_bottom.jpg"
                                alt=""
                              />
                            </p>
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
                        >
                          <span className="sr_off">상세정보 펼쳐보기</span>
                          <span className="sr_on">상세정보 접기</span>
                          <i className="mndtl_ico_arr" />
                        </button>
                      </div>
                    </div>
                  </div> */}
                </div>

                {/* 고객리뷰 */}
                {/* <div
                  className="mndtl_sec_cont"
                  id="_detailreview"
                  data-react-tarea-cd="00006_000000007"
                >
                  <div className="mndtl_sec_subject">
                    <h3 className="mndtl_sec_tit">고객리뷰</h3>
                  </div>
                  <div className="mndtl_review_wrap">
                    <div className="mndtl_summary_noti">
                      <p className="mndtl_summary_tx">
                        등록된 리뷰가 없습니다.
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* Q&A 문의 */}
                {/* <div
                  className="mndtl_sec_cont"
                  id="_detailqna"
                  data-react-tarea-cd="00006_000000003"
                >
                  <div className="mndtl_sec_subject">
                    <h3 className="mndtl_sec_tit">Q&amp;A 문의</h3>
                    <div className="mndtl_qna_btnarea">
                      <a
                        href="/"
                        className="mndtl_qna_btn"
                        data-react-unit-type="text"
                        data-react-unit-text='[{"type":"tarea_addt_val","value":"문의하기"}]'
                        target="_parent"
                      >
                        <span
                          className="clickable"
                          data-react-tarea-dtl-cd="t00060"
                        >
                          문의하기
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    className="mndtl_qna_wrap"
                    data-react-unit-type="text"
                    data-react-unit-text='[{"type":"tarea_addt_val","value":"전체보기"}]'
                  >
                    <div className="mndtl_qna_lst">
                      <ul className="mndtl_chart_lst">
                        <div
                          id="data_of_list"
                          data-page="1"
                          data-pagesize="5"
                          data-totalcount="9"
                          data-next="true"
                        >
                          <li className="mndtl_chart_item mndtl_toggle">
                            <div className="mndtl_msg_unit">
                              <div className="mndtl_msg_bx">
                                <div className="mndtl_msg">
                                  <div className="mndtl_msg_cont">
                                    <div className="mndtl_qna_info">
                                      <span className="mndtl_qna_status complete">
                                        <span className="mndtl_qna_tx">
                                          답변완료
                                        </span>
                                      </span>
                                      <div className="mndtl_user_info">
                                        <span className="mndtl_user_tx">
                                          2022.07.28
                                        </span>
                                        <span className="mndtl_user_tx">
                                          whj*******
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="mndtl_qna_cont"
                                      data-react-unit-type="text"
                                      data-react-unit-text='[{"type":"tarea_addt_val","value":"펼쳐보기"}]'
                                    >
                                      <span className="blind">문의내용</span>
                                      <button
                                        type="button"
                                        className="mndtl_qna_btnmore mndtl_toggle_btn clickable"
                                        data-react-tarea-dtl-cd="t00060"
                                        aria-expanded="false"
                                        onClick="itemQna.getAnswer(this, '1177641908')"
                                      >
                                        <span className="blind">
                                          <span className="sr_off">
                                            문의내용 펼치기
                                          </span>
                                          <span className="sr_on">
                                            문의내용 접기
                                          </span>
                                        </span>
                                        <em className="mndtl_qna_tit">
                                          배송문의
                                        </em>
                                        <p className="mndtl_qna_desc">
                                          오늘 주문하였는데, 내일 발송될까요 ??
                                          <br />
                                        </p>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="mndtl_chart_item mndtl_toggle">
                            <div className="mndtl_msg_unit">
                              <div className="mndtl_msg_bx">
                                <div className="mndtl_msg">
                                  <div className="mndtl_msg_cont">
                                    <div className="mndtl_qna_info">
                                      <span className="mndtl_qna_status complete">
                                        <span className="mndtl_qna_tx">
                                          답변완료
                                        </span>
                                      </span>
                                      <div className="mndtl_user_info">
                                        <span className="mndtl_user_tx">
                                          2022.07.09
                                        </span>
                                        <span className="mndtl_user_tx">
                                          you*******
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="mndtl_qna_cont"
                                      data-react-unit-type="text"
                                      data-react-unit-text='[{"type":"tarea_addt_val","value":"펼쳐보기"}]'
                                    >
                                      <span className="blind">문의내용</span>
                                      <button
                                        type="button"
                                        className="mndtl_qna_btnmore mndtl_toggle_btn clickable"
                                        data-react-tarea-dtl-cd="t00060"
                                        aria-expanded="false"
                                        onClick="itemQna.getAnswer(this, '1176274091')"
                                      >
                                        <span className="blind">
                                          <span className="sr_off">
                                            문의내용 펼치기
                                          </span>
                                          <span className="sr_on">
                                            문의내용 접기
                                          </span>
                                        </span>
                                        <em className="mndtl_qna_tit">
                                          배터리문제
                                        </em>
                                        <p className="mndtl_qna_desc">
                                          배터리가 사용도안하는데 하루를
                                          못가는데 정상인가요? <br />
                                          아닐시 교환원합니다
                                        </p>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="mndtl_chart_item mndtl_toggle">
                            <div className="mndtl_msg_unit secret">
                              <div className="mndtl_msg_bx">
                                <div className="mndtl_msg">
                                  <div className="mndtl_msg_cont">
                                    <div className="mndtl_qna_info">
                                      <span className="mndtl_qna_status complete">
                                        <span className="mndtl_qna_tx">
                                          답변완료
                                        </span>
                                      </span>
                                      <div className="mndtl_user_info">
                                        <span className="mndtl_user_tx">
                                          2022.06.21
                                        </span>
                                        <span className="mndtl_user_tx">
                                          dan*******
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="mndtl_qna_cont"
                                      data-react-unit-type="text"
                                      data-react-unit-text='[{"type":"tarea_addt_val","value":"펼쳐보기"}]'
                                    >
                                      <span className="blind">문의내용</span>
                                      <em className="mndtl_qna_tit">
                                        배송문의
                                      </em>
                                      <p className="mndtl_qna_desc" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="mndtl_chart_item mndtl_toggle">
                            <div className="mndtl_msg_unit secret">
                              <div className="mndtl_msg_bx">
                                <div className="mndtl_msg">
                                  <div className="mndtl_msg_cont">
                                    <div className="mndtl_qna_info">
                                      <span className="mndtl_qna_status complete">
                                        <span className="mndtl_qna_tx">
                                          답변완료
                                        </span>
                                      </span>
                                      <div className="mndtl_user_info">
                                        <span className="mndtl_user_tx">
                                          2022.06.08
                                        </span>
                                        <span className="mndtl_user_tx">
                                          foc*******
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="mndtl_qna_cont"
                                      data-react-unit-type="text"
                                      data-react-unit-text='[{"type":"tarea_addt_val","value":"펼쳐보기"}]'
                                    >
                                      <span className="blind">문의내용</span>
                                      <em className="mndtl_qna_tit">
                                        구매취소 희망합니다
                                      </em>
                                      <p className="mndtl_qna_desc" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="mndtl_chart_item mndtl_toggle">
                            <div className="mndtl_msg_unit">
                              <div className="mndtl_msg_bx">
                                <div className="mndtl_msg">
                                  <div className="mndtl_msg_cont">
                                    <div className="mndtl_qna_info">
                                      <span className="mndtl_qna_status complete">
                                        <span className="mndtl_qna_tx">
                                          답변완료
                                        </span>
                                      </span>
                                      <div className="mndtl_user_info">
                                        <span className="mndtl_user_tx">
                                          2022.05.06
                                        </span>
                                        <span className="mndtl_user_tx">
                                          jhj*******
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="mndtl_qna_cont"
                                      data-react-unit-type="text"
                                      data-react-unit-text='[{"type":"tarea_addt_val","value":"펼쳐보기"}]'
                                    >
                                      <span className="blind">문의내용</span>
                                      <button
                                        type="button"
                                        className="mndtl_qna_btnmore mndtl_toggle_btn clickable"
                                        data-react-tarea-dtl-cd="t00060"
                                        aria-expanded="false"
                                        onClick="itemQna.getAnswer(this, '1170459304')"
                                      >
                                        <span className="blind">
                                          <span className="sr_off">
                                            문의내용 펼치기
                                          </span>
                                          <span className="sr_on">
                                            문의내용 접기
                                          </span>
                                        </span>
                                        <em className="mndtl_qna_tit">
                                          색상문의
                                        </em>
                                        <p className="mndtl_qna_desc">
                                          색상을 스타라이트로 주문한것같은데
                                          블루가 되있더라구요 <br />
                                          스타라이트색상으로 교환가능할까요?
                                        </p>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </div>
                        <li className="mndtl_chart_item">
                          <div className="mndtl_msg_unit">
                            <div className="mndtl_msg_bx">
                              <div className="mndtl_msg">
                                <a
                                  href="/"
                                  className="mndtl_msg_more modal-iframe-open clickable"
                                  data-react-tarea-dtl-cd="t00060"
                                  data-title="Q&amp;A 문의"
                                  data-layer-target="/mitem/qnaAll.ssg?repItemId=&amp;itemId=1000335775423&amp;siteNo=6004&amp;inqSalestrNo=6005&amp;splVenId=0000007290&amp;lrnkSplVenId=&amp;itemRegDivCd=10"
                                  target=""
                                >
                                  Q&amp;A 문의 전체보기
                                  <span className="count">(9건)</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}

                <div
                  className="mndtl_sec_cont"
                  data-react-tarea-cd="00006_000000014"
                >
                  <div id="_detailetc">
                    {/* 상품고시정보 */}
                    {/* <div className="mndtl_sec_bx">
                      <div className="mndtl_etc">
                        <div className="mndtl_etc_cont">
                          <ul className="mndtl_etc_lst">
                            <li>
                              <a
                                href="/item/appItemInfoPopup.ssg?itemId=1000335775423&amp;siteNo=6004&amp;salestrNo=6005&amp;infoType=12"
                                target="_parent"
                              >
                                <span>
                                  <em>상품고시정보</em>
                                </span>
                                <i className="mndtl_ic_arr">
                                  <span className="blind">보러가기</span>
                                </i>
                              </a>
                            </li>

                            <li>
                              <a
                                href="/item/appItemInfoPopup.ssg?itemId=1000335775423&amp;siteNo=6004&amp;salestrNo=6005&amp;secondShppMthdCd=&amp;infoType=11"
                                target="_parent"
                              >
                                <span>교환, 반품, A/S 안내</span>
                                <i className="mndtl_ic_arr">
                                  <span className="blind">보러가기</span>
                                </i>
                              </a>
                            </li>

                            <li>
                              <a
                                href="/item/appItemInfoPopup.ssg?itemId=1000335775423&amp;siteNo=6004&amp;salestrNo=6005&amp;infoType=6"
                                target="_parent"
                              >
                                <span>위탁판매자정보</span>
                                <i className="mndtl_ic_arr">
                                  <span className="blind">보러가기</span>
                                </i>
                              </a>
                            </li>

                            <li>
                              <a
                                href="/item/appItemInfoPopup.ssg?itemId=1000335775423&amp;siteNo=6004&amp;salestrNo=6005&amp;infoType=3&amp;retShppcst=5000&amp;exchShppcst=0&amp;shppcst=0&amp;shppFreeStdYn=N&amp;secondShppMthdCd=&amp;prmRetShppcst=&amp;prmExchShppcst=&amp;prmShppcst="
                                target="_parent"
                              >
                                <span>교환/반품/환불 안내</span>
                                <i className="mndtl_ic_arr">
                                  <span className="blind">보러가기</span>
                                </i>
                              </a>
                            </li>

                            <li>
                              <a
                                href="/item/appItemInfoPopup.ssg?itemId=1000335775423&amp;siteNo=6004&amp;salestrNo=6005&amp;secondShppMthdCd=&amp;infoType=2"
                                target="_parent"
                              >
                                <span>배송안내</span>
                                <i className="mndtl_ic_arr">
                                  <span className="blind">보러가기</span>
                                </i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                  </div>

                  {/* 배너 */}
                  <div className="mndtl_sec_bx">
                    <div className="mndtl_banner_event">
                      {/* 배너1 */}
                      {/* <div className="mndtl_event_img">
                        <a
                          href="http://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001250  "
                          target="_parent"
                        >
                          <img
                            className="ssg_lazy"
                            src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                            data-src="https://sstatic.ssgcdn.com/promo/event/ssg/202207/1100905668_1659140224911.jpg"
                            alt="메타버쓱 오픈런"
                            data-ll-status="observed"
                          />
                        </a>
                      </div> */}
                      {/* 배너2 */}
                      {/* <div className="mndtl_event_img">
                        <a
                          href="http://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001021"
                          target="_parent"
                        >
                          <img
                            className="ssg_lazy"
                            src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                            data-src="https://sstatic.ssgcdn.com/promo/event/ssg/202207/1100899103_1658282341166.jpg"
                            alt="추석에는 선물하기로 쓱-1탄!"
                            data-ll-status="observed"
                          />
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* 카테고리 */}
                <div className="mndtl_sec_bx">
                  {/* <div className="mndtl_category">
                    <dl className="mndtl_info_dl">
                      <dt>카테고리</dt>
                      <dd className="mndtl_ctg_info">
                        <span
                          data-react-unit-type="text"
                          data-react-unit-text='[{"type":"text","value":"컴퓨터/노트북/태블릿"}]'
                        >
                          <a
                            href="/disp/category.ssg?ctgId=6000209194"
                            className="clickable"
                            data-react-tarea-dtl-cd="t00054"
                            target="_parent"
                          >
                            컴퓨터/노트북/태블릿 &nbsp;
                            <i className="mndtl_ic_arr" />
                          </a>
                        </span>
                        <span
                          data-react-unit-type="text"
                          data-react-unit-text='[{"type":"text","value":"태블릿PC/패드"}]'
                        >
                          <a
                            href="/disp/category.ssg?ctgId=6000209205"
                            className="clickable"
                            data-react-tarea-dtl-cd="t00054"
                            target="_parent"
                          >
                            태블릿PC/패드
                          </a>
                        </span>
                      </dd>
                    </dl>
                  </div> */}
                </div>

                {/* Apple의 모든 것. */}
                <div className="mndtl_sec_cont" id="_detailgoods">
                  <div className="mndtl_recommend">
                    {/* Apple의 모든 것.최고의 선물. */}
                    {/* <div
                      className="mndtl_sec_bx"
                      data-observable-unit="true"
                      data-react-tarea-cd="00006_000000018"
                    >
                      <div
                        className="mndtl_recctt_item ty_plan"
                        data-react-unit-type="text"
                        data-react-unit-text='[{"type":"tarea_addt_val","value":"타이틀"}]'
                      >
                        <a
                          href="https://m-shinsegaemall.ssg.com/plan/planShop.ssg?dispCmptId=6000371270"
                          className="mndtl_recctt_link clickable"
                          data-react-tarea-dtl-cd="t00060"
                          target="_parent"
                        >
                          <div className="mndtl_recctt_thmb">
                            <span className="mndtl_recctt_badge">
                              <em>기획전</em>
                            </span>
                            <div className="mndtl_recctt_img">
                              <img
                                className="ssg_lazy"
                                src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202203/2022032415282778119680984968_206.jpg&amp;w=750&amp;h=470&amp;qlty=92&amp;edit=c&amp;t=7c8e81ce7bf0363820a850258549825e6f7ff435"
                                alt="대표이미지"
                                data-ll-status="observed"
                              />
                            </div>
                          </div>
                          <div className="mndtl_recctt_tx_thmb">
                            <div className="mndtl_recctt_tit">
                              <div className="mndtl_recctt_maintit">
                                <span className="mndtl_recctt_tx">
                                  Apple의 모든 것.최고의 선물.
                                </span>
                              </div>
                              <div className="mndtl_recctt_subtit">
                                <span className="mndtl_recctt_tx" />
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="mndtl_recctt_grid">
                          <ul className="mndtl_reccttgrid_list">
                            <li
                              className="mndtl_reccttgrid_item"
                              data-observable-item="true"
                              data-react-unit-type="item"
                              data-react-unit-id="1000325481130"
                              data-react-unit-inx="0"
                            >
                              <div className="mndtl_recctt_prd">
                                <a
                                  href="/item/itemView.ssg?itemId=1000325481130&amp;siteNo=6004&amp;salestrNo=6005"
                                  className="mndtl_reccttprd_link clickable"
                                  data-react-tarea-dtl-cd="t00001"
                                  target="_parent"
                                >
                                  <div className="mndtl_reccttprd_thmb">
                                    <div className="mndtl_reccttprd_img">
                                      <img
                                        className="ssg_lazy"
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="https://sitem.ssgcdn.com/30/11/48/item/1000325481130_i1_150.jpg"
                                        alt=""
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </div>
                                  <div className="mndtl_reccttprd_tx_thmb">
                                    <span className="mndtl_reccttprd_tit">
                                      <span className="mndtl_reccttprd_brand">
                                        APPLE(애플)
                                      </span>
                                      아이폰 13 프로 맥스 자급제 512GB
                                      알파인그린 MND13KH/A
                                    </span>
                                    <div className="mndtl_reccttprd_pricewrap">
                                      <div className="mndtl_reccttprd_rate">
                                        <em className="blind">할인율</em>
                                        <span className="mndtl_reccttprd_per">
                                          4%
                                        </span>
                                      </div>
                                      <div className="new_price">
                                        <span className="blind">판매가격</span>
                                        <em className="ssg_price">1,824,000</em>
                                        <span className="ssg_tx">원</span>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </li>
                            <li
                              className="mndtl_reccttgrid_item"
                              data-observable-item="true"
                              data-react-unit-type="item"
                              data-react-unit-id="1000325472573"
                              data-react-unit-inx="1"
                            >
                              <div className="mndtl_recctt_prd">
                                <a
                                  href="/item/itemView.ssg?itemId=1000325472573&amp;siteNo=6004&amp;salestrNo=6005"
                                  className="mndtl_reccttprd_link clickable"
                                  data-react-tarea-dtl-cd="t00001"
                                  target="_parent"
                                >
                                  <div className="mndtl_reccttprd_thmb">
                                    <div className="mndtl_reccttprd_img">
                                      <img
                                        className="ssg_lazy"
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="https://sitem.ssgcdn.com/73/25/47/item/1000325472573_i1_150.jpg"
                                        alt=""
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </div>
                                  <div className="mndtl_reccttprd_tx_thmb">
                                    <span className="mndtl_reccttprd_tit">
                                      <span className="mndtl_reccttprd_brand">
                                        APPLE(애플)
                                      </span>
                                      아이폰 13 프로 자급제 256GB 알파인 그린
                                      MNE33KH/A
                                    </span>
                                    <div className="mndtl_reccttprd_pricewrap">
                                      <div className="mndtl_reccttprd_rate">
                                        <em className="blind">할인율</em>
                                        <span className="mndtl_reccttprd_per">
                                          4%
                                        </span>
                                      </div>
                                      <div className="new_price">
                                        <span className="blind">판매가격</span>
                                        <em className="ssg_price">1,430,400</em>
                                        <span className="ssg_tx">원</span>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </li>
                            <li
                              className="mndtl_reccttgrid_item"
                              data-observable-item="true"
                              data-react-unit-type="item"
                              data-react-unit-id="1000325466629"
                              data-react-unit-inx="2"
                            >
                              <div className="mndtl_recctt_prd">
                                <a
                                  href="/item/itemView.ssg?itemId=1000325466629&amp;siteNo=6004&amp;salestrNo=6005"
                                  className="mndtl_reccttprd_link clickable"
                                  data-react-tarea-dtl-cd="t00001"
                                  target="_parent"
                                >
                                  <div className="mndtl_reccttprd_thmb">
                                    <div className="mndtl_reccttprd_img">
                                      <img
                                        className="ssg_lazy"
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="https://sitem.ssgcdn.com/29/66/46/item/1000325466629_i1_150.jpg"
                                        alt=""
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </div>
                                  <div className="mndtl_reccttprd_tx_thmb">
                                    <span className="mndtl_reccttprd_tit">
                                      <span className="mndtl_reccttprd_brand">
                                        APPLE(애플)
                                      </span>
                                      아이폰 13 미니 자급제 512GB 그린 MNFH3KH/A
                                    </span>
                                    <div className="mndtl_reccttprd_pricewrap">
                                      <div className="mndtl_reccttprd_rate">
                                        <em className="blind">할인율</em>
                                        <span className="mndtl_reccttprd_per">
                                          2%
                                        </span>
                                      </div>
                                      <div className="new_price">
                                        <span className="blind">판매가격</span>
                                        <em className="ssg_price">1,332,800</em>
                                        <span className="ssg_tx">원</span>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}

                    {/* 함께 보면 좋은 상품 */}
                    {/* <div
                      className="mndtl_sec_bx"
                      data-observable-unit="true"
                      data-react-tarea-cd="00006_000000024"
                    >
                      <div className="mndtl_rectit_tytext">
                        <a
                          href="/disp/category.ssg?ctgId=6000209205&amp;_mpop=new"
                          className="mndtl_rectit_text"
                          data-react-unit-type="text"
                          data-react-unit-text='[{"type":"tarea_addt_val","value":"타이틀"}]'
                          target="_parent"
                        >
                          <span
                            className="mndtl_rectit_text_tx clickable"
                            data-react-tarea-dtl-cd="t00060"
                          >
                            함께 보면 좋은 상품
                          </span>
                          <span
                            className="mndtl_rectit_arrow"
                            data-react-unit-type="text"
                            data-react-unit-text='[{"type":"tarea_addt_val","value":"더보기"}]'
                          >
                            <span className="blind">더보러가기</span>
                            <i
                              className="mndtl_ic_arr clickable"
                              data-react-tarea-dtl-cd="t00060"
                            />
                          </span>
                        </a>
                        <div className="mndtl_rectit_text_subtx">
                          이 상품과 함께 많이 본 상품
                        </div>
                      </div>
                      <div className="cmitem_grid">
                        <ul className="cmitem_grid_lst mnsditem_ty_thmb">
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000335764515"
                            data-react-unit-inx="0"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000335764515"
                              data-react-unit-inx="0"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O006","basc_info_lt":"SULT1O001","base_item":"1000335775423","rn":"2","rn_lt":"1","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000335764515"
                                data-adidx="1"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000335764515&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_참여형|상품_클릭|아이패드 에어 5세대 셀룰러 64GB 퍼플 MME93KH/A_1000335764515_{"inflo_site_no":"6005","basc_info":"SUIV1O006","basc_info_lt":"SULT1O001","base_item":"1000335775423","rn":"2","rn_lt":"1","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                                    data-info="1000335764515"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/15/45/76/item/1000335764515_i1_187.jpg"
                                        alt="아이패드 에어 5세대 셀룰러 64GB 퍼플 MME93KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000335764515"
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
                                        value="아이패드 에어 5세대 셀룰러 64GB 퍼플 MME93KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/15/45/76/item/1000335764515_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_참여형|상품_좋아요|아이패드 에어 5세대 셀룰러 64GB 퍼플 MME93KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000335764515&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 에어 5세대 셀룰러 64GB 퍼플
                                          MME93KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                979,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              939,840
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>4%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000335760229"
                            data-react-unit-inx="1"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000335760229"
                              data-react-unit-inx="1"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O001","basc_info_lt":"SULT1O002","base_item":"1000335775423","rn":"1","rn_lt":"2","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000335760229"
                                data-adidx="2"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000335760229&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_참여형|상품_클릭|아이패드 에어 5세대 셀룰러 64GB 스페이스그레이 MM6R3KH/A_1000335760229_{"inflo_site_no":"6005","basc_info":"SUIV1O001","basc_info_lt":"SULT1O002","base_item":"1000335775423","rn":"1","rn_lt":"2","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                                    data-info="1000335760229"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/29/02/76/item/1000335760229_i1_187.jpg"
                                        alt="아이패드 에어 5세대 셀룰러 64GB 스페이스그레이 MM6R3KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000335760229"
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
                                        value="아이패드 에어 5세대 셀룰러 64GB 스페이스그레이 MM6R3KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/29/02/76/item/1000335760229_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_참여형|상품_좋아요|아이패드 에어 5세대 셀룰러 64GB 스페이스그레이 MM6R3KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000335760229&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 에어 5세대 셀룰러 64GB
                                          스페이스그레이 MM6R3KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                979,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              939,840
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>4%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000264067443"
                            data-react-unit-inx="2"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000264067443"
                              data-react-unit-inx="2"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O015","basc_info_lt":"SULT1O003","base_item":"1000335775423","rn":"5","rn_lt":"3","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000264067443"
                                data-adidx="3"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000264067443&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_참여형|상품_클릭|아이패드 미니6세대 WI-FI 64GB 핑크 MLWL3KH/A_1000264067443_{"inflo_site_no":"6005","basc_info":"SUIV1O015","basc_info_lt":"SULT1O003","base_item":"1000335775423","rn":"5","rn_lt":"3","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                                    data-info="1000264067443"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/43/74/06/item/1000264067443_i1_187.jpg"
                                        alt="아이패드 미니6세대 WI-FI 64GB 핑크 MLWL3KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000264067443&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_참여형|상품_이미지버튼|아이패드 미니6세대 WI-FI 64GB 핑크 MLWL3KH/A_1000264067443$_{"inflo_site_no":"6005","basc_info":"SUIV1O015","basc_info_lt":"SULT1O003","base_item":"1000335775423","rn":"5","rn_lt":"3","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                                      data-info="1000264067443"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000264067443"
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
                                        value="아이패드 미니6세대 WI-FI 64GB 핑크 MLWL3KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/43/74/06/item/1000264067443_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_참여형|상품_좋아요|아이패드 미니6세대 WI-FI 64GB 핑크 MLWL3KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000264067443&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 미니6세대 WI-FI 64GB 핑크
                                          MLWL3KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                649,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              631,020
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>2%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000335766906"
                            data-react-unit-inx="3"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000335766906"
                              data-react-unit-inx="3"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O011","basc_info_lt":"SULT1O006","base_item":"1000335775423","rn":"4","rn_lt":"5","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000335766906"
                                data-adidx="4"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000335766906&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_참여형|상품_클릭|아이패드 에어 5세대 셀룰러 256GB 블루 MM733KH/A_1000335766906_{"inflo_site_no":"6005","basc_info":"SUIV1O011","basc_info_lt":"SULT1O006","base_item":"1000335775423","rn":"4","rn_lt":"5","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                                    data-info="1000335766906"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/06/69/76/item/1000335766906_i1_187.jpg"
                                        alt="아이패드 에어 5세대 셀룰러 256GB 블루 MM733KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000335766906"
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
                                        value="아이패드 에어 5세대 셀룰러 256GB 블루 MM733KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/06/69/76/item/1000335766906_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_참여형|상품_좋아요|아이패드 에어 5세대 셀룰러 256GB 블루 MM733KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000335766906&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 에어 5세대 셀룰러 256GB 블루
                                          MM733KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                1,179,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              1,131,840
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>4%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000335762677"
                            data-react-unit-inx="4"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000335762677"
                              data-react-unit-inx="4"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O009","basc_info_lt":"SULT1O007","base_item":"1000335775423","rn":"3","rn_lt":"6","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000335762677"
                                data-adidx="5"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000335762677&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_참여형|상품_클릭|아이패드 에어 5세대 셀룰러 64GB 블루 MM6U3KH/A_1000335762677_{"inflo_site_no":"6005","basc_info":"SUIV1O009","basc_info_lt":"SULT1O007","base_item":"1000335775423","rn":"3","rn_lt":"6","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                                    data-info="1000335762677"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/77/26/76/item/1000335762677_i1_187.jpg"
                                        alt="아이패드 에어 5세대 셀룰러 64GB 블루 MM6U3KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000335762677"
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
                                        value="아이패드 에어 5세대 셀룰러 64GB 블루 MM6U3KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/77/26/76/item/1000335762677_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_참여형|상품_좋아요|아이패드 에어 5세대 셀룰러 64GB 블루 MM6U3KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000335762677&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 에어 5세대 셀룰러 64GB 블루
                                          MM6U3KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                979,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              939,840
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>4%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000227582493"
                            data-react-unit-inx="5"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000227582493"
                              data-react-unit-inx="5"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O027","basc_info_lt":"SULT1O029","base_item":"1000335775423","rn":"8","rn_lt":"8","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000227582493"
                                data-adidx="6"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000227582493&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_참여형|상품_클릭|아이패드 프로 12.9형 5세대 M1칩 WiFi 128GB 스페이스그레이 [MHNF3KH/A]_1000227582493_{"inflo_site_no":"6005","basc_info":"SUIV1O027","basc_info_lt":"SULT1O029","base_item":"1000335775423","rn":"8","rn_lt":"8","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                                    data-info="1000227582493"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/93/24/58/item/1000227582493_i1_187.jpg"
                                        alt="아이패드 프로 12.9형 5세대 M1칩 WiFi 128GB 스페이스그레이 [MHNF3KH/A]"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000227582493&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_참여형|상품_이미지버튼|아이패드 프로 12.9형 5세대 M1칩 WiFi 128GB 스페이스그레이 [MHNF3KH/A]_1000227582493$_{"inflo_site_no":"6005","basc_info":"SUIV1O027","basc_info_lt":"SULT1O029","base_item":"1000335775423","rn":"8","rn_lt":"8","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                                      data-info="1000227582493"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000227582493"
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
                                        value="아이패드 프로 12.9형 5세대 M1칩 WiFi 128GB 스페이스그레이 [MHNF3KH/A]"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/93/24/58/item/1000227582493_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_참여형|상품_좋아요|아이패드 프로 12.9형 5세대 M1칩 WiFi 128GB 스페이스그레이 [MHNF3KH/A]_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000227582493&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 프로 12.9형 5세대 M1칩 WiFi
                                          128GB 스페이스그레이 [MHNF3KH/A]
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              1,390,000
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000335771934"
                            data-react-unit-inx="6"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000335771934"
                              data-react-unit-inx="6"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O032","basc_info_lt":"SUIV1O032","base_item":"1000335775423","rn":"9","rn_lt":"9","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000335771934"
                                data-adidx="7"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000335771934&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_참여형|상품_클릭|아이패드 에어 5세대 WiFi 64GB 스타라이트 MM9F3KH/A_1000335771934_{"inflo_site_no":"6005","basc_info":"SUIV1O032","basc_info_lt":"SUIV1O032","base_item":"1000335775423","rn":"9","rn_lt":"9","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                                    data-info="1000335771934"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/34/19/77/item/1000335771934_i1_187.jpg"
                                        alt="아이패드 에어 5세대 WiFi 64GB 스타라이트 MM9F3KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000335771934"
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
                                        value="아이패드 에어 5세대 WiFi 64GB 스타라이트 MM9F3KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/34/19/77/item/1000335771934_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_참여형|상품_좋아요|아이패드 에어 5세대 WiFi 64GB 스타라이트 MM9F3KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000335771934&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 에어 5세대 WiFi 64GB
                                          스타라이트 MM9F3KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                779,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              747,840
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>4%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000335763635"
                            data-react-unit-inx="7"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000335763635"
                              data-react-unit-inx="7"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O033","basc_info_lt":"SUIV1O033","base_item":"1000335775423","rn":"10","rn_lt":"10","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000335763635"
                                data-adidx="8"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000335763635&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_참여형|상품_클릭|아이패드 에어 5세대 셀룰러 64GB 스타라이트 MM6V3KH/A_1000335763635_{"inflo_site_no":"6005","basc_info":"SUIV1O033","basc_info_lt":"SUIV1O033","base_item":"1000335775423","rn":"10","rn_lt":"10","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                                    data-info="1000335763635"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/35/36/76/item/1000335763635_i1_187.jpg"
                                        alt="아이패드 에어 5세대 셀룰러 64GB 스타라이트 MM6V3KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000335763635"
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
                                        value="아이패드 에어 5세대 셀룰러 64GB 스타라이트 MM6V3KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/35/36/76/item/1000335763635_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_참여형|상품_좋아요|아이패드 에어 5세대 셀룰러 64GB 스타라이트 MM6V3KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000335763635&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 에어 5세대 셀룰러 64GB
                                          스타라이트 MM6V3KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                979,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              939,840
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>4%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000072353677"
                            data-react-unit-inx="8"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000072353677"
                              data-react-unit-inx="8"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O036","basc_info_lt":"SUIV1O036","base_item":"1000335775423","rn":"11","rn_lt":"11","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000072353677"
                                data-adidx="9"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000072353677&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_참여형|상품_클릭|아이패드 프로 12.9형 5세대 M1칩 WiFi 256GB 실버 MHNJ3KH/A_1000072353677_{"inflo_site_no":"6005","basc_info":"SUIV1O036","basc_info_lt":"SUIV1O036","base_item":"1000335775423","rn":"11","rn_lt":"11","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                                    data-info="1000072353677"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/77/36/35/item/1000072353677_i1_187.jpg"
                                        alt="아이패드 프로 12.9형 5세대 M1칩 WiFi 256GB 실버 MHNJ3KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000072353677"
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
                                        value="아이패드 프로 12.9형 5세대 M1칩 WiFi 256GB 실버 MHNJ3KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/77/36/35/item/1000072353677_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_참여형|상품_좋아요|아이패드 프로 12.9형 5세대 M1칩 WiFi 256GB 실버 MHNJ3KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000072353677&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 프로 12.9형 5세대 M1칩 WiFi
                                          256GB 실버 MHNJ3KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                1,509,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              1,448,640
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>4%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000335768490"
                            data-react-unit-inx="9"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000335768490"
                              data-react-unit-inx="9"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O054","basc_info_lt":"SUIV1O054","base_item":"1000335775423","rn":"14","rn_lt":"14","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000335768490"
                                data-adidx="10"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000335768490&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_참여형|상품_클릭|아이패드 에어 5세대 셀룰러 256GB 퍼플 MMED3KH/A_1000335768490_{"inflo_site_no":"6005","basc_info":"SUIV1O054","basc_info_lt":"SUIV1O054","base_item":"1000335775423","rn":"14","rn_lt":"14","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                                    data-info="1000335768490"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/90/84/76/item/1000335768490_i1_187.jpg"
                                        alt="아이패드 에어 5세대 셀룰러 256GB 퍼플 MMED3KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000335768490"
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
                                        value="아이패드 에어 5세대 셀룰러 256GB 퍼플 MMED3KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/90/84/76/item/1000335768490_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_참여형|상품_좋아요|아이패드 에어 5세대 셀룰러 256GB 퍼플 MMED3KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000335768490&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 에어 5세대 셀룰러 256GB 퍼플
                                          MMED3KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                1,179,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              1,131,840
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>4%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000072363165"
                            data-react-unit-inx="10"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000072363165"
                              data-react-unit-inx="10"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O059","basc_info_lt":"SUIV1O059","base_item":"1000335775423","rn":"16","rn_lt":"16","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000072363165"
                                data-adidx="11"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000072363165&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_참여형|상품_클릭|아이패드 프로 12.9형 5세대 M1칩 셀룰러 128GB 스페이스그레이 MHR43KH/A_1000072363165_{"inflo_site_no":"6005","basc_info":"SUIV1O059","basc_info_lt":"SUIV1O059","base_item":"1000335775423","rn":"16","rn_lt":"16","mdl_crtn_dt":"22-08-04","mdl_reg_dt":"22-08-05"}'
                                    data-info="1000072363165"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/65/31/36/item/1000072363165_i1_187.jpg"
                                        alt="아이패드 프로 12.9형 5세대 M1칩 셀룰러 128GB 스페이스그레이 MHR43KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000072363165"
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
                                        value="아이패드 프로 12.9형 5세대 M1칩 셀룰러 128GB 스페이스그레이 MHR43KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/65/31/36/item/1000072363165_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_참여형|상품_좋아요|아이패드 프로 12.9형 5세대 M1칩 셀룰러 128GB 스페이스그레이 MHR43KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000072363165&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 프로 12.9형 5세대 M1칩 셀룰러
                                          128GB 스페이스그레이 MHR43KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                1,579,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              1,515,840
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>4%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="cmitem_grid_item">
                            <div className="mndtl_recmore_unit">
                              <a
                                href="/disp/category.ssg?ctgId=6000209205&amp;_mpop=new"
                                className="mndtl_recmore_link"
                                target="_parent"
                              >
                                <div className="mndtl_recmore_thmb">
                                  <div className="mndtl_recmore_inner">
                                    <span className="mndtl_recmore_item">
                                      <img
                                        className="ssg_lazy"
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="https://sitem.ssgcdn.com/86/05/77/item/1000335770586_i1_160.jpg"
                                        alt=""
                                        data-ll-status="observed"
                                      />
                                    </span>
                                    <span className="mndtl_recmore_item">
                                      <img
                                        className="ssg_lazy"
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="https://sitem.ssgcdn.com/15/60/77/item/1000335776015_i1_160.jpg"
                                        alt=""
                                        data-ll-status="observed"
                                      />
                                    </span>
                                    <span className="mndtl_recmore_item">
                                      <img
                                        className="ssg_lazy"
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="https://sitem.ssgcdn.com/56/17/76/item/1000335761756_i1_160.jpg"
                                        alt=""
                                        data-ll-status="observed"
                                      />
                                    </span>
                                    <span className="mndtl_recmore_item">
                                      <img
                                        className="ssg_lazy"
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="https://sitem.ssgcdn.com/46/54/76/item/1000335765446_i1_160.jpg"
                                        alt=""
                                        data-ll-status="observed"
                                      />
                                    </span>
                                  </div>
                                  <span className="mndtl_recmore_icon" />
                                </div>
                                <div className="mndtl_recmore_desc">
                                  <span className="mndtl_recmore_tx">
                                    다른 고객들이 이 상품과 함께 많이 보는
                                    상품입니다
                                  </span>
                                </div>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div> */}

                    {/* 브랜드 인기상품 */}
                    {/* <div
                      className="mndtl_sec_bx"
                      data-observable-unit="true"
                      data-react-tarea-cd="00006_000000017"
                    >
                      <div className="mndtl_rectit_tytext">
                        <a
                          href="/mall/disp/brandMain.ssg?brandId=2000000375&amp;ctgId=6000209194&amp;_mpop=new"
                          className="mndtl_rectit_text"
                          data-react-unit-type="text"
                          data-react-unit-text='[{"type":"tarea_addt_val","value":"타이틀"}]'
                          target="_parent"
                        >
                          <span
                            className="mndtl_rectit_text_tx clickable"
                            data-react-tarea-dtl-cd="t00060"
                          >
                            브랜드 인기상품
                          </span>
                          <span
                            className="mndtl_rectit_arrow"
                            data-react-unit-type="text"
                            data-react-unit-text='[{"type":"tarea_addt_val","value":"더보기"}]'
                          >
                            <span className="blind">더보러가기</span>
                            <i
                              className="mndtl_ic_arr clickable"
                              data-react-tarea-dtl-cd="t00060"
                            />
                          </span>
                        </a>
                        <div className="mndtl_rectit_text_subtx">
                          많이 구매한 APPLE(애플) 상품
                        </div>
                      </div>
                      <div className="cmitem_grid">
                        <ul className="cmitem_grid_lst mnsditem_ty_thmb">
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000435491054"
                            data-react-unit-inx="0"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000435491054"
                              data-react-unit-inx="0"
                              data-react-mdl-info=""
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000435491054"
                                data-adidx="1"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000435491054&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea="상품상세|추천영역_브랜드|상품_클릭|맥북프로 13 M2 (CPU8 GPU10) RAM 24GB / SSD 512GB 실버 Z16T0001R_1000435491054"
                                    data-info="1000435491054"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/54/10/49/item/1000435491054_i1_187.jpg"
                                        alt="맥북프로 13 M2 (CPU8 GPU10) RAM 24GB / SSD 512GB 실버 Z16T0001R"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000435491054&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea="상품상세|추천영역_브랜드|상품_이미지버튼|맥북프로 13 M2 (CPU8 GPU10) RAM 24GB / SSD 512GB 실버 Z16T0001R_1000435491054$"
                                      data-info="1000435491054"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000435491054"
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
                                        value="맥북프로 13 M2 (CPU8 GPU10) RAM 24GB / SSD 512GB 실버 Z16T0001R"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/54/10/49/item/1000435491054_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_브랜드|상품_좋아요|맥북프로 13 M2 (CPU8 GPU10) RAM 24GB / SSD 512GB 실버 Z16T0001R_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000435491054&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          맥북프로 13 M2 (CPU8 GPU10) RAM 24GB /
                                          SSD 512GB 실버 Z16T0001R
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                2,600,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              2,444,000
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>6%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000435490738"
                            data-react-unit-inx="1"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000435490738"
                              data-react-unit-inx="1"
                              data-react-mdl-info=""
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000435490738"
                                data-adidx="2"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000435490738&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea="상품상세|추천영역_브랜드|상품_클릭|맥북프로 13 M2 (CPU8 GPU10) RAM 24GB / SSD 512GB 스페이스그레이 Z16R0001R_1000435490738"
                                    data-info="1000435490738"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/38/07/49/item/1000435490738_i1_187.jpg"
                                        alt="맥북프로 13 M2 (CPU8 GPU10) RAM 24GB / SSD 512GB 스페이스그레이 Z16R0001R"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000435490738&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea="상품상세|추천영역_브랜드|상품_이미지버튼|맥북프로 13 M2 (CPU8 GPU10) RAM 24GB / SSD 512GB 스페이스그레이 Z16R0001R_1000435490738$"
                                      data-info="1000435490738"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000435490738"
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
                                        value="맥북프로 13 M2 (CPU8 GPU10) RAM 24GB / SSD 512GB 스페이스그레이 Z16R0001R"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/38/07/49/item/1000435490738_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_브랜드|상품_좋아요|맥북프로 13 M2 (CPU8 GPU10) RAM 24GB / SSD 512GB 스페이스그레이 Z16R0001R_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000435490738&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          맥북프로 13 M2 (CPU8 GPU10) RAM 24GB /
                                          SSD 512GB 스페이스그레이 Z16R0001R
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                2,600,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              2,444,000
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>6%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000264059561"
                            data-react-unit-inx="2"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000264059561"
                              data-react-unit-inx="2"
                              data-react-mdl-info=""
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000264059561"
                                data-adidx="3"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000264059561&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea="상품상세|추천영역_브랜드|상품_클릭|아이패드 9세대 WI-FI 64GB 스페이스그레이  MK2K3KH/A_1000264059561"
                                    data-info="1000264059561"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/61/95/05/item/1000264059561_i1_187.jpg"
                                        alt="아이패드 9세대 WI-FI 64GB 스페이스그레이  MK2K3KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000264059561&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea="상품상세|추천영역_브랜드|상품_이미지버튼|아이패드 9세대 WI-FI 64GB 스페이스그레이  MK2K3KH/A_1000264059561$"
                                      data-info="1000264059561"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000264059561"
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
                                        value="아이패드 9세대 WI-FI 64GB 스페이스그레이  MK2K3KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/61/95/05/item/1000264059561_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_브랜드|상품_좋아요|아이패드 9세대 WI-FI 64GB 스페이스그레이  MK2K3KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000264059561&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 9세대 WI-FI 64GB
                                          스페이스그레이 MK2K3KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                449,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              431,040
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>4%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000032714216"
                            data-react-unit-inx="3"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000032714216"
                              data-react-unit-inx="3"
                              data-react-mdl-info=""
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper">
                                <div className="mnsditem_helper_el mnsditem_bdg ty_always">
                                  사은품
                                </div>
                              </div>
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000032714216"
                                data-adidx="4"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000032714216&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea="상품상세|추천영역_브랜드|상품_클릭|애플 펜슬 Pencil 2세대 MU8F2KH/A_1000032714216"
                                    data-info="1000032714216"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/16/42/71/item/1000032714216_i1_187.jpg"
                                        alt="애플 펜슬 Pencil 2세대 MU8F2KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000032714216&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea="상품상세|추천영역_브랜드|상품_이미지버튼|애플 펜슬 Pencil 2세대 MU8F2KH/A_1000032714216$"
                                      data-info="1000032714216"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000032714216"
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
                                        value="애플 펜슬 Pencil 2세대 MU8F2KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/16/42/71/item/1000032714216_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_브랜드|상품_좋아요|애플 펜슬 Pencil 2세대 MU8F2KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000032714216&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          애플 펜슬 Pencil 2세대 MU8F2KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                165,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              155,050
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>6%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000056317764"
                            data-react-unit-inx="4"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000056317764"
                              data-react-unit-inx="4"
                              data-react-mdl-info=""
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000056317764"
                                data-adidx="5"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000056317764&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea="상품상세|추천영역_브랜드|상품_클릭|맥북에어 M1칩 13형 512GB Space Gray - MGN73KH/A_1000056317764"
                                    data-info="1000056317764"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/64/77/31/item/1000056317764_i1_187.jpg"
                                        alt="맥북에어 M1칩 13형 512GB Space Gray - MGN73KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000056317764&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea="상품상세|추천영역_브랜드|상품_이미지버튼|맥북에어 M1칩 13형 512GB Space Gray - MGN73KH/A_1000056317764$"
                                      data-info="1000056317764"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000056317764"
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
                                        value="맥북에어 M1칩 13형 512GB Space Gray - MGN73KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/64/77/31/item/1000056317764_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_브랜드|상품_좋아요|맥북에어 M1칩 13형 512GB Space Gray - MGN73KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000056317764&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          맥북에어 M1칩 13형 512GB Space Gray -
                                          MGN73KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                1,630,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              1,475,900
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>9%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000411025016"
                            data-react-unit-inx="5"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000411025016"
                              data-react-unit-inx="5"
                              data-react-mdl-info=""
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000411025016"
                                data-adidx="6"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000411025016&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea="상품상세|추천영역_브랜드|상품_클릭|(8/5 발송) 맥북에어 13 M2 (CPU8 GPU8) RAM 8GB, SSD 256GB 스페이스그레이 MLXW3KH/A_1000411025016"
                                    data-info="1000411025016"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/16/50/02/item/1000411025016_i1_187.jpg"
                                        alt="(8/5 발송) 맥북에어 13 M2 (CPU8 GPU8) RAM 8GB, SSD 256GB 스페이스그레이 MLXW3KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000411025016&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea="상품상세|추천영역_브랜드|상품_이미지버튼|(8/5 발송) 맥북에어 13 M2 (CPU8 GPU8) RAM 8GB, SSD 256GB 스페이스그레이 MLXW3KH/A_1000411025016$"
                                      data-info="1000411025016"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000411025016"
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
                                        value="(8/5 발송) 맥북에어 13 M2 (CPU8 GPU8) RAM 8GB, SSD 256GB 스페이스그레이 MLXW3KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/16/50/02/item/1000411025016_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_브랜드|상품_좋아요|(8/5 발송) 맥북에어 13 M2 (CPU8 GPU8) RAM 8GB, SSD 256GB 스페이스그레이 MLXW3KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000411025016&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          (8/5 발송) 맥북에어 13 M2 (CPU8 GPU8)
                                          RAM 8GB, SSD 256GB 스페이스그레이
                                          MLXW3KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                1,690,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              1,605,500
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>5%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000335771934"
                            data-react-unit-inx="6"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000335771934"
                              data-react-unit-inx="6"
                              data-react-mdl-info=""
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000335771934"
                                data-adidx="7"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000335771934&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea="상품상세|추천영역_브랜드|상품_클릭|아이패드 에어 5세대 WiFi 64GB 스타라이트 MM9F3KH/A_1000335771934"
                                    data-info="1000335771934"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/34/19/77/item/1000335771934_i1_187.jpg"
                                        alt="아이패드 에어 5세대 WiFi 64GB 스타라이트 MM9F3KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000335771934"
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
                                        value="아이패드 에어 5세대 WiFi 64GB 스타라이트 MM9F3KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/34/19/77/item/1000335771934_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_브랜드|상품_좋아요|아이패드 에어 5세대 WiFi 64GB 스타라이트 MM9F3KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000335771934&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 에어 5세대 WiFi 64GB
                                          스타라이트 MM9F3KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                779,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              747,840
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>4%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000270306624"
                            data-react-unit-inx="7"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000270306624"
                              data-react-unit-inx="7"
                              data-react-mdl-info=""
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000270306624"
                                data-adidx="8"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000270306624&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea="상품상세|추천영역_브랜드|상품_클릭|맥북프로 16 M1 Pro (CPU 10코어 GPU 16코어), RAM 16GB, SSD 1TB 스페이스그레이 MK193KH/A_1000270306624"
                                    data-info="1000270306624"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/24/66/30/item/1000270306624_i1_187.jpg"
                                        alt="맥북프로 16 M1 Pro (CPU 10코어 GPU 16코어), RAM 16GB, SSD 1TB 스페이스그레이 MK193KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000270306624&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea="상품상세|추천영역_브랜드|상품_이미지버튼|맥북프로 16 M1 Pro (CPU 10코어 GPU 16코어), RAM 16GB, SSD 1TB 스페이스그레이 MK193KH/A_1000270306624$"
                                      data-info="1000270306624"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000270306624"
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
                                        value="맥북프로 16 M1 Pro (CPU 10코어 GPU 16코어), RAM 16GB, SSD 1TB 스페이스그레이 MK193KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/24/66/30/item/1000270306624_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_브랜드|상품_좋아요|맥북프로 16 M1 Pro (CPU 10코어 GPU 16코어), RAM 16GB, SSD 1TB 스페이스그레이 MK193KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000270306624&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          맥북프로 16 M1 Pro (CPU 10코어 GPU
                                          16코어), RAM 16GB, SSD 1TB
                                          스페이스그레이 MK193KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                3,630,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              3,315,900
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>8%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000270288286"
                            data-react-unit-inx="8"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000270288286"
                              data-react-unit-inx="8"
                              data-react-mdl-info=""
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000270288286"
                                data-adidx="9"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000270288286&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea="상품상세|추천영역_브랜드|상품_클릭|맥북프로 14 M1 Pro (CPU 8코어 GPU 14코어), RAM 16GB, SSD 512GB 스페이스그레이 MKGP3KH/A_1000270288286"
                                    data-info="1000270288286"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/86/82/28/item/1000270288286_i1_187.jpg"
                                        alt="맥북프로 14 M1 Pro (CPU 8코어 GPU 14코어), RAM 16GB, SSD 512GB 스페이스그레이 MKGP3KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000270288286&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea="상품상세|추천영역_브랜드|상품_이미지버튼|맥북프로 14 M1 Pro (CPU 8코어 GPU 14코어), RAM 16GB, SSD 512GB 스페이스그레이 MKGP3KH/A_1000270288286$"
                                      data-info="1000270288286"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000270288286"
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
                                        value="맥북프로 14 M1 Pro (CPU 8코어 GPU 14코어), RAM 16GB, SSD 512GB 스페이스그레이 MKGP3KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/86/82/28/item/1000270288286_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_브랜드|상품_좋아요|맥북프로 14 M1 Pro (CPU 8코어 GPU 14코어), RAM 16GB, SSD 512GB 스페이스그레이 MKGP3KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000270288286&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          맥북프로 14 M1 Pro (CPU 8코어 GPU
                                          14코어), RAM 16GB, SSD 512GB
                                          스페이스그레이 MKGP3KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                2,690,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              2,491,700
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>7%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000264061548"
                            data-react-unit-inx="9"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000264061548"
                              data-react-unit-inx="9"
                              data-react-mdl-info=""
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000264061548"
                                data-adidx="10"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000264061548&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea="상품상세|추천영역_브랜드|상품_클릭|아이패드 9세대 WI-FI 64GB 실버 MK2L3KH/A_1000264061548"
                                    data-info="1000264061548"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/48/15/06/item/1000264061548_i1_187.jpg"
                                        alt="아이패드 9세대 WI-FI 64GB 실버 MK2L3KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000264061548&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea="상품상세|추천영역_브랜드|상품_이미지버튼|아이패드 9세대 WI-FI 64GB 실버 MK2L3KH/A_1000264061548$"
                                      data-info="1000264061548"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000264061548"
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
                                        value="아이패드 9세대 WI-FI 64GB 실버 MK2L3KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/48/15/06/item/1000264061548_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_브랜드|상품_좋아요|아이패드 9세대 WI-FI 64GB 실버 MK2L3KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000264061548&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 9세대 WI-FI 64GB 실버
                                          MK2L3KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                449,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              431,040
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>4%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000335773414"
                            data-react-unit-inx="10"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000335773414"
                              data-react-unit-inx="10"
                              data-react-mdl-info=""
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000335773414"
                                data-adidx="11"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000335773414&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea="상품상세|추천영역_브랜드|상품_클릭|아이패드 에어 5세대 WiFi 256GB 스페이스그레이 MM9L3KH/A_1000335773414"
                                    data-info="1000335773414"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/14/34/77/item/1000335773414_i1_187.jpg"
                                        alt="아이패드 에어 5세대 WiFi 256GB 스페이스그레이 MM9L3KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000335773414"
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
                                        value="아이패드 에어 5세대 WiFi 256GB 스페이스그레이 MM9L3KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/14/34/77/item/1000335773414_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_브랜드|상품_좋아요|아이패드 에어 5세대 WiFi 256GB 스페이스그레이 MM9L3KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000335773414&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 에어 5세대 WiFi 256GB
                                          스페이스그레이 MM9L3KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                979,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              939,840
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>4%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="cmitem_grid_item">
                            <div className="mndtl_recmore_unit">
                              <a
                                href="/mall/disp/brandMain.ssg?brandId=2000000375&amp;ctgId=6000209194&amp;_mpop=new"
                                className="mndtl_recmore_link"
                                target="_parent"
                              >
                                <div className="mndtl_recmore_thmb">
                                  <div className="mndtl_recmore_inner">
                                    <span className="mndtl_recmore_item">
                                      <img
                                        className="ssg_lazy"
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="https://sitem.ssgcdn.com/18/72/31/item/1000056317218_i1_160.jpg"
                                        alt=""
                                        data-ll-status="observed"
                                      />
                                    </span>
                                    <span className="mndtl_recmore_item">
                                      <img
                                        className="ssg_lazy"
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="https://sitem.ssgcdn.com/10/06/34/item/1000072340610_i1_160.jpg"
                                        alt=""
                                        data-ll-status="observed"
                                      />
                                    </span>
                                    <span className="mndtl_recmore_item">
                                      <img
                                        className="ssg_lazy"
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="https://sitem.ssgcdn.com/46/75/31/item/1000056317546_i1_160.jpg"
                                        alt=""
                                        data-ll-status="observed"
                                      />
                                    </span>
                                    <span className="mndtl_recmore_item">
                                      <img
                                        className="ssg_lazy"
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="https://sitem.ssgcdn.com/96/21/06/item/1000264062196_i1_160.jpg"
                                        alt=""
                                        data-ll-status="observed"
                                      />
                                    </span>
                                  </div>
                                  <span className="mndtl_recmore_icon" />
                                </div>
                                <div className="mndtl_recmore_desc">
                                  <span className="mndtl_recmore_tx">
                                    이번주 많이 구매한 APPLE(애플) 상품입니다
                                  </span>
                                </div>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* 이런 상품은 어떠세요? */}
                <div className="mndtl_sec_cont" id="_endlessgoods">
                  {/* <div className="mndtl_recommend">
                    <div
                      className="mndtl_sec_bx"
                      data-observable-unit="true"
                      data-react-tarea-cd="00006_000000022"
                    >
                      <div className="mndtl_rectit_tytext">
                        <a href="/" className="mndtl_rectit_text">
                          <span className="mndtl_rectit_text_tx">
                            이런 상품은 어떠세요?
                          </span>
                        </a>
                        <div className="mndtl_rectit_text_subtx">
                          지금 본 상품과 연관된 상품입니다.
                        </div>
                      </div>

                      <div className="cmitem_grid" data-equal-height="true">
                        <ul
                          id="infinite-container"
                          className="cmitem_grid_lst mnsditem_ty_thmb"
                        >
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000044214737"
                            data-react-unit-inx="0"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000044214737"
                              data-react-unit-inx="0"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O001","base_item":"1000335775423","rn":"1","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000044214737"
                                data-adidx="1"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000044214737&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|갤럭시탭S6 라이트 저반사 지문방지 액정보호필름_1000044214737_{"inflo_site_no":"6005","basc_info":"COIV1O001","base_item":"1000335775423","rn":"1","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000044214737"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/37/47/21/item/1000044214737_i1_187.jpg"
                                        alt="갤럭시탭S6 라이트 저반사 지문방지 액정보호필름"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000044214737"
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
                                        value="갤럭시탭S6 라이트 저반사 지문방지 액정보호필름"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/37/47/21/item/1000044214737_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|갤럭시탭S6 라이트 저반사 지문방지 액정보호필름_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000044214737&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          Healing Shield
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          갤럭시탭S6 라이트 저반사 지문방지
                                          액정보호필름
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                23,800
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              21,420
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>10%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000354708539"
                            data-react-unit-inx="1"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000354708539"
                              data-react-unit-inx="1"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O003","base_item":"1000335775423","rn":"2","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000354708539"
                                data-adidx="2"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000354708539&amp;siteNo=6001&amp;salestrNo=2077&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|(픽업전용)iPad Air(5세대) 256GB 블루 셀룰러(MM733KH/A)_1000354708539_{"inflo_site_no":"6005","basc_info":"SUIV1O003","base_item":"1000335775423","rn":"2","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000354708539"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/39/85/70/item/1000354708539_i1_187.jpg"
                                        alt="(픽업전용)iPad Air(5세대) 256GB 블루 셀룰러(MM733KH/A)"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6001"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000354708539"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo2"
                                        value="2077"
                                      />
                                      <input
                                        type="hidden"
                                        name="uitemId"
                                        value="00000"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiTitle"
                                        value="(픽업전용)iPad Air(5세대) 256GB 블루 셀룰러(MM733KH/A)"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/39/85/70/item/1000354708539_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|(픽업전용)iPad Air(5세대) 256GB 블루 셀룰러(MM733KH/A)_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000354708539&amp;siteNo=6001&amp;salestrNo=2077&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="em">이마트몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          (픽업전용)iPad Air(5세대) 256GB 블루
                                          셀룰러(MM733KH/A)
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                1,179,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              1,143,630
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>3%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn clickable"
                                          // onClick="javascript:SsgPickup.mobile.getStoreNm(this, '1000354708539', '6001')"
                                          data-react-tarea='상품상세|추천영역_추가추천|상품_매장픽업|(픽업전용)iPad Air(5세대) 256GB 블루 셀룰러(MM733KH/A)_1000354708539_{"inflo_site_no":"6005","basc_info":"SUIV1O003","base_item":"1000335775423","rn":"2","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                          data-react-tarea-dtl-cd="t00005"
                                        >
                                          매장픽업 가능점포
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="매장픽업 점포"
                                          // onClick="javascript:SsgPickup.mobile.removeStrNmNew(this);"
                                        />
                                      </div>
                                      <span className="cmbadge_mmbrs ty_border ty_m">
                                        <i className="badge badge_mmbrs_brown ty_xs">
                                          <span className="blind">
                                            스마일클럽
                                          </span>
                                        </i>
                                        <span className="cm_smileclub_text">
                                          최대 1만원 적립
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000035343493"
                            data-react-unit-inx="2"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000035343493"
                              data-react-unit-inx="2"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O002","base_item":"1000335775423","rn":"3","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000035343493"
                                data-adidx="3"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000035343493&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|아이패드 5 6세대 9.7인치 헤닝 쉘 케이스 하드 스마트커버_1000035343493_{"inflo_site_no":"6005","basc_info":"COIV1O002","base_item":"1000335775423","rn":"3","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000035343493"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/93/34/34/item/1000035343493_i1_187.jpg"
                                        alt="아이패드 5 6세대 9.7인치 헤닝 쉘 케이스 하드 스마트커버"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000035343493&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|아이패드 5 6세대 9.7인치 헤닝 쉘 케이스 하드 스마트커버_1000035343493$_{"inflo_site_no":"6005","basc_info":"COIV1O002","base_item":"1000335775423","rn":"3","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000035343493"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000035343493"
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
                                        value="아이패드 5 6세대 9.7인치 헤닝 쉘 케이스 하드 스마트커버"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/93/34/34/item/1000035343493_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|아이패드 5 6세대 9.7인치 헤닝 쉘 케이스 하드 스마트커버_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000035343493&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          오펜트
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 5 6세대 9.7인치 헤닝 쉘
                                          케이스 하드 스마트커버
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              18,800
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000354708534"
                            data-react-unit-inx="3"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000354708534"
                              data-react-unit-inx="3"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O004","base_item":"1000335775423","rn":"4","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000354708534"
                                data-adidx="4"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000354708534&amp;siteNo=6001&amp;salestrNo=2068&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|(픽업전용)iPad Air(5세대) 64GB 스타라이트 셀룰러(MM6V3KH/A)_1000354708534_{"inflo_site_no":"6005","basc_info":"SUIV1O004","base_item":"1000335775423","rn":"4","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000354708534"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/34/85/70/item/1000354708534_i1_187.jpg"
                                        alt="(픽업전용)iPad Air(5세대) 64GB 스타라이트 셀룰러(MM6V3KH/A)"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000354708534&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|(픽업전용)iPad Air(5세대) 64GB 스타라이트 셀룰러(MM6V3KH/A)_1000354708534$_{"inflo_site_no":"6005","basc_info":"SUIV1O004","base_item":"1000335775423","rn":"4","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000354708534"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6001"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000354708534"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo2"
                                        value="2068"
                                      />
                                      <input
                                        type="hidden"
                                        name="uitemId"
                                        value="00000"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiTitle"
                                        value="(픽업전용)iPad Air(5세대) 64GB 스타라이트 셀룰러(MM6V3KH/A)"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/34/85/70/item/1000354708534_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|(픽업전용)iPad Air(5세대) 64GB 스타라이트 셀룰러(MM6V3KH/A)_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000354708534&amp;siteNo=6001&amp;salestrNo=2068&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="em">이마트몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          (픽업전용)iPad Air(5세대) 64GB
                                          스타라이트 셀룰러(MM6V3KH/A)
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                979,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              949,630
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>3%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn clickable"
                                          // onClick="javascript:SsgPickup.mobile.getStoreNm(this, '1000354708534', '6001')"
                                          data-react-tarea='상품상세|추천영역_추가추천|상품_매장픽업|(픽업전용)iPad Air(5세대) 64GB 스타라이트 셀룰러(MM6V3KH/A)_1000354708534_{"inflo_site_no":"6005","basc_info":"SUIV1O004","base_item":"1000335775423","rn":"4","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                          data-react-tarea-dtl-cd="t00005"
                                        >
                                          매장픽업 가능점포
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="매장픽업 점포"
                                          // onClick="javascript:SsgPickup.mobile.removeStrNmNew(this);"
                                        />
                                      </div>
                                      <span className="cmbadge_mmbrs ty_border ty_m">
                                        <i className="badge badge_mmbrs_brown ty_xs">
                                          <span className="blind">
                                            스마일클럽
                                          </span>
                                        </i>
                                        <span className="cm_smileclub_text">
                                          최대 1만원 적립
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000267237633"
                            data-react-unit-inx="4"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000267237633"
                              data-react-unit-inx="4"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O003","base_item":"1000335775423","rn":"5","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000267237633"
                                data-adidx="5"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m.ssg.com/item/itemView.ssg?itemId=1000267237633&amp;siteNo=7014&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|아이패드 클리어펜슬 5/6세대 9.7형 라벤더_1000267237633_{"inflo_site_no":"6005","basc_info":"COIV1O003","base_item":"1000335775423","rn":"5","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000267237633"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/33/76/23/item/1000267237633_i1_187.jpg"
                                        alt="아이패드 클리어펜슬 5/6세대 9.7형 라벤더"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000267237633&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|아이패드 클리어펜슬 5/6세대 9.7형 라벤더_1000267237633$_{"inflo_site_no":"6005","basc_info":"COIV1O003","base_item":"1000335775423","rn":"5","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000267237633"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="7014"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000267237633"
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
                                        value="아이패드 클리어펜슬 5/6세대 9.7형 라벤더"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/33/76/23/item/1000267237633_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|아이패드 클리어펜슬 5/6세대 9.7형 라벤더_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m.ssg.com/item/itemView.ssg?itemId=1000267237633&amp;siteNo=7014&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="mnsditem_goods_brand">
                                          제이로드
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 클리어펜슬 5/6세대 9.7형
                                          라벤더
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              15,900
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn"
                                        >
                                          오늘출발
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="오늘출발 시간"
                                        >
                                          15시까지 주문 시 오늘 배송
                                          출발(주말,법정 공휴일 및 업체 휴무일
                                          제외)
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000354708524"
                            data-react-unit-inx="5"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000354708524"
                              data-react-unit-inx="5"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O005","base_item":"1000335775423","rn":"6","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000354708524"
                                data-adidx="6"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000354708524&amp;siteNo=6001&amp;salestrNo=2058&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|(픽업전용)iPad Air(5세대) 256GB 블루 와이파이(MM9N3KH/A)_1000354708524_{"inflo_site_no":"6005","basc_info":"SUIV1O005","base_item":"1000335775423","rn":"6","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000354708524"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/24/85/70/item/1000354708524_i1_187.jpg"
                                        alt="(픽업전용)iPad Air(5세대) 256GB 블루 와이파이(MM9N3KH/A)"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6001"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000354708524"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo2"
                                        value="2058"
                                      />
                                      <input
                                        type="hidden"
                                        name="uitemId"
                                        value="00000"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiTitle"
                                        value="(픽업전용)iPad Air(5세대) 256GB 블루 와이파이(MM9N3KH/A)"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/24/85/70/item/1000354708524_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|(픽업전용)iPad Air(5세대) 256GB 블루 와이파이(MM9N3KH/A)_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000354708524&amp;siteNo=6001&amp;salestrNo=2058&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="em">이마트몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          (픽업전용)iPad Air(5세대) 256GB 블루
                                          와이파이(MM9N3KH/A)
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                979,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              949,630
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>3%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn clickable"
                                          // onClick="javascript:SsgPickup.mobile.getStoreNm(this, '1000354708524', '6001')"
                                          data-react-tarea='상품상세|추천영역_추가추천|상품_매장픽업|(픽업전용)iPad Air(5세대) 256GB 블루 와이파이(MM9N3KH/A)_1000354708524_{"inflo_site_no":"6005","basc_info":"SUIV1O005","base_item":"1000335775423","rn":"6","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                          data-react-tarea-dtl-cd="t00005"
                                        >
                                          매장픽업 가능점포
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="매장픽업 점포"
                                          // onClick="javascript:SsgPickup.mobile.removeStrNmNew(this);"
                                        />
                                      </div>
                                      <span className="cmbadge_mmbrs ty_border ty_m">
                                        <i className="badge badge_mmbrs_brown ty_xs">
                                          <span className="blind">
                                            스마일클럽
                                          </span>
                                        </i>
                                        <span className="cm_smileclub_text">
                                          최대 1만원 적립
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000054057106"
                            data-react-unit-inx="6"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000054057106"
                              data-react-unit-inx="6"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O004","base_item":"1000335775423","rn":"7","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000054057106"
                                data-adidx="7"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000054057106&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|아이패드 에어5 에어4 리바운드 케이스_1000054057106_{"inflo_site_no":"6005","basc_info":"COIV1O004","base_item":"1000335775423","rn":"7","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000054057106"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/06/71/05/item/1000054057106_i1_187.jpg"
                                        alt="아이패드 에어5 에어4 리바운드 케이스"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000054057106"
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
                                        value="아이패드 에어5 에어4 리바운드 케이스"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/06/71/05/item/1000054057106_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|아이패드 에어5 에어4 리바운드 케이스_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000054057106&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          ESR
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 에어5 에어4 리바운드 케이스
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              23,900
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000374153538"
                            data-react-unit-inx="7"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000374153538"
                              data-react-unit-inx="7"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O010","base_item":"1000335775423","rn":"8","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000374153538"
                                data-adidx="8"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000374153538&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|APPLE 아이패드 에어 5세대 Wi-Fi 256GB (정품) 스타라이트 (MM9P3KH/A)_1000374153538_{"inflo_site_no":"6005","basc_info":"SUIV1O010","base_item":"1000335775423","rn":"8","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000374153538"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/38/35/15/item/1000374153538_i1_187.jpg"
                                        alt="APPLE 아이패드 에어 5세대 Wi-Fi 256GB (정품) 스타라이트 (MM9P3KH/A)"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000374153538&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|APPLE 아이패드 에어 5세대 Wi-Fi 256GB (정품) 스타라이트 (MM9P3KH/A)_1000374153538$_{"inflo_site_no":"6005","basc_info":"SUIV1O010","base_item":"1000335775423","rn":"8","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000374153538"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000374153538"
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
                                        value="APPLE 아이패드 에어 5세대 Wi-Fi 256GB (정품) 스타라이트 (MM9P3KH/A)"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/38/35/15/item/1000374153538_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|APPLE 아이패드 에어 5세대 Wi-Fi 256GB (정품) 스타라이트 (MM9P3KH/A)_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000374153538&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          APPLE 아이패드 에어 5세대 Wi-Fi 256GB
                                          (정품) 스타라이트 (MM9P3KH/A)
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              1,080,000
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000272599455"
                            data-react-unit-inx="8"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000272599455"
                              data-react-unit-inx="8"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O005","base_item":"1000335775423","rn":"9","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000272599455"
                                data-adidx="9"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m.ssg.com/item/itemView.ssg?itemId=1000272599455&amp;siteNo=7014&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|아이패드 미니6세대 스마트 폴리오 마그네틱 케이스_1000272599455_{"inflo_site_no":"6005","basc_info":"COIV1O005","base_item":"1000335775423","rn":"9","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000272599455"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/55/94/59/item/1000272599455_i1_187.jpg"
                                        alt="아이패드 미니6세대 스마트 폴리오 마그네틱 케이스"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000272599455&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|아이패드 미니6세대 스마트 폴리오 마그네틱 케이스_1000272599455$_{"inflo_site_no":"6005","basc_info":"COIV1O005","base_item":"1000335775423","rn":"9","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000272599455"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="7014"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000272599455"
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
                                        value="아이패드 미니6세대 스마트 폴리오 마그네틱 케이스"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/55/94/59/item/1000272599455_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|아이패드 미니6세대 스마트 폴리오 마그네틱 케이스_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m.ssg.com/item/itemView.ssg?itemId=1000272599455&amp;siteNo=7014&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="mnsditem_goods_brand">
                                          투에이비
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 미니6세대 스마트 폴리오
                                          마그네틱 케이스
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              15,900
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn"
                                        >
                                          오늘출발
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="오늘출발 시간"
                                        >
                                          17시까지 주문 시 오늘 배송
                                          출발(주말,법정 공휴일 및 업체 휴무일
                                          제외)
                                        </div>
                                      </div>
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000354708533"
                            data-react-unit-inx="9"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000354708533"
                              data-react-unit-inx="9"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O012","base_item":"1000335775423","rn":"10","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000354708533"
                                data-adidx="10"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000354708533&amp;siteNo=6001&amp;salestrNo=2034&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|(픽업전용)iPad Air(5세대) 64GB 블루 셀룰러(MM6U3KH/A)_1000354708533_{"inflo_site_no":"6005","basc_info":"SUIV1O012","base_item":"1000335775423","rn":"10","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000354708533"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/33/85/70/item/1000354708533_i1_187.jpg"
                                        alt="(픽업전용)iPad Air(5세대) 64GB 블루 셀룰러(MM6U3KH/A)"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000354708533&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|(픽업전용)iPad Air(5세대) 64GB 블루 셀룰러(MM6U3KH/A)_1000354708533$_{"inflo_site_no":"6005","basc_info":"SUIV1O012","base_item":"1000335775423","rn":"10","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000354708533"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6001"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000354708533"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo2"
                                        value="2034"
                                      />
                                      <input
                                        type="hidden"
                                        name="uitemId"
                                        value="00000"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiTitle"
                                        value="(픽업전용)iPad Air(5세대) 64GB 블루 셀룰러(MM6U3KH/A)"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/33/85/70/item/1000354708533_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|(픽업전용)iPad Air(5세대) 64GB 블루 셀룰러(MM6U3KH/A)_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000354708533&amp;siteNo=6001&amp;salestrNo=2034&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="em">이마트몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          (픽업전용)iPad Air(5세대) 64GB 블루
                                          셀룰러(MM6U3KH/A)
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                979,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              949,630
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>3%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn clickable"
                                          // onClick="javascript:SsgPickup.mobile.getStoreNm(this, '1000354708533', '6001')"
                                          data-react-tarea='상품상세|추천영역_추가추천|상품_매장픽업|(픽업전용)iPad Air(5세대) 64GB 블루 셀룰러(MM6U3KH/A)_1000354708533_{"inflo_site_no":"6005","basc_info":"SUIV1O012","base_item":"1000335775423","rn":"10","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                          data-react-tarea-dtl-cd="t00005"
                                        >
                                          매장픽업 가능점포
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="매장픽업 점포"
                                          // onClick="javascript:SsgPickup.mobile.removeStrNmNew(this);"
                                        />
                                      </div>
                                      <span className="cmbadge_mmbrs ty_border ty_m">
                                        <i className="badge badge_mmbrs_brown ty_xs">
                                          <span className="blind">
                                            스마일클럽
                                          </span>
                                        </i>
                                        <span className="cm_smileclub_text">
                                          최대 1만원 적립
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000379540804"
                            data-react-unit-inx="10"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000379540804"
                              data-react-unit-inx="10"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O006","base_item":"1000335775423","rn":"11","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper">
                                <div className="mnsditem_helper_el mnsditem_bdg ty_always">
                                  사은품
                                </div>
                              </div>
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000379540804"
                                data-adidx="11"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m.ssg.com/item/itemView.ssg?itemId=1000379540804&amp;siteNo=7014&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|1+1 아이패드에어5세대 포함 전기종 저반사 지문방지 종이질감 액정보호필름 국내생산 갓성비 종이느낌 극대화 종이질감필름_1000379540804_{"inflo_site_no":"6005","basc_info":"COIV1O006","base_item":"1000335775423","rn":"11","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000379540804"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/04/08/54/item/1000379540804_i1_187.jpg"
                                        alt="1+1 아이패드에어5세대 포함 전기종 저반사 지문방지 종이질감 액정보호필름 국내생산 갓성비 종이느낌 극대화 종이질감필름"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000379540804&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|1+1 아이패드에어5세대 포함 전기종 저반사 지문방지 종이질감 액정보호필름 국내생산 갓성비 종이느낌 극대화 종이질감필름_1000379540804$_{"inflo_site_no":"6005","basc_info":"COIV1O006","base_item":"1000335775423","rn":"11","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000379540804"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="7014"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000379540804"
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
                                        value="1+1 아이패드에어5세대 포함 전기종 저반사 지문방지 종이질감 액정보호필름 국내생산 갓성비 종이느낌 극대화 종이질감필름"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/04/08/54/item/1000379540804_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|1+1 아이패드에어5세대 포함 전기종 저반사 지문방지 종이질감 액정보호필름 국내생산 갓성비 종이느낌 극대화 종이질감필름_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m.ssg.com/item/itemView.ssg?itemId=1000379540804&amp;siteNo=7014&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="mnsditem_goods_tit">
                                          1+1 아이패드에어5세대 포함 전기종
                                          저반사 지문방지 종이질감 액정보호필름
                                          국내생산 갓성비 종이느낌 극대화
                                          종이질감필름
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                16,900
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              12,900
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>23%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn"
                                        >
                                          오늘출발
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="오늘출발 시간"
                                        >
                                          17시까지 주문 시 오늘 배송
                                          출발(주말,법정 공휴일 및 업체 휴무일
                                          제외)
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000354708535"
                            data-react-unit-inx="11"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000354708535"
                              data-react-unit-inx="11"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O016","base_item":"1000335775423","rn":"12","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000354708535"
                                data-adidx="12"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000354708535&amp;siteNo=6001&amp;salestrNo=2150&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|(픽업전용)iPad Air(5세대) 256GB 스페이스 그레이 셀룰러(MM713KH/A)_1000354708535_{"inflo_site_no":"6005","basc_info":"SUIV1O016","base_item":"1000335775423","rn":"12","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000354708535"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/35/85/70/item/1000354708535_i1_187.jpg"
                                        alt="(픽업전용)iPad Air(5세대) 256GB 스페이스 그레이 셀룰러(MM713KH/A)"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6001"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000354708535"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo2"
                                        value="2150"
                                      />
                                      <input
                                        type="hidden"
                                        name="uitemId"
                                        value="00000"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiTitle"
                                        value="(픽업전용)iPad Air(5세대) 256GB 스페이스 그레이 셀룰러(MM713KH/A)"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/35/85/70/item/1000354708535_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|(픽업전용)iPad Air(5세대) 256GB 스페이스 그레이 셀룰러(MM713KH/A)_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000354708535&amp;siteNo=6001&amp;salestrNo=2150&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="em">이마트몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          (픽업전용)iPad Air(5세대) 256GB
                                          스페이스 그레이 셀룰러(MM713KH/A)
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                1,179,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              1,143,630
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>3%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn clickable"
                                          // onClick="javascript:SsgPickup.mobile.getStoreNm(this, '1000354708535', '6001')"
                                          data-react-tarea='상품상세|추천영역_추가추천|상품_매장픽업|(픽업전용)iPad Air(5세대) 256GB 스페이스 그레이 셀룰러(MM713KH/A)_1000354708535_{"inflo_site_no":"6005","basc_info":"SUIV1O016","base_item":"1000335775423","rn":"12","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                          data-react-tarea-dtl-cd="t00005"
                                        >
                                          매장픽업 가능점포
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="매장픽업 점포"
                                          // onClick="javascript:SsgPickup.mobile.removeStrNmNew(this);"
                                        />
                                      </div>
                                      <span className="cmbadge_mmbrs ty_border ty_m">
                                        <i className="badge badge_mmbrs_brown ty_xs">
                                          <span className="blind">
                                            스마일클럽
                                          </span>
                                        </i>
                                        <span className="cm_smileclub_text">
                                          최대 1만원 적립
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000272679471"
                            data-react-unit-inx="12"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000272679471"
                              data-react-unit-inx="12"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O007","base_item":"1000335775423","rn":"13","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000272679471"
                                data-adidx="13"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000272679471&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|오젬 아이패드9세대 10.2 액정 보호필름_1000272679471_{"inflo_site_no":"6005","basc_info":"COIV1O007","base_item":"1000335775423","rn":"13","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000272679471"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/71/94/67/item/1000272679471_i1_187.jpg"
                                        alt="오젬 아이패드9세대 10.2 액정 보호필름"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000272679471&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|오젬 아이패드9세대 10.2 액정 보호필름_1000272679471$_{"inflo_site_no":"6005","basc_info":"COIV1O007","base_item":"1000335775423","rn":"13","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000272679471"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000272679471"
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
                                        value="오젬 아이패드9세대 10.2 액정 보호필름"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/71/94/67/item/1000272679471_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|오젬 아이패드9세대 10.2 액정 보호필름_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000272679471&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          ozem
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          오젬 아이패드9세대 10.2 액정 보호필름
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">2,900</em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000070646495"
                            data-react-unit-inx="13"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000070646495"
                              data-react-unit-inx="13"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O028","base_item":"1000335775423","rn":"14","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000070646495"
                                data-adidx="14"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000070646495&amp;siteNo=6001&amp;salestrNo=2051&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|(픽업 전용) iPad Pro 12.9(5세대) 512GB 스페이스 그레이 와이파이(MHNK3KH/A)_1000070646495_{"inflo_site_no":"6005","basc_info":"SUIV1O028","base_item":"1000335775423","rn":"14","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000070646495"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/95/64/64/item/1000070646495_i1_187.jpg"
                                        alt="(픽업 전용) iPad Pro 12.9(5세대) 512GB 스페이스 그레이 와이파이(MHNK3KH/A)"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6001"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000070646495"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo2"
                                        value="2051"
                                      />
                                      <input
                                        type="hidden"
                                        name="uitemId"
                                        value="00000"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiTitle"
                                        value="(픽업 전용) iPad Pro 12.9(5세대) 512GB 스페이스 그레이 와이파이(MHNK3KH/A)"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/95/64/64/item/1000070646495_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|(픽업 전용) iPad Pro 12.9(5세대) 512GB 스페이스 그레이 와이파이(MHNK3KH/A)_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000070646495&amp;siteNo=6001&amp;salestrNo=2051&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="em">이마트몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          (픽업 전용) iPad Pro 12.9(5세대) 512GB
                                          스페이스 그레이 와이파이(MHNK3KH/A)
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                1,769,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              1,715,930
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>3%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn clickable"
                                          // onClick="javascript:SsgPickup.mobile.getStoreNm(this, '1000070646495', '6001')"
                                          data-react-tarea='상품상세|추천영역_추가추천|상품_매장픽업|(픽업 전용) iPad Pro 12.9(5세대) 512GB 스페이스 그레이 와이파이(MHNK3KH/A)_1000070646495_{"inflo_site_no":"6005","basc_info":"SUIV1O028","base_item":"1000335775423","rn":"14","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                          data-react-tarea-dtl-cd="t00005"
                                        >
                                          매장픽업 가능점포
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="매장픽업 점포"
                                          // onClick="javascript:SsgPickup.mobile.removeStrNmNew(this);"
                                        />
                                      </div>
                                      <span className="cmbadge_mmbrs ty_border ty_m">
                                        <i className="badge badge_mmbrs_brown ty_xs">
                                          <span className="blind">
                                            스마일클럽
                                          </span>
                                        </i>
                                        <span className="cm_smileclub_text">
                                          최대 1만원 적립
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000070652529"
                            data-react-unit-inx="14"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000070652529"
                              data-react-unit-inx="14"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O029","base_item":"1000335775423","rn":"16","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000070652529"
                                data-adidx="15"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000070652529&amp;siteNo=6001&amp;salestrNo=2031&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|(픽업 전용) iPad Pro 12.9(5세대) 128GB 실버 와이파이(MHNG3KH/A)_1000070652529_{"inflo_site_no":"6005","basc_info":"SUIV1O029","base_item":"1000335775423","rn":"16","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000070652529"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/29/25/65/item/1000070652529_i1_187.jpg"
                                        alt="(픽업 전용) iPad Pro 12.9(5세대) 128GB 실버 와이파이(MHNG3KH/A)"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000070652529&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|(픽업 전용) iPad Pro 12.9(5세대) 128GB 실버 와이파이(MHNG3KH/A)_1000070652529$_{"inflo_site_no":"6005","basc_info":"SUIV1O029","base_item":"1000335775423","rn":"16","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000070652529"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6001"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000070652529"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo2"
                                        value="2031"
                                      />
                                      <input
                                        type="hidden"
                                        name="uitemId"
                                        value="00000"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiTitle"
                                        value="(픽업 전용) iPad Pro 12.9(5세대) 128GB 실버 와이파이(MHNG3KH/A)"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/29/25/65/item/1000070652529_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|(픽업 전용) iPad Pro 12.9(5세대) 128GB 실버 와이파이(MHNG3KH/A)_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000070652529&amp;siteNo=6001&amp;salestrNo=2031&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="em">이마트몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          (픽업 전용) iPad Pro 12.9(5세대) 128GB
                                          실버 와이파이(MHNG3KH/A)
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                1,379,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              1,337,630
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>3%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn clickable"
                                          // onClick="javascript:SsgPickup.mobile.getStoreNm(this, '1000070652529', '6001')"
                                          data-react-tarea='상품상세|추천영역_추가추천|상품_매장픽업|(픽업 전용) iPad Pro 12.9(5세대) 128GB 실버 와이파이(MHNG3KH/A)_1000070652529_{"inflo_site_no":"6005","basc_info":"SUIV1O029","base_item":"1000335775423","rn":"16","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                          data-react-tarea-dtl-cd="t00005"
                                        >
                                          매장픽업 가능점포
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="매장픽업 점포"
                                          // onClick="javascript:SsgPickup.mobile.removeStrNmNew(this);"
                                        />
                                      </div>
                                      <span className="cmbadge_mmbrs ty_border ty_m">
                                        <i className="badge badge_mmbrs_brown ty_xs">
                                          <span className="blind">
                                            스마일클럽
                                          </span>
                                        </i>
                                        <span className="cm_smileclub_text">
                                          최대 1만원 적립
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000037271209"
                            data-react-unit-inx="15"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000037271209"
                              data-react-unit-inx="15"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O009","base_item":"1000335775423","rn":"17","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000037271209"
                                data-adidx="16"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000037271209&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|랩씨 아이패드 프로 9.7 플렉시블 강화유리 보호필름_1000037271209_{"inflo_site_no":"6005","basc_info":"COIV1O009","base_item":"1000335775423","rn":"17","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000037271209"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/09/12/27/item/1000037271209_i1_187.jpg"
                                        alt="랩씨 아이패드 프로 9.7 플렉시블 강화유리 보호필름"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000037271209&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|랩씨 아이패드 프로 9.7 플렉시블 강화유리 보호필름_1000037271209$_{"inflo_site_no":"6005","basc_info":"COIV1O009","base_item":"1000335775423","rn":"17","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000037271209"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000037271209"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo2"
                                        value="6005"
                                      />
                                      <input
                                        type="hidden"
                                        name="uitemId"
                                        value="00001"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiTitle"
                                        value="랩씨 아이패드 프로 9.7 플렉시블 강화유리 보호필름"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/09/12/27/item/1000037271209_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|랩씨 아이패드 프로 9.7 플렉시블 강화유리 보호필름_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000037271209&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          LAB.C
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          랩씨 아이패드 프로 9.7 플렉시블
                                          강화유리 보호필름
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              32,900
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000050392435"
                            data-react-unit-inx="16"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000050392435"
                              data-react-unit-inx="16"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O010","base_item":"1000335775423","rn":"19","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000050392435"
                                data-adidx="17"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000050392435&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|아이패드 에어 프로 미니 1 2 3 4 5 6 7 8 9세대 반투명 컬러드 가죽 태블릿 케이스_1000050392435_{"inflo_site_no":"6005","basc_info":"COIV1O010","base_item":"1000335775423","rn":"19","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000050392435"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/35/24/39/item/1000050392435_i1_187.jpg"
                                        alt="아이패드 에어 프로 미니 1 2 3 4 5 6 7 8 9세대 반투명 컬러드 가죽 태블릿 케이스"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000050392435&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|아이패드 에어 프로 미니 1 2 3 4 5 6 7 8 9세대 반투명 컬러드 가죽 태블릿 케이스_1000050392435$_{"inflo_site_no":"6005","basc_info":"COIV1O010","base_item":"1000335775423","rn":"19","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000050392435"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000050392435"
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
                                        value="아이패드 에어 프로 미니 1 2 3 4 5 6 7 8 9세대 반투명 컬러드 가죽 태블릿 케이스"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/35/24/39/item/1000050392435_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|아이패드 에어 프로 미니 1 2 3 4 5 6 7 8 9세대 반투명 컬러드 가죽 태블릿 케이스_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000050392435&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          수나르
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 에어 프로 미니 1 2 3 4 5 6 7
                                          8 9세대 반투명 컬러드 가죽 태블릿
                                          케이스
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                16,800
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              15,960
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>5%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000070653815"
                            data-react-unit-inx="17"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000070653815"
                              data-react-unit-inx="17"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O038","base_item":"1000335775423","rn":"20","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000070653815"
                                data-adidx="18"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000070653815&amp;siteNo=6001&amp;salestrNo=2031&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|(픽업 전용) iPad Pro 11(3세대) 512GB 스페이스 그레이 와이파이(MHQW3KH/A)_1000070653815_{"inflo_site_no":"6005","basc_info":"SUIV1O038","base_item":"1000335775423","rn":"20","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000070653815"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/15/38/65/item/1000070653815_i1_187.jpg"
                                        alt="(픽업 전용) iPad Pro 11(3세대) 512GB 스페이스 그레이 와이파이(MHQW3KH/A)"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000070653815&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|(픽업 전용) iPad Pro 11(3세대) 512GB 스페이스 그레이 와이파이(MHQW3KH/A)_1000070653815$_{"inflo_site_no":"6005","basc_info":"SUIV1O038","base_item":"1000335775423","rn":"20","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000070653815"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6001"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000070653815"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo2"
                                        value="2031"
                                      />
                                      <input
                                        type="hidden"
                                        name="uitemId"
                                        value="00000"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiTitle"
                                        value="(픽업 전용) iPad Pro 11(3세대) 512GB 스페이스 그레이 와이파이(MHQW3KH/A)"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/15/38/65/item/1000070653815_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|(픽업 전용) iPad Pro 11(3세대) 512GB 스페이스 그레이 와이파이(MHQW3KH/A)_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000070653815&amp;siteNo=6001&amp;salestrNo=2031&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="em">이마트몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          (픽업 전용) iPad Pro 11(3세대) 512GB
                                          스페이스 그레이 와이파이(MHQW3KH/A)
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                1,389,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              1,347,330
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>3%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn clickable"
                                          // onClick="javascript:SsgPickup.mobile.getStoreNm(this, '1000070653815', '6001')"
                                          data-react-tarea='상품상세|추천영역_추가추천|상품_매장픽업|(픽업 전용) iPad Pro 11(3세대) 512GB 스페이스 그레이 와이파이(MHQW3KH/A)_1000070653815_{"inflo_site_no":"6005","basc_info":"SUIV1O038","base_item":"1000335775423","rn":"20","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                          data-react-tarea-dtl-cd="t00005"
                                        >
                                          매장픽업 가능점포
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="매장픽업 점포"
                                          // onClick="javascript:SsgPickup.mobile.removeStrNmNew(this);"
                                        />
                                      </div>
                                      <span className="cmbadge_mmbrs ty_border ty_m">
                                        <i className="badge badge_mmbrs_brown ty_xs">
                                          <span className="blind">
                                            스마일클럽
                                          </span>
                                        </i>
                                        <span className="cm_smileclub_text">
                                          최대 1만원 적립
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000051171715"
                            data-react-unit-inx="18"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000051171715"
                              data-react-unit-inx="18"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O011","base_item":"1000335775423","rn":"21","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000051171715"
                                data-adidx="19"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000051171715&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|애플펜슬 케이스 1세대 투톤 라일락퍼플_1000051171715_{"inflo_site_no":"6005","basc_info":"COIV1O011","base_item":"1000335775423","rn":"21","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000051171715"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/15/17/17/item/1000051171715_i1_187.jpg"
                                        alt="애플펜슬 케이스 1세대 투톤 라일락퍼플"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000051171715&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|애플펜슬 케이스 1세대 투톤 라일락퍼플_1000051171715$_{"inflo_site_no":"6005","basc_info":"COIV1O011","base_item":"1000335775423","rn":"21","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000051171715"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000051171715"
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
                                        value="애플펜슬 케이스 1세대 투톤 라일락퍼플"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/15/17/17/item/1000051171715_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|애플펜슬 케이스 1세대 투톤 라일락퍼플_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000051171715&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          Healing Shield
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          애플펜슬 케이스 1세대 투톤 라일락퍼플
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                8,800
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">7,920</em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>10%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000374153479"
                            data-react-unit-inx="19"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000374153479"
                              data-react-unit-inx="19"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O039","base_item":"1000335775423","rn":"22","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000374153479"
                                data-adidx="20"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000374153479&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|APPLE 아이패드 에어 5세대 Wi-Fi 256GB (정품) 퍼플 (MME63KH/A)_1000374153479_{"inflo_site_no":"6005","basc_info":"SUIV1O039","base_item":"1000335775423","rn":"22","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000374153479"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/79/34/15/item/1000374153479_i1_187.jpg"
                                        alt="APPLE 아이패드 에어 5세대 Wi-Fi 256GB (정품) 퍼플 (MME63KH/A)"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000374153479&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|APPLE 아이패드 에어 5세대 Wi-Fi 256GB (정품) 퍼플 (MME63KH/A)_1000374153479$_{"inflo_site_no":"6005","basc_info":"SUIV1O039","base_item":"1000335775423","rn":"22","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000374153479"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000374153479"
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
                                        value="APPLE 아이패드 에어 5세대 Wi-Fi 256GB (정품) 퍼플 (MME63KH/A)"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/79/34/15/item/1000374153479_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|APPLE 아이패드 에어 5세대 Wi-Fi 256GB (정품) 퍼플 (MME63KH/A)_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000374153479&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          APPLE 아이패드 에어 5세대 Wi-Fi 256GB
                                          (정품) 퍼플 (MME63KH/A)
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              1,080,000
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000139713481"
                            data-react-unit-inx="20"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000139713481"
                              data-react-unit-inx="20"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O012","base_item":"1000335775423","rn":"23","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000139713481"
                                data-adidx="21"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000139713481&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|갤럭시탭A7 라이트 8.7인치 퓨어슬림 스마트커버 케이스_1000139713481_{"inflo_site_no":"6005","basc_info":"COIV1O012","base_item":"1000335775423","rn":"23","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000139713481"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/81/34/71/item/1000139713481_i1_187.jpg"
                                        alt="갤럭시탭A7 라이트 8.7인치 퓨어슬림 스마트커버 케이스"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000139713481&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|갤럭시탭A7 라이트 8.7인치 퓨어슬림 스마트커버 케이스_1000139713481$_{"inflo_site_no":"6005","basc_info":"COIV1O012","base_item":"1000335775423","rn":"23","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000139713481"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000139713481"
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
                                        value="갤럭시탭A7 라이트 8.7인치 퓨어슬림 스마트커버 케이스"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/81/34/71/item/1000139713481_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|갤럭시탭A7 라이트 8.7인치 퓨어슬림 스마트커버 케이스_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000139713481&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          뷰씨
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          갤럭시탭A7 라이트 8.7인치 퓨어슬림
                                          스마트커버 케이스
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              13,950
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000053306749"
                            data-react-unit-inx="21"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000053306749"
                              data-react-unit-inx="21"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O040","base_item":"1000335775423","rn":"24","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000053306749"
                                data-adidx="22"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000053306749&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|아이패드 프로 11인치 5세대 4세대 3세대 풀커버 강화유리 액정보호필름 2매_1000053306749_{"inflo_site_no":"6005","basc_info":"SUIV1O040","base_item":"1000335775423","rn":"24","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000053306749"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/49/67/30/item/1000053306749_i1_187.jpg"
                                        alt="아이패드 프로 11인치 5세대 4세대 3세대 풀커버 강화유리 액정보호필름 2매"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000053306749&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|아이패드 프로 11인치 5세대 4세대 3세대 풀커버 강화유리 액정보호필름 2매_1000053306749$_{"inflo_site_no":"6005","basc_info":"SUIV1O040","base_item":"1000335775423","rn":"24","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000053306749"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000053306749"
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
                                        value="아이패드 프로 11인치 5세대 4세대 3세대 풀커버 강화유리 액정보호필름 2매"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/49/67/30/item/1000053306749_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|아이패드 프로 11인치 5세대 4세대 3세대 풀커버 강화유리 액정보호필름 2매_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000053306749&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          sinjimoru
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 프로 11인치 5세대 4세대 3세대
                                          풀커버 강화유리 액정보호필름 2매
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              14,000
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000065826159"
                            data-react-unit-inx="22"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000065826159"
                              data-react-unit-inx="22"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O013","base_item":"1000335775423","rn":"25","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000065826159"
                                data-adidx="23"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000065826159&amp;siteNo=6001&amp;salestrNo=2031&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|(픽업전용) iPad Air(4세대) 및 11형 iPad Pro(2세대)용 Smart Keyboard Folio - 한국어(MXNK2KH/A)_1000065826159_{"inflo_site_no":"6005","basc_info":"COIV1O013","base_item":"1000335775423","rn":"25","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000065826159"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/59/61/82/item/1000065826159_i1_187.jpg"
                                        alt="(픽업전용) iPad Air(4세대) 및 11형 iPad Pro(2세대)용 Smart Keyboard Folio - 한국어(MXNK2KH/A)"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000065826159&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|(픽업전용) iPad Air(4세대) 및 11형 iPad Pro(2세대)용 Smart Keyboard Folio - 한국어(MXNK2KH/A)_1000065826159$_{"inflo_site_no":"6005","basc_info":"COIV1O013","base_item":"1000335775423","rn":"25","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000065826159"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6001"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000065826159"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo2"
                                        value="2031"
                                      />
                                      <input
                                        type="hidden"
                                        name="uitemId"
                                        value="00000"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiTitle"
                                        value="(픽업전용) iPad Air(4세대) 및 11형 iPad Pro(2세대)용 Smart Keyboard Folio - 한국어(MXNK2KH/A)"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/59/61/82/item/1000065826159_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|(픽업전용) iPad Air(4세대) 및 11형 iPad Pro(2세대)용 Smart Keyboard Folio - 한국어(MXNK2KH/A)_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000065826159&amp;siteNo=6001&amp;salestrNo=2031&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="em">이마트몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          (픽업전용) iPad Air(4세대) 및 11형
                                          iPad Pro(2세대)용 Smart Keyboard Folio
                                          - 한국어(MXNK2KH/A)
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                229,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              222,130
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>3%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn clickable"
                                          // onClick="javascript:SsgPickup.mobile.getStoreNm(this, '1000065826159', '6001')"
                                          data-react-tarea='상품상세|추천영역_추가추천|상품_매장픽업|(픽업전용) iPad Air(4세대) 및 11형 iPad Pro(2세대)용 Smart Keyboard Folio - 한국어(MXNK2KH/A)_1000065826159_{"inflo_site_no":"6005","basc_info":"COIV1O013","base_item":"1000335775423","rn":"25","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                          data-react-tarea-dtl-cd="t00005"
                                        >
                                          매장픽업 가능점포
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="매장픽업 점포"
                                          // onClick="javascript:SsgPickup.mobile.removeStrNmNew(this);"
                                        />
                                      </div>
                                      <span className="cmbadge_mmbrs ty_border ty_m">
                                        <i className="badge badge_mmbrs_brown ty_xs">
                                          <span className="blind">
                                            스마일클럽
                                          </span>
                                        </i>
                                        <span className="cm_smileclub_text">
                                          최대 1만원 적립
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000386920663"
                            data-react-unit-inx="23"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000386920663"
                              data-react-unit-inx="23"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O042","base_item":"1000335775423","rn":"26","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000386920663"
                                data-adidx="24"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000386920663&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|Apple 아이패드 프로 11형 3세대 M1 WIFI 128G 실버 MHQT3KH/A_1000386920663_{"inflo_site_no":"6005","basc_info":"SUIV1O042","base_item":"1000335775423","rn":"26","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000386920663"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/63/06/92/item/1000386920663_i1_187.jpg"
                                        alt="Apple 아이패드 프로 11형 3세대 M1 WIFI 128G 실버 MHQT3KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000386920663&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|Apple 아이패드 프로 11형 3세대 M1 WIFI 128G 실버 MHQT3KH/A_1000386920663$_{"inflo_site_no":"6005","basc_info":"SUIV1O042","base_item":"1000335775423","rn":"26","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000386920663"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000386920663"
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
                                        value="Apple 아이패드 프로 11형 3세대 M1 WIFI 128G 실버 MHQT3KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/63/06/92/item/1000386920663_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|Apple 아이패드 프로 11형 3세대 M1 WIFI 128G 실버 MHQT3KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000386920663&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          Apple 아이패드 프로 11형 3세대 M1 WIFI
                                          128G 실버 MHQT3KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              1,030,000
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000164936320"
                            data-react-unit-inx="24"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000164936320"
                              data-react-unit-inx="24"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O014","base_item":"1000335775423","rn":"27","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000164936320"
                                data-adidx="25"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000164936320&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|로지텍코리아 콤보터치 아이패드 에어 4/5세대용_1000164936320_{"inflo_site_no":"6005","basc_info":"COIV1O014","base_item":"1000335775423","rn":"27","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000164936320"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/20/63/93/item/1000164936320_i1_187.jpg"
                                        alt="로지텍코리아 콤보터치 아이패드 에어 4/5세대용"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000164936320&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|로지텍코리아 콤보터치 아이패드 에어 4/5세대용_1000164936320$_{"inflo_site_no":"6005","basc_info":"COIV1O014","base_item":"1000335775423","rn":"27","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000164936320"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000164936320"
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
                                        value="로지텍코리아 콤보터치 아이패드 에어 4/5세대용"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/20/63/93/item/1000164936320_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|로지텍코리아 콤보터치 아이패드 에어 4/5세대용_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000164936320&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          Logitech
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          로지텍코리아 콤보터치 아이패드 에어
                                          4/5세대용
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              249,000
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <span className="mnsditem_tag">
                                        무료배송
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000354708519"
                            data-react-unit-inx="25"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000354708519"
                              data-react-unit-inx="25"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O043","base_item":"1000335775423","rn":"28","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000354708519"
                                data-adidx="26"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000354708519&amp;siteNo=6001&amp;salestrNo=2031&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|(픽업전용)iPad Air(5세대) 64GB 블루 와이파이(MM9E3KH/A)_1000354708519_{"inflo_site_no":"6005","basc_info":"SUIV1O043","base_item":"1000335775423","rn":"28","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000354708519"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/19/85/70/item/1000354708519_i1_187.jpg"
                                        alt="(픽업전용)iPad Air(5세대) 64GB 블루 와이파이(MM9E3KH/A)"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000354708519&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|(픽업전용)iPad Air(5세대) 64GB 블루 와이파이(MM9E3KH/A)_1000354708519$_{"inflo_site_no":"6005","basc_info":"SUIV1O043","base_item":"1000335775423","rn":"28","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000354708519"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6001"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000354708519"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo2"
                                        value="2031"
                                      />
                                      <input
                                        type="hidden"
                                        name="uitemId"
                                        value="00000"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiTitle"
                                        value="(픽업전용)iPad Air(5세대) 64GB 블루 와이파이(MM9E3KH/A)"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/19/85/70/item/1000354708519_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|(픽업전용)iPad Air(5세대) 64GB 블루 와이파이(MM9E3KH/A)_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000354708519&amp;siteNo=6001&amp;salestrNo=2031&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="em">이마트몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          (픽업전용)iPad Air(5세대) 64GB 블루
                                          와이파이(MM9E3KH/A)
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                779,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              755,630
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>3%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn clickable"
                                          // onClick="javascript:SsgPickup.mobile.getStoreNm(this, '1000354708519', '6001')"
                                          data-react-tarea='상품상세|추천영역_추가추천|상품_매장픽업|(픽업전용)iPad Air(5세대) 64GB 블루 와이파이(MM9E3KH/A)_1000354708519_{"inflo_site_no":"6005","basc_info":"SUIV1O043","base_item":"1000335775423","rn":"28","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                          data-react-tarea-dtl-cd="t00005"
                                        >
                                          매장픽업 가능점포
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="매장픽업 점포"
                                          // onClick="javascript:SsgPickup.mobile.removeStrNmNew(this);"
                                        />
                                      </div>
                                      <span className="cmbadge_mmbrs ty_border ty_m">
                                        <i className="badge badge_mmbrs_brown ty_xs">
                                          <span className="blind">
                                            스마일클럽
                                          </span>
                                        </i>
                                        <span className="cm_smileclub_text">
                                          최대 1만원 적립
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000055800441"
                            data-react-unit-inx="26"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000055800441"
                              data-react-unit-inx="26"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O015","base_item":"1000335775423","rn":"29","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000055800441"
                                data-adidx="27"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000055800441&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|아이패드 에어 4 5세대 10.9인치 마카롱 클리어 펜슬 케이스 애플펜슬 수납 홀더_1000055800441_{"inflo_site_no":"6005","basc_info":"COIV1O015","base_item":"1000335775423","rn":"29","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000055800441"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/41/04/80/item/1000055800441_i1_187.jpg"
                                        alt="아이패드 에어 4 5세대 10.9인치 마카롱 클리어 펜슬 케이스 애플펜슬 수납 홀더"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000055800441&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|아이패드 에어 4 5세대 10.9인치 마카롱 클리어 펜슬 케이스 애플펜슬 수납 홀더_1000055800441$_{"inflo_site_no":"6005","basc_info":"COIV1O015","base_item":"1000335775423","rn":"29","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000055800441"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000055800441"
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
                                        value="아이패드 에어 4 5세대 10.9인치 마카롱 클리어 펜슬 케이스 애플펜슬 수납 홀더"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/41/04/80/item/1000055800441_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|아이패드 에어 4 5세대 10.9인치 마카롱 클리어 펜슬 케이스 애플펜슬 수납 홀더_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000055800441&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          오펜트
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 에어 4 5세대 10.9인치 마카롱
                                          클리어 펜슬 케이스 애플펜슬 수납 홀더
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              19,500
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000350854573"
                            data-react-unit-inx="27"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000350854573"
                              data-react-unit-inx="27"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O044","base_item":"1000335775423","rn":"30","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000350854573"
                                data-adidx="28"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000350854573&amp;siteNo=6001&amp;salestrNo=2444&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|(픽업전용)아이패드 미니 6세대 Wi-Fi+Cellular 64GB 핑크 MLX43KH/A_1000350854573_{"inflo_site_no":"6005","basc_info":"SUIV1O044","base_item":"1000335775423","rn":"30","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000350854573"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/73/45/85/item/1000350854573_i1_187.jpg"
                                        alt="(픽업전용)아이패드 미니 6세대 Wi-Fi+Cellular 64GB 핑크 MLX43KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6001"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000350854573"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo2"
                                        value="2444"
                                      />
                                      <input
                                        type="hidden"
                                        name="uitemId"
                                        value="00000"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiTitle"
                                        value="(픽업전용)아이패드 미니 6세대 Wi-Fi+Cellular 64GB 핑크 MLX43KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/73/45/85/item/1000350854573_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|(픽업전용)아이패드 미니 6세대 Wi-Fi+Cellular 64GB 핑크 MLX43KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000350854573&amp;siteNo=6001&amp;salestrNo=2444&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="em">이마트몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          (픽업전용)아이패드 미니 6세대
                                          Wi-Fi+Cellular 64GB 핑크 MLX43KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                839,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              813,830
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>3%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn clickable"
                                          // onClick="javascript:SsgPickup.mobile.getStoreNm(this, '1000350854573', '6001')"
                                          data-react-tarea='상품상세|추천영역_추가추천|상품_매장픽업|(픽업전용)아이패드 미니 6세대 Wi-Fi+Cellular 64GB 핑크 MLX43KH/A_1000350854573_{"inflo_site_no":"6005","basc_info":"SUIV1O044","base_item":"1000335775423","rn":"30","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                          data-react-tarea-dtl-cd="t00005"
                                        >
                                          매장픽업 가능점포
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="매장픽업 점포"
                                          // onClick="javascript:SsgPickup.mobile.removeStrNmNew(this);"
                                        />
                                      </div>
                                      <span className="cmbadge_mmbrs ty_border ty_m">
                                        <i className="badge badge_mmbrs_brown ty_xs">
                                          <span className="blind">
                                            스마일클럽
                                          </span>
                                        </i>
                                        <span className="cm_smileclub_text">
                                          최대 1만원 적립
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000065826169"
                            data-react-unit-inx="28"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000065826169"
                              data-react-unit-inx="28"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O016","base_item":"1000335775423","rn":"31","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000065826169"
                                data-adidx="29"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000065826169&amp;siteNo=6001&amp;salestrNo=2031&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|(픽업전용) iPad Air(4세대) 및 11형 iPad Pro(2세대)용 Magic Keyboard - 한국어(MXQT2KH/A)_1000065826169_{"inflo_site_no":"6005","basc_info":"COIV1O016","base_item":"1000335775423","rn":"31","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000065826169"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/69/61/82/item/1000065826169_i1_187.jpg"
                                        alt="(픽업전용) iPad Air(4세대) 및 11형 iPad Pro(2세대)용 Magic Keyboard - 한국어(MXQT2KH/A)"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000065826169&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|(픽업전용) iPad Air(4세대) 및 11형 iPad Pro(2세대)용 Magic Keyboard - 한국어(MXQT2KH/A)_1000065826169$_{"inflo_site_no":"6005","basc_info":"COIV1O016","base_item":"1000335775423","rn":"31","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000065826169"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6001"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000065826169"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo2"
                                        value="2031"
                                      />
                                      <input
                                        type="hidden"
                                        name="uitemId"
                                        value="00000"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiTitle"
                                        value="(픽업전용) iPad Air(4세대) 및 11형 iPad Pro(2세대)용 Magic Keyboard - 한국어(MXQT2KH/A)"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/69/61/82/item/1000065826169_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|(픽업전용) iPad Air(4세대) 및 11형 iPad Pro(2세대)용 Magic Keyboard - 한국어(MXQT2KH/A)_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000065826169&amp;siteNo=6001&amp;salestrNo=2031&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="em">이마트몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          (픽업전용) iPad Air(4세대) 및 11형
                                          iPad Pro(2세대)용 Magic Keyboard -
                                          한국어(MXQT2KH/A)
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                389,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              377,330
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>3%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn clickable"
                                          // onClick="javascript:SsgPickup.mobile.getStoreNm(this, '1000065826169', '6001')"
                                          data-react-tarea='상품상세|추천영역_추가추천|상품_매장픽업|(픽업전용) iPad Air(4세대) 및 11형 iPad Pro(2세대)용 Magic Keyboard - 한국어(MXQT2KH/A)_1000065826169_{"inflo_site_no":"6005","basc_info":"COIV1O016","base_item":"1000335775423","rn":"31","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                          data-react-tarea-dtl-cd="t00005"
                                        >
                                          매장픽업 가능점포
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="매장픽업 점포"
                                          // onClick="javascript:SsgPickup.mobile.removeStrNmNew(this);"
                                        />
                                      </div>
                                      <span className="cmbadge_mmbrs ty_border ty_m">
                                        <i className="badge badge_mmbrs_brown ty_xs">
                                          <span className="blind">
                                            스마일클럽
                                          </span>
                                        </i>
                                        <span className="cm_smileclub_text">
                                          최대 1만원 적립
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000066279506"
                            data-react-unit-inx="29"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000066279506"
                              data-react-unit-inx="29"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O045","base_item":"1000335775423","rn":"32","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000066279506"
                                data-adidx="30"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000066279506&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|아이패드프로 5세대 케이스 12.9 어반핏_1000066279506_{"inflo_site_no":"6005","basc_info":"SUIV1O045","base_item":"1000335775423","rn":"32","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000066279506"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/06/95/27/item/1000066279506_i1_187.jpg"
                                        alt="아이패드프로 5세대 케이스 12.9 어반핏"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000066279506&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|아이패드프로 5세대 케이스 12.9 어반핏_1000066279506$_{"inflo_site_no":"6005","basc_info":"SUIV1O045","base_item":"1000335775423","rn":"32","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000066279506"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000066279506"
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
                                        value="아이패드프로 5세대 케이스 12.9 어반핏"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/06/95/27/item/1000066279506_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|아이패드프로 5세대 케이스 12.9 어반핏_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000066279506&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          슈피겐
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드프로 5세대 케이스 12.9 어반핏
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              35,900
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000267112808"
                            data-react-unit-inx="30"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000267112808"
                              data-react-unit-inx="30"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O017","base_item":"1000335775423","rn":"33","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000267112808"
                                data-adidx="31"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000267112808&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|아이노비아 (강화유리무료) 아이패드 미니6 8.3 애플펜슬 수납충전 클린투명케이스_1000267112808_{"inflo_site_no":"6005","basc_info":"COIV1O017","base_item":"1000335775423","rn":"33","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000267112808"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/08/28/11/item/1000267112808_i1_187.jpg"
                                        alt="아이노비아 (강화유리무료) 아이패드 미니6 8.3 애플펜슬 수납충전 클린투명케이스"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000267112808&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|아이노비아 (강화유리무료) 아이패드 미니6 8.3 애플펜슬 수납충전 클린투명케이스_1000267112808$_{"inflo_site_no":"6005","basc_info":"COIV1O017","base_item":"1000335775423","rn":"33","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000267112808"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000267112808"
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
                                        value="아이노비아 (강화유리무료) 아이패드 미니6 8.3 애플펜슬 수납충전 클린투명케이스"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/08/28/11/item/1000267112808_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|아이노비아 (강화유리무료) 아이패드 미니6 8.3 애플펜슬 수납충전 클린투명케이스_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000267112808&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          inovia
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이노비아 (강화유리무료) 아이패드
                                          미니6 8.3 애플펜슬 수납충전
                                          클린투명케이스
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                20,900
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              17,138
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>18%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000292074064"
                            data-react-unit-inx="31"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000292074064"
                              data-react-unit-inx="31"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O050","base_item":"1000335775423","rn":"34","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000292074064"
                                data-adidx="32"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000292074064&amp;siteNo=6001&amp;salestrNo=2031&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|(픽업전용)아이패드 미니 6세대 Wi-Fi 64GB 퍼플 MK7R3KH/A_1000292074064_{"inflo_site_no":"6005","basc_info":"SUIV1O050","base_item":"1000335775423","rn":"34","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000292074064"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/64/40/07/item/1000292074064_i1_187.jpg"
                                        alt="(픽업전용)아이패드 미니 6세대 Wi-Fi 64GB 퍼플 MK7R3KH/A"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6001"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000292074064"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo2"
                                        value="2031"
                                      />
                                      <input
                                        type="hidden"
                                        name="uitemId"
                                        value="00000"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiTitle"
                                        value="(픽업전용)아이패드 미니 6세대 Wi-Fi 64GB 퍼플 MK7R3KH/A"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/64/40/07/item/1000292074064_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|(픽업전용)아이패드 미니 6세대 Wi-Fi 64GB 퍼플 MK7R3KH/A_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000292074064&amp;siteNo=6001&amp;salestrNo=2031&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="em">이마트몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          (픽업전용)아이패드 미니 6세대 Wi-Fi
                                          64GB 퍼플 MK7R3KH/A
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                649,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              629,530
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>3%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn clickable"
                                          // onClick="javascript:SsgPickup.mobile.getStoreNm(this, '1000292074064', '6001')"
                                          data-react-tarea='상품상세|추천영역_추가추천|상품_매장픽업|(픽업전용)아이패드 미니 6세대 Wi-Fi 64GB 퍼플 MK7R3KH/A_1000292074064_{"inflo_site_no":"6005","basc_info":"SUIV1O050","base_item":"1000335775423","rn":"34","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                          data-react-tarea-dtl-cd="t00005"
                                        >
                                          매장픽업 가능점포
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="매장픽업 점포"
                                          // onClick="javascript:SsgPickup.mobile.removeStrNmNew(this);"
                                        />
                                      </div>
                                      <span className="cmbadge_mmbrs ty_border ty_m">
                                        <i className="badge badge_mmbrs_brown ty_xs">
                                          <span className="blind">
                                            스마일클럽
                                          </span>
                                        </i>
                                        <span className="cm_smileclub_text">
                                          최대 1만원 적립
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000394815942"
                            data-react-unit-inx="32"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000394815942"
                              data-react-unit-inx="32"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O018","base_item":"1000335775423","rn":"35","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000394815942"
                                data-adidx="33"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000394815942&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|아이패드 에어5 에어4 10.9인치 고양이 실리콘 스탠드 태블릿 케이스_1000394815942_{"inflo_site_no":"6005","basc_info":"COIV1O018","base_item":"1000335775423","rn":"35","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000394815942"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/42/59/81/item/1000394815942_i1_187.jpg"
                                        alt="아이패드 에어5 에어4 10.9인치 고양이 실리콘 스탠드 태블릿 케이스"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000394815942&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|아이패드 에어5 에어4 10.9인치 고양이 실리콘 스탠드 태블릿 케이스_1000394815942$_{"inflo_site_no":"6005","basc_info":"COIV1O018","base_item":"1000335775423","rn":"35","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000394815942"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000394815942"
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
                                        value="아이패드 에어5 에어4 10.9인치 고양이 실리콘 스탠드 태블릿 케이스"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/42/59/81/item/1000394815942_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|아이패드 에어5 에어4 10.9인치 고양이 실리콘 스탠드 태블릿 케이스_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000394815942&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          수나르
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드 에어5 에어4 10.9인치 고양이
                                          실리콘 스탠드 태블릿 케이스
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                19,800
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              18,810
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>5%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000354708543"
                            data-react-unit-inx="33"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000354708543"
                              data-react-unit-inx="33"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O052","base_item":"1000335775423","rn":"36","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000354708543"
                                data-adidx="34"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000354708543&amp;siteNo=6001&amp;salestrNo=2122&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|(픽업전용)iPad Air(5세대) 64GB 퍼플 와이파이(MME23KH/A)_1000354708543_{"inflo_site_no":"6005","basc_info":"SUIV1O052","base_item":"1000335775423","rn":"36","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000354708543"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/43/85/70/item/1000354708543_i1_187.jpg"
                                        alt="(픽업전용)iPad Air(5세대) 64GB 퍼플 와이파이(MME23KH/A)"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000354708543&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|(픽업전용)iPad Air(5세대) 64GB 퍼플 와이파이(MME23KH/A)_1000354708543$_{"inflo_site_no":"6005","basc_info":"SUIV1O052","base_item":"1000335775423","rn":"36","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000354708543"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6001"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000354708543"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo2"
                                        value="2122"
                                      />
                                      <input
                                        type="hidden"
                                        name="uitemId"
                                        value="00000"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiTitle"
                                        value="(픽업전용)iPad Air(5세대) 64GB 퍼플 와이파이(MME23KH/A)"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/43/85/70/item/1000354708543_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|(픽업전용)iPad Air(5세대) 64GB 퍼플 와이파이(MME23KH/A)_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000354708543&amp;siteNo=6001&amp;salestrNo=2122&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="em">이마트몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          (픽업전용)iPad Air(5세대) 64GB 퍼플
                                          와이파이(MME23KH/A)
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                779,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              755,630
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>3%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn clickable"
                                          // onClick="javascript:SsgPickup.mobile.getStoreNm(this, '1000354708543', '6001')"
                                          data-react-tarea='상품상세|추천영역_추가추천|상품_매장픽업|(픽업전용)iPad Air(5세대) 64GB 퍼플 와이파이(MME23KH/A)_1000354708543_{"inflo_site_no":"6005","basc_info":"SUIV1O052","base_item":"1000335775423","rn":"36","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                          data-react-tarea-dtl-cd="t00005"
                                        >
                                          매장픽업 가능점포
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="매장픽업 점포"
                                          // onClick="javascript:SsgPickup.mobile.removeStrNmNew(this);"
                                        />
                                      </div>
                                      <span className="cmbadge_mmbrs ty_border ty_m">
                                        <i className="badge badge_mmbrs_brown ty_xs">
                                          <span className="blind">
                                            스마일클럽
                                          </span>
                                        </i>
                                        <span className="cm_smileclub_text">
                                          최대 1만원 적립
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000172047098"
                            data-react-unit-inx="34"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000172047098"
                              data-react-unit-inx="34"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O019","base_item":"1000335775423","rn":"37","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000172047098"
                                data-adidx="35"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m.ssg.com/item/itemView.ssg?itemId=1000172047098&amp;siteNo=7014&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|1매 아이패드 종이질감 액정보호필름 지문방지_1000172047098_{"inflo_site_no":"6005","basc_info":"COIV1O019","base_item":"1000335775423","rn":"37","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000172047098"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/98/70/04/item/1000172047098_i1_187.jpg"
                                        alt="1매 아이패드 종이질감 액정보호필름 지문방지"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000172047098&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|1매 아이패드 종이질감 액정보호필름 지문방지_1000172047098$_{"inflo_site_no":"6005","basc_info":"COIV1O019","base_item":"1000335775423","rn":"37","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000172047098"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="7014"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000172047098"
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
                                        value="1매 아이패드 종이질감 액정보호필름 지문방지"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/98/70/04/item/1000172047098_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|1매 아이패드 종이질감 액정보호필름 지문방지_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m.ssg.com/item/itemView.ssg?itemId=1000172047098&amp;siteNo=7014&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="mnsditem_goods_brand">
                                          에스뷰
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          1매 아이패드 종이질감 액정보호필름
                                          지문방지
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">6,900</em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn"
                                        >
                                          오늘출발
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="오늘출발 시간"
                                        >
                                          15시까지 주문 시 오늘 배송
                                          출발(주말,법정 공휴일 및 업체 휴무일
                                          제외)
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000070636588"
                            data-react-unit-inx="35"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000070636588"
                              data-react-unit-inx="35"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O056","base_item":"1000335775423","rn":"38","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000070636588"
                                data-adidx="36"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000070636588&amp;siteNo=6001&amp;salestrNo=2058&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|(픽업 전용) iPad Pro 12.9(5세대) 128GB 스페이스 그레이 셀룰러(MHR43KH/A)_1000070636588_{"inflo_site_no":"6005","basc_info":"SUIV1O056","base_item":"1000335775423","rn":"38","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000070636588"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/88/65/63/item/1000070636588_i1_187.jpg"
                                        alt="(픽업 전용) iPad Pro 12.9(5세대) 128GB 스페이스 그레이 셀룰러(MHR43KH/A)"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6001"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000070636588"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo2"
                                        value="2058"
                                      />
                                      <input
                                        type="hidden"
                                        name="uitemId"
                                        value="00000"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiTitle"
                                        value="(픽업 전용) iPad Pro 12.9(5세대) 128GB 스페이스 그레이 셀룰러(MHR43KH/A)"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/88/65/63/item/1000070636588_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|(픽업 전용) iPad Pro 12.9(5세대) 128GB 스페이스 그레이 셀룰러(MHR43KH/A)_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="https://m-emart.ssg.com/item/itemView.ssg?itemId=1000070636588&amp;siteNo=6001&amp;salestrNo=2058&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="em">이마트몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          APPLE(애플)
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          (픽업 전용) iPad Pro 12.9(5세대) 128GB
                                          스페이스 그레이 셀룰러(MHR43KH/A)
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                1,579,000
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              1,531,630
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>3%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist">
                                      <div className="mnsditem_tag mnsditem_tagtip_box js_tagtip_box">
                                        <button
                                          type="button"
                                          className="mnsditem_tagtip_btn js_tagtip_btn clickable"
                                          // onClick="javascript:SsgPickup.mobile.getStoreNm(this, '1000070636588', '6001')"
                                          data-react-tarea='상품상세|추천영역_추가추천|상품_매장픽업|(픽업 전용) iPad Pro 12.9(5세대) 128GB 스페이스 그레이 셀룰러(MHR43KH/A)_1000070636588_{"inflo_site_no":"6005","basc_info":"SUIV1O056","base_item":"1000335775423","rn":"38","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                          data-react-tarea-dtl-cd="t00005"
                                        >
                                          매장픽업 가능점포
                                          <span className="blind">
                                            툴팁 열기
                                          </span>
                                        </button>
                                        <div
                                          className="mnsditem_tagtip_layer js_tagtip_layer"
                                          role="tooltip"
                                          aria-label="매장픽업 점포"
                                          // onClick="javascript:SsgPickup.mobile.removeStrNmNew(this);"
                                        />
                                      </div>
                                      <span className="cmbadge_mmbrs ty_border ty_m">
                                        <i className="badge badge_mmbrs_brown ty_xs">
                                          <span className="blind">
                                            스마일클럽
                                          </span>
                                        </i>
                                        <span className="cm_smileclub_text">
                                          최대 1만원 적립
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000055658373"
                            data-react-unit-inx="36"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000055658373"
                              data-react-unit-inx="36"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"COIV1O020","base_item":"1000335775423","rn":"39","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000055658373"
                                data-adidx="37"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000055658373&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|아이노비아 (강화유리무료)아이패드 에어5 에어4 10.9 애플펜슬 수납 퓨전쉴드 스마트커버 폴리오 케이스_1000055658373_{"inflo_site_no":"6005","basc_info":"COIV1O020","base_item":"1000335775423","rn":"39","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000055658373"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/73/83/65/item/1000055658373_i1_187.jpg"
                                        alt="아이노비아 (강화유리무료)아이패드 에어5 에어4 10.9 애플펜슬 수납 퓨전쉴드 스마트커버 폴리오 케이스"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_thmb_ctrl">
                                    <a
                                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000055658373&amp;src_area=ssglens"
                                      className="mnsditem_btn_lens clickable"
                                      data-react-tarea='상품상세|추천영역_추가추천|상품_이미지버튼|아이노비아 (강화유리무료)아이패드 에어5 에어4 10.9 애플펜슬 수납 퓨전쉴드 스마트커버 폴리오 케이스_1000055658373$_{"inflo_site_no":"6005","basc_info":"COIV1O020","base_item":"1000335775423","rn":"39","mdl_crtn_dt":"22-07-19","mdl_reg_dt":"22-07-28"}'
                                      data-info="1000055658373"
                                      data-position="ssglens"
                                      data-react-tarea-dtl-cd="t00008"
                                      target="_parent"
                                    >
                                      <span className="blind">
                                        이 상품 이미지로 검색하기
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000055658373"
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
                                        value="아이노비아 (강화유리무료)아이패드 에어5 에어4 10.9 애플펜슬 수납 퓨전쉴드 스마트커버 폴리오 케이스"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/73/83/65/item/1000055658373_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|아이노비아 (강화유리무료)아이패드 에어5 에어4 10.9 애플펜슬 수납 퓨전쉴드 스마트커버 폴리오 케이스_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000055658373&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이노비아 (강화유리무료)아이패드
                                          에어5 에어4 10.9 애플펜슬 수납
                                          퓨전쉴드 스마트커버 폴리오 케이스
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_oldpr">
                                          <div className="old_price">
                                            <del>
                                              <span className="blind">
                                                정상가격
                                              </span>
                                              <em className="ssg_price">
                                                33,700
                                              </em>
                                              <span className="ssg_tx">원</span>
                                            </del>
                                          </div>
                                        </div>
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              27,634
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                          <div className="discount_rate">
                                            <span className="blind">
                                              할인율
                                            </span>
                                            <span>18%</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            className="cmitem_grid_item"
                            data-react-unit-type="item"
                            data-react-unit-id="1000043076559"
                            data-react-unit-inx="37"
                          >
                            <div
                              className="mnsditem_unit"
                              data-react-unit-type="item"
                              data-observable-item="true"
                              data-react-unit-id="1000043076559"
                              data-react-unit-inx="37"
                              data-react-mdl-info='{"inflo_site_no":"6005","basc_info":"SUIV1O057","base_item":"1000335775423","rn":"40","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                              data-react-advert-yn="N"
                              data-react-advert-bid-id=""
                              data-react-advert-tgt-id=""
                              data-react-advert-bilng-type-cd=""
                              data-react-advert-kind-cd=""
                              data-react-advert-extens-tery-div-cd=""
                              data-react-advert-advert-acct-grp-id=""
                              data-react-unit-text=""
                            >
                              <div className="mnsditem_helper" />
                              <div
                                className="mnsditem_goods"
                                data-unittype="item"
                                data-advertacctid=""
                                data-advertbidid=""
                                data-adtgtid="1000043076559"
                                data-adidx="38"
                                data-advertbilngtypecd=""
                                data-advertkindcd=""
                                data-advertextensterydivcd=""
                                data-prioradvertacctgrpid=""
                              >
                                <div className="mnsditem_thmb">
                                  <a
                                    href="/item/itemView.ssg?itemId=1000043076559&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                    className="mnsditem_thmb_link clickable"
                                    data-react-tarea='상품상세|추천영역_추가추천|상품_클릭|아이패드프로 4세대 11 도화지 종이질감 액정보호필름_1000043076559_{"inflo_site_no":"6005","basc_info":"SUIV1O057","base_item":"1000335775423","rn":"40","mdl_crtn_dt":"22-07-27","mdl_reg_dt":"22-07-28"}'
                                    data-info="1000043076559"
                                    data-index="0"
                                    data-position="view"
                                    data-react-tarea-dtl-cd="t00001"
                                    target="_parent"
                                  >
                                    <div className="mnsditem_thmb_imgbx">
                                      <img
                                        src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                                        data-src="//sitem.ssgcdn.com/59/65/07/item/1000043076559_i1_187.jpg"
                                        alt="아이패드프로 4세대 11 도화지 종이질감 액정보호필름"
                                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                                        className="ssg_lazy mnsditem_thmb_img"
                                        data-ll-status="observed"
                                      />
                                    </div>
                                  </a>
                                  <div className="mnsditem_btn_like">
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
                                      <input
                                        type="hidden"
                                        name="siteNo"
                                        value="6004"
                                      />
                                      <input
                                        type="hidden"
                                        name="attnTgtIdnfNo1"
                                        value="1000043076559"
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
                                        value="아이패드프로 4세대 11 도화지 종이질감 액정보호필름"
                                      />
                                      <input
                                        type="hidden"
                                        name="notiImgPath"
                                        value="//sitem.ssgcdn.com/59/65/07/item/1000043076559_i1_187.jpg"
                                      />
                                      <input
                                        type="hidden"
                                        name="checked"
                                        value="N"
                                      />
                                      <input
                                        type="hidden"
                                        name="useForcedSsgYn"
                                        value="N"
                                      />
                                      <button
                                        type="button"
                                        className="cmlike_btn _js_cmlike_btn clickable"
                                        data-position="clip"
                                        data-react-tarea="상품상세|추천영역_추가추천|상품_좋아요|아이패드프로 4세대 11 도화지 종이질감 액정보호필름_"
                                        data-react-tarea-dtl-cd="t00003"
                                      >
                                        <span className="cmlike_ico">
                                          <i className="cmlike_primary_m" />
                                          <span className="sr_off">
                                            <span className="blind">
                                              관심상품 취소
                                            </span>
                                          </span>
                                          <span className="sr_on">
                                            <span className="blind">
                                              관심상품 등록
                                            </span>
                                          </span>
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="mnsditem_detail">
                                  <div className="mnsditem_maininfo">
                                    <a
                                      href="/item/itemView.ssg?itemId=1000043076559&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea15"
                                      className="mnsditem_maininfo_link"
                                      target="_parent"
                                    >
                                      <div className="mnsditem_tit">
                                        <span className="cm_mall_text">
                                          <i className="sm">신세계몰</i>
                                        </span>
                                        <span className="mnsditem_goods_brand">
                                          스코코
                                        </span>
                                        <span className="mnsditem_goods_tit">
                                          아이패드프로 4세대 11 도화지 종이질감
                                          액정보호필름
                                        </span>
                                      </div>
                                      <div className="mnsditem_pricewrap">
                                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                                          <div className="new_price">
                                            <span className="blind">
                                              판매가격
                                            </span>
                                            <em className="ssg_price">
                                              13,000
                                            </em>
                                            <span className="ssg_tx">원</span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="mnsditem_sideinfo">
                                    <div className="mnsditem_taglist" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div id="infinite-indicator" />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div
              id="modal_photo_review"
              className="mndtl_modal_wrap ty_full modal_photo_review"
              role="dialog"
              tabIndex="-1"
              aria-hidden="true"
            >
              <div
                className="mndtl_modal_inr"
                role="document"
                // tabIndex="0"
              >
                <header className="mndtl_modal_head">
                  <div className="mndtl_modal_top">
                    <h2 className="blind">리뷰 크게보기</h2>
                    <div className="mndtl_review_pagination v2 swiper-pagination-fraction">
                      <span className="blind">현재 슬라이드번호</span>
                      <span className="mndtl_review_current" />
                      <span className="mndtl_review_separator">/</span>
                      <span className="blind">전체 슬라이드 개수</span>
                      <span className="mndtl_review_total" />
                    </div>
                    <a
                      href="/"
                      className="mndtl_btn_close modal-close-btn"
                      target=""
                    >
                      <span className="blind">레이어팝업 닫기</span>
                    </a>
                  </div>
                </header>
                <div className="mndtl_modal_cont">
                  <div className="mndtl_modal_scroll" />
                </div>
              </div>
            </div>
            <div
              id="modal_photo_review3"
              className="mndtl_modal_wrap ty_full modal_photo_review3"
              role="dialog"
              tabIndex="-1"
              aria-hidden="true"
            >
              <div
                className="mndtl_modal_inr"
                role="document"
                // tabIndex="0"
              >
                <header className="mndtl_modal_head">
                  <div className="mndtl_modal_top">
                    <h2 className="blind">리뷰 크게보기</h2>
                    <div className="mndtl_review_pagination v2 swiper-pagination-fraction">
                      <span className="blind">현재 슬라이드번호</span>
                      <span className="mndtl_review_current" />
                      <span className="mndtl_review_separator">/</span>
                      <span className="blind">전체 슬라이드 개수</span>
                      <span className="mndtl_review_total" />
                    </div>
                    <a
                      href="/"
                      className="mndtl_btn_close modal-close-btn"
                      target=""
                    >
                      <span className="blind">레이어팝업 닫기</span>
                    </a>
                  </div>
                </header>
                <div className="mndtl_modal_cont">
                  <div className="mndtl_modal_scroll" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div className="mndtl_opt_btm _js_mndtl_opt_btm  react-area">
          <div
            className="opt_btm_bgn"
            data-react-tarea-cd="00006_000000013"
            data-react-comm-type="item"
            data-react-comm-id="1000335762677"
            data-react-salestr-no="6005"
            data-react-site-no="6004"
          >
            <div className="btm_bgn_in dps1">
              <ul className="btm_bgn_bx type_other1">
                <li
                  className="ty_like"
                  data-react-unit-type="item"
                  data-react-unit-id="1000335762677"
                >
                  <span
                    className="cmlike _js_cmlike interestIt clickable"
                    data-react-tarea="상품상세|옵션바|상품_좋아요"
                    data-react-tarea-dtl-cd="t00003"
                  >
                    <input type="hidden" name="attnDivCd" value="10" />
                    <input type="hidden" name="siteNo" value="6004" />
                    <input
                      type="hidden"
                      name="attnTgtIdnfNo1"
                      value="1000335762677"
                    />
                    <input type="hidden" name="attnTgtIdnfNo2" value="6005" />
                    <input
                      type="hidden"
                      name="notiTitle"
                      value="아이패드 에어 5세대 셀룰러 64GB 블루 MM6U3KH/A"
                    />
                    <input
                      type="hidden"
                      name="notiImgPath"
                      value="https://sitem.ssgcdn.com/77/26/76/item/1000335762677_i1_70.jpg"
                    />
                    <input type="hidden" name="sellStatCd" value="20" />
                    <input type="hidden" name="soldoutYn" value="N" />
                    <input type="hidden" name="checked" value="N" />
                    <input
                      type="hidden"
                      name="uitemIdAndSalestrNo"
                      value="00000"
                    />

                    <button
                      type="button"
                      className="cmlike_btn _js_cmlike_btn enp_mobon_wish"
                    >
                      <span className="cmlike_ico">
                        <i className="cmlike_primary_l" />
                        <span className="sr_off">
                          <span className="blind">관심상품 취소</span>
                        </span>
                        <span className="sr_on">
                          <span className="blind">관심상품 등록</span>
                        </span>
                      </span>
                    </button>
                  </span>
                </li>
                <li
                  data-react-unit-type="text"
                  data-react-unit-text='[{"type":"tarea_addt_val","value":"원뎁스_선물하기"}]'
                >
                  <a
                    href="/"
                    className="mndtl_btn type05 line type_gift _js_mndtl_opt_toggle_btn clickable"
                    data-react-tarea="상품상세|옵션바|원뎁스_선물하기"
                    data-react-tarea-dtl-cd="t00060"
                    target="_parent"
                  >
                    <span className="btn_tx">
                      <i className="ico_gift_box_btm" />
                      선물하기
                    </span>
                  </a>
                </li>
                <li
                  data-react-unit-type="text"
                  data-react-unit-text='[{"type":"tarea_addt_val","value":"원뎁스_구매하기"}]'
                >
                  <a
                    href="/"
                    className="mndtl_btn type01 line _js_mndtl_opt_toggle_btn clickable"
                    data-react-tarea="상품상세|옵션바|원뎁스_구매하기"
                    data-react-tarea-dtl-cd="t00060"
                    target="_parent"
                  >
                    <span className="btn_tx">구매하기</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="btm_bgn_in dps2" style={{ display: 'none' }}>
              <ul
                className="btm_bgn_bx"
                id="dps2_gift"
                style={{ display: 'none' }}
              >
                <li
                  data-react-unit-type="text"
                  data-react-unit-text='[{"type":"tarea_addt_val","value":"선물하기"}]'
                >
                  <a
                    href="/"
                    onClick="fn_giftService('10', '12');return false;"
                    className="mndtl_btn type01 clickable"
                    data-react-tarea="상품상세|옵션바|선물하기"
                    data-react-tarea-dtl-cd="t00060"
                    target="_parent"
                  >
                    <span className="btn_tx">선물하기</span>
                  </a>
                </li>
              </ul>
              <ul className="btm_bgn_bx" id="dps2_buy">
                <li
                  data-react-unit-type="item"
                  data-react-unit-id="1000335762677"
                >
                  <a
                    href="/"
                    onClick="fn_SaveCart(this, 'cart', 'floating');return false;"
                    className="mndtl_btn type02 clickable"
                    data-react-tarea="상품상세|옵션바|상품_장바구니 담기"
                    data-react-tarea-dtl-cd="t00002"
                    target="_parent"
                  >
                    <span className="btn_tx">장바구니</span>
                  </a>
                </li>
                <li
                  data-react-unit-type="text"
                  data-react-unit-text='[{"type":"tarea_addt_val","value":"바로구매"}]'
                >
                  <a
                    href="/"
                    onClick="fn_SaveCart(this, 'payment', 'floating');return false;"
                    className="mndtl_btn type01 clickable"
                    data-react-tarea="상품상세|옵션바|바로구매"
                    data-react-tarea-dtl-cd="t00060"
                    target="_parent"
                  >
                    <span className="btn_tx ssgpay">
                      <i className="ico_txt_ssgpay_btm">
                        <span className="blind">SSGPAY.</span>
                      </i>{' '}
                      바로구매
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetailPage;
