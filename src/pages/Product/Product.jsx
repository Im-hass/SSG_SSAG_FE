import React from 'react';
import ProductImgHeaderBtn from './Product/ProductImgHeaderBtn';
import ProductSwiper from './Product/ProductSwiper';
import ProductBrand from './Product/ProductBrand';
import ProductCard from './Product/ProductCard';
import ProductCategory from './Product/ProductCategory';
import ProductDetailInfo from './Product/ProductDetailInfo';
import ProductEtcExplain from './Product/ProductEtcExplain';
import ProductEndlessGoods from './Product/ProductEndlessGoods';
import ProductExplain from './Product/ProductExplain';
import ProductManySee from './Product/ProductManySee';
import ProductDetailEtc from './Product/ProductDetailEtc';
import ProductReview from './Product/ProductReview';
import ProductDetailReview from './Product/ProductDetailReview';
import ProductQna from './Product/ProductQna';
import ProductEvent from './Product/ProductEvent';
import ProductSpecial from './Product/ProductSpecial';
import Floating from './Product/Floating';
import ProductToolbar from './Product/ProductToolbar';
import ProductOptBar from './Product/ProductOptBar';
import ShareBtn from './Product/ShareBtn';
import ProductBackButton from './Product/ProductBackButton';
import ProductLikeCouponBtn from './Product/ProductLikeBtn';
import ProductLikeCouponSection from './Product/ProductLikeCouponSection';
import { Header, FloatingContents, Footer } from '../../components/common';

function Product() {
  return (
    <>
      <Header />
      <div id="m_wrap" className="mcom_wrap sm_v3">
        <div id="m_container" className="mcom_container">
          <div className="ly_change">
            <div className="tit_change">
              <h3>대체 상품</h3>
              <a href="/" className="btn_close" target="">
                <span className="blind">닫기</span>
              </a>
            </div>
            <div className="cont_change" style={{ height: '630px' }}>
              <div className="mcom_scroll" />
            </div>
          </div>

          <div id="m_content" className="react-area">
            <div className="mndtl_wrap ty_default">
              <h2 className="blind">상품상세</h2>

              <ProductImgHeaderBtn />
              <ProductSwiper />

              <ProductExplain />

              <ProductCard />

              <div className="mndtl_sec mndtl_cont_wrap" id="detailDescTab">
                <ProductDetailInfo />

                <ProductDetailReview />
                <ProductQna />
                <div className="mndtl_sec_cont">
                  <ProductDetailEtc />

                  <ProductEvent />
                  <ProductCategory />
                  <ProductSpecial />
                </div>

                <div className="mndtl_sec_cont" id="_detailgoods">
                  <div className="mndtl_recommend">
                    <ProductManySee />
                    <ProductBrand />
                  </div>
                </div>
                <ProductEndlessGoods />
              </div>
            </div>
            <ProductReview />
            <ProductReview />
          </div>
          <ProductEtcExplain />
        </div>
        <ProductBackButton />
      </div>
      <ProductOptBar />
      <Floating />
      <ProductToolbar />
      <ProductLikeCouponBtn />
      <ProductLikeCouponSection />
      <ShareBtn />
      <FloatingContents />
      <Footer />
    </>
  );
}

export default Product;
