import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function ProductSwiper() {
  return (
    <div className="mndtl_swiper_wrap">
      <div className="mndtl_swiper swiper-container-horizontal swiper-container-android">
        <Slider>
          <div>
            <li
              className="swiper-slide swiper-slide-duplicate"
              id="itemImg4"
              style={{ width: '404px' }}
            >
              <img
                className="swiper-lazy swiper-lazy-loaded"
                src="https://sitem.ssgcdn.com/66/75/14/item/1000310147566_i5_750.jpg"
                alt="상품이미지5"
                oneError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
              />
            </li>
          </div>
          <div>
            <li
              className="swiper-slide swiper-slide-duplicate"
              id="itemImg0"
              style={{ width: '404px' }}
            >
              <img
                src="https://sitem.ssgcdn.com/66/75/14/item/1000310147566_i1_750.jpg"
                alt="대표이미지"
                oneError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
              />
            </li>
          </div>
          <div>
            <li
              className="swiper-slide swiper-slide-duplicate"
              id="itemImg1"
              style={{ width: '404px' }}
            >
              <img
                className="swiper-lazy swiper-lazy-loaded"
                src="https://sitem.ssgcdn.com/66/75/14/item/1000310147566_i2_750.jpg"
                alt="상품이미지2"
                oneError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
              />
            </li>
          </div>
          <div>
            <li
              className="swiper-slide swiper-slide-duplicate"
              id="itemImg2"
              style={{ width: '404px' }}
            >
              <img
                className="swiper-lazy"
                src="https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806"
                alt="상품이미지3"
                oneError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
              />
            </li>
          </div>
          <div>
            <li
              className="swiper-slide swiper-slide-duplicate"
              id="itemImg3"
              style={{ width: '404px' }}
            >
              <img
                className="swiper-lazy"
                src="https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806"
                alt="상품이미지4"
                oneError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
              />
            </li>
          </div>
          <div>
            <li
              className="swiper-slide swiper-slide-duplicate-prev"
              id="itemImg4"
              style={{ width: '404px' }}
            >
              <img
                className="swiper-lazy swiper-lazy-loaded"
                src="https://sitem.ssgcdn.com/66/75/14/item/1000310147566_i5_750.jpg"
                alt="상품이미지5"
                oneError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
              />
            </li>
          </div>
          <div>
            <li
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              id="itemImg0"
              style={{ width: '404px' }}
            >
              <img
                src="https://sitem.ssgcdn.com/66/75/14/item/1000310147566_i1_750.jpg"
                alt="대표이미지"
                oneError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
              />
            </li>
          </div>
        </Slider>
        <div className="mndtl_swiper_pagination swiper-pagination-custom">
          <div className="mndtl_swiper_pagenum">
            <span className="blind">현재 슬라이드</span>
            <span className="on">01/</span>
            <span className="blind">전체 슬라이드</span>
            <span className="">05</span>
          </div>
        </div>
      </div>

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
