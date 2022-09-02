import React, { useState, useEffect } from 'react';
import axios from 'axios/index';
import { WishItem } from '../WishItem';

function WishList() {
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
    <div className="mylike_cmitem_wrap">
      <div className="mylike_cmitem_modify">
        <div className="mylike_modify_count">
          {/* <span id="countLike" style={{ display: 'none' }}>
            <em id="clip-chk-cnt">0</em> / 35
          </span> */}
        </div>
        <button
          type="button"
          className="mylike_modify_btn clip-modify-type clickable"
          id="mylikeModify"
        >
          편집
        </button>
      </div>
      <div className="mylike_list_wrap">
        <div className="cmitem_grid">
          <ul className="cmitem_grid_lst cmitem_ty_thmb clip-list" id="myClip">
            {datas &&
              datas.map((data) => (
                <WishItem
                  key={data.productProductId}
                  data={data}
                  isWishChange={isWishChange}
                  setIsWishChange={setIsWishChange}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WishList;
