import React from 'react';

function ProductEndlessGoods() {
  return (
    <div className="mndtl_sec_cont" id="_endlessgoods">
      <div className="mndtl_recommend">
        <div className="mndtl_sec_bx">
          <div className="mndtl_rectit_tytext">
            <a href="/" className="mndtl_rectit_text">
              <span className="mndtl_rectit_text_tx">
                이런 상품은 어떠세요?
              </span>
            </a>
            <div className="mndtl_rectit_text_subtx">
              지금 본 상품과 연관된 상품입니다.
            </div>
          </div>

          <div className="cmitem_grid">
            <ul
              id="infinite-container"
              className="cmitem_grid_lst mnsditem_ty_thmb"
            >
              {/* 여기서부터 반복 */}

              <li className="cmitem_grid_item">
                <div className="mnsditem_unit">
                  <div className="mnsditem_helper" />
                  <div className="mnsditem_goods">
                    <div className="mnsditem_thmb">
                      <a
                        href="https://m-premiumoutlets.ssg.com/item/itemView.ssg?itemId=1000362395822&amp;siteNo=7008&amp;salestrNo=6005&amp;click=itemMidArea15"
                        className="mnsditem_thmb_link clickable"
                        target="_parent"
                      >
                        <div className="mnsditem_thmb_imgbx">
                          <img
                            src="//sitem.ssgcdn.com/57/04/90/item/1000057900457_i1_187.jpg"
                            alt="[파주점] 레이밴 선글라스 RB3595 9013/13"
                            onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                            className="ssg_lazy mnsditem_thmb_img"
                          />
                        </div>
                      </a>
                      <div className="mnsditem_thmb_ctrl">
                        <a
                          href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000362395822&amp;src_area=ssglens"
                          className="mnsditem_btn_lens clickable"
                          target="_parent"
                        >
                          <span className="blind">
                            이 상품 이미지로 검색하기
                          </span>
                        </a>
                      </div>
                      <div className="mnsditem_btn_like">
                        <span className="cmlike _js_cmlike interestIt">
                          <input type="hidden" name="attnDivCd" value="10" />
                          <input type="hidden" name="attnDivDtlCd" value="10" />
                          <input type="hidden" name="siteNo" value="7008" />
                          <input
                            type="hidden"
                            name="attnTgtIdnfNo1"
                            value="1000362395822"
                          />
                          <input
                            type="hidden"
                            name="attnTgtIdnfNo2"
                            value="6005"
                          />
                          <input type="hidden" name="uitemId" value="00001" />
                          <input
                            type="hidden"
                            name="notiTitle"
                            value="[파주점] 레이밴 선글라스 RB3595 9013/13"
                          />
                          <input
                            type="hidden"
                            name="notiImgPath"
                            value="//sitem.ssgcdn.com/22/58/39/item/1000362395822_i1_187.jpg"
                          />
                          <input type="hidden" name="checked" value="N" />
                          <input
                            type="hidden"
                            name="useForcedSsgYn"
                            value="N"
                          />
                          <button
                            type="button"
                            className="cmlike_btn _js_cmlike_btn clickable"
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
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="mnsditem_detail">
                      <div className="mnsditem_maininfo">
                        <a
                          href="https://m-premiumoutlets.ssg.com/item/itemView.ssg?itemId=1000362395822&amp;siteNo=7008&amp;salestrNo=6005&amp;click=itemMidArea15"
                          className="mnsditem_maininfo_link"
                          target="_parent"
                        >
                          <div className="mnsditem_tit">
                            <span className="cm_mall_text">
                              <i className="outlet">프리미엄 아울렛</i>
                            </span>
                            <span className="mnsditem_goods_brand">
                              (레이밴)RAYBAN
                            </span>
                            <span className="mnsditem_goods_tit">
                              [파주점] 레이밴 선글라스 RB3595 9013/13
                            </span>
                          </div>
                          <div className="mnsditem_pricewrap">
                            <div className="mnsditem_price_row mnsditem_ty_oldpr">
                              <div className="old_price">
                                <del>
                                  <span className="blind">정상가격</span>
                                  <em className="ssg_price">202,000</em>
                                  <span className="ssg_tx">원</span>
                                </del>
                              </div>
                            </div>
                            <div className="mnsditem_price_row mnsditem_ty_newpr">
                              <div className="new_price">
                                <span className="blind">판매가격</span>
                                <em className="ssg_price">111,000</em>
                                <span className="ssg_tx">원</span>
                              </div>
                              <div className="discount_rate">
                                <span className="blind">할인율</span>
                                <span>45%</span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="mnsditem_sideinfo">
                        <div className="mnsditem_taglist">
                          <span className="mnsditem_tag">무료배송</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* 여기서부터 반복 */}
            </ul>
          </div>

          <div id="infinite-indicator" />
        </div>
      </div>
    </div>
  );
}

export default ProductEndlessGoods;
