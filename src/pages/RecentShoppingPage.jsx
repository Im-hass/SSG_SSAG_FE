import React from 'react';
import {
  RecentShoppingHeader,
  RecentShoppingProductList,
  NoDataMessage,
} from '../components/contents';
import { FloatingContents } from '../components/common';

function RecentShoppingPage() {
  return (
    <div id="m_wrap" className="mcom_wrap ssg">
      <div id="m_container" className="mcom_container" data-iframe-height="">
        <link
          rel="stylesheet"
          type="text/css"
          href="//sui.ssgcdn.com/ui/m_ssg/css/mcom_page_history.css"
        />

        <div id="m_content">
          <div className="cmhistory_wrap" id="_cmhistory_wrap">
            <RecentShoppingHeader />

            <div className="cmhistory_ct">
              <div className="cmhistory_scroll" id="_cmhistory_scroll">
                <div className="iscroll">
                  <RecentShoppingProductList />
                </div>
              </div>

              <NoDataMessage />
            </div>
          </div>
        </div>
      </div>

      <FloatingContents />
    </div>
  );
}

export default RecentShoppingPage;
