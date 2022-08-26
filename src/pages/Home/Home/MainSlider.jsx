import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style/MainSlider.scss';
import axios from 'axios';

function MainSlider() {
  const [mainSlider, setMainSlider] = useState([]);
  const [imgIdx, setImgIdx] = useState(0);
  const DELAY = 2500;
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setImgIdx((prevIdx) =>
        prevIdx === mainSlider.length - 1 ? 0 : prevIdx + 1,
      );
    }, DELAY);
    return () => resetTimeout();
  }, [imgIdx]);

  useEffect(() => {
    axios
      .get('http://13.209.26.150:9000/comm-users/main-banner')
      .then((res) => {
        console.log('get result:', res);
        setMainSlider(res.data.result);
      })
      .catch((err) => console.log('get result:', err));
  }, []);

  const useScroll = () => {
    const [state, setState] = useState({
      y: 0,
    });
    const onScroll = () => {
      setState({ y: window.scrollY });
    };
    useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return state;
  };
  const { y } = useScroll();
  let cal = 1 - y / 400;
  if (cal < 0) {
    cal = 0;
  } else if (cal > 1) {
    cal = 1;
  }

  return (
    <div className="smhero_banner_wrap">
      <div
        id="smhero_banner"
        className="smhero_banner"
        style={{ opacity: cal }}
      >
        <div className="smhero_swiper">
          <div className="swiper-container swiper-container-horizontal swiper-container-autoheight">
            <Swiper
              style={{
                transform: `translate3d(${-imgIdx * 100}%, 0, 0)`,
                transition: 'all 0.3s ease-in-out',
              }}
            >
              {mainSlider &&
                mainSlider.map((m, index) => (
                  <SwiperSlide key={m.mainBannerId}>
                    <li className="swiper-slide swiper-slide-duplicate">
                      <div className="smhero_bn gate_unit">
                        <div className="cmitem_tt_adinfo ssg-tooltip-wrap">
                          <a
                            // href="#"
                            href="/"
                            className="cmitem_btn_tt_adinfo ssg-tooltip"
                          >
                            <span className="blind">광고 안내 툴팁</span>
                          </a>
                          <div className="cmitem_tt_adinfo_layer ssg-tooltip-layer">
                            검색어와 관련된 상품으로 입찰가순으로 전시됩니다.
                            <button
                              type="button"
                              className="cmitem_close_tt_adinfo ssg-tooltip-close"
                            >
                              <span className="blind">광고 안내 툴팁 닫기</span>
                            </button>
                          </div>
                        </div>
                        <Link to="/" className="smhero_bnlink">
                          <div className="smhero_thumb">
                            <img src={m.imgUrl} alt={m.originName} />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                {m.title}
                              </span>
                              <span className="smhero_titmain_tx" />
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                {m.content}
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <div className="swiper-pagination swiper-pagination-custom">
                      <span className="blind">현재 배너</span>
                      <span className="swiper-pagination-current">
                        {index + 1}
                      </span>
                      <span className="swiper-pagination-separator">-</span>
                      <span className="blind">전체 배너</span>
                      <span className="swiper-pagination-total">
                        {mainSlider.length}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className="swiper-ctrls">
            <div className="swiper_autoplay">
              {/* <button
                  onClick={handleAutoBtn}
                  type="button"
                  className="btn_autoplay pause"
                >
                  <span className="label_pause">
                    <span className="blind">배너 목록 자동 재생 정지</span>
                  </span>
                  <span className="label_play">
                    <span className="blind">배너 목록 자동 재생 시작</span>
                  </span>
                </button> */}
            </div>
            <div className="swiper_moreview">
              <button type="button" className="btn_moreview">
                <span className="blind">배너 전체보기</span>
              </button>
            </div>
          </div>
        </div>

        {/* 클릭하면 나오는거 */}
        <div
          className="smhero_viewer"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="smhero_wrap" role="document">
            <div className="smhero_scroll">
              <div className="smhero_head">
                <h3 className="smhero_head_tit">전체보기</h3>
                <button type="button" className="smhero_close">
                  <span className="blind">배너 전체보기 닫기</span>
                </button>
              </div>
              <div className="smhero_cont">
                <ul className="smhero_bnlist">
                  <li>
                    <div className="smhero_bn gate_unit">
                      <div className="cmitem_tt_adinfo ssg-tooltip-wrap">
                        <a
                          href="/"
                          className="cmitem_btn_tt_adinfo ssg-tooltip"
                        >
                          <span className="blind">광고 안내 툴팁</span>
                        </a>
                        <div className="cmitem_tt_adinfo_layer ssg-tooltip-layer">
                          검색어와 관련된 상품으로 입찰가순으로 전시됩니다.
                          <button
                            type="button"
                            className="cmitem_close_tt_adinfo ssg-tooltip-close"
                          >
                            <span className="blind">광고 안내 툴팁 닫기</span>
                          </button>
                        </div>
                      </div>
                      <a href="/" className="smhero_bnlink">
                        <div className="smhero_thumb">
                          <img
                            className="ssg_lazy"
                            src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                            alt="더운 여름 시원하게"
                          />
                        </div>
                        <div className="smhero_tit">
                          <h3 className="smhero_titmain">
                            <span className="smhero_titmain_tx">
                              더운 여름 시원하게
                            </span>
                            <span className="smhero_titmain_tx" />
                          </h3>
                          <div className="smhero_titsub">
                            <span className="csmhero_titsub_tx">
                              위니아 브랜드위크
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
                        href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001250"
                      >
                        <div className="smhero_thumb">
                          <img
                            className="ssg_lazy"
                            src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                            alt="메타버쓱 오픈런 사전 행사"
                          />
                        </div>
                        <div className="smhero_tit">
                          <h3 className="smhero_titmain">
                            <span className="smhero_titmain_tx">
                              메타버쓱 오픈런 사전 행사
                            </span>
                            <span className="smhero_titmain_tx" />
                          </h3>
                          <div className="smhero_titsub">
                            <span className="csmhero_titsub_tx">
                              오픈런은 처음이시죠? 참여만 해도 S머니 증정!
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
                            alt="오늘 스마일클럽 장보기 10%적립"
                          />
                        </div>
                        <div className="smhero_tit">
                          <h3 className="smhero_titmain">
                            <span className="smhero_titmain_tx">
                              오늘 스마일클럽 장보기 10%적립
                            </span>
                            <span className="smhero_titmain_tx" />
                          </h3>
                          <div className="smhero_titsub">
                            <span className="csmhero_titsub_tx">
                              뷰티 50% 매일 선착순 할인쿠폰!
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
  );
}

export default MainSlider;
