import React from 'react';
import './CartPageParcelContentUnitBtn.scss';

function CartPageParcelContentUnitBtn({
  data,
  isModalOpen,
  setIsModalOpen,
  setDataId,
  setCartId,
}) {
  const handleOptionModalOpen = () => {
    const dataId = data.productOption.product.productId;
    const { cartId } = data;

    setIsModalOpen(true);
    setDataId(dataId);
    setCartId(cartId);
  };

  return (
    <div className="mnodr_unit_btnarea ty_fillbtn">
      <button
        type="button"
        name="btOrd"
        className="mnodr_unit_btn ty_point cartTracking"
        onClick={handleOptionModalOpen}
      >
        <span>옵션변경</span>
      </button>
      <button
        type="button"
        name="btOrd"
        className="mnodr_unit_btn ty_point cartTracking"
      >
        <span>바로구매</span>
      </button>
    </div>
  );
}

export default CartPageParcelContentUnitBtn;
