import React from 'react';

function OrderInfoDestinationModal(props) {
  const { destinationData, setClickDestinationBtn } = props;

  const handleClickCloseBtn = () => {
    setClickDestinationBtn(false);
  };

  return (
    <div
      className="bottomsheet_sheet"
      role="document"
      style={{
        transition: 'transform 0.3s cubic- bezier(0.22, 0.81, 0.36, 1) 0s',
        maxHeight: '537px',
        transform: 'translateY(240px)',
        zIndex: 9999,
      }}
    >
      <header className="bottomsheet_handle">
        <h3 className="bottomsheet_title">배송지정보</h3>
      </header>
      <article className="bottomsheet_container">
        <div className="bottomsheet_scroll">
          <input type="hidden" id="shpploc_orordNo" value="20220830AD3F4A" />
          <div className="mnodr_contit2">
            <h3 className="codr_contit2_tx">받으시는 분</h3>
          </div>
          <p className="mnodr_contxt_large">최민정</p>
          <div className="mnodr_contit2">
            <h3 className="mnodr_contit2_tx">받으시는 주소</h3>
          </div>
          <p className="mnodr_contxt mnodr_contxt2">
            [{destinationData.addrName}] [{destinationData.zipCode}]{' '}
            {destinationData.streetAddr}
          </p>

          <div className="mnodr_contit2">
            <h3 className="mnodr_contit2_tx">배송메시지</h3>
          </div>
          <p className="mnodr_contxt mnodr_contxt2">
            {destinationData.shippingMsg}
          </p>
          <div className="mnodr_contit2">
            <h3 className="mnodr_contit2_tx">주문자정보</h3>
          </div>
          <p className="mnodr_contxt mnodr_contxt2">
            {destinationData.user.name} / {destinationData.user.phone}
          </p>
        </div>
      </article>
      <button
        type="button"
        className="bottomsheet_btn_close"
        onClick={handleClickCloseBtn}
      >
        <i className="icon ty_md icon_close" aria-hidden="true" />
        <span className="blind">배송지정보 닫기</span>
      </button>
    </div>
  );
}

export default OrderInfoDestinationModal;
