import React, { useState, useEffect } from 'react';

function ProductExplaination({ productData }) {
  const [discountedPrice, setDiscountedPrice] = useState(0);

  const calculateDiscountedPrice = () => {
    const data = productData;
    let calPrice = 0;

    if (data.sale === 0) {
      calPrice = data.price * 1;
    } else {
      calPrice = Math.ceil((data.price * (100 - data.sale)) / 100);
    }

    setDiscountedPrice(calPrice);
  };

  useEffect(() => {
    calculateDiscountedPrice();
  }, []);

  return (
    <div
      className="mndtl_sec mndtl_prd_wrap"
      data-react-tarea-cd="00006_000000005"
    >
      <div className="mndtl_mall">
        <div className="mndtl_mall_badge">
          <span className="cm_mall_text">
            <i className="sm">신세계몰</i>
          </span>
        </div>
        <div className="mndtl_mall_info" />
        <button
          type="button"
          className="mndtl_btn_share modal-layer-open"
          data-layer-target=".cdtl_modal_share"
          data-react-unit-type="text"
          data-react-unit-text='[{"type":"tarea_addt_val","value":"상품_공유하기"}]'
        >
          <i
            className="mndtl_ic mndtl_ic_share clickable"
            data-react-tarea-dtl-cd="t00060"
          />
          <span className="blind">공유</span>
        </button>
      </div>
      <div className="mndtl_prd_info">
        <h2
          className="mndtl_prd_title"
          data-react-unit-type="brand"
          data-react-unit-id="3000011661"
        >
          <a
            href="/mall/disp/brandMain.ssg?brandId=3000011661&amp;ctgId=6000189224&amp;_mpop=new"
            className="mndtl_prdtit_brand clickable"
            data-react-tarea-dtl-cd="t00053"
            target="_parent"
          >
            {productData.storeName}
          </a>
          <span className="mndtl_prdtit_name">{productData.name}</span>
        </h2>
        <div className="mndtl_prd_price">
          <div className="mndtl_prd_oldpr">
            <div className="old_price">
              <del>
                <span className="blind">정상가격</span>
                <em className="ssg_price">
                  {productData.price.toLocaleString()}
                </em>
                <span className="ssg_tx">원</span>
              </del>
            </div>
            <div className="mndtl_tx_sale mndtl_coupon">쿠폰포함</div>
          </div>
          <div
            className="mndtl_prd_newpr"
            data-react-unit-type="text"
            data-react-unit-text='[{"type":"text","value":"할인내역"}]'
          >
            <div className="mndtl_prd_per">
              <span className="blind">할인율</span>
              <span>{productData.sale}%</span>
            </div>
            <div className="new_price">
              <span className="blind">판매가격</span>
              <em className="ssg_price">{discountedPrice.toLocaleString()}</em>
              <span className="ssg_tx">
                원<span className="cm_tx_opt" />
              </span>
            </div>
            <a
              href="/"
              className="mndtl_ic mndtl_ic_qmark_new24 modal-layer-open clickable"
            >
              <span className="blind">가격 자세히보기</span>
            </a>
          </div>
        </div>

        <div className="mndtl_smile_lst" data-react-tarea-cd="00006_000000242">
          <div className="mndtl_smile_type" data-react-unit-type="banr">
            <a
              href="https://member.ssg.com/m/membership/gate.ssg"
              className="clickable"
            >
              <img
                className="ssg_lazy loaded"
                src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750"
                data-src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750"
                data-srcset="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750 3x"
                alt="스마일 클럽 무료 체험"
                data-ll-status="loaded"
                srcSet="
              https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750 3x
            "
              />
            </a>
            <p className="blind">스마일 클럽 무료 체험</p>
          </div>
        </div>
      </div>

      <div className="mndtl_refer">
        <div
          className="mndtl_grade"
          data-react-unit-type="text"
          data-react-unit-text='[{"type":"tarea_addt_val","value":"리뷰평점"}]'
        >
          <span className="mndtl_star12">
            <span className="mndtl_star12_per" style={{ width: '96%' }} />
            <span className="blind">
              별점 5점 중 <em>4.8</em>점
            </span>
          </span>
          <a href="/" className="mndtl_grade_total modal-iframe-open clickable">
            29건 리뷰<span className="blind">더보기</span>
          </a>

          <a href="/" className="mndtl_mediall_more modal-iframe-open">
            <div className="mndtl_mediall_summary_list">
              <div className="mndtl_figure_thmb">
                <img
                  src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202205/20220516023836_1171365674_0_1.jpeg&amp;w=50&amp;h=50&amp;autoOrient=true&amp;t=30a6a8a0963299ebfc1d508d967441c7dacd9b0c"
                  alt="img"
                />
              </div>
              <div className="mndtl_figure_thmb">
                <img
                  src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202204/20220415203132_1168340892_1.jpg&amp;w=50&amp;h=50&amp;autoOrient=true&amp;t=66f4ca38137afae19a64c48f0a91ee69ebb49b72"
                  alt="img"
                />
              </div>
              <div className="mndtl_figure_thmb">
                <img
                  src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202204/20220407152800_1167501789_1.jpg&amp;w=50&amp;h=50&amp;autoOrient=true&amp;t=eff2cd136eea4a11db1e051e87ede2999aa976c8"
                  alt="img"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductExplaination;
