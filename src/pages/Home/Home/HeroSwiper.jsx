import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import './style/HeroSwiper.scss';

function HeroSwiper({ datas }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    autoplay: true,
  };
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setProgress(e.activeIndex * 0.333);
  };

  return (
    <div className="cmgrid_full_box">
      <div className="cmhero_banner cmhero_banner_ty_sd_scroll ty_bn100">
        <div className="cmhero_swiper" id="_cmhero_swiper">
          <div className="swiper-container swiper-container-horizontal custom-swiper">
            <Swiper
              style={{ ...settings }}
              onSlideChange={(e) => {
                handleChange(e);
              }}
            >
              {datas &&
                datas.map((data) => (
                  <SwiperSlide key={data.priority}>
                    <li className="swiper-slide">
                      <div className="cmhero_bn">
                        <Link
                          className="cmhero_bnlnk"
                          to="https://m-shinsegaemall.ssg.com/page/giftshop.ssg"
                        >
                          <img
                            className="ssg_lazy"
                            src={data.imgUrl}
                            alt={data.title}
                          />
                        </Link>
                      </div>
                      <div className="cmhero_tit">
                        <Link
                          className="cmhero_titlnk"
                          to="https://m-shinsegaemall.ssg.com/page/giftshop.ssg"
                        >
                          <h3 className="cmhero_titmain">
                            <span className="cmhero_titmain_tx">
                              {data.title}
                            </span>
                          </h3>
                          <div className="cmhero_titsub">
                            <span className="ccmhero_titsub_tx">
                              {data.subTitle}
                            </span>
                          </div>
                        </Link>
                      </div>
                    </li>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="swiper-ctrls">
            <div className="swiper-pagination swiper-pagination-progressbar">
              <span
                className="swiper-pagination-progressbar-fill"
                style={{
                  transform: `translate3d(0px, 0px, 0px) scaleX(${
                    progress + 0.333
                  }) scaleY(1)`,
                  transitionDuration: '300ms',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSwiper;
