import React from "react";

function ProductManySee() {
  return (
    <div
      className="mndtl_sec_bx"
      
    >
      <div className="mndtl_rectit_tytext">
        <a
          href="/disp/category.ssg?ctgId=6000211238&amp;_mpop=new"
          className="mndtl_rectit_text"
          
          target="_parent"
        >
          <span
            className="mndtl_rectit_text_tx clickable"
           
          >
            함께 보면 좋은 상품
          </span>
          <span
            className="mndtl_rectit_arrow"
            
          >
            <span className="blind">더보러가기</span>
            <i
              className="mndtl_ic_arr clickable"
             
            ></i>
          </span>
        </a>
        <div className="mndtl_rectit_text_subtx">
          이 상품과 함께 많이 본 상품
        </div>
      </div>
      <div className="cmitem_grid">
        <ul className="cmitem_grid_lst mnsditem_ty_thmb">
          <li
            className="cmitem_grid_item"
            >
            <div
              className="mnsditem_unit"
              
            >
              <div className="mnsditem_helper">
                <div className="mnsditem_helper_el mnsditem_bdg ty_always">
                  SSG 개런티
                </div>
              </div>
              <div
                className="mnsditem_goods"
                
              >
                <div className="mnsditem_thmb">
                  <a
                    href="/item/itemView.ssg?itemId=1000057900457&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
                    className="mnsditem_thmb_link clickable"
                    
                    target="_parent"
                  >
                    <div className="mnsditem_thmb_imgbx">
                      <img
                        src="//sitem.ssgcdn.com/57/04/90/item/1000057900457_i1_187.jpg"

                        alt="토미 G1"
                        onError="this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=187&amp;h=187&amp;t=5d2b57804279b6fa3be78209e63e1055c6ecc968'"
                        className="ssg_lazy mnsditem_thmb_img"
                       
                      />
                    </div>
                  </a>
                  <div className="mnsditem_thmb_ctrl">
                    <a
                      href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000057900457&amp;src_area=ssglens"
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
                        value="1000057900457"
                      />
                      <input type="hidden" name="attnTgtIdnfNo2" value="6005" />
                      <input type="hidden" name="uitemId" value="00000" />
                      <input type="hidden" name="notiTitle" value="토미 G1" />
                      <input
                        type="hidden"
                        name="notiImgPath"
                        value="//sitem.ssgcdn.com/57/04/90/item/1000057900457_i1_187.jpg"
                      />
                      <input type="hidden" name="checked" value="N" />
                      <input type="hidden" name="useForcedSsgYn" value="N" />
                      <button
                        className="cmlike_btn _js_cmlike_btn clickable"
                        
                      >
                        <span className="cmlike_ico">
                          <i className="cmlike_primary_m"></i>
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
                      href="/item/itemView.ssg?itemId=1000057900457&amp;siteNo=6004&amp;salestrNo=6005&amp;click=itemMidArea02"
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
                        <span className="mnsditem_goods_tit">토미 G1</span>
                      </div>
                      <div className="mnsditem_pricewrap">
                        <div className="mnsditem_price_row mnsditem_ty_newpr">
                          <div className="new_price">
                            <span className="blind">판매가격</span>
                            <em className="ssg_price">249,000</em>
                            <span className="ssg_tx">원</span>
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
        </ul>
      </div>
    </div>
  );
}

export default ProductManySee;
