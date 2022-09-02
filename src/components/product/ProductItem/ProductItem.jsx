import React from 'react';
import { Link } from 'react-router-dom';
import { LikeButton } from '../../ui/LikeButton';
// import { AdInfo } from '../../ui/AdInfo';
import './ProductItem.scss';

function ProductItem({ data, isWishChange, setIsWishChange }) {
  const {
    productImgOriginName, // 이미지 원본 이름
    // productImgSaveName, // 이미지 저장 이름
    productImgUrl, // 이미지 경로
    productName, // 상품 이름
    productPrice, // 상품 가격
    productProductId, // 상품 id
    productSale, // 상품 할인율
    // productSaleEndDate, // 할인 종료일
    // productSaleStartDate, // 할인 시작일
    productStoreName, // 스토어(브랜드)명
    // productStoreStoreId, // 스토어 id
  } = data.categoryProductDtoRes;
  return (
    <li
      className={
        data
          ? '.cmitem_ty_thmb cmitem_grid_item cunit_ad list-wide'
          : 'cmitem_grid_item cunit_ad'
      }
    >
      <div className="mnsditem_unit">
        <div className="mnsditem_goods  gate_unit">
          <div className="mnsditem_thmb">
            <Link
              to={`/product/${productProductId}`}
              className="mnsditem_thmb_link clickable"
            >
              <div className="mnsditem_thmb_imgbx">
                <img
                  src={productImgUrl}
                  alt={productImgOriginName}
                  className="ssg_lazy mnsditem_thmb_img loaded"
                />
              </div>
            </Link>

            {/* {isAd && <AdInfo />} */}

            <LikeButton
              wishDto={data.wishDto}
              productId={productProductId}
              isWishChange={isWishChange}
              setIsWishChange={setIsWishChange}
            />
          </div>

          {/* 상세 정보 */}
          <div className="mnsditem_detail">
            <div className="mnsditem_maininfo">
              <Link
                to={`/product/${productProductId}`}
                className="mnsditem_maininfo_link"
              >
                <div className="mnsditem_tit">
                  <span className="cm_mall_text">
                    <i className="sm">신세계몰</i>
                  </span>
                  <span className="mnsditem_goods_brand">
                    {productStoreName}
                  </span>
                  <span className="mnsditem_goods_tit">{productName}</span>
                </div>
                <div className="mnsditem_pricewrap">
                  {productSale === 0 ? (
                    <div className="mnsditem_price_row mnsditem_ty_newpr">
                      <div className="new_price">
                        <span className="blind">판매가격</span>
                        <em className="ssg_price">
                          {productPrice.toLocaleString()}
                        </em>
                        <span className="ssg_tx">원</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="mnsditem_price_row mnsditem_ty_oldpr">
                        <div className="old_price">
                          <del>
                            <span className="blind">정상가격</span>
                            <em className="ssg_price">
                              {productPrice.toLocaleString()}
                            </em>
                            <span className="ssg_tx">원</span>
                          </del>
                        </div>
                      </div>
                      <div className="mnsditem_price_row mnsditem_ty_newpr">
                        <div className="new_price">
                          <span className="blind">판매가격</span>
                          <em className="ssg_price">
                            {(
                              (productPrice * (100 - productSale)) /
                              100
                            ).toLocaleString()}
                          </em>
                          <span className="ssg_tx">원</span>
                        </div>
                        <div className="discount_rate">
                          <span className="blind">할인율</span>
                          <span>{productSale}%</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Link>
            </div>
            {data.reviewTotalDto && (
              <div className="mnsditem_sideinfo">
                <div className="mnsditem_review">
                  <div className="mnsditem_review_score">
                    <i
                      className="icon ty_xs icon_star_fill"
                      aria-hidden="true"
                    />
                    <span className="blind">상품평점 5점 만점에</span>
                    {data.reviewTotalDto.reviewAvg}
                  </div>
                  <div className="mnsditem_review_num">
                    <span className="blind">상품평 개수</span>
                    {data.reviewTotalDto.reviewCount}건
                  </div>
                </div>
                {/* ( tagList && (
              <div className="mnsditem_taglist">
                {tagList.map((tag) => (
                  <span key={tag} className="mnsditem_tag">
                    {tag}
                  </span>
                ))}
              </div>
              ) ) */}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
