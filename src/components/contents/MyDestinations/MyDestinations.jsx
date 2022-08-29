import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  DestinationAddBtn,
  DestinationBanner,
  DestinationBtns,
  DestinationList,
  DestinationListInfo,
  DestinationNoData,
} from '../index';

function defaultAddrSort(a, b) {
  if (a.addrDefault > b.addrDefault) {
    return -1;
  }
  return 0;
}

function MyDestinations() {
  const [datas, setDatas] = useState();
  const [isDelete, setIsDelete] = useState(false);
  const [isDefaultChanged, setIsDefaultChanged] = useState(false);
  const [selected, setSelected] = useState();

  const handleSelectedAddr = (id) => {
    setSelected(id);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('http://13.209.26.150:9000/users/shipping-addr', {
        headers: {
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        const lists = res.data.result;
        const sortLists = lists.sort(defaultAddrSort);
        setSelected(lists[0].addrId);
        setDatas(sortLists);
      })
      .catch((e) => new Error(e));
  }, [isDelete, isDefaultChanged]);

  return (
    <div className="myodr_tab_cont">
      <div className="myodr_tab_panel" role="tabpanel">
        {datas && datas.length !== 0 ? (
          <>
            <DestinationList
              datas={datas}
              // isModify={isModify}
              // setIsModify={setIsModify}
              isDelete={isDelete}
              setIsDelete={setIsDelete}
              handleSelectedAddr={handleSelectedAddr}
            />
            <Link to="/addDestination">
              <DestinationAddBtn />
            </Link>
            <DestinationBtns
              selected={selected}
              isDefaultChanged={isDefaultChanged}
              setIsDefaultChanged={setIsDefaultChanged}
            />
            <DestinationListInfo />
          </>
        ) : (
          <DestinationNoData />
        )}
      </div>

      <DestinationBanner />
    </div>
  );
}

export default MyDestinations;
