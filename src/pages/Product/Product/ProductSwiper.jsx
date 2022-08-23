import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style/ProductSwiper.scss';

const PRODUCT_DATA = [
  {
    id: 1,
    imgUrl: 'https://sitem.ssgcdn.com/84/14/07/item/1000309071484_i1_750.jpg',
    imgAlt: '추가3이미지',
    class: 'swiper-slide swiper-slide-duplicate swiper-slide-prev',
  },
  {
    id: 2,
    imgUrl: 'https://sitem.ssgcdn.com/84/14/07/item/1000309071484_i4_750.jpg',
    imgAlt: '대표이미지',
    class: 'swiper-slide swiper-slide-active',
  },
  {
    id: 3,
    imgUrl: 'https://sitem.ssgcdn.com/84/14/07/item/1000309071484_i2_750.jpg',
    imgAlt: '추가1이미지',
    class: 'swiper-slide swiper-slide-next',
  },
  {
    id: 4,
    imgUrl: 'https://sitem.ssgcdn.com/84/14/07/item/1000309071484_i3_750.jpg',
    imgAlt: '추가2이미지',
    class: 'swiper-slide',
  },
];

function ProductSwiper() {
  return (
    <div className="mndtl_swiper_wrap">
      <Swiper className="mndtl_swiper swiper-container-horizontal swiper-container-android">
        <ul
          className="mndtl_swiper_list swiper-wrapper"
          style={{
            transitionDuration: '0ms',
            transform: 'translate3d(-390px, 0px, 0px)',
          }}
        >
          {PRODUCT_DATA.map((data, i) => (
            <SwiperSlide
              key={data.id}
              className={data.class}
              style={{ width: '390px' }}
            >
              <img src={data.imgUrl} alt={data.imgAlt} />
              <div className="product_img_pagination">
                <span>{i + 1 < 10 ? `0${i + 1}` : i}</span>
                <span>/</span>
                <span>
                  {PRODUCT_DATA.length < 10
                    ? `0${PRODUCT_DATA.length}`
                    : PRODUCT_DATA.length}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>

      <div className="mndtl_ic_badge">
        <div className="ic_left_bottom" data-react-unit-type="text">
          <a
            href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000310147566&amp;src_area=ssglensdetail"
            className="mndtl_btn_lens clickable"
            target="_parent"
          >
            <em className="mndtl_ic mndtl_ic_lens" />
            <em className="blind">SSG.lens 바로가기</em>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductSwiper;
