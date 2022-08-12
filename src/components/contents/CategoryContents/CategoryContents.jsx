import React from 'react';
import { CategoryList } from '../CategoryList';
import { ServiceList } from '../ServiceList';

function CategoryContents() {
  return (
    <div className="clnb_wrap">
      <div className="clnb_sub_cate" id="mcom_clnb_cate">
        <ul>
          {/* 패션의류 */}
          {/* 명품/잡화/쥬얼리 */}
          {/* 뷰티 */}
          {/* 유아동 */}
          {/* 스포츠/레저 */}
          <CategoryList />

          {/* 가구/인테리어 */}
          <li className="clnb_renew_item">
            <a href="/" className="clickable">
              <span
                className="thmb ssg_lazy"
                style={{
                  backgroundImage:
                    "url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072917404751786590472759_591.jpg&w=150&h=150&edit=c&t=3a7d4a334ee9337474b984a6ea9867fd36181d57')",
                }}
              />
              <em>가구/인테리어</em>
            </a>
            <div className="clnb_lst_cate" style={{ height: '150px' }}>
              <div className="clnb_lst">
                <ul className="cate_view">
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015808.ssg"
                      className="clickable"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177367"
                      className="clickable"
                    >
                      침구/커튼/카페트
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177368"
                      className="clickable"
                    >
                      침실/수납가구
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177369"
                      className="clickable"
                    >
                      거실/주방가구
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177370"
                      className="clickable"
                    >
                      서재/학생아동가구
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177371"
                      className="clickable"
                    >
                      조명/인테리어소품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177372"
                      className="clickable"
                    >
                      DIY/시공
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* 주방/생활/건강 */}
          <li className="clnb_renew_item">
            <a href="/" className="clickable">
              <span
                className="thmb ssg_lazy"
                style={{
                  backgroundImage:
                    "url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202105/2021051315282642621637316163_499.jpg&w=150&h=150&edit=c&t=74b16620d21c0412d55cec8083a145421623a236')",
                }}
              />
              <em>주방/생활/건강</em>
            </a>
            <div className="clnb_lst_cate" style={{ height: '90px' }}>
              <div className="clnb_lst">
                <ul className="cate_view">
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015809.ssg"
                      className="clickable"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000178523"
                      className="clickable"
                    >
                      주방용품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000178524"
                      className="clickable"
                    >
                      청소/욕실/공구
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000178525"
                      className="clickable"
                    >
                      생활/건강
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* 반려동물 */}
          <li className="clnb_renew_item">
            <a href="/" className="clickable">
              <span
                className="thmb ssg_lazy"
                style={{
                  backgroundImage:
                    "url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202109/2021091312493245557072867707_591.jpg&w=150&h=150&edit=c&t=b1ff290c681d07b086d3b13334f222294befce91')",
                }}
              />
              <em>반려동물</em>
            </a>
            <div className="clnb_lst_cate" style={{ height: '150px' }}>
              <div className="clnb_lst">
                <ul className="cate_view">
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000016143.ssg"
                      className="clickable"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185638"
                      className="clickable"
                    >
                      강아지사료/간식
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185639"
                      className="clickable"
                    >
                      고양이사료/간식
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185640"
                      className="clickable"
                    >
                      반려동물용품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185641"
                      className="clickable"
                    >
                      반려동물서비스
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185642"
                      className="clickable"
                    >
                      소동물/곤충/조류
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185643"
                      className="clickable"
                    >
                      관상어용품
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* 식품 */}
          <li className="clnb_renew_item">
            <a href="/" className="clickable">
              <span
                className="thmb ssg_lazy"
                style={{
                  backgroundImage:
                    "url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916185554662649910364_729.jpg&w=150&h=150&edit=c&t=437f0d41210a78741f89ba827407c26b2e8798ce')",
                }}
              />
              <em>식품</em>
            </a>
            <div className="clnb_lst_cate" style={{ height: '150px' }}>
              <div className="clnb_lst">
                <ul className="cate_view">
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015810.ssg"
                      className="clickable"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139021"
                      className="clickable"
                    >
                      과일/채소/쌀
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139022"
                      className="clickable"
                    >
                      정육/계란류
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139023"
                      className="clickable"
                    >
                      수산물/건해산
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139864"
                      className="clickable"
                    >
                      반찬/간편식/조미료
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139025"
                      className="clickable"
                    >
                      유제품/과자/빵/음료/주류
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139026"
                      className="clickable"
                    >
                      홍삼/건강식품
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* 가전 */}
          <li className="clnb_renew_item">
            <a href="/" className="clickable">
              <span
                className="thmb ssg_lazy"
                style={{
                  backgroundImage:
                    "url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916221442699359630445_591.jpg&w=150&h=150&edit=c&t=5c5d93292562b819f3509eb400fbd9d49d86ad6e')",
                }}
              />
              <em>가전</em>
            </a>
            <div className="clnb_lst_cate" style={{ height: '120px' }}>
              <div className="clnb_lst">
                <ul className="cate_view">
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015812.ssg"
                      className="clickable"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209198"
                      className="clickable"
                    >
                      에어컨/계절가전
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209200"
                      className="clickable"
                    >
                      냉장고/주방가전
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209201"
                      className="clickable"
                    >
                      세탁기/생활가전
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209202"
                      className="clickable"
                    >
                      영상/음향가전
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* 디지털/렌탈/컴퓨터/차량용품 */}
          <li className="clnb_renew_item">
            <a href="/" className="clickable">
              <span
                className="thmb ssg_lazy"
                style={{
                  backgroundImage:
                    "url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916192109082788875378_90.jpg&w=150&h=150&edit=c&t=b83371edfebf91bca55682016e958688bc59cb78')",
                }}
              />
              <em>
                디지털/렌탈/
                <br />
                컴퓨터/차량용품
              </em>
            </a>
            <div className="clnb_lst_cate" style={{ height: '150px' }}>
              <div className="clnb_lst">
                <ul className="cate_view">
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015811.ssg"
                      className="clickable"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209194"
                      className="clickable"
                    >
                      컴퓨터/노트북/태블릿
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209195"
                      className="clickable"
                    >
                      게임/타이틀
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209196"
                      className="clickable"
                    >
                      PC주변기기/저장장치
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209197"
                      className="clickable"
                    >
                      카메라/캠코더
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209199"
                      className="clickable"
                    >
                      내비/블랙박스/차량용품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209203"
                      className="clickable"
                    >
                      휴대폰/스마트기기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000203402"
                      className="clickable"
                    >
                      렌탈
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* e쿠폰/서비스/여행 */}
          <li className="clnb_renew_item">
            <a href="/" className="clickable">
              <span
                className="thmb ssg_lazy"
                style={{
                  backgroundImage:
                    "url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916223916760668536166_464.jpg&w=150&h=150&edit=c&t=82ec94eba3bd7b859529cacae02f3b1287f780b5')",
                }}
              />
              <em>
                e쿠폰/서비스/
                <br />
                여행
              </em>
            </a>
            <div className="clnb_lst_cate" style={{ height: '120px' }}>
              <div className="clnb_lst">
                <ul className="cate_view">
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015813.ssg"
                      className="clickable"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000211373"
                      className="clickable"
                    >
                      서비스
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=3000001210"
                      className="clickable"
                    >
                      여행/호텔/레저
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-flight.ssg.com/air/agent/b2c/AIR/MBL/AIRMBLTRP0100100010.k1?KSESID=air:b2c:SELK138UL:SELK138UL::00"
                      className="clickable"
                    >
                      항공권 가격비교
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-triip.ssg.com/hotel/main.ssg"
                      className="clickable"
                    >
                      호텔 가격비교
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000211386"
                      className="clickable"
                    >
                      e쿠폰/상품권
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* 문구/도서/취미 */}
          <li className="clnb_renew_item">
            <a href="/" className="clickable">
              <span
                className="thmb ssg_lazy"
                style={{
                  backgroundImage:
                    "url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202105/2021051316532756213053205305_963.jpg&w=150&h=150&edit=c&t=292c99e60f69fb8779ef1e40fe7096612bcb0165')",
                }}
              />
              <em>문구/도서/취미</em>
            </a>
            <div className="clnb_lst_cate" style={{ height: '150px' }}>
              <div className="clnb_lst">
                <ul className="cate_view">
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015814.ssg"
                      className="clickable"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000210596"
                      className="clickable"
                    >
                      도서
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000211273"
                      className="clickable"
                    >
                      문구/미술/사무용품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=3500000958"
                      className="clickable"
                    >
                      악기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000083312"
                      className="clickable"
                    >
                      음반/DVD
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000018405"
                      className="clickable"
                    >
                      취미/키덜트
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>

        {/* 신세계백화점 카테고리 */}
        <h2 className="clnb_tit">
          <span className="cm_mall_ic ty_circle_s">
            <i className="sd" />
          </span>
          <span>신세계백화점</span>
        </h2>
        <ul>
          <li className="clnb_renew_item">
            <a href="/" className="clickable">
              <span
                className="thmb ssg_lazy"
                style={{
                  backgroundImage:
                    "url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072413342121681090850209_459.jpg&w=150&h=150&edit=c&t=83d1ec825c82c691c9b2d949b3d465803a13059b')",
                }}
              />
              <em>명품/잡화</em>
            </a>
            <div className="clnb_lst_cate">
              <div className="clnb_lst">
                <ul className="cate_view">
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/dept/llcategory/1000015822.ssg?mccode=6009"
                      className="clickable"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201048"
                      className="clickable"
                    >
                      해외명품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201049"
                      className="clickable"
                    >
                      핸드백/지갑
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201050"
                      className="clickable"
                    >
                      시계/쥬얼리
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201051"
                      className="clickable"
                    >
                      모자/장갑/ACC
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201052"
                      className="clickable"
                    >
                      슈즈/운동화
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="clnb_renew_item">
            <a href="/" className="clickable">
              <span
                className="thmb ssg_lazy"
                style={{
                  backgroundImage:
                    "url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072413343891419129134912_505.jpg&w=150&h=150&edit=c&t=de9828d64b1e587e1cc9bb4a5feedf5420255949')",
                }}
              />
              <em>명품화장품</em>
            </a>
            <div className="clnb_lst_cate">
              <div className="clnb_lst">
                <ul className="cate_view">
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/dept/llcategory/1000016006.ssg?mccode=6009"
                      className="clickable"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000194314"
                      className="clickable"
                    >
                      스킨케어
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000194315"
                      className="clickable"
                    >
                      메이크업
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000194316"
                      className="clickable"
                    >
                      헤어/바디
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000194317"
                      className="clickable"
                    >
                      향수
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="clnb_renew_item">
            <a href="/" className="clickable">
              <span
                className="thmb ssg_lazy"
                style={{
                  backgroundImage:
                    "url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072411204623174933849493_865.jpg&w=150&h=150&edit=c&t=74bae9f4125fdb65be7be09d5c1012652133200f')",
                }}
              />
              <em>패션</em>
            </a>
            <div className="clnb_lst_cate">
              <div className="clnb_lst">
                <ul className="cate_view">
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/dept/llcategory/1000015820.ssg?mccode=6009"
                      className="clickable"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201598"
                      className="clickable"
                    >
                      명품/수입의류
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000191035"
                      className="clickable"
                    >
                      여성커리어
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189545"
                      className="clickable"
                    >
                      영캐주얼
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189676"
                      className="clickable"
                    >
                      남성패션
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189738"
                      className="clickable"
                    >
                      캐주얼/유니섹스
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189629"
                      className="clickable"
                    >
                      언더웨어
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="clnb_renew_item">
            <a href="/" className="clickable">
              <span
                className="thmb ssg_lazy"
                style={{
                  backgroundImage:
                    "url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072413350361817137354713_403.jpg&w=150&h=150&edit=c&t=d31664614d323d8b818cd5f344e83d31741d4cac')",
                }}
              />
              <em>스포츠/레저</em>
            </a>
            <div className="clnb_lst_cate">
              <div className="clnb_lst">
                <ul className="cate_view">
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/dept/llcategory/1000015824.ssg?mccode=6009"
                      className="clickable"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000202051"
                      className="clickable"
                    >
                      등산/아웃도어
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205962"
                      className="clickable"
                    >
                      스포츠웨어/슈즈
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000202052"
                      className="clickable"
                    >
                      골프웨어/용품/클럽
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205965"
                      className="clickable"
                    >
                      헬스/수영/스키
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="clnb_renew_item">
            <a href="/" className="clickable">
              <span
                className="thmb ssg_lazy"
                style={{
                  backgroundImage:
                    "url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072413335553066034848603_39.jpg&w=150&h=150&edit=c&t=cc88e93325c6de295b778d4fb91298b83f3482f4')",
                }}
              />
              <em>유아동</em>
            </a>
            <div className="clnb_lst_cate">
              <div className="clnb_lst">
                <ul className="cate_view">
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/dept/llcategory/1000015823.ssg?mccode=6009"
                      className="clickable"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000165249"
                      className="clickable"
                    >
                      출산/육아용품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000165250"
                      className="clickable"
                    >
                      유아동패션
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000165251"
                      className="clickable"
                    >
                      유아동신발/잡화
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000165252"
                      className="clickable"
                    >
                      완구/교구
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="clnb_renew_item">
            <a href="/" className="clickable">
              <span
                className="thmb ssg_lazy"
                style={{
                  backgroundImage:
                    "url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072413355682575147100614_344.jpg&w=150&h=150&edit=c&t=04307f119a572fc17a24a839a30c70441e6e3795')",
                }}
              />
              <em>가전/생활/식품</em>
            </a>
            <div className="clnb_lst_cate">
              <div className="clnb_lst">
                <ul className="cate_view">
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/dept/llcategory/1000015825.ssg?mccode=6009"
                      className="clickable"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209568"
                      className="clickable"
                    >
                      가전
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000018659"
                      className="clickable"
                    >
                      가정생활
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185489"
                      className="clickable"
                    >
                      반려동물
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139051"
                      className="clickable"
                    >
                      식품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000028294"
                      className="clickable"
                    >
                      쓱콘
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* 테마추천 */}
      <div className="clnb_renew_theme_v2">
        <h2 className="clnb_tit">
          <span>테마추천</span>
        </h2>
        <div className="clnb_theme_warp">
          <ul>
            <li className="clnb_shdu_item">
              <a
                href="https://m-shinsegaemall.ssg.com/page/ssgluxury.ssg"
                className="clnb_shdu_link clickable"
              >
                <div className="clnb_shdu_thmb">
                  <div className="clnb_shdu_img">
                    <img
                      className="ssg_lazy loaded"
                      src="//sui.ssgcdn.com/cmpt/banner/202207/2022070515062822153723407372_375.jpg"
                      alt="/cmpt/banner/202207/2022070515062822153723407372_375.jpg"
                    />
                  </div>
                </div>
                <div className="clnb_shdu_tx_thmb">
                  <span className="clnb_shdu_tit">
                    <span>SSG Luxury</span>
                  </span>
                </div>
              </a>
            </li>
            <li className="clnb_shdu_item">
              <a
                href="https://m.ssg.com/plan/planShop.ssg?dispCmptId=6000435602"
                className="clnb_shdu_link clickable"
              >
                <div className="clnb_shdu_thmb">
                  <div className="clnb_shdu_img">
                    <img
                      className="ssg_lazy loaded"
                      src="//sui.ssgcdn.com/cmpt/banner/202204/2022041517155741312171025217_772.jpg"
                      alt="/cmpt/banner/202204/2022041517155741312171025217_772.jpg"
                    />
                  </div>
                </div>
                <div className="clnb_shdu_tx_thmb">
                  <span className="clnb_shdu_tit">
                    <span>제로웨이스트</span>
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="clnb_service_new">
        <h2 className="clnb_tit">
          <span>SSG 서비스 추천</span>
        </h2>
        <ServiceList />
      </div>
    </div>
  );
}

export default CategoryContents;
