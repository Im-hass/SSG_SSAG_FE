/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import toast, { Toaster } from 'react-hot-toast';
import { MobileHeader } from '../../components/ui/index';
import OrderInfoDestinationModal from './OrderInfoDestinationModal';

import { CustomAlert } from '../../components/common/index';

function OrderInfoPage() {
  const [orderData, setOrderData] = useState([]);
  const [destinationData, setDestinationData] = useState({});
  const [isCancel, setIsCancel] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [clickDestinationBtn, setClickDestinationBtn] = useState(false);
  const token = localStorage.getItem('token');

  function orderSort(a, b) {
    if (a.orderListId > b.orderListId) {
      return -1;
    }
    return 0;
  }

  useEffect(() => {
    axios
      .get('http://13.209.26.150:9000/users/order', {
        headers: {
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        const lists = res.data.result;
        const sortLists = lists.sort(orderSort);
        setOrderData(sortLists);
        setIsFetching(true);
        setIsCancel(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isCancel]);

  const handleClickDestinationBtn = (e) => {
    const { id } = e.target;
    const clickItem = orderData.find((item) => item.orderListId === Number(id));
    setDestinationData(clickItem);
    setClickDestinationBtn((prev) => !prev);
  };

  console.log(orderData);

  const handleSendCancelRequest = (cancelOrderItem) => {
    if (cancelOrderItem !== undefined) {
      axios
        .put(
          'http://13.209.26.150:9000/users/order/cancel',
          { orderId: cancelOrderItem },
          {
            headers: {
              Authorization: JSON.parse(token),
            },
          },
        )
        .then(() => {
          toast.success('주문이 취소되었습니다.');
          setIsCancel(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleCancelOrder = (e) => {
    const cancelOrderItem = e.target.name;

    confirmAlert({
      // eslint-disable-next-line react/no-unstable-nested-components
      customUI: ({ onClose }) => (
        <CustomAlert
          title="주문 취소"
          desc="주문을 취소하시겠습니까?"
          btnTitle="주문취소"
          id={cancelOrderItem}
          onAction={handleSendCancelRequest}
          onClose={onClose}
        />
      ),
    });
  };

  return (
    <div>
      <MobileHeader title="나의주문내역" />
      {clickDestinationBtn && (
        <OrderInfoDestinationModal
          destinationData={destinationData}
          setClickDestinationBtn={setClickDestinationBtn}
        />
      )}
      <ul className="mnodr_tab">
        <li className="on ty2">
          <a href="/" className="orderInfoTracking">
            <span className="mnodr_tab_tx ty_deliv">주문배송</span>
          </a>
        </li>
      </ul>

      {isFetching &&
        orderData.map((data) => (
          <div
            className="codr_odrdeliv"
            name="divOrordUnit"
            key={data.createAt}
          >
            <input type="hidden" name="orordNo" value="20220703BB2F86" />
            <input type="hidden" name="mbrId" value="0003832406" />
            <div className="codr_odrdeliv_headtit">
              <span className="codr_odrdeliv_odrdate">
                {data.createAt.slice(0, 10).replaceAll('-', '.')}
              </span>
            </div>
            <div className="codr_odrdeliv_headdetail">
              <span className="codr_odrdeliv_odrpay">
                결제금액{' '}
                <span className="ssg_price">
                  {data.orders
                    .map((datum) => datum.totalPayment)
                    .reduce((a, b) => a + b)
                    .toLocaleString()}
                </span>
                <span className="ssg_tx">원</span>
              </span>
              <ul className="codr_odrdeliv_odrinfo">
                <li>
                  <button
                    type="button"
                    className="codr_btn_arr4"
                    onClick={handleClickDestinationBtn}
                    id={data.orderListId}
                  >
                    배송지 [{data.addrName}]
                    <span className="codr_sp_ico codr_ico_arrgray" />
                  </button>
                </li>
              </ul>
            </div>
            {data.orders.map((order, i) => (
              <div
                className="codr_acdo_cont"
                key={`${order.color}-${i}`}
                style={{ marginBottom: '30px' }}
              >
                <div className="codr_odrdeliv_item parcel" name="divShppUnit">
                  <div className="codr_odrdeliv_delivinfo">
                    <span className="cm_mall_ic ty_circle_s">
                      <i className="sd">
                        <span className="blind">신세계백화점</span>
                      </i>
                    </span>
                    <strong
                      className="codr_odrdeliv_delivtype"
                      style={{ fontWeight: 'bold' }}
                    >
                      {' '}
                      택배배송
                    </strong>
                    <span className="codr_dot">ㆍ</span>
                    <span className="codr_store sd">
                      <span className="blind">점포명</span>
                      {order.storeName}
                    </span>
                  </div>
                  <div className="codr_dvstate">
                    <div
                      className="codr_dvstate_bg"
                      style={{ marginBottom: '0' }}
                    >
                      <div className="tx_area">
                        <div className="tx_state">
                          <em style={{ fontWeight: 'bold' }}>
                            {order.orderState === 0 &&
                              order.shippingState === 0 &&
                              '주문완료'}
                            {order.orderState === 0 &&
                              order.shippingState === 1 &&
                              '상품준비중'}
                            {order.orderState === 0 &&
                              order.shippingState === 2 &&
                              '배송준비중'}
                            {order.orderState === 0 &&
                              order.shippingState === 3 &&
                              '배송중'}
                            {order.orderState === 1 && '주문취소완료'}
                            {order.orderState === 4 && '배송완료'}
                          </em>
                          <div style={{ fontSize: '13px' }}>
                            {order.orderState === 0 &&
                              order.shippingState === 0 &&
                              '주문이 완료되었습니다.'}
                            {order.orderState === 0 &&
                              order.shippingState === 1 &&
                              '업체에서 상품을 준비하고 있습니다.'}
                            {order.orderState === 0 &&
                              order.shippingState === 2 &&
                              '배송이 시작되면 배송정보가 등록됩니다.'}
                            {order.orderState === 0 &&
                              order.shippingState === 3 &&
                              '주문하신 물품이 현재 배송중입니다.'}
                            {order.orderState === 1 &&
                              '주문취소가 완료되었습니다.'}
                            {order.orderState === 4 && '배송이 완료되었습니다.'}
                          </div>
                        </div>
                      </div>
                    </div>
                    {order.orderState !== 1 && (
                      <ul className="codr_dvstate_lst">
                        <li
                          className={`'start' ${
                            order.shippingState === 0 ? ' on' : ''
                          }`}
                        >
                          <span className="codr_dvstate_item">결제완료</span>
                        </li>
                        <li
                          className={`'car' ${
                            order.shippingState === 1 ? ' on' : ''
                          }`}
                        >
                          <span className="codr_dvstate_item">상품준비중</span>
                        </li>
                        <li
                          className={`'car' ${
                            order.shippingState === 2 ? ' on' : ''
                          }`}
                        >
                          <span className="codr_dvstate_item">배송준비중</span>
                        </li>
                        <li
                          className={`'car' ${
                            order.shippingState === 3 ? ' on' : ''
                          }`}
                        >
                          <span className="codr_dvstate_item">배송중</span>
                        </li>
                        <li
                          className={`'finish' ${
                            order.shippingState === 4 ? ' on' : ''
                          }`}
                        >
                          <span className="blind">현재 배송 상태</span>
                          <span className="codr_dvstate_item">배송완료</span>
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="codr_unit" key={`${order.storeName}-${i}`}>
                    <div className="codr_unit_area " name="divItemUnit">
                      <div className="codr_unit_thmb">
                        <span className="codr_unit_img" aria-hidden="true">
                          <img src={order.imgUrl} alt={order.productName} />
                        </span>
                      </div>
                      <div className="codr_unit_cont">
                        <div className="codr_unit_type" />
                        <p
                          className="codr_unit_tit"
                          style={{ marginBottom: '2px' }}
                        >
                          <a href="/" target="_blank">
                            <strong
                              className="codr_unit_brd"
                              style={{ fontWeight: 'bold' }}
                            >
                              {order.storeName}{' '}
                            </strong>
                            <span className="codr_unit_name">
                              {order.productName}
                            </span>
                          </a>
                        </p>
                        <div
                          style={{
                            color: '#aaa',
                            fontSize: '11px',
                            padding: '2px 0',
                          }}
                        >
                          <span>색상 : {order.color}</span> /{' '}
                          <span>사이즈 : {order.size}</span>
                        </div>
                        <div
                          className="codr_unit_pricewrap"
                          style={{ marginTop: '2px' }}
                        >
                          <div className="codr_unit_newprice">
                            <span className="blind">판매가격</span>
                            <em className="ssg_price">
                              {(
                                (order.price * (100 - order.sale)) /
                                100
                              ).toLocaleString()}
                            </em>
                            <span className="ssg_tx">원</span>{' '}
                          </div>
                          <div className="codr_unit_oldprice">
                            <del>
                              <span className="blind">정상가격</span>
                              <em className="ssg_price">
                                {order.price.toLocaleString()}
                              </em>
                            </del>
                            <span className="ssg_tx">원</span>{' '}
                          </div>
                          <span className="codr_unit_count">
                            <span className="blind">상품수량</span>
                            {order.count}개
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {order.orderState !== 1 && (
                    <div className="codr_btnarea" style={{ marginTop: '30px' }}>
                      <ul>
                        <li>
                          <button
                            type="button"
                            className="codr_btn codr_btn_blkline"
                            name={order.orderId}
                            onClick={handleCancelOrder}
                          >
                            <span>주문취소</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="codr_border" />
          </div>
        ))}
      <button type="button" className="codr_btn_help v2 bottomsheet_btn_open">
        <span>
          주문에 <em>불편함</em>이 있으신가요?
        </span>
      </button>
      <div id="mcom_footer">
        <div className="mcom_footer mcom_footer_order mcom_footer_order_v2 ">
          <div className="mcom_mall_wrap v2">
            <div className="mcom_noti_wrap">
              <p className="mcom_noti_txt">
                ㈜에스에스지닷컴에서 판매되는 상품 중에는 개별 판매자가 판매하는
                오픈마켓 상품이 포함되어 있습니다.
              </p>
              <p className="mcom_noti_txt">
                오픈마켓 상품의 경우, ㈜에스에스지닷컴은 통신판매중개자로서 거래
                당사자가 아니며, 입점 판매사가 등록한 상품정보 및 거래 등에 대해
                책임을 지지 않습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Toaster
        containerStyle={{
          top: 30,
        }}
      />
    </div>
  );
}

export default OrderInfoPage;
