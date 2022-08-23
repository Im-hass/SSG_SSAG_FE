import React from 'react';

function ProductCard() {
  return (
    <div className="mndtl_sec mndtl_info_wrap">
      <div className="mndtl_info_item">
        <div className="mndtl_info_installment">
          <dl className="mndtl_info_dl">
            <dt>무이자 할부</dt>
            <dd>
              <a
                href="/mitem/mItemCardBenefit.ssg?itemId=1000310147566&amp;siteNo=6004&amp;_mpop=new"
                className="mndtl_txt_btn"
                target="_parent"
              >
                카드사별 무이자 혜택
              </a>
            </dd>
          </dl>
        </div>

        <div className="mndtl_info_benefit">
          <dl className="mndtl_info_dl">
            <dt>이벤트</dt>
            <dd>
              <em className="mndtl_info_tit emphasis">
                메타버쓱 재밌는 보물찾기 열차 속 보물상자를 찾아보세요
              </em>
              <span className="mndtl_info_desc">2022.08.08 ~ 2022.08.10</span>
              <a
                href="http://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001041"
                className="mndtl_info_btn clickable"
                target="_parent"
              >
                <span className="mndtl_info_tx">바로가기</span>
                <i className="mndtl_ic_arr" />
              </a>
            </dd>
          </dl>
          <dl className="mndtl_info_dl">
            <dt>이벤트</dt>
            <dd>
              <em className="mndtl_info_tit emphasis">
                [8/8~10] 할인행 특급열차 쇼핑익스프레스
              </em>
              <span className="mndtl_info_desc">2022.08.08 ~ 2022.08.10</span>
              <a
                href="http://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001076&amp;cacheCmd=expire"
                className="mndtl_info_btn clickable"
                target="_parent"
              >
                <span className="mndtl_info_tx">바로가기</span>
                <i className="mndtl_ic_arr" />
              </a>
            </dd>
          </dl>
          <dl className="mndtl_info_dl">
            <dt>이벤트</dt>
            <dd>
              <em className="mndtl_info_tit emphasis">
                추석에는 선물하기로 쓱_2탄- 최대 SSG머니 1만원 룰렛 이벤트
              </em>
              <span className="mndtl_info_desc">2022.08.08 ~ 2022.09.10</span>
              <a
                href="http://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001362"
                className="mndtl_info_btn clickable"
                target="_parent"
              >
                <span className="mndtl_info_tx">바로가기</span>
                <i className="mndtl_ic_arr" />
              </a>
            </dd>
          </dl>
          <dl className="mndtl_info_dl">
            <dt>이벤트</dt>
            <dd>
              <em className="mndtl_info_tit emphasis">
                메타버쓱 오픈런 달릴 준비 되셨나요? 한정상품 구매에 도전하세요
              </em>
              <span className="mndtl_info_desc">2022.08.08 ~ 2022.08.10</span>
              <a
                href="http://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001042"
                className="mndtl_info_btn clickable"
                target="_parent"
              >
                <span className="mndtl_info_tx">바로가기</span>
                <i className="mndtl_ic_arr" />
              </a>
            </dd>
          </dl>
        </div>

        <div className="mndtl_info_delivery">
          <dl className="mndtl_info_dl">
            <dt>배송정보</dt>

            <dd>
              <em className="mndtl_info_tit"> 택배배송</em>
              <span className="mndtl_info_desc">
                8/11(목)도착 예정
                <a
                  // href="javascript:;"
                  href="/"
                  className="mndtl_ic mndtl_ic_qmark_new16 modal-layer-open"
                  target="_parent"
                >
                  <span className="blind">배송기간 안내 팝업</span>
                </a>
                <br />
                배송비 무료
              </span>
            </dd>
          </dl>
        </div>

        <div className="mndtl_info_note" />
      </div>

      <div className="mndtl_sec_bx">
        <div className="mndtl_bn">
          <a href="https://m.ssg.com/page/guarantee.ssg" target="_parent">
            <img
              className="ssg_lazy loaded"
              src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_guarantee.jpg&amp;w=750"
              alt="SSG.COM만의 디지털 명품 보증 서비스"
              srcSet="
                      https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_guarantee.jpg&amp;w=1125 3x
                    "
            />
          </a>
          <p className="blind">
            <strong>SSG 개런티</strong> SSG.COM만의 디지털 명품 보증 서비스
          </p>
          <p className="blind">
            마음 편하게 명품 쇼핑하세요. 검증은 SSG가 할게요. 검증된 셀러가
            엄선한 상품을 대상으로 디지털 보증서를 발급해드립니다. 어디서든
            확인할 수 있는 디지털 보증서로 SSG개런티만의 차별화된 사후 관리까지
            누려보세요.
          </p>
          <p className="blind">
            SSG가 보증하는 것들 - 상품 신뢰도, 실물 감정 서비스 연계, 수입절차의
            적법성, 가품 200% 보상 제도, 판매자 신뢰도, VIP 전담상담원
          </p>
        </div>
      </div>
      <div id="item_usell_div" />
    </div>
  );
}

export default ProductCard;
