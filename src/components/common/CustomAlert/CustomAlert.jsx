import React from 'react';
import './CustomAlert.scss';

function CustomAlert(props) {
  const { id, onDelete, onClose } = props;
  return (
    <div className="popup-overlay">
      <h1>배송지 삭제</h1>
      <p>배송지를 삭제하시겠습니까?</p>
      <div className="btn-group">
        <button type="button" onClick={onClose} className="btn-cancel">
          취소
        </button>
        <button
          type="button"
          onClick={() => {
            onDelete(id);
            onClose();
          }}
          className="btn-confirm"
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default CustomAlert;
