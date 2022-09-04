import React, { useEffect, useState } from 'react';
import { WishList } from '../../list/WishList';
import { WishFolder, WishFilter } from '../../ui';
import './WishListContent.scss';
import useAxios from '../../../lib/useAxios';
import { LoadingSpinner } from '../../common/LoadingSpinner';

function WishListContent() {
  const [datas, setDatas] = useState();
  const [isWishChange, setIsWishChange] = useState();
  const { response, loading, fetchData } = useAxios({
    method: 'get',
    url: '/users/wish',
  });

  useEffect(() => {
    if (response !== null) {
      setDatas(response);
    }
  }, [response]);

  useEffect(() => {
    fetchData({
      reMethod: 'get',
      reUrl: '/users/wish',
    });
  }, [isWishChange]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div id="m_content" className="react-area">
      <div className="mylike_wrap">
        {datas && (
          <>
            <WishFolder />
            <WishFilter datasCount={datas.length} />
            <WishList
              datas={datas}
              isWishChange={isWishChange}
              setIsWishChange={setIsWishChange}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default WishListContent;
