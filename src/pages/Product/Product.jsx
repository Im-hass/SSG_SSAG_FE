import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Header, FloatingContents, Footer } from '../../components/common';

import ProductImgHeaderBtn from './Product/ProductImgHeaderBtn';
import ProductSwiper from './Product/ProductSwiper';
import ProductBrand from './Product/ProductBrand';
import ProductEtcExplain from './Product/ProductEtcExplain';
import ProductEndlessGoods from './Product/ProductEndlessGoods';
import ProductExplaination from './Product/ProductExplaination';
import ProductManySee from './Product/ProductManySee';
import ProductQna from './Product/ProductQna';
import ProductToolbar from './Product/ProductToolbar';
import ProductOptBar from './Product/ProductOptBar';
import ShareBtn from './Product/ShareBtn';
import ProductBackButton from './Product/ProductBackButton';
import ProductLikeCouponBtn from './Product/ProductLikeBtn';
import ProductLikeCouponSection from './Product/ProductLikeCouponSection';
import ProductInfo from './Product/ProductInfo';
import ProductAlert from './Product/ProductAlert';
import ProductDetailInfo from './Product/ProductDetailInfo';
import ProductReviewRate from './Product/ProductReviewRate';
import ProductReviewGraph from './Product/ProductReviewGraph';
import ProductReviewPhotos from './Product/ProductReviewPhotos';
import ProductReviewSummary from './Product/ProductReviewSummary';
import ProductEtc from './Product/ProductEtc';
import ProductBanners from './Product/ProductBanners';
import ProductStoreInfo from './Product/ProductStoreInfo';
import ProductDetailCategory from './Product/ProductDetailCategory';

function Product() {
  const [productData, setProductData] = useState(null);
  const [productDetailData, setProductDetailData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(productData);
  const { productId } = useParams();
  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      Authorization: JSON.parse(token),
    },
  };
  const loginedUrl = `http://13.209.26.150:9000/users/products/info/${productId}`;
  const notLoginedUrl = `http://13.209.26.150:9000/non-users/products/info/${productId}`;
  const detailInfoUrl = `http://13.209.26.150:9000/comm-users/products/detail-info/${productId}`;

  const fetchProductData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(token ? loginedUrl : notLoginedUrl, headers);
      console.log('product response:', res);
      setProductData(res.data.result);
    } catch (err) {
      console.log('product error:', err);
    }
    setIsLoading(false);
  };

  const fetchProductDetailData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(detailInfoUrl, headers);
      console.log('pdt detail response:', res);
      setProductDetailData(res.data.result);
    } catch (err) {
      console.log('pdt detail error:', err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProductData();
    fetchProductDetailData();
  }, []);

  if (isLoading) return <div>로딩 중</div>;
  if (!productData) return <div>데이터 없음</div>;

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
              <ProductImgHeaderBtn />
              <ProductSwiper productData={productData} />
              <ProductExplaination productData={productData} />
              <ProductInfo />

              <div className="mndtl_sec mndtl_cont_wrap" id="detailDescTab">
                <div className="mndtl_sec_cont" id="_detailgoods">
                  <ProductAlert />
                  <div className="mndtl_sec_subject">
                    <h3 className="mndtl_sec_tit">상세정보</h3>
                  </div>
                  <ProductDetailInfo productDetailData={productDetailData} />
                </div>

                <div
                  className="mndtl_sec_cont"
                  id="_detailreview"
                  data-react-tarea-cd="00006_000000007"
                >
                  <div className="mndtl_sec_subject">
                    <h3 className="mndtl_sec_tit">고객리뷰</h3>
                  </div>
                  <div className="mndtl_review_wrap">
                    <ProductReviewRate productData={productData} />
                    <ProductReviewGraph />
                    <ProductReviewPhotos />
                    <ProductReviewSummary productData={productData} />
                  </div>
                </div>

                <div
                  className="mndtl_sec_cont"
                  id="_detailqna"
                  data-react-tarea-cd="00006_000000003"
                >
                  <div className="mndtl_sec_subject">
                    <h3 className="mndtl_sec_tit">Q&amp;A 문의</h3>
                    <div className="mndtl_qna_btnarea">
                      <a href="/" className="mndtl_qna_btn">
                        <span
                          className="clickable"
                          data-react-tarea-dtl-cd="t00060"
                        >
                          문의하기
                        </span>
                      </a>
                    </div>
                  </div>
                  <ProductQna />
                </div>

                <div
                  className="mndtl_sec_cont"
                  data-react-tarea-cd="00006_000000014"
                >
                  <ProductEtc />
                  <ProductBanners />
                  <ProductDetailCategory />
                  <ProductStoreInfo productData={productData} />
                </div>

                <div className="mndtl_recommend">
                  <ProductManySee />
                  <ProductBrand />
                </div>
                <ProductEndlessGoods />
              </div>
            </div>
          </div>
          <ProductEtcExplain />
        </div>
        <ProductBackButton />
      </div>
      <ProductOptBar />
      <ProductToolbar productData={productData} />
      <ProductLikeCouponBtn />
      <ProductLikeCouponSection />
      <ShareBtn />
      <FloatingContents />
      <Footer />
    </>
  );
}

export default Product;
