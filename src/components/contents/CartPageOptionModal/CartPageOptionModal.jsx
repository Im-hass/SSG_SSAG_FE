import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CartPageOptionModal.scss';

function CartPageOptionModal({
  setIsModalOpen,
  dataId,
  cartId,
  isChange,
  setIsChange,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [colorOptions, setColorOptions] = useState(null);
  const [sizeOptions, setSizeOptions] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedProductOptionId, setSelectedProductOptionId] = useState(null);

  // 색상 data 받아오기
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const headers = {
        headers: {
          Authorization: JSON.parse(token),
        },
      };
      setIsLoading(true);
      try {
        const res = await axios.get(
          `http://13.209.26.150:9000/comm-users/products/options/color/${dataId}`,
          headers,
        );
        setColorOptions(res.data.result);
        console.log('color response:', res);
      } catch (err) {
        console.log('color error:', err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const getSizeData = () => {
    const token = localStorage.getItem('token');
    const headers = {
      headers: {
        Authorization: JSON.parse(token),
      },
    };
    axios
      .get(
        `http://13.209.26.150:9000/comm-users/products/options/size/${dataId}/${selectedColor}`,
        headers,
      )
      .then((res) => {
        setSizeOptions(res.data.result);
        console.log('size response:', res);
      })
      .catch((err) => console.log('size error:', err));
  };

  const handleSelectColor = (e) => {
    const { value } = e.target;

    if (value === 'default') return;

    setSelectedColor(+value);
  };

  // 색상 선택 후 사이즈 데이터 받아오기
  useEffect(() => {
    if (selectedColor !== null) {
      getSizeData();
    }
  }, [selectedColor]);

  const handleSelectSize = (e) => {
    const { value } = e.target;

    if (value === 'default') return;

    setSelectedProductOptionId(+value);
  };

  const handleChangeOption = () => {
    console.log(cartId);
    const token = localStorage.getItem('token');
    const selectedCartId = cartId;
    const data = {
      cartId: selectedCartId,
      productOptionId: selectedProductOptionId,
    };
    const headers = {
      headers: {
        Authorization: JSON.parse(token),
      },
    };
    axios
      .put('http://13.209.26.150:9000/users/carts/option', data, headers)
      .then((res) => {
        console.log('change opt res:', res);
        setIsChange(!isChange);
        setIsModalOpen(false);
      })
      .catch((err) => console.log('change opt err:', err));
  };

  const handleOptionModalClose = () => {
    setIsModalOpen(false);
  };

  if (isLoading) return <div>로딩 중</div>;
  if (!colorOptions) return <div>데이터 없음</div>;

  return (
    <div
      className="mnodr_modal ty_full show"
      role="dialog"
      aria-hidden="false"
      id="_layerChangeItem_5144168619"
      style={{ height: '1530px' }}
    >
      <div
        className="mnodr_modal_wrap"
        role="document"
        data-cart-id="5144168"
        style={{ top: '28px' }}
      >
        <div className="mnodr_modal_head">
          <h3 className="mnodr_modal_tit">옵션변경</h3>
          <button
            type="button"
            className="mnodr_modal_close modal-close-btn"
            onClick={handleOptionModalClose}
          >
            <i className="mnodr_ic ic_close">
              <span className="blind">팝업닫기</span>
            </i>
          </button>
        </div>
        <div className="mnodr_modal_cont">
          <div className="mnodr_modal_scroll">
            <div className="mnodr_modal_changeitem">
              <div className="mnodr_changeitem_sec modal_option">
                <div className="mnodr_changeitem_titbx">
                  <h2 className="mnodr_changeitem_tit">옵션변경</h2>
                </div>
                <div className="mnodr_sec option_div">
                  <div className="mnodr_changeoption">
                    <div className="mnodr_changeoption">
                      <div className="mnodr_changeoption_titbx">
                        <h3 className="mnodr_changeitem_stit">색상</h3>
                      </div>
                      <div className="mnodr_changeoption_selbx">
                        <span className="mnodr_inp_sel">
                          <select
                            id="item_option1"
                            name="item_option"
                            title="옵션"
                            onChange={handleSelectColor}
                          >
                            <option value="default">색상을 선택해주세요</option>
                            {colorOptions &&
                              colorOptions.map((colorOption) => (
                                <option
                                  key={colorOption.colorId}
                                  value={colorOption.colorId}
                                >
                                  {colorOption.color}
                                </option>
                              ))}
                          </select>
                        </span>
                      </div>
                    </div>
                    <div className="mnodr_changeoption">
                      <div className="mnodr_changeoption_titbx">
                        <h3 className="mnodr_changeitem_stit">Size</h3>
                      </div>
                      <div className="mnodr_changeoption_selbx">
                        <span className="mnodr_inp_sel">
                          <select
                            id="item_option2"
                            name="item_option"
                            title="옵션"
                            onChange={handleSelectSize}
                          >
                            <option value="default" data-stock="default">
                              사이즈를 선택해주세요
                            </option>
                            {sizeOptions &&
                              sizeOptions.map((sizeOption) => (
                                <option
                                  key={sizeOption.sizeId}
                                  value={sizeOption.productOptionId}
                                  data-stock={sizeOption.stock}
                                  className={
                                    sizeOption.stock === 0 ? 'out_of_Stock' : ''
                                  }
                                  disabled={sizeOption.stock === 0}
                                >
                                  {sizeOption.stock > 0
                                    ? sizeOption.size
                                    : `${sizeOption.size}(품절)`}
                                </option>
                              ))}
                          </select>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mnodr_modal_foot">
          <div className="mnodr_btn_area">
            <button
              className="mnodr_btn ty_lg ty_point"
              name="btOptionChange"
              type="button"
              onClick={handleChangeOption}
            >
              <span className="mnodr_btn_tx">변경하기</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CartPageOptionModal;