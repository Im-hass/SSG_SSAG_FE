import React from 'react';
import { Link } from 'react-router-dom';
import './HappyLounge.scss';

function HappyLounge() {
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
                to="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000034164356&amp;siteNo=6004&amp;salestrNo=6005"
                className="cmitem_thmb_link clickable"
                data-react-tarea="홈|해피라운지_상품|상품_클릭|[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外"
              >
                <div className="cmitem_thmb_imgbx">
                  <img
                    className="cmitem_thmb_img"
                    src="//sitem.ssgcdn.com/56/43/16/item/1000034164356_i1_500.jpg"
                    alt="[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外"
                    onError="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=750&amp;h=750&amp;t=c2263a66513593c6b20520cc593b018cbac57806'"
                  />
                </div>
              </Link>
            </div>
            <div className="cmitem_other">
              <ul className="cmitem_other_list ty_full">
                <li>
                  <Link to="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000034164356&amp;siteNo=6004&amp;salestrNo=6005&amp;dealCmptItemId=">
                    <div className="cmitem_other_thmb">
                      <img
                        src="https://sitem.ssgcdn.com/19/30/17/item/1000413173019_i1_150.jpg"
                        alt="다른 옵션 이미지"
                        onError="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=75&amp;h=75&amp;t=781223af222f4db27c6e21aadb6e00f614598dab'"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000034164356&amp;siteNo=6004&amp;salestrNo=6005&amp;dealCmptItemId=">
                    <div className="cmitem_other_thmb">
                      <img
                        src="https://sitem.ssgcdn.com/84/95/32/item/1000388329584_i1_150.jpg"
                        alt="다른 옵션 이미지"
                        onError="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=75&amp;h=75&amp;t=781223af222f4db27c6e21aadb6e00f614598dab'"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000034164356&amp;siteNo=6004&amp;salestrNo=6005&amp;dealCmptItemId=">
                    <div className="cmitem_other_thmb">
                      <img
                        src="https://sitem.ssgcdn.com/55/21/84/item/1000064842155_i1_150.jpg"
                        alt="다른 옵션 이미지"
                        onError="this.onerror=this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=75&amp;h=75&amp;t=781223af222f4db27c6e21aadb6e00f614598dab'"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <a
                    to="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000034164356&amp;siteNo=6004&amp;salestrNo=6005"
                    className="clickable"
                    data-react-tarea="홈|해피라운지_상품|상품_클릭|[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外"
                  >
                    <div className="cmitem_other_thmb ty_more">
                      <i
                        className="icon ty_xs icon_plusmark"
                        aria-hidden="true"
                      />
                      <span className="blind">상품 더보기</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* desc */}
          {/* <div class="cmitem_detailbx ty_deal_text2">
          <div class="cmitem_tx_thmb">
          <a href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000034164356&amp;siteNo=6004&amp;salestrNo=6005" class="cmitem_tx_thmb_link clickable" data-react-tarea="홈|해피라운지_상품|상품_클릭|[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外">
          <div class="cmitem_tit_selling">
          <span class="cmitem_tit_txt1">조아맘/시크폭스 外</span>
          <span class="cmitem_tit_txt2">BEST 아이템 제안</span>
          </div>
          <div class="cmitem_tit">
          <span class="cm_mall_text"><i class="sm">신세계몰</i></span>
          <span class="cmitem_goods_tit">[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外</span>
          </div>
          <div class="cmitem_pricewrap ty_smcolor">
          <div class="cmitem_price_row cmitem_ty_newpr">
          <div class="new_price">
          <span class="blind">판매가격</span>
          <em class="ssg_price">15,486</em><span class="ssg_tx">원<span class="cm_tx_opt">~</span></span>
          </div>
          </div>
          </div>
          </a>
          </div>
          <div class="cmitem_row_control">
          <div class="cmitem_sideinfo_block">
          <span class="cmitem_tag ty_deal ty_outline">2,871개 구매중</span>
          </div>
          <div class="cmitem_btn_wrap">
          <span class="cmlike _js_cmlike interestIt">
          <input type="hidden" name="attnDivCd" value="10">
          <input type="hidden" name="attnDivDtlCd" value="10">
          <input type="hidden" name="siteNo" value="6004">
          <input type="hidden" name="attnTgtIdnfNo1" value="1000034164356">
          <input type="hidden" name="attnTgtIdnfNo2" value="6005">
          <input type="hidden" name="uitemId" value="00000">
          <input type="hidden" name="notiTitle" value="[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外">
          <input type="hidden" name="notiImgPath" value="//sitem.ssgcdn.com/56/43/16/item/1000034164356_i1_500.jpg">
          <input type="hidden" name="checked" value="N">
          <input type="hidden" name="useForcedSsgYn" value="N">
          <button class="cmlike_btn _js_cmlike_btn clickable" data-position="clip" data-react-tarea="홈|해피라운지_상품|상품_좋아요|[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外_" data-react-tarea-dtl-cd="t00003">
          <span class="cmlike_ico">
          <i class="cmlike_primary_m"></i>
          <span class="sr_off"><span class="blind">관심상품 취소</span></span>
          <span class="sr_on"><span class="blind">관심상품 등록</span></span>
          </span>
          </button>
          </span><button class="cmitem_btn_cart clickable" onclick="frontCommCart.put(this, '');" data-react-tarea="홈|해피라운지_상품|상품_장바구니담기|[브리치] 오늘의 베스트! 시원한 썸머 데일리룩 BEST50 원피스/반팔티 外"><span class="blind">장바구니 담기</span></button>
          <span style="display: none" class="disp_cart_data" data-cart-type="10" data-cart-inflo-site-no="6004" data-cart-ordqty="1">{"advertBidId":"","giftBtnShowType":"","giftBtnActType":"N","itemChrctDivCd":"10","itemLnkd":"https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000034164356&amp;siteNo=6004&amp;salestrNo=6005","giftBtnMsg":"선물하기 불가 상품 입니다.","bothSsgMorningShppYn":"N","goItemDetailYn":"Y","drctPurchYn":"N","itemId":"1000034164356","dealItemYn":"Y","advertExtensTeryDivCd":"","cleaningLabYn":"N","siteNo":"6004","useForcedSsg":"N","cartPsblType":"","uitemId":"00000","infloSiteNo":"6004","salestrNo":"6005","msgItemDetail":"이 상품은 옵션이 있는 상품 입니다.\n상품상세에서 옵션을 선택해주세요."}</span>
          </div>
          </div>
          </div> */}
          {/* desc */}
        </div>
      </div>
    </div>
  );
}

export default HappyLounge;
