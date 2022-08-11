import React from 'react';
import { useParams } from 'react-router-dom';
import { CategoryList } from '../CategoryList';
import { ServiceList } from '../ServiceList';
import './CategoryContents.css';

const CATEGORY_LIST_DATA = [
  {
    largeCategoryId: 1,
    imgUrl:
      'https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202109/2021090117370424472933833393_256.jpg&w=150&h=150&edit=c&t=1563dd18551f16231432da715468c33acc03630e',
    title: '패션의류',
    mediumCategoryList: [
      {
        mediumCategoryId: 1,
        mediumCategoryTitle: '명품/수입의류',
      },
      {
        mediumCategoryId: 2,
        mediumCategoryTitle: '여성브랜드패션',
      },
      {
        mediumCategoryId: 3,
        mediumCategoryTitle: '여성트렌드패션',
      },
      {
        mediumCategoryId: 4,
        mediumCategoryTitle: '남성패션',
      },
      {
        mediumCategoryId: 5,
        mediumCategoryTitle: '캐주얼/유니섹스',
      },
      {
        mediumCategoryId: 6,
        mediumCategoryTitle: '언더웨어',
      },
      {
        mediumCategoryId: 7,
        mediumCategoryTitle: '디자이너샵',
      },
    ],
  },
  {
    largeCategoryId: 2,
    imgUrl:
      'https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072917411353521969696196_273.jpg&w=150&h=150&edit=c&t=48614e250da988610b4e7935868e8f1290e7c231',
    title: '명품/잡화/쥬얼리',
    mediumCategoryList: [
      {
        mediumCategoryId: 1,
        mediumCategoryTitle: '가방/지갑',
      },
      {
        mediumCategoryId: 2,
        mediumCategoryTitle: '모자/장갑/ACC',
      },
      {
        mediumCategoryId: 3,
        mediumCategoryTitle: '슈즈/운동화',
      },
      {
        mediumCategoryId: 4,
        mediumCategoryTitle: '시계/쥬얼리',
      },
      {
        mediumCategoryId: 5,
        mediumCategoryTitle: '명품잡화/아이웨어',
      },
    ],
  },
  {
    largeCategoryId: 3,
    imgUrl:
      'https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916174616090674372167_34.jpg&w=150&h=150&edit=c&t=08dd324b76e992bbf3cf69fee132454ef1ae2b2f',
    title: '뷰티',
    mediumCategoryList: [
      {
        mediumCategoryId: 1,
        mediumCategoryTitle: '스킨케어',
      },
      {
        mediumCategoryId: 2,
        mediumCategoryTitle: '메이크업',
      },
      {
        mediumCategoryId: 3,
        mediumCategoryTitle: '헤어케어',
      },
      {
        mediumCategoryId: 4,
        mediumCategoryTitle: '바디케어',
      },
      {
        mediumCategoryId: 5,
        mediumCategoryTitle: '향수',
      },
      {
        mediumCategoryId: 6,
        mediumCategoryTitle: '미용기기/소품',
      },
    ],
  },
  {
    largeCategoryId: 4,
    imgUrl:
      'https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916180739844304103530_576.jpg&w=150&h=150&edit=c&t=24e30ad244143647858f78afb39731d96b5256bc',
    title: '유아동',
    mediumCategoryList: [
      {
        mediumCategoryId: 1,
        mediumCategoryTitle: '기저귀/물티슈/분유/유아식',
      },
      {
        mediumCategoryId: 2,
        mediumCategoryTitle: '출산/육아용품',
      },
      {
        mediumCategoryId: 3,
        mediumCategoryTitle: '유모차/카시트/실내용품',
      },
      {
        mediumCategoryId: 4,
        mediumCategoryTitle: '완구/교구',
      },
      {
        mediumCategoryId: 5,
        mediumCategoryTitle: '신생아/유아패션',
      },
      {
        mediumCategoryId: 6,
        mediumCategoryTitle: '아동/주니어패션',
      },
      {
        mediumCategoryId: 7,
        mediumCategoryTitle: '유아동신발/잡화',
      },
    ],
  },
];

function CategoryContents() {
  return (
    <div className="clnb_wrap">
      <div className="clnb_sub_cate" id="mcom_clnb_cate">
        <ul>
          {/* 패션의류 */}
          {/* 명품/잡화/쥬얼리 */}
          {/* 뷰티 */}
          {/* 유아동 */}
          {CATEGORY_LIST_DATA &&
            CATEGORY_LIST_DATA.map((data) => (
              <CategoryList key={data.largeCategoryId} data={data} />
            ))}

          {/* 스포츠/레저 */}
          <li className="clnb_renew_item">
            <a
              href="/"
              className="clickable"
              data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|스포츠/레저"
            >
              <span
                className="thmb ssg_lazy"
                data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916183081222145720314_367.jpg&w=150&h=150&edit=c&t=8791b688cc54899753a9adb2f82dc585c52a8ae0')"
                data-ll-status="loading"
                style={{
                  backgroundImage:
                    "url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916183081222145720314_367.jpg&w=150&h=150&edit=c&t=8791b688cc54899753a9adb2f82dc585c52a8ae0')",
                }}
              />
              <em>스포츠/레저</em>
            </a>
            <div className="clnb_lst_cate" style={{ height: '180px' }}>
              <div className="clnb_lst">
                <ul className="cate_view">
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/page/llcategory/1000015807.ssg"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205354"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|스포츠웨어/용품"
                    >
                      스포츠웨어/용품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205355"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|등산/아웃도어"
                    >
                      등산/아웃도어
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205356"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|캠핑/낚시용품"
                    >
                      캠핑/낚시용품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205357"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|골프웨어/용품/클럽"
                    >
                      골프웨어/용품/클럽
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205358"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|자전거/스케이트/롤러"
                    >
                      자전거/스케이트/롤러
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205359"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|헬스/요가/격투기"
                    >
                      헬스/요가/격투기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205360"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|구기/라켓스포츠"
                    >
                      구기/라켓스포츠
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205361"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|수영/수상레저"
                    >
                      수영/수상레저
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205362"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|스키/보드"
                    >
                      스키/보드
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* 가구/인테리어 */}
          <li className="clnb_renew_item">
            <a
              href="/"
              className="clickable"
              data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|가구/인테리어"
            >
              <span
                className="thmb ssg_lazy"
                data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072917404751786590472759_591.jpg&w=150&h=150&edit=c&t=3a7d4a334ee9337474b984a6ea9867fd36181d57')"
                data-ll-status="loading"
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
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177367"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|침구/커튼/카페트"
                    >
                      침구/커튼/카페트
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177368"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|침실/수납가구"
                    >
                      침실/수납가구
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177369"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|거실/주방가구"
                    >
                      거실/주방가구
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177370"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|서재/학생아동가구"
                    >
                      서재/학생아동가구
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177371"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|조명/인테리어소품"
                    >
                      조명/인테리어소품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000177372"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|DIY/시공"
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
            <a
              href="/"
              className="clickable"
              data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|주방/생활/건강"
            >
              <span
                className="thmb ssg_lazy"
                data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202105/2021051315282642621637316163_499.jpg&w=150&h=150&edit=c&t=74b16620d21c0412d55cec8083a145421623a236')"
                data-ll-status="loading"
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
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000178523"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|주방용품"
                    >
                      주방용품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000178524"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|청소/욕실/공구"
                    >
                      청소/욕실/공구
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000178525"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|생활/건강"
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
            <a
              href="/"
              className="clickable"
              data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|반려동물"
            >
              <span
                className="thmb ssg_lazy"
                data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202109/2021091312493245557072867707_591.jpg&w=150&h=150&edit=c&t=b1ff290c681d07b086d3b13334f222294befce91')"
                data-ll-status="loading"
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
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185638"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|강아지사료/간식"
                    >
                      강아지사료/간식
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185639"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|고양이사료/간식"
                    >
                      고양이사료/간식
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185640"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|반려동물용품"
                    >
                      반려동물용품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185641"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|반려동물서비스"
                    >
                      반려동물서비스
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185642"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|소동물/곤충/조류"
                    >
                      소동물/곤충/조류
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185643"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|관상어용품"
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
            <a
              href="/"
              className="clickable"
              data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|식품"
            >
              <span
                className="thmb ssg_lazy"
                data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916185554662649910364_729.jpg&w=150&h=150&edit=c&t=437f0d41210a78741f89ba827407c26b2e8798ce')"
                data-ll-status="loading"
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
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139021"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|과일/채소/쌀"
                    >
                      과일/채소/쌀
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139022"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|정육/계란류"
                    >
                      정육/계란류
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139023"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|수산물/건해산"
                    >
                      수산물/건해산
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139864"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|반찬/간편식/조미료"
                    >
                      반찬/간편식/조미료
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139025"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|유제품/과자/빵/음료/주류"
                    >
                      유제품/과자/빵/음료/주류
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139026"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|홍삼/건강식품"
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
            <a
              href="/"
              className="clickable"
              data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|가전"
            >
              <span
                className="thmb ssg_lazy"
                data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916221442699359630445_591.jpg&w=150&h=150&edit=c&t=5c5d93292562b819f3509eb400fbd9d49d86ad6e')"
                data-ll-status="loading"
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
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209198"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|에어컨/계절가전"
                    >
                      에어컨/계절가전
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209200"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|냉장고/주방가전"
                    >
                      냉장고/주방가전
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209201"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|세탁기/생활가전"
                    >
                      세탁기/생활가전
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209202"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|영상/음향가전"
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
            <a
              href="/"
              className="clickable"
              data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|디지털/렌탈/<br/>컴퓨터/차량용품"
            >
              <span
                className="thmb ssg_lazy"
                data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916192109082788875378_90.jpg&w=150&h=150&edit=c&t=b83371edfebf91bca55682016e958688bc59cb78')"
                data-ll-status="loading"
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
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209194"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|컴퓨터/노트북/태블릿"
                    >
                      컴퓨터/노트북/태블릿
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209195"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|게임/타이틀"
                    >
                      게임/타이틀
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209196"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|PC주변기기/저장장치"
                    >
                      PC주변기기/저장장치
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209197"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|카메라/캠코더"
                    >
                      카메라/캠코더
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209199"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|내비/블랙박스/차량용품"
                    >
                      내비/블랙박스/차량용품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209203"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|휴대폰/스마트기기"
                    >
                      휴대폰/스마트기기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000203402"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|렌탈"
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
            <a
              href="/"
              className="clickable"
              data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|e쿠폰/서비스/<br/>여행"
            >
              <span
                className="thmb ssg_lazy"
                data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072916223916760668536166_464.jpg&w=150&h=150&edit=c&t=82ec94eba3bd7b859529cacae02f3b1287f780b5')"
                data-ll-status="loading"
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
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000211373"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|서비스"
                    >
                      서비스
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=3000001210"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|여행/호텔/레저"
                    >
                      여행/호텔/레저
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-flight.ssg.com/air/agent/b2c/AIR/MBL/AIRMBLTRP0100100010.k1?KSESID=air:b2c:SELK138UL:SELK138UL::00"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|테마_선택|항공권 가격비교"
                    >
                      항공권 가격비교
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-triip.ssg.com/hotel/main.ssg"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|테마_선택|호텔 가격비교"
                    >
                      호텔 가격비교
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000211386"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|e쿠폰/상품권"
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
            <a
              href="/"
              className="clickable"
              data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|문구/도서/취미"
            >
              <span
                className="thmb ssg_lazy"
                data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202105/2021051316532756213053205305_963.jpg&w=150&h=150&edit=c&t=292c99e60f69fb8779ef1e40fe7096612bcb0165')"
                data-ll-status="loading"
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
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000210596"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|도서"
                    >
                      도서
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000211273"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|문구/미술/사무용품"
                    >
                      문구/미술/사무용품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=3500000958"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|악기"
                    >
                      악기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000083312"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|음반/DVD"
                    >
                      음반/DVD
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000018405"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|취미/키덜트"
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
            <a
              href="/"
              className="clickable"
              data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|명품/잡화"
            >
              <span
                className="thmb ssg_lazy"
                data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072413342121681090850209_459.jpg&w=150&h=150&edit=c&t=83d1ec825c82c691c9b2d949b3d465803a13059b')"
                data-ll-status="loading"
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
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201048"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|해외명품"
                    >
                      해외명품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201049"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|핸드백/지갑"
                    >
                      핸드백/지갑
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201050"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|시계/쥬얼리"
                    >
                      시계/쥬얼리
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201051"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|모자/장갑/ACC"
                    >
                      모자/장갑/ACC
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201052"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|슈즈/운동화"
                    >
                      슈즈/운동화
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="clnb_renew_item">
            <a
              href="/"
              className="clickable"
              data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|명품화장품"
            >
              <span
                className="thmb ssg_lazy"
                data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072413343891419129134912_505.jpg&w=150&h=150&edit=c&t=de9828d64b1e587e1cc9bb4a5feedf5420255949')"
                data-ll-status="loading"
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
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000194314"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|스킨케어"
                    >
                      스킨케어
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000194315"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|메이크업"
                    >
                      메이크업
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000194316"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|헤어/바디"
                    >
                      헤어/바디
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000194317"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|향수"
                    >
                      향수
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="clnb_renew_item">
            <a
              href="/"
              className="clickable"
              data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|패션"
            >
              <span
                className="thmb ssg_lazy"
                data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072411204623174933849493_865.jpg&w=150&h=150&edit=c&t=74bae9f4125fdb65be7be09d5c1012652133200f')"
                data-ll-status="loading"
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
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201598"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|명품/수입의류"
                    >
                      명품/수입의류
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000191035"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|여성커리어"
                    >
                      여성커리어
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189545"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|영캐주얼"
                    >
                      영캐주얼
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189676"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|남성패션"
                    >
                      남성패션
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189738"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|캐주얼/유니섹스"
                    >
                      캐주얼/유니섹스
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000189629"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|언더웨어"
                    >
                      언더웨어
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="clnb_renew_item">
            <a
              href="/"
              className="clickable"
              data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|스포츠/레저"
            >
              <span
                className="thmb ssg_lazy"
                data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072413350361817137354713_403.jpg&w=150&h=150&edit=c&t=d31664614d323d8b818cd5f344e83d31741d4cac')"
                data-ll-status="loading"
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
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000202051"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|등산/아웃도어"
                    >
                      등산/아웃도어
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205962"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|스포츠웨어/슈즈"
                    >
                      스포츠웨어/슈즈
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000202052"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|골프웨어/용품/클럽"
                    >
                      골프웨어/용품/클럽
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000205965"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|헬스/수영/스키"
                    >
                      헬스/수영/스키
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="clnb_renew_item">
            <a
              href="/"
              className="clickable"
              data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|유아동"
            >
              <span
                className="thmb ssg_lazy"
                data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072413335553066034848603_39.jpg&w=150&h=150&edit=c&t=cc88e93325c6de295b778d4fb91298b83f3482f4')"
                data-ll-status="loading"
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
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000165249"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|출산/육아용품"
                    >
                      출산/육아용품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000165250"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|유아동패션"
                    >
                      유아동패션
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000165251"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|유아동신발/잡화"
                    >
                      유아동신발/잡화
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000165252"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|완구/교구"
                    >
                      완구/교구
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="clnb_renew_item">
            <a
              href="/"
              className="clickable"
              data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|가전/생활/식품"
            >
              <span
                className="thmb ssg_lazy"
                data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072413355682575147100614_344.jpg&w=150&h=150&edit=c&t=04307f119a572fc17a24a839a30c70441e6e3795')"
                data-ll-status="loading"
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
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|상품 전체보기"
                    >
                      상품 전체보기
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000209568"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|가전"
                    >
                      가전
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000018659"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|가정생활"
                    >
                      가정생활
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000185489"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|반려동물"
                    >
                      반려동물
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000139051"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|식품"
                    >
                      식품
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000028294"
                      className="clickable"
                      data-react-tarea="카테고리_LNB|전시_카테고리|일반_선택|쓱콘"
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
                data-react-tarea="카테고리_LNB|테마추천|배너_클릭|SSG Luxury"
              >
                <div className="clnb_shdu_thmb">
                  <div className="clnb_shdu_img">
                    <img
                      className="ssg_lazy loaded"
                      src="//sui.ssgcdn.com/cmpt/banner/202207/2022070515062822153723407372_375.jpg"
                      alt="/cmpt/banner/202207/2022070515062822153723407372_375.jpg"
                      data-src="//sui.ssgcdn.com/cmpt/banner/202207/2022070515062822153723407372_375.jpg"
                      onError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&w=145&h=145&t=9173a371ff680649d2abfc58b64355ad05421821'"
                      data-ll-status="loaded"
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
                data-react-tarea="카테고리_LNB|테마추천|배너_클릭|제로웨이스트"
              >
                <div className="clnb_shdu_thmb">
                  <div className="clnb_shdu_img">
                    <img
                      className="ssg_lazy loaded"
                      src="//sui.ssgcdn.com/cmpt/banner/202204/2022041517155741312171025217_772.jpg"
                      alt="/cmpt/banner/202204/2022041517155741312171025217_772.jpg"
                      data-src="//sui.ssgcdn.com/cmpt/banner/202204/2022041517155741312171025217_772.jpg"
                      onError="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&w=145&h=145&t=9173a371ff680649d2abfc58b64355ad05421821'"
                      data-ll-status="loaded"
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