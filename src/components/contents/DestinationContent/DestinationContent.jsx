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
  const [isClassOn, setIsClassOn] = useState('myDes');

  const handleMenu = (index) => {
    setIsClassOn(index);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('http://10.10.10.174:8081/users/shipping-addr', {
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
              <ul className="myodr_tab_list" role="tablist">
                <li
                  role="menuitem"
                  onClick={() => handleMenu('myDes')}
                  onKeyDown={() => handleMenu('myDes')}
                  className={isClassOn === 'myDes' ? 'on' : ''}
                >
                  <Link to="/destination/myDes">
                    <span className="myodr_tab_tx">MY배송지</span>
                  </Link>
                </li>
                <li
                  role="menuitem"
                  onClick={() => handleMenu('withDes')}
                  onKeyDown={() => handleMenu('withDes')}
                  className={isClassOn === 'withDes' ? 'on' : ''}
                >
                  <Link to="/destination/withDes">
                    <span className="myodr_tab_tx">함께장보기 배송지</span>
                  </Link>
                </li>
              </ul>
              <DestinationTabList handleMenu={handleMenu} />

              {isClassOn === 'myDes' ? (
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
              ) : (
                <div className="myodr_tab_cont">
                  <div className="myodr_tab_panel" role="tabpanel">
                    <div className="myodr_nodata">
                      <span className="myodr_nodata_ico">&nbsp;</span>
                      <p className="myodr_nodata_tx">
                        등록된 함께장보기 배송지가 없습니다.
                      </p>
                      <button
                        type="button"
                        className="myodr_btn myodr_btn_gray2"
                        // onClick="location.href='https://pay.ssg.com/m/cartShare/create.ssg';"
                      >
                        <span>함께장보기 시작하기</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationContent;
