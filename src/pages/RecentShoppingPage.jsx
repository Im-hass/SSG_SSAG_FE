import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  RecentShoppingHeader,
  RecentShoppingProductList,
  NoDataMessage,
} from '../components/contents';
import { ToolbarList } from '../components/toolbar/ToolbarList';
import { FloatingContents } from '../components/common';

function RecentShoppingPage() {
  const [recentShoppingData, setRecentShoppingData] = useState(null);
  const [isRecentItemDelete, setIsRecentItemDelete] = useState(false);

  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      Authorization: JSON.parse(token),
    },
  };

  useEffect(() => {
    const getRecentDataUrl = 'http://13.209.26.150:9000/users/recent/product';

    axios
      .get(getRecentDataUrl, headers)
      .then((res) => {
        setRecentShoppingData(res.data.result);
        console.log('recent res:', res);
      })
      .catch((err) => console.log('recent res:', err));
  }, [isRecentItemDelete]);

  return (
    <div id="m_wrap" className="mcom_wrap ssg">
      <link
        rel="stylesheet"
        type="text/css"
        href="//sui.ssgcdn.com/ui/m_ssg/css/mcom_page_history.css"
      />
      <div id="m_container" className="mcom_container">
        <div id="m_content">
          <div className="cmhistory_wrap" id="_cmhistory_wrap">
            <RecentShoppingHeader />

            <div className="cmhistory_ct">
              {recentShoppingData && (
                <div className="cmhistory_scroll" id="_cmhistory_scroll">
                  <div className="iscroll">
                    <ul className="cmhistory_list_area">
                      {recentShoppingData.map((recentItem) => (
                        <RecentShoppingProductList
                          key={recentItem.viewHistoryId}
                          recentItem={recentItem}
                          isRecentItemDelete={isRecentItemDelete}
                          setIsRecentItemDelete={setIsRecentItemDelete}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {recentShoppingData && !recentShoppingData[0] && (
                <NoDataMessage />
              )}
            </div>
          </div>
        </div>
      </div>
      <ToolbarList />
      <FloatingContents pageName="recentHistory" />
    </div>
  );
}

export default RecentShoppingPage;
