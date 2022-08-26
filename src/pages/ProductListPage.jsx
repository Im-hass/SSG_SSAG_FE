import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Header, Footer, FloatingContents } from '../components/common';
import { ProductListContent } from '../components/contents';
import { ProductListHeader } from '../components/product/ProductListHeader';

function ProductListPage() {
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
  }, [largeCategoryId, mediumCategoryId]);

  return (
    <div id="m_wrap" className="mcom_wrap sm_v3 ">
      <Header />
      <div id="m_container" className="mcom_container" data-iframe-height="">
        <ProductListHeader
          largeCategoryId={largeCategoryId}
          title={title}
          subTitle={subTitle}
        />
        {mediumCateList && (
          <ProductListContent mediumCateList={mediumCateList} />
        )}
        {largeCategoryId}, {mediumCategoryId}
        <FloatingContents />
        <Footer />
      </div>
    </div>
  );
}

export default ProductListPage;
