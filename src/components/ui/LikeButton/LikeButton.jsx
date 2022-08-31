import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LikeButton.scss';

function LikeButton({ wishDto, productId, isLogin }) {
  const [isWish, setIsWish] = useState(false);

  // useEffect(() => {
  //   console.log(wishDto);
  //   if (productId !== undefined) {
  //     if (wishDto !== null || wishDto !== undefined) {
  //       setWishId(wishDto.wishId);
  //       setIsWish(!isWish);
  //     }
  //   }
  // }, [isWish]);

  // const handleLike = () => {
  //   if (productId !== undefined) {
  //     const token = localStorage.getItem('token');
  //     const headers = {
  //       headers: {
  //         Authorization: JSON.parse(token),
  //       },
  //     };
  //     if (!isWish) {
  //       axios
  //         .post('http://13.209.26.150:9000/users/wish', { productId }, headers)
  //         .then((res) => {
  //           console.log(res.data);
  //         });
  //     } else {
  //       axios
  //         .delete(
  //           `http://13.209.26.150:9000/users/wish/${wishDto.wishId}`,
  //           headers,
  //         )
  //         .then((res) => {
  //           console.log(res.data);
  //         });
  //     }
  //     setIsWish(!isWish);
  //   }
  // };

  useEffect(() => {
    if (isLogin) {
      if (wishDto !== null) {
        setIsWish(true);
      } else {
        setIsWish(false);
      }
    } else {
      setIsWish(false);
    }
  }, []);

  const handleLike = () => {
    if (isLogin) {
      const token = localStorage.getItem('token');
      const headers = {
        headers: {
          Authorization: JSON.parse(token),
        },
      };

      console.log(`${isWish ? '위시 삭제 요청' : '위시 등록 요청'}`);
      if (isWish) {
        axios
          .delete(
            `http://13.209.26.150:9000/users/wish/${wishDto.wishId}`,
            headers,
          )
          .then((res) => {
            console.log(res.data);
          });
      } else {
        axios
          .post('http://13.209.26.150:9000/users/wish', { productId }, headers)
          .then((res) => {
            console.log(res.data);
          });
      }

      setIsWish(!isWish);
    }
    console.log(
      `프로덕트 ID: ${productId}, 위시인가: ${isWish}, ${
        wishDto !== null ? wishDto.wishId : ''
      }`,
    );
  };

  return (
    <div className="mnsditem_btn_like">
      <span className="cmlike _js_cmlike interestIt">
        <button
          type="button"
          className="cmlike_btn _js_cmlike_btn clickable"
          onClick={handleLike}
        >
          <span className="cmlike_ico">
            <i
              className={`cmlike_primary_m `}
              id={`${isWish ? 'clicked' : ''}`}
            />
            <span className="sr_off">
              <span className="blind">관심상품 취소</span>
            </span>
            <span className="sr_on">
              <span className="blind">관심상품 등록</span>
            </span>
          </span>
        </button>
      </span>
    </div>
  );
}

export default LikeButton;
