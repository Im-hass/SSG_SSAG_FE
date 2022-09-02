import React from 'react';
import { Link } from 'react-router-dom';
import { LikeButton } from '../../ui/LikeButton';

function WishItem({ data, isWishChange, setIsWishChange }) {
  const {
    productName,
    productPrice,
    productSale,
    // productSaleStartDate,
    // productSaleEndDate,
    // productImgOriginName,
    // productImgSaveName,
    productImgUrl,
    wishId,
    productProductId,
    // productStoreStoreId,
    productStoreName,
  } = data;
  const wishDto = {
    wishId,
  };

  return (
    <li className="cmitem_grid_item clip-chk">
      <div className="cmitem_unit">
        <div className="cmitem_helper">
          <div className="cmitem_helper_el cmitem_chk">
            <input type="checkbox" id="_thmb_1" className="cmitem_chk_inp" />
            <label htmlFor="_thmb_1" className="cmitem_chk_lbl">
              <span className="blind">{productName}</span>
            </label>
          </div>
        </div>

        <div className="cmitem_goods">
          <div className="cmitem_thmb">
            <Link
              to={`/product/${productProductId}`}
              className="cmitem_thmb_link clickable"
            >
              <div className="cmitem_thmb_imgbx">
                <img
                  src={`${productImgUrl}`}
                  alt={`${productName}`}
                  className="ssg_lazy cmitem_thmb_img loaded"
                />
              </div>
            </Link>
          </div>
          <div className="cmitem_detailbx">
            <div className="cmitem_tx_thmb">
              <div className="cmitem_mall">
                <div className="cmitem_btn_wrap">
                  <LikeButton
                    wishDto={wishDto}
                    productId={productProductId}
                    isWishChange={isWishChange}
                    setIsWishChange={setIsWishChange}
                  />
                  <button type="button" className="cmitem_btn_cart clickable">
                    <span className="blind">장바구니 담기</span>
                  </button>
                  {/* <span style="display:none" class="disp_cart_data" data-cart-type="10"
                        data-cart-inflo-site-no="6005"
                        data-cart-ordqty="1">{"advertBidId":"","giftBtnShowType":"","giftBtnActType":"N","itemChrctDivCd":"10","itemLnkd":"https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000075842938&amp;siteNo=6004&amp;salestrNo=6005","giftBtnMsg":"선물하기
                        불가 상품
                        입니다.","bothSsgMorningShppYn":"N","goItemDetailYn":"Y","drctPurchYn":"N","itemId":"1000075842938","dealItemYn":"Y","advertExtensTeryDivCd":"","cleaningLabYn":"N","siteNo":"6004","useForcedSsg":"N","cartPsblType":"","uitemId":"00000","infloSiteNo":"6005","salestrNo":"6005","msgItemDetail":"이
                        상품은 옵션이 있는 상품 입니다.\n상품상세에서 옵션을 선택해주세요."}</span> */}
                </div>
              </div>
              <Link
                to={`/product/${productProductId}`}
                className="cmitem_tx_thmb_link clickable"
              >
                <div className="cmitem_tit">
                  <span className="cm_mall_text">
                    <i className="sm">{productStoreName}</i>
                  </span>
                  <span className="cmitem_goods_tit">{productName}</span>
                </div>
                <div className="cmitem_pricewrap">
                  <div className="cmitem_price_row cmitem_ty_newpr">
                    <div className="new_price">
                      <span className="blind">판매가격</span>
                      <em className="ssg_price">
                        {(
                          (productPrice * (100 - productSale)) /
                          100
                        ).toLocaleString()}
                      </em>
                      <span className="ssg_tx">
                        원<span className="cm_tx_opt">~</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="cmitem_sideinfo">
              <div className="cmitem_benefit_lst">
                <div className="cmitem_review">
                  <div className="cmitem_review_score">
                    <i
                      className="icon ty_xs icon_star_fill"
                      aria-hidden="true"
                    />
                    <span className="blind">상품평점 5점 만점에</span>
                    {/* 상품평 */}
                    4.6
                  </div>
                  <div className="cmitem_review_num">
                    <span className="blind">상품평 개수</span>
                    {/* 상품평 개수 */}
                    149건
                  </div>
                </div>

                {/* tag */}
                {/* <div className="cmitem_sideinfo_block">
                  <span className="cmitem_tag">해피라운지</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default WishItem;
