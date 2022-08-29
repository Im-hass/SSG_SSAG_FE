import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

function HeroSwiper() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    autoplay: true,
  };
  const [good, setGood] = useState([]);

  return (
    <div className="cmgrid_full_box">
      <div className="cmhero_banner cmhero_banner_ty_sd_scroll ty_bn100">
        <div className="cmhero_swiper" id="_cmhero_swiper">
          <div className="swiper-container swiper-container-horizontal">
            <Swiper style={{ ...settings }}>
              {good &&
                good.map((d) => (
                  <SwiperSlide key={d.id}>
                    <li className="swiper-slide">
                      <div className="cmhero_bn">
                        <Link
                          className="cmhero_bnlnk"
                          to="https://m-shinsegaemall.ssg.com/page/giftshop.ssg"
                        >
                          <img
                            className="ssg_lazy"
                            src={d.productNewPhotoPath}
                            alt="명절"
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
                              2022 추석 명절
                            </span>
                          </h3>
                          <div className="cmhero_titsub">
                            <span className="ccmhero_titsub_tx">
                              미리 준비하는 올 추석 명절 선물
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
              <span className="swiper-pagination-progressbar-fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSwiper;
