import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DestinationAddBtn,
  DestinationBanner,
  DestinationBtns,
  DestinationList,
  DestinationListInfo,
  DestinationNoData,
} from '../index';
import useAxios from '../../../lib/useAxios';
import { LoadingSpinner } from '../../common/LoadingSpinner';

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
  const { response, loading, error, fetchData } = useAxios({
    method: 'get',
    url: '/users/shipping-addr',
  });

  const handleSelectedAddr = (id) => {
    setSelected(id);
  };

  useEffect(() => {
    if (response !== null && response !== '배송지를 삭제하였습니다.') {
      const lists = response;
      const sortLists = lists.sort(defaultAddrSort);
      setSelected(lists[0]?.addrId);
      setDatas(sortLists);
    }
  }, [response]);

  useEffect(() => {
    fetchData({
      reMethod: 'get',
      reUrl: '/users/shipping-addr',
    });
  }, [isDelete, isDefaultChanged]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="myodr_tab_cont">
      <div className="myodr_tab_panel" role="tabpanel">
        {datas && datas.length !== 0 ? (
          <>
            <DestinationList
              datas={datas}
              error={error}
              isDelete={isDelete}
              setIsDelete={setIsDelete}
              handleSelectedAddr={handleSelectedAddr}
              fetchData={fetchData}
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
