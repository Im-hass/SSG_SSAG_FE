import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedOptionInfo } from '../../../store/states';

function OrderItemInfo(props) {
  const { prevPage, orderItemData } = props;
  const [selectOption] = useRecoilState(selectedOptionInfo);

  return (
    <ul className="mnodr_article_list fullOrdArea">
      <li className="mnodr_article_item">
        <article className="mnodr_article">
          <div className="mnodr_article_head">
            <div className="mnodr_article_headlt">
              <h2 className="mnodr_tx_tit" style={{ fontWeight: 'bold' }}>
                택배배송
              </h2>
            </div>
          </div>
          {prevPage === 'cart' &&
            orderItemData.data.storeList.map((store) =>
              store.cartList.map((cart) => (
                <div
                  className="mnodr_article_cont ty_pull"
                  key={cart.cartAmount}
                >
                  <div className="mnodr_form_sec">
                    <div className="mnodr_unit">
                      <div className="mnodr_unit_item">
                        <div className="mnodr_unit_thmb">
                          <span className="mnodr_unit_img" aria-hidden="true">
                            <img
                              src={cart.productOptionDto.productDto.imgUrl}
                              alt={cart.productOptionDto.productDto.name}
                              width="85"
                              height="85"
                            />
                          </span>
                        </div>
                        <div className="mnodr_unit_cont">
                          <div className="mnodr_unit_info ty2">
                            <span className="cm_mall_text">
                              <i className="sm">신세계몰</i>
                            </span>

                            <em id="dispSalestrNm_1">{store.storeName}</em>
                          </div>
                          <div className="mnodr_unit_tit ">
                            <a href="/">
                              <strong
                                className="mnodr_unit_brd"
                                style={{ fontWeight: 'bold' }}
                              >
                                {cart.productOptionDto.productDto.name}
                              </strong>
                            </a>
                            <div
                              style={{
                                fontSize: '11px',
                                marginTop: '5px',
                                color: '#aaa',
                              }}
                            >
                              <span>색상: {cart.productOptionDto.color} </span>
                              <span>
                                / 사이즈: {cart.productOptionDto.size}
                              </span>
                            </div>
                          </div>

                          <div className="mnodr_unit_prdpay ty_space">
                            <div className="mnodr_unit_l">
                              <div className="mnodr_unit_oldprice ty2">
                                <del>
                                  <span className="blind">정상가격</span>
                                  <em className="ssg_price">
                                    {cart.productOptionDto.productDto.price.toLocaleString()}
                                  </em>
                                </del>
                                <span className="ssg_tx">원</span>
                              </div>

                              <div className="mnodr_unit_newprice ty2">
                                <span className="blind">판매가격</span>
                                <em className="ssg_price">
                                  {Math.ceil(
                                    cart.productOptionDto.productDto.price *
                                      ((100 -
                                        cart.productOptionDto.productDto.sale) /
                                        100),
                                  ).toLocaleString()}
                                </em>
                                <span className="ssg_tx">원</span>
                              </div>
                            </div>
                            <div className="mnodr_unit_r">
                              <span className="mnodr_unit_option">
                                수량 {cart.count}개
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )),
            )}
          {prevPage === 'direct' && (
            <div className="mnodr_article_cont ty_pull">
              <div className="mnodr_form_sec">
                <div className="mnodr_unit">
                  <div className="mnodr_unit_item">
                    <div className="mnodr_unit_thmb">
                      <span className="mnodr_unit_img" aria-hidden="true">
                        {orderItemData.data.productImg[0] !== undefined ? (
                          <img
                            src={orderItemData.data.productImg[0].imgUrl}
                            alt={orderItemData.data.name}
                            width="85"
                            height="85"
                          />
                        ) : (
                          <div
                            style={{
                              width: '85px',
                              height: '85px',
                              backgroundColor: '#eee',
                            }}
                          />
                        )}
                      </span>
                    </div>
                    <div className="mnodr_unit_cont">
                      <div className="mnodr_unit_info ty2">
                        <span className="cm_mall_text">
                          <i className="sm">신세계몰</i>
                        </span>

                        <em id="dispSalestrNm_1">
                          {orderItemData.data.storeName}
                        </em>
                      </div>
                      <div className="mnodr_unit_tit ">
                        <a href="/">
                          <strong
                            className="mnodr_unit_brd"
                            style={{ fontWeight: 'bold' }}
                          >
                            {orderItemData.data.name}
                          </strong>
                        </a>
                        <div
                          style={{
                            fontSize: '11px',
                            marginTop: '5px',
                            color: '#aaa',
                          }}
                        >
                          <span>색상: {selectOption[1]} </span>
                          <span>/ 사이즈: {selectOption[2]}</span>
                        </div>
                      </div>

                      <div className="mnodr_unit_prdpay ty_space">
                        <div className="mnodr_unit_l">
                          <div className="mnodr_unit_oldprice ty2">
                            <del>
                              <span className="blind">정상가격</span>
                              <em className="ssg_price">
                                {orderItemData.data.price.toLocaleString()}
                              </em>
                            </del>
                            <span className="ssg_tx">원</span>
                          </div>

                          <div className="mnodr_unit_newprice ty2">
                            <span className="blind">판매가격</span>
                            <em className="ssg_price">
                              {Math.ceil(
                                orderItemData.data.price -
                                  (orderItemData.data.price *
                                    orderItemData.data.sale) /
                                    100,
                              ).toLocaleString()}
                            </em>
                            <span className="ssg_tx">원</span>
                          </div>
                        </div>
                        <div className="mnodr_unit_r">
                          <span className="mnodr_unit_option">
                            수량 {orderItemData.count}개
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </article>
      </li>
    </ul>
  );
}

export default OrderItemInfo;
