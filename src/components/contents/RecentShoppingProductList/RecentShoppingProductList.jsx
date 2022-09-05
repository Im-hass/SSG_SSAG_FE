import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';
import { Link, useNavigate } from 'react-router-dom';
import { CustomAlert } from '../../common/index';
import './RecentShoppingProductList.scss';
import LikeButton from '../../ui/LikeButton/LikeButton';

function RecentShoppingProductList({
  recentItem,
  isRecentItemDelete,
  setIsRecentItemDelete,
  isWishChange,
  setIsWishChange,
}) {
  const [optionArr, setOptionArr] = useState(undefined);
  const recentItemName = recentItem.name;
  const recentItemPrice = recentItem.price;
  const recentItemImgUrl = recentItem.productImg;
  const recentItemId = recentItem.productId;
  const recentHistoryId = recentItem.viewHistoryId;

  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      Authorization: JSON.parse(token),
    },
  };

  const onDeleteRecentItem = () => {
    const deleteUrl = `http://13.209.26.150:9000/users/recent/product/${recentHistoryId}`;

    axios
      .delete(deleteUrl, headers)
      .then(() => {
        toast.success('상품을 삭제했습니다.');
        setIsRecentItemDelete(!isRecentItemDelete);
      })
      .catch(() => {
        toast.error('상품을 삭제하지 못했습니다');
      });
  };

  const handleDeleteCartItem = () => {
    confirmAlert({
      // eslint-disable-next-line react/no-unstable-nested-components
      customUI: ({ onClose }) => (
        <CustomAlert
          title="상품 삭제"
          desc="상품을 삭제하시겠습니까?"
          btnTitle="삭제"
          id={recentItemId}
          onAction={onDeleteRecentItem}
          onClose={onClose}
        />
      ),
    });
  };

  const getOptionData = () => {
    const getOptionUrl = `http://13.209.26.150:9000/comm-users/products/options/color/${recentItemId}`;

    axios
      .get(getOptionUrl, headers)
      .then((res) => {
        setOptionArr(res.data.result);
      })
      .catch((err) => new Error(err));
  };

  useEffect(() => {
    getOptionData();
  }, [isRecentItemDelete]);

  const navigate = useNavigate();
  const redirectToItem = () => {
    navigate(`/product/${recentItemId}`);
  };

  const handleAddCart = () => {
    if (optionArr[0] !== undefined) {
      confirmAlert({
        // eslint-disable-next-line react/no-unstable-nested-components
        customUI: ({ onClose }) => (
          <CustomAlert
            title="장바구니 담기"
            desc="옵션이 있는 상품입니다. 상세 페이지에서 옵션을 선택해주세요."
            btnTitle="이동"
            id={recentItemId}
            onAction={redirectToItem}
            onClose={onClose}
          />
        ),
      });
    }
  };

  return (
    <li className="cmhistory_type_product" id="history_10914241309">
      <div className="cmhistory_unit_box">
        <div className="cmhistory_cell cmhistory_h_form">
          <span className="cmhistory_form_chk">
            <input
              type="checkbox"
              name="cmhistory_chk"
              id="cmhistory_chk0"
              value="10914241309"
            />
            <label htmlFor="cmhistory_chk0" className="blind">
              {recentItemName}
            </label>
          </span>
        </div>
        <div className="cmhistory_cell cmhistory_h_link">
          <Link to={`/product/${recentItemId}`} className="clickable">
            <div className="cmhistory_h_txt">
              <span className="cm_mall_text">
                <i className="sm">신세계몰</i>
              </span>
              <span className="cmhistory_tx">{recentItemName}</span>
              <span className="cmhistory_tx_price">
                <em className="ssg_price">
                  {recentItemPrice.toLocaleString()}
                </em>
                <span className="ssg_tx">원</span>
              </span>
            </div>
            <div className="cmhistory_h_thmb">
              <div className="cmhistory_thmb">
                <img
                  className="ssg_lazy"
                  src={recentItemImgUrl}
                  alt={recentItemName}
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="cmhistory_cell cmhistory_h_add">
          <div id="recent_btn_area" className="cmhistory_bt_area">
            <button
              type="button"
              className="cmhistory_bt_cart"
              onClick={handleDeleteCartItem}
            >
              <i
                id="recent_del_btn"
                className="sp_cmhistory_ic cmhistory_ic_cart"
              >
                <span className="blind">상품 삭제</span>
              </i>
            </button>
          </div>

          <div id="recent_btn_area" className="cmhistory_bt_area">
            <button
              type="button"
              className="cmhistory_bt_cart"
              onClick={handleAddCart}
            >
              <i className="sp_cmhistory_ic cmhistory_ic_cart">
                <span className="blind">장바구니 담기</span>
              </i>
            </button>
          </div>

          <div id="recent_btn_area" className="cmhistory_bt_area">
            <LikeButton
              wishDto={recentItem.wishDto}
              productId={recentItemId}
              isWishChange={isWishChange}
              setIsWishChange={setIsWishChange}
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export default RecentShoppingProductList;
