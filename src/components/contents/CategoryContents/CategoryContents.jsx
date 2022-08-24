import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { CategoryList } from '../CategoryList';
import { ServiceList } from '../ServiceList';
import {
  CATEGORY_LIST_DATA,
  CATEGORY1_IMG_LIST,
  CATEGORY2_IMG_LIST,
} from '../../../assets/datas/CategoryList';
import {
  isCategorySelected,
  isCategorySelected2,
} from '../../../recoil/states';

function CategoryContents() {
  const [datas, setDatas] = useState();
  const [isSelected, setIsSelected] = useRecoilState(isCategorySelected);
  const [isSelected2, setIsSelected2] = useRecoilState(isCategorySelected2);

  useEffect(() => {
    axios.get('http://13.209.26.150:9000/comm-users/category').then((res) => {
      setDatas(res.data.result);
    });
  }, []);

  return (
    <div className="clnb_wrap">
      <div className="clnb_sub_cate" id="mcom_clnb_cate">
        <ul>
          {/* 패션의류 */}
          {/* 명품/잡화/쥬얼리 */}
          {/* 뷰티 */}
          {/* 유아동 */}
          {/* 스포츠/레저 */}
          {/* 가구/인테리어 */}
          {/* 주방/생활/건강 */}
          {/* 반려동물 */}
          {/* 식품 */}
          {/* 가전 */}
          {/* 디지털/렌탈/컴퓨터/차량용품 */}
          {/* e쿠폰/서비스/여행 */}
          {/* 문구/도서/취미 */}
          <CategoryList
            datas={datas}
            CATEGORY_IMG_LIST={CATEGORY1_IMG_LIST}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
        </ul>

        {/* 신세계백화점 카테고리 */}
        <h2 className="clnb_tit">
          <span className="cm_mall_ic ty_circle_s">
            <i className="sd" />
          </span>
          <span>신세계백화점</span>
        </h2>
        <ul>
          <CategoryList
            datas={CATEGORY_LIST_DATA}
            CATEGORY_IMG_LIST={CATEGORY2_IMG_LIST}
            isSelected={isSelected2}
            setIsSelected={setIsSelected2}
          />
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
