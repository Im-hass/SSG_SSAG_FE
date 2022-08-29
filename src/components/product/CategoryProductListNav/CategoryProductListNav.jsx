import React from 'react';
import { Link } from 'react-router-dom';
import LikeButton from '../../ui/LikeButton/LikeButton';
import './CategoryProductListNav.scss';

function CategoryProductListNav({ lgId, title, subTitle }) {
  return (
    <div className="mcom_tit_renew  react-area product-list-header">
      <div id="mcom_path_cate" className="mcom_category header-item">
        <div className="cate_path">
          <span className="depth previous">
            <Link to={`/products/${lgId}/0`}>
              <span className="ctg_mn">
                <span className="ctg_txt">{title}</span>
              </span>
            </Link>
          </span>
          <span className="depth current">
            <button type="button" className="btn_more">
              <strong className="ctg_txt">{subTitle}</strong>
              <span className="sp_ctg_icon ctg_icon_arr more-arrow">
                <span className="blind">더보기</span>
              </span>
            </button>
          </span>
        </div>
        {/* <div className="cate_view v2">
          <ul className="lst_cate">
            <li className="selected">
              <a href="/" className="cate_txt">
                패션의류<span className="blind">하위 카테고리 7개</span>
              </a>
              <div
                className="cate_view_lv2 selected"
                role="menu"

                // aria-expanded="true"
              >
                <ul className="lst_cate lv2">
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000016177.ssg"
                      className="cate_txt cate_all"
                    >
                      전체보기
                    </a>
                  </li>
                  <li className="selected">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201547"
                      className="cate_txt"
                    >
                      명품/수입의류
                    </a>
                    <span className="sp_ctg_icon ctg_icon_check">
                      <span className="blind">선택됨</span>
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189224"
                      className="cate_txt"
                    >
                      여성브랜드패션
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189308"
                      className="cate_txt"
                    >
                      여성트렌드패션
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189392"
                      className="cate_txt"
                    >
                      남성패션
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189500"
                      className="cate_txt"
                    >
                      캐주얼/유니섹스
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189453"
                      className="cate_txt"
                    >
                      언더웨어
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000190706"
                      className="cate_txt"
                    >
                      디자이너샵
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="">
              <a href="/" className="cate_txt">
                반려동물<span className="blind">하위 카테고리 6개</span>
              </a>
              <div
                className="cate_view_lv2 "
                role="menu"
                // aria-expanded="true"
              >
                <ul className="lst_cate lv2">
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000016143.ssg"
                      className="cate_txt cate_all"
                    >
                      전체보기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185638"
                      className="cate_txt"
                    >
                      강아지사료/간식
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185639"
                      className="cate_txt"
                    >
                      고양이사료/간식
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185640"
                      className="cate_txt"
                    >
                      반려동물용품
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185641"
                      className="cate_txt"
                    >
                      반려동물서비스
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185642"
                      className="cate_txt"
                    >
                      소동물/곤충/조류
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185643"
                      className="cate_txt"
                    >
                      관상어용품
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="">
              <a href="/" className="cate_txt">
                가구/인테리어<span className="blind">하위 카테고리 6개</span>
              </a>
              <div
                className="cate_view_lv2 "
                role="menu"
                // aria-expanded="true"
              >
                <ul className="lst_cate lv2">
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015808.ssg"
                      className="cate_txt cate_all"
                    >
                      전체보기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177367"
                      className="cate_txt"
                    >
                      침구/커튼/카페트
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177368"
                      className="cate_txt"
                    >
                      침실/수납가구
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177369"
                      className="cate_txt"
                    >
                      거실/주방가구
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177370"
                      className="cate_txt"
                    >
                      서재/학생아동가구
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177371"
                      className="cate_txt"
                    >
                      조명/인테리어소품
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177372"
                      className="cate_txt"
                    >
                      DIY/시공
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="">
              <a href="/" className="cate_txt">
                스포츠/레저<span className="blind">하위 카테고리 9개</span>
              </a>
              <div
                className="cate_view_lv2 "
                role="menu"
                // aria-expanded="true"
              >
                <ul className="lst_cate lv2">
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015807.ssg"
                      className="cate_txt cate_all"
                    >
                      전체보기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205354"
                      className="cate_txt"
                    >
                      스포츠웨어/용품
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205355"
                      className="cate_txt"
                    >
                      등산/아웃도어
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205356"
                      className="cate_txt"
                    >
                      캠핑/낚시용품
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205357"
                      className="cate_txt"
                    >
                      골프웨어/용품/클럽
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205358"
                      className="cate_txt"
                    >
                      자전거/스케이트/롤러
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205359"
                      className="cate_txt"
                    >
                      헬스/요가/격투기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205360"
                      className="cate_txt"
                    >
                      구기/라켓스포츠
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205361"
                      className="cate_txt"
                    >
                      수영/수상레저
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205362"
                      className="cate_txt"
                    >
                      스키/보드
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="">
              <a href="/" className="cate_txt">
                유아동<span className="blind">하위 카테고리 7개</span>
              </a>
              <div
                className="cate_view_lv2 "
                role="menu"
                // aria-expanded="true"
              >
                <ul className="lst_cate lv2">
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015806.ssg"
                      className="cate_txt cate_all"
                    >
                      전체보기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000163567"
                      className="cate_txt"
                    >
                      기저귀/물티슈/분유/유아식
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000163568"
                      className="cate_txt"
                    >
                      출산/육아용품
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000163569"
                      className="cate_txt"
                    >
                      유모차/카시트/실내용품
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000163570"
                      className="cate_txt"
                    >
                      완구/교구
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000163571"
                      className="cate_txt"
                    >
                      신생아/유아패션
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000163572"
                      className="cate_txt"
                    >
                      아동/주니어패션
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000163573"
                      className="cate_txt"
                    >
                      유아동신발/잡화
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="">
              <a href="/" className="cate_txt">
                뷰티<span className="blind">하위 카테고리 6개</span>
              </a>
              <div
                className="cate_view_lv2 "
                role="menu"
                // aria-expanded="true"
              >
                <ul className="lst_cate lv2">
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015805.ssg"
                      className="cate_txt cate_all"
                    >
                      전체보기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000193742"
                      className="cate_txt"
                    >
                      스킨케어
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000193746"
                      className="cate_txt"
                    >
                      메이크업
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000193744"
                      className="cate_txt"
                    >
                      헤어케어
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000193745"
                      className="cate_txt"
                    >
                      바디케어
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000193743"
                      className="cate_txt"
                    >
                      향수
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000193747"
                      className="cate_txt"
                    >
                      미용기기/소품
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="">
              <a href="/" className="cate_txt">
                주방/생활/건강<span className="blind">하위 카테고리 3개</span>
              </a>
              <div
                className="cate_view_lv2 "
                role="menu"
                // aria-expanded="true"
              >
                <ul className="lst_cate lv2">
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015809.ssg"
                      className="cate_txt cate_all"
                    >
                      전체보기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000178523"
                      className="cate_txt"
                    >
                      주방용품
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000178524"
                      className="cate_txt"
                    >
                      청소/욕실/공구
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000178525"
                      className="cate_txt"
                    >
                      생활/건강
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="">
              <a href="/" className="cate_txt">
                디지털/렌탈/컴퓨터/차량용품
                <span className="blind">하위 카테고리 7개</span>
              </a>
              <div
                className="cate_view_lv2 "
                role="menu"
                // aria-expanded="true"
              >
                <ul className="lst_cate lv2">
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015811.ssg"
                      className="cate_txt cate_all"
                    >
                      전체보기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209194"
                      className="cate_txt"
                    >
                      컴퓨터/노트북/태블릿
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209195"
                      className="cate_txt"
                    >
                      게임/타이틀
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209196"
                      className="cate_txt"
                    >
                      PC주변기기/저장장치
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209197"
                      className="cate_txt"
                    >
                      카메라/캠코더
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209199"
                      className="cate_txt"
                    >
                      내비/블랙박스/차량용품
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209203"
                      className="cate_txt"
                    >
                      휴대폰/스마트기기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000203402"
                      className="cate_txt"
                    >
                      렌탈
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="">
              <a href="/" className="cate_txt">
                식품<span className="blind">하위 카테고리 6개</span>
              </a>
              <div
                className="cate_view_lv2 "
                role="menu"
                // aria-expanded="true"
              >
                <ul className="lst_cate lv2">
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015810.ssg"
                      className="cate_txt cate_all"
                    >
                      전체보기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139021"
                      className="cate_txt"
                    >
                      과일/채소/쌀
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139022"
                      className="cate_txt"
                    >
                      정육/계란류
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139023"
                      className="cate_txt"
                    >
                      수산물/건해산
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139864"
                      className="cate_txt"
                    >
                      반찬/간편식/조미료
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139025"
                      className="cate_txt"
                    >
                      유제품/과자/빵/음료/주류
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139026"
                      className="cate_txt"
                    >
                      홍삼/건강식품
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="">
              <a href="/" className="cate_txt">
                명품/잡화/쥬얼리<span className="blind">하위 카테고리 5개</span>
              </a>
              <div
                className="cate_view_lv2 "
                role="menu"
                // aria-expanded="true"
              >
                <ul className="lst_cate lv2">
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015803.ssg"
                      className="cate_txt cate_all"
                    >
                      전체보기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000200799"
                      className="cate_txt"
                    >
                      가방/지갑
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000200800"
                      className="cate_txt"
                    >
                      모자/장갑/ACC
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000200801"
                      className="cate_txt"
                    >
                      슈즈/운동화
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000200802"
                      className="cate_txt"
                    >
                      시계/쥬얼리
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000200803"
                      className="cate_txt"
                    >
                      명품잡화/아이웨어
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="">
              <a href="/" className="cate_txt">
                문구/도서/취미<span className="blind">하위 카테고리 5개</span>
              </a>
              <div
                className="cate_view_lv2 "
                role="menu"
                // aria-expanded="true"
              >
                <ul className="lst_cate lv2">
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015814.ssg"
                      className="cate_txt cate_all"
                    >
                      전체보기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000210596"
                      className="cate_txt"
                    >
                      도서
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000211273"
                      className="cate_txt"
                    >
                      문구/미술/사무용품
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=3500000958"
                      className="cate_txt"
                    >
                      악기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000083312"
                      className="cate_txt"
                    >
                      음반/DVD
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000018405"
                      className="cate_txt"
                    >
                      취미/키덜트
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="">
              <a href="/" className="cate_txt">
                e쿠폰/서비스/여행
                <span className="blind">하위 카테고리 5개</span>
              </a>
              <div
                className="cate_view_lv2 "
                role="menu"
                // aria-expanded="true"
              >
                <ul className="lst_cate lv2">
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015813.ssg"
                      className="cate_txt cate_all"
                    >
                      전체보기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000211373"
                      className="cate_txt"
                    >
                      서비스
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=3000001210"
                      className="cate_txt"
                    >
                      여행/호텔/레저
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000211386"
                      className="cate_txt"
                    >
                      e쿠폰/상품권
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-flight.ssg.com/air/agent/b2c/AIR/MBL/AIRMBLTRP0100100010.k1?KSESID=air:b2c:SELK138UL:SELK138UL::00"
                      className="cate_txt"
                    >
                      항공권 가격비교
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-triip.ssg.com/hotel/main.ssg"
                      className="cate_txt"
                    >
                      호텔 가격비교
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="">
              <a href="/" className="cate_txt">
                가전<span className="blind">하위 카테고리 4개</span>
              </a>
              <div
                className="cate_view_lv2 "
                role="menu"
                // aria-expanded="true"
              >
                <ul className="lst_cate lv2">
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015812.ssg"
                      className="cate_txt cate_all"
                    >
                      전체보기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209198"
                      className="cate_txt"
                    >
                      에어컨/계절가전
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209200"
                      className="cate_txt"
                    >
                      냉장고/주방가전
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209201"
                      className="cate_txt"
                    >
                      세탁기/생활가전
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209202"
                      className="cate_txt"
                    >
                      영상/음향가전
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="mcom_tit_lft">
        <Link to="/category" className="btn_back clickable">
          <span className="sp_ctg_icon ctg_icon_back">
            <span className="blind">이전 페이지</span>
          </span>
        </Link>
      </div>
      <div className="mcom_tit_rgt">
        <div className="btn_cate btn_clip">
          <span className="cmlike _js_cmlike interestIt">
            <LikeButton />
          </span>
        </div>
        <div className="btn_cate btn_share">
          <button
            type="button"
            className="cm_bt_share clickable"
            data-morph-target=".mcom_ly_share"
          >
            <span className="sp_ctg_icon ctg_icon_share">
              <span className="blind">공유</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryProductListNav;
