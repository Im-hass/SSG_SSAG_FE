import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { Header, Footer, FloatingContents } from '../components/common';
import { ProductListContent } from '../components/contents';
import { CategoryProductListNav } from '../components/product/CategoryProductListNav';
import ToolbarList from '../components/toolbar/ToolbarList/ToolbarList';
import { isOpenState } from '../recoil/states';

function ProductListPage() {
  const [isOpen] = useRecoilState(isOpenState);
  const { largeCategoryId, mediumCategoryId } = useParams();
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [mediumCateList, setMediumCateList] = useState();

  useEffect(() => {
    axios.get('http://13.209.26.150:9000/comm-users/category').then((res) => {
      const response = res.data.result[largeCategoryId - 1];
      setTitle(response.title);
      setMediumCateList(response.mediumCategoryList);
      if (mediumCategoryId === undefined) {
        setSubTitle('전체보기');
      } else {
        response.mediumCategoryList.map((v) =>
          v.mediumCategoryId === Number(mediumCategoryId)
            ? setSubTitle(v.mediumCategoryTitle)
            : '',
        );
      }
    });
  }, [largeCategoryId, mediumCategoryId, mediumCateList]);

  return (
    <div id="m_wrap" className="mcom_wrap sm_v3 ">
      <Header />
      {!isOpen && (
        <div id="m_container" className="mcom_container" data-iframe-height="">
          <CategoryProductListNav
            largeCategoryId={largeCategoryId}
            title={title}
            subTitle={subTitle}
          />
          {mediumCateList && (
            <ProductListContent mediumCateList={mediumCateList} />
          )}
          <FloatingContents />
          <ToolbarList />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default ProductListPage;
