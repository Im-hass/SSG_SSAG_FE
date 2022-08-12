import React from 'react';
import {
  FloatingContents,
  CategoryFooter,
  Header,
} from '../components/common/index';
import { CategoryContents } from '../components/contents/CategoryContents/index';
import { ToolbarList } from '../components/toolbar/ToolbarList';

function CategoryPage() {
  return (
    <div id="m_wrap" className="mcom_wrap sm_v3 ">
      <div id="m_container" className="mcom_container">
        <div id="m_content">
          <div className="mcom_category_renew react-area">
            <Header />
            <CategoryContents />
            <ToolbarList />
            <CategoryFooter />
            <FloatingContents />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
