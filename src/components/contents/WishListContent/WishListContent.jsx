import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WishList } from '../../list/WishList';
import { WishFolder, WishFilter } from '../../ui';
import './WishListContent.scss';

function WishListContent() {
  const [datas, setDatas] = useState();
  const [isWishChange, setIsWishChange] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = {
      headers: {
        Authorization: JSON.parse(token),
      },
    };

    axios.get(`http://13.209.26.150:9000/users/wish`, headers).then((res) => {
      setDatas(res.data.result);
    });
  }, [isWishChange]);

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
