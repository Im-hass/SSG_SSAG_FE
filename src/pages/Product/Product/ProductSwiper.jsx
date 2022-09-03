import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style/ProductSwiper.scss';

function ProductSwiper({ productData }) {
  const productImgs = productData.productImg;

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
          {productImgs.map((img, i) => (
            <SwiperSlide key={img.productImgId} style={{ width: '390px' }}>
              <img src={img.imgUrl} alt={img.originName} />
              <div className="product_img_pagination">
                <span>{i + 1 < 10 ? `0${i + 1}` : i}</span>
                <span>/</span>
                <span>
                  {productImgs.length < 10
                    ? `0${productImgs.length}`
                    : productImgs.length}
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
