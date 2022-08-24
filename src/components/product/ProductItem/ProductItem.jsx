import React from 'react';
import { Link } from 'react-router-dom';
import { LikeButton } from '../../ui/LikeButton';
import { AdInfo } from '../../ui/AdInfo';
import './ProductItem.scss';

function ProductItem({ hasResult, datas }) {
  const {
    isAd,
    productId,
    imgUrl,
    imgTxt,
    brandTxt,
    productName,
    originalPrice,
    discountPrice,
    discountRate,
    reviewScore,
    reviewNum,
    tagList,
  } = datas;

  return (
    <li
      className={
        hasResult
          ? '.cmitem_ty_thmb cmitem_grid_item cunit_ad list-wide'
          : 'cmitem_grid_item cunit_ad'
      }
    >
      <div className="mnsditem_unit">
        {/* <div className="mnsditem_helper" /> */}
        <div className="mnsditem_goods  gate_unit">
          <div className="mnsditem_thmb">
            <Link
              to={`/product/${productId}`}
              // onClick="ssg_ad.adClick(this, {position:'view'});"
              className="mnsditem_thmb_link clickable"
            >
              <div className="mnsditem_thmb_imgbx">
                <img
                  src={imgUrl}
                  alt={imgTxt}
                  className="ssg_lazy mnsditem_thmb_img loaded"
                />
              </div>
            </Link>

            {isAd && <AdInfo />}

            <LikeButton />
          </div>

          {/* 상세 정보 */}
          <div className="mnsditem_detail">
            <div className="mnsditem_maininfo">
              <Link
                to={`/product/${productId}`}
                className="mnsditem_maininfo_link"
              >
                <div className="mnsditem_tit">
                  <span className="cm_mall_text">
                    <i className="sm">신세계몰</i>
                  </span>
                  <span className="mnsditem_goods_brand">{brandTxt}</span>
                  <span className="mnsditem_goods_tit">{productName}</span>
                </div>
                <div className="mnsditem_pricewrap">
                  {discountPrice === 0 ? (
                    <div className="mnsditem_price_row mnsditem_ty_newpr">
                      <div className="new_price">
                        <span className="blind">판매가격</span>
                        <em className="ssg_price">{originalPrice}</em>
                        <span className="ssg_tx">원</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="mnsditem_price_row mnsditem_ty_oldpr">
                        <div className="old_price">
                          <del>
                            <span className="blind">정상가격</span>
                            <em className="ssg_price">{originalPrice}</em>
                            <span className="ssg_tx">원</span>
                          </del>
                        </div>
                      </div>
                      <div className="mnsditem_price_row mnsditem_ty_newpr">
                        <div className="new_price">
                          <span className="blind">판매가격</span>
                          <em className="ssg_price">{discountPrice}</em>
                          <span className="ssg_tx">원</span>
                        </div>
                        <div className="discount_rate">
                          <span className="blind">할인율</span>
                          <span>{discountRate}%</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Link>
            </div>
            <div className="mnsditem_sideinfo">
              <div className="mnsditem_review">
                <div className="mnsditem_review_score">
                  <i className="icon ty_xs icon_star_fill" aria-hidden="true" />
                  <span className="blind">상품평점 5점 만점에</span>
                  {reviewScore}
                </div>
                <div className="mnsditem_review_num">
                  <span className="blind">상품평 개수</span>
                  {reviewNum}건
                </div>
              </div>
              ( tagList && (
              <div className="mnsditem_taglist">
                {tagList.map((tag) => (
                  <span key={tag} className="mnsditem_tag">
                    {tag}
                  </span>
                ))}
              </div>
              ) )
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
