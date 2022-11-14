import React, { useContext } from 'react';
import axios from 'axios';
import './LikeButton.scss';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import AuthContext from '../../../store/auth-context';

function LikeButton({
  wishDto = null,
  productId,
  isWishChange,
  setIsWishChange,
}) {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLike = () => {
    if (ctx.isLogin) {
      const token = localStorage.getItem('token');
      const headers = {
        headers: {
          Authorization: JSON.parse(token),
        },
      };

      if (wishDto !== null) {
        axios
          .delete(
            `http://54.180.132.155:9000/users/wish/${wishDto.wishId}`,
            headers,
          )
          .then(() => {
            setIsWishChange(!isWishChange);
          });
      } else {
        axios
          .post('http://54.180.132.155:9000/users/wish', { productId }, headers)
          .then(() => {
            setIsWishChange(!isWishChange);
          });
      }
    } else {
      navigate('/login');
      toast.error('로그인 후 이용 가능한 서비스입니다.', { duration: 2000 });
    }
  };

  return (
    <span className="cmlike _js_cmlike interestIt">
      <button
        type="button"
        className="cmlike_btn _js_cmlike_btn clickable"
        onClick={handleLike}
      >
        <span className="cmlike_ico">
          <i
            className={`cmlike_primary_m `}
            id={`${wishDto !== null ? 'clicked' : ''}`}
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
  );
}

export default LikeButton;
