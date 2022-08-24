import React from 'react';

function ProductBrand() {
  return (
    <div
      className="mndtl_sec_bx"
      data-observable-unit="true"
      data-react-tarea-cd="00006_000000017"
    >
      <div className="mndtl_rectit_tytext">
        <a
          href="/mall/disp/brandMain.ssg?brandId=3000027757&amp;ctgId=6000200803&amp;_mpop=new"
          className="mndtl_rectit_text"
          data-react-unit-type="text"
          data-react-unit-text='[{"type":"tarea_addt_val","value":"타이틀"}]'
          target="_parent"
        >
          <span
            className="mndtl_rectit_text_tx clickable"
            data-react-tarea-dtl-cd="t00060"
          >
            브랜드 인기상품
          </span>
          <span
            className="mndtl_rectit_arrow"
            data-react-unit-type="text"
            data-react-unit-text='[{"type":"tarea_addt_val","value":"더보기"}]'
          >
            <span className="blind">더보러가기</span>
            <i
              className="mndtl_ic_arr clickable"
              data-react-tarea-dtl-cd="t00060"
            />
          </span>
        </a>
        <div className="mndtl_rectit_text_subtx">
          많이 구매한 GENTLE MONSTER(젠틀몬스터) 상품
        </div>
      </div>
      <div className="cmitem_grid">
        <ul className="cmitem_grid_lst mnsditem_ty_thmb">
          {/* 여기서 반복 */}

          <li className="cmitem_grid_item">
            <div className="mnsditem_unit">
              <div className="mnsditem_helper" />
              <div className="mnsditem_goods">
                <div className="mnsditem_thmb">
                  <a
                    href="/"
                    className="mnsditem_thmb_link clickable"
                    target="_parent"
                  >
                    <div className="mnsditem_thmb_imgbx">
                      <img
                        src="//sitem.ssgcdn.com/57/04/90/item/1000057900457_i1_187.jpg"
                        alt="젠틀몬스터 썸머 베스트 아이템"
                        className="ssg_lazy mnsditem_thmb_img"
                      />
                    </div>
                  </a>
                  <div className="mnsditem_thmb_ctrl">
                    <a
                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000459580482&amp;src_area=ssglens"
                      className="mnsditem_btn_lens clickable"
                      target="_parent"
                    >
                      <span className="blind">이 상품 이미지로 검색하기</span>
                    </a>
                  </div>
                  <div className="mnsditem_btn_like">
                    <span className="cmlike _js_cmlike interestIt">
                      <input type="hidden" name="attnDivCd" value="10" />
                      <input type="hidden" name="attnDivDtlCd" value="10" />
                      <input type="hidden" name="siteNo" value="6004" />
                      <input
                        type="hidden"
                        name="attnTgtIdnfNo1"
                        value="1000459580482"
                      />
                      <input type="hidden" name="attnTgtIdnfNo2" value="6005" />
                      <input type="hidden" name="uitemId" value="00000" />
                      <input
                        type="hidden"
                        name="notiTitle"
                        value="젠틀몬스터 썸머 베스트 아이템"
                      />
                      <input
                        type="hidden"
                        name="notiImgPath"
                        value="//sitem.ssgcdn.com/82/04/58/item/1000459580482_i1_187.jpg"
                      />
                      <input type="hidden" name="checked" value="N" />
                      <input type="hidden" name="useForcedSsgYn" value="N" />
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
                      href="/item/dealItemView.ssg?itemId=1000459580482&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea05"
                      className="mnsditem_maininfo_link"
                      target="_parent"
                    >
                      <div className="mnsditem_tit">
                        <span className="cm_mall_text">
                          <i className="sm">신세계몰</i>
                        </span>
                        <span className="mnsditem_goods_brand">
                          GENTLE MONSTER(젠틀몬스터)
                        </span>
                        <span className="mnsditem_goods_tit">
                          젠틀몬스터 썸머 베스트 아이템
                        </span>
                      </div>
                      <div className="mnsditem_pricewrap">
                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                          <div className="new_price">
                            <span className="blind">판매가격</span>
                            <em className="ssg_price">259,000</em>
                            <span className="ssg_tx">
                              원<span className="cm_tx_opt">~</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="mnsditem_sideinfo">
                    <div className="mnsditem_taglist" />
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* 여기서 반복 */}
        </ul>
      </div>
    </div>
  );
}

export default ProductBrand;
