import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { DestinationListBtns } from '../index';
import './DestinationList.scss';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { CustomAlert } from '../../common';

function DestinationList({
  datas,
  isDelete,
  setIsDelete,
  handleSelectedAddr,
  fetchData,
}) {
  const navigate = useNavigate();

  const handleModify = (id) => {
    fetchData({
      reMethod: 'get',
      reUrl: `/users/shipping-addr/${id}`,
      afterThen: (state) => {
        navigate('/modifyDestination', { state });
      },
    });
  };

  const onDelete = (id) => {
    fetchData({
      reMethod: 'delete',
      reUrl: `/users/shipping-addr/${id}`,
      afterThen: () => {
        setIsDelete(!isDelete);
        toast.success('배송지가 삭제되었습니다.');
      },
    });

    fetchData({
      reMethod: 'get',
      reUrl: '/users/shipping-addr',
    });
  };

  const handleDelete = (id) => {
    confirmAlert({
      // eslint-disable-next-line react/no-unstable-nested-components
      customUI: ({ onClose }) => (
        <CustomAlert
          title="배송지 삭제"
          desc="배송지를 삭제하시겠습니까?"
          btnTitle="삭제"
          id={id}
          onAction={onDelete}
          onClose={onClose}
        />
      ),
    });
  };

  return (
    <ul className="myodr_tabrdo_lst">
      {datas &&
        datas.map(
          ({ addrId, addrDefault, addrName, zipCode, streetAddr, lotAddr }) => (
            <li key={addrId} className="myodr_tabrdo">
              <div className="myodr_rdo on">
                <input
                  type="radio"
                  id={`ui_test_rdotab${addrId}`}
                  name="delivery"
                  value={addrId}
                  defaultChecked={addrDefault === 1}
                  onClick={() => {
                    handleSelectedAddr(addrId);
                  }}
                />
                <label
                  htmlFor={`ui_test_rdotab${addrId}`}
                  className="myodr_rdo_cont"
                >
                  <span className="myodr_rdo_inner">
                    <strong className="tx_deliv_name">
                      <span className="blind">배송지명</span>
                      {addrName}
                      {addrDefault === 1 && <em>기본배송지</em>}
                    </strong>
                    <span className="tx_deliv_address">
                      <span className="blind">우편번호</span>({zipCode})
                    </span>
                    <span className="tx_deliv_address">
                      도로명주소: {streetAddr}
                    </span>
                    <span className="tx_deliv_address">
                      지번주소: {lotAddr}
                    </span>
                  </span>
                </label>
                <DestinationListBtns
                  isDefaultAddr={addrDefault === 1}
                  id={addrId}
                  handleModify={handleModify}
                  handleDelete={handleDelete}
                />
              </div>
            </li>
          ),
        )}
    </ul>
  );
}

export default DestinationList;
