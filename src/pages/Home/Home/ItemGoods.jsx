import React from 'react';
import { Link } from 'react-router-dom';

function ItemGoods({ data }) {
  const {
    happyLoungeImgDto,
    // imgOriginName,
    // imgSaveName,
    imgUrl,
    name,
    price,
    productId,
    // sale,
    // saleEndDate,
    // saleStartDate,
  } = data;
  return (
    <div
      className="cmgrid_full_box cmitem_ty_deal v2 "
      data-page-set-id="112"
      data-has-next="false"
    >
      <div className="cmitem_unit " data-unittype="item">
        <div className="cmitem_goods ">
          <div className="cmitem_gridbx ty_rect">
            <div className="cmitem_thmb">
              <Link
                to={`/product/${productId}`}
                className="cmitem_thmb_link clickable"
              >
                <div className="cmitem_thmb_imgbx">
                  <img
                    className="cmitem_thmb_img"
                    src={`${imgUrl}`}
                    alt={`${name}`}
                  />
                </div>
              </Link>
            </div>
            <div className="cmitem_other">
              <ul className="cmitem_other_list ty_full">
                {happyLoungeImgDto.length !== 0 &&
                  happyLoungeImgDto.map((img) => (
                    <li key={`${img.thumbnailImgId}`}>
                      <Link to={`/product/${productId}`}>
                        <div className="cmitem_other_thmb">
                          <img
                            src={`${img.imgUrl}`}
                            alt={`${img.originName}`}
                          />
                        </div>
                      </Link>
                    </li>
                  ))}
                <li>
                  <Link to={`/product/${productId}`} className="clickable">
                    <div className="cmitem_other_thmb ty_more">
                      <i
                        className="icon ty_xs icon_plusmark"
                        aria-hidden="true"
                      />
                      <span className="blind">상품 더보기</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="cmitem_detailbx ty_deal_text2">
            <div className="cmitem_tx_thmb">
              <Link
                to={`/product/${productId}`}
                className="cmitem_tx_thmb_link clickable"
              >
                <div className="cmitem_tit_selling">
                  <span className="cmitem_tit_txt1">{name}</span>
                  <span className="cmitem_tit_txt2">BEST 아이템 제안</span>
                </div>
                <div className="cmitem_tit">
                  <span className="cm_mall_text">
                    <i className="sm">신세계몰</i>
                  </span>
                  <span className="cmitem_goods_tit">
                    [브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50
                    원피스/반팔티 外{/* desc */}
                  </span>
                </div>
                <div className="cmitem_pricewrap ty_smcolor">
                  <div className="cmitem_price_row cmitem_ty_newpr">
                    <div className="new_price">
                      <span className="blind">판매가격</span>
                      <em className="ssg_price">{price.toLocaleString()}</em>
                      <span className="ssg_tx">
                        원<span className="cm_tx_opt">~</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="cmitem_row_control">
              <div className="cmitem_sideinfo_block">
                <span className="cmitem_tag ty_deal ty_outline">
                  2,842개 구매중
                </span>
              </div>
              <div className="cmitem_btn_wrap">
                <span className="cmlike _js_cmlike interestIt">
                  <input type="hidden" name="attnDivCd" value="10" />
                  <input type="hidden" name="attnDivDtlCd" value="10" />
                  <input type="hidden" name="siteNo" value="6004" />
                  <input
                    type="hidden"
                    name="attnTgtIdnfNo1"
                    value="1000034164356"
                  />
                  <input type="hidden" name="attnTgtIdnfNo2" value="6005" />
                  <input type="hidden" name="uitemId" value="00000" />
                  <input
                    type="hidden"
                    name="notiTitle"
                    value="[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外"
                  />
                  <input
                    type="hidden"
                    name="notiImgPath"
                    value="//sitem.ssgcdn.com/56/43/16/item/1000034164356_i1_500.jpg"
                  />
                  <input type="hidden" name="checked" value="N" />
                  <input type="hidden" name="useForcedSsgYn" value="N" />
                  {/* <button
                    type="button"
                    className="cmlike_btn _js_cmlike_btn clickable"
                    data-position="clip"
                    data-react-tarea="홈|해피라운지_상품|상품_좋아요|[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外_"
                    data-react-tarea-dtl-cd="t00003"
                  >
                    <span className="cmlike_ico">
                      <i className="cmlike_primary_m" />
                      <span className="sr_off">
                        <span className="blind">관심상품 취소</span>
                      </span>
                      <span className="sr_on">
                        <span className="blind">관심상품 등록</span>
                      </span>
                    </span>
                  </button> */}
                </span>
                <button type="button" className="cmitem_btn_cart clickable">
                  <span className="blind">장바구니 담기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemGoods;
