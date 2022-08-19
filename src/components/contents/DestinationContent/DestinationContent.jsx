import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios/index';
import {
  DestinationTit,
  DestinationTabList,
  DestinationNoData,
  DestinationBanner,
  DestinationList,
  DestinationAddBtn,
  DestinationBtns,
  DestinationListInfo,
} from '../index';

function defaultAddrSort(a, b) {
  if (a.addrDefault > b.addrDefault) {
    return -1;
  }
  return 0;
}

function DestinationContent() {
  const [datas, setDatas] = useState();

  useEffect(() => {
    localStorage.setItem(
      'token',
      JSON.stringify(
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NjA3OTk2MzgsImV4cCI6MTY2MDgwMTQzOH0.FT4H9xDJUpkQztfE2WLTP4dbrkUaSJ4FlYQXqarVjtM',
      ),
    );
    const token = localStorage.getItem('token');
    axios
      .get('http://10.10.10.174:8081/users/shipping-addr/1', {
        headers: {
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        const lists = res.data.result;
        const sortLists = lists.sort(defaultAddrSort);
        setDatas(sortLists);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div id="m_wrap" className="mcom_wrap ssg">
      <div id="m_container" className="mcom_container">
        <div id="m_content">
          <div className="myodr_addrwrap">
            <DestinationTit />

            <div className="myodr_tab">
              <DestinationTabList />

              <div className="myodr_tab_cont">
                <div className="myodr_tab_panel" role="tabpanel">
                  {datas && datas.length !== 0 ? (
                    <>
                      <DestinationList datas={datas} />
                      <Link to="/addDestination">
                        <DestinationAddBtn />
                      </Link>
                      <DestinationBtns />
                      <DestinationListInfo />
                    </>
                  ) : (
                    <DestinationNoData />
                  )}
                </div>

                <DestinationBanner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationContent;
