import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './RecentShoppingProductList.scss';
import { confirmAlert } from 'react-confirm-alert';
import { CustomAlert } from '../../common/index';

function RecentShoppingProductList({
  recentItem,
  isRecentItemDelete,
  setIsRecentItemDelete,
}) {
  const recenItemName = recentItem.name;
  const recenItemPrice = recentItem.price;
  const recenItemImgUrl = recentItem.productImg;
  const recenItemId = recentItem.viewHistoryId;

  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      Authorization: JSON.parse(token),
    },
  };

  const onDeleteRecentItem = () => {
    const deleteUrl = `http://13.209.26.150:9000/users/recent/product/${recenItemId}`;

    axios
      .delete(deleteUrl, headers)
      .then((res) => {
        console.log('recent del res:', res);
        toast.success('상품을 삭제했습니다.');
        setIsRecentItemDelete(!isRecentItemDelete);
      })
      .catch((err) => {
        console.log('recent del err', err);
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
          id={recenItemId}
          onAction={onDeleteRecentItem}
          onClose={onClose}
        />
      ),
    });
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
              {recenItemName}
            </label>
          </span>
        </div>
        <div className="cmhistory_cell cmhistory_h_link">
          <a
            href="https://m-shinsegaemall.ssg.com/item/itemView.ssg?itemId=1000064626497&amp;siteNo=6009&amp;salestrNo=1013&amp;tarea=history_6005"
            className="clickable"
          >
            <div className="cmhistory_h_txt">
              <span className="cm_mall_text">
                <i className="sm">신세계몰</i>
              </span>
              <span className="cmhistory_tx">{recenItemName}</span>
              <span className="cmhistory_tx_price">
                <em className="ssg_price">{recenItemPrice.toLocaleString()}</em>
                <span className="ssg_tx">원</span>
              </span>
            </div>
            <div className="cmhistory_h_thmb">
              <div className="cmhistory_thmb">
                <img
                  className="ssg_lazy"
                  src={recenItemImgUrl}
                  alt={recenItemName}
                />
              </div>
            </div>
          </a>
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
            <button type="button" className="cmhistory_bt_cart">
              <i className="sp_cmhistory_ic cmhistory_ic_cart">
                <span className="blind">장바구니 담기</span>
              </i>
            </button>
          </div>

          <div id="recent_btn_area" className="cmhistory_bt_area">
            <span className="cmlike _js_cmlike interestIt">
              <button
                type="button"
                className="cmlike_btn _js_cmlike_btn sel_clip clickable"
              >
                <span className="cmlike_ico">
                  <i className="cmlike_secondary_m" />
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
        </div>
      </div>
    </li>
  );
}

export default RecentShoppingProductList;
