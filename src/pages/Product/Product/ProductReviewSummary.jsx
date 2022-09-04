import React from 'react';

function ProductReviewSummary({ productData }) {
  const reviewCnt = productData.reviewTotal.reviewCount;

  return (
    <div className="mndtl_cmt_summary v2">
      <div className="mndtl_chart_tit">
        <span className="mndtl_tit_tx">전체 리뷰</span>
        <a href="/" className="mndtl_chart_more modal-iframe-open">
          더보기<span className="count">({reviewCnt})</span>
          <i className="mndtl_ic_arr" />
        </a>
      </div>
      <ul className="mndtl_chart_lst">
        <li className="mndtl_chart_item">
          <div className="mndtl_cmtsum">
            <div className="mndtl_msg_unit">
              <div className="mndtl_msg_bx">
                <span className="mndtl_prdopt_name" />
              </div>
            </div>
            <span className="mndtl_star12">
              <span className="mndtl_star12_per" style={{ width: '100%' }} />
              <span className="blind">
                별점 5점 중 <em>5</em>점
              </span>
            </span>
            <span className="mndtl_review_type"> 일반</span>
            <div className="mndtl_user_info">
              <span className="mndtl_user_tx">2022.07.11</span>
              <span className="mndtl_user_tx">kyo*******</span>
            </div>
            <div className="mndtl_cmtsum_figure">
              <ul className="mndtl_figure_lst" />
            </div>
            <a href="/" className="modal_all_review modal-fix-open">
              <span className="blind">전체리뷰보기</span>
            </a>
            <a href="/" className="modal-fix-open">
              <p className="mndtl_cmtsum_desc">
                에어컨속에서 하루 종일 있으면 너무 추워서 긴거 입어도 추워서
                블래ㆍ베이지 샀는데 너무 마음에들어요 부드럽고 봄ㆍ가을에도
                이것맛 입을거 같아요 그레이색도 있던데 구매하려고요
              </p>
            </a>
          </div>
          <a href="/" className="modal_all_review modal-fix-open">
            <span className="blind">전체리뷰보기</span>
          </a>
        </li>
        <li className="mndtl_chart_item">
          <div className="mndtl_cmtsum">
            <div className="mndtl_msg_unit">
              <div className="mndtl_msg_bx">
                <span className="mndtl_prdopt_name" />
              </div>
            </div>
            <span className="mndtl_star12">
              <span className="mndtl_star12_per" style={{ width: '100%' }} />
              <span className="blind">
                별점 5점 중 <em>5</em>점
              </span>
            </span>
            <span className="mndtl_review_type"> 일반</span>
            <div className="mndtl_user_info">
              <span className="mndtl_user_tx">2022.04.15</span>
              <span className="mndtl_user_tx">zes*******</span>
            </div>
            <div className="mndtl_cmtsum_figure">
              <ul className="mndtl_figure_lst">
                <li>
                  <a href="/" className="modal_btn_photoreview modal-fix-open">
                    <div className="mndtl_figure_thmb">
                      <img
                        className="ssg_lazy loaded"
                        src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202204/20220415203132_1168340892_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=36abf752b6e923dba7050d254fc3d1b2e10bb1fa"
                        data-src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202204/20220415203132_1168340892_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=36abf752b6e923dba7050d254fc3d1b2e10bb1fa"
                        alt=""
                        data-ll-status="loaded"
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <a href="/" className="modal_all_review modal-fix-open">
              <span className="blind">전체리뷰보기</span>
            </a>
            <a href="/" className="modal-fix-open">
              <p className="mndtl_cmtsum_desc">
                고급스럽구 부드럽구 너무 예쁘네요. 더워서 얼마 못입을것 같지만.
                가을에 입음되니깐. 색깔별루 다 구매하고 싶네요. 너무 좋아요.
              </p>
            </a>
          </div>
          <a href="/" className="modal_all_review modal-fix-open">
            <span className="blind">전체리뷰보기</span>
          </a>
        </li>
        <li className="mndtl_chart_item">
          <div className="mndtl_cmtsum">
            <div className="mndtl_msg_unit">
              <div className="mndtl_msg_bx">
                <span className="mndtl_prdopt_name" />
              </div>
            </div>
            <span className="mndtl_star12">
              <span className="mndtl_star12_per" style={{ width: '100%' }} />
              <span className="blind">
                별점 5점 중 <em>5</em>점
              </span>
            </span>
            <span className="mndtl_review_type"> 일반</span>
            <div className="mndtl_user_info">
              <span className="mndtl_user_tx">2022.04.09</span>
              <span className="mndtl_user_tx">sod*******</span>
            </div>
            <div className="mndtl_cmtsum_figure">
              <ul className="mndtl_figure_lst" />
            </div>
            <a href="/" className="modal_all_review modal-fix-open">
              <span className="blind">전체리뷰보기</span>
            </a>
            <a href="/" className="modal-fix-open">
              <p className="mndtl_cmtsum_desc">
                너무 색깔도 고급스럽고 디자인도 예뻐요!^^ 4월 따뜻해진 요즘에는
                입기 살짝 덥네요. 도톰한 디자인이예요~ 여름,초봄 빼고 계속 잘
                입을 옷이예용~
              </p>
            </a>
          </div>
          <a href="/" className="modal_all_review modal-fix-open">
            <span className="blind">전체리뷰보기</span>
          </a>
        </li>
        <li className="mndtl_chart_item">
          <div className="mndtl_cmtsum">
            <div className="mndtl_msg_unit">
              <div className="mndtl_msg_bx">
                <span className="mndtl_prdopt_name" />
              </div>
            </div>
            <span className="mndtl_star12">
              <span className="mndtl_star12_per" style={{ width: '100%' }} />
              <span className="blind">
                별점 5점 중 <em>5</em>점
              </span>
            </span>
            <span className="mndtl_review_type"> 일반</span>
            <div className="mndtl_user_info">
              <span className="mndtl_user_tx">2022.03.17</span>
              <span className="mndtl_user_tx">yas*******</span>
            </div>
            <div className="mndtl_cmtsum_figure">
              <ul className="mndtl_figure_lst">
                <li>
                  <a href="/" className="modal_btn_photoreview modal-fix-open">
                    <div className="mndtl_figure_thmb">
                      <img
                        className="ssg_lazy loaded"
                        src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202203/20220317161411_1165032559_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=2553e9d057d78aaa76db79569473717d5857a153"
                        data-src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202203/20220317161411_1165032559_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=2553e9d057d78aaa76db79569473717d5857a153"
                        alt=""
                        data-ll-status="loaded"
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <a href="/" className="modal_all_review modal-fix-open">
              <span className="blind">전체리뷰보기</span>
            </a>
            <a href="/" className="modal-fix-open">
              <p className="mndtl_cmtsum_desc">
                기대했던만큼 맘에 쏙!! 들어요~ 재질, 디자인, 핏 다 좋아서 다른
                컬러도 구매하고 싶어지네요^^
              </p>
            </a>
          </div>
          <a href="/" className="modal_all_review modal-fix-open">
            <span className="blind">전체리뷰보기</span>
          </a>
        </li>
        <li className="mndtl_chart_item">
          <div className="mndtl_cmtsum">
            <div className="mndtl_msg_unit">
              <div className="mndtl_msg_bx">
                <span className="mndtl_prdopt_name" />
              </div>
            </div>
            <span className="mndtl_star12">
              <span className="mndtl_star12_per" style={{ width: '100%' }} />
              <span className="blind">
                별점 5점 중 <em>5</em>점
              </span>
            </span>
            <span className="mndtl_review_type"> 일반</span>
            <div className="mndtl_user_info">
              <span className="mndtl_user_tx">2022.08.09</span>
              <span className="mndtl_user_tx">hue*******</span>
            </div>
            <div className="mndtl_cmtsum_figure">
              <ul className="mndtl_figure_lst" />
            </div>
            <a href="/" className="modal_all_review modal-fix-open">
              <span className="blind">전체리뷰보기</span>
            </a>
            <a href="/" className="modal-fix-open">
              <p className="mndtl_cmtsum_desc">
                사진과거의비슷한색상이고소매길이가살짝긴것같은느낌은있지만품도적당히여유있고예뻐요
              </p>
            </a>
          </div>
          <a href="/" className="modal_all_review modal-fix-open">
            <span className="blind">전체리뷰보기</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ProductReviewSummary;
