import React from 'react';
import './DestinationBtns.scss';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { DES_BTNS_LIST } from '../../../assets/datas';

function DestinationBtns({ selected, isDefaultChanged, setIsDefaultChanged }) {
  const handleTempAddr = () => {
    // 이번만 배송지 설정
  };

  const handleDefaultAddr = () => {
    const token = localStorage.getItem('token');
    axios
      .put(
        'http://13.209.26.150:9000/users/shipping-addr/default',
        {
          addrId: selected,
        },
        {
          headers: {
            Authorization: JSON.parse(token),
          },
        },
      )
      .then(() => {
        setIsDefaultChanged(!isDefaultChanged);
        toast.success('기본 배송지가 변경되었습니다.');
      })
      .catch((e) => {
        (() => new Error(e))();
        toast.error('기본 배송지 변경에 실패하였습니다');
      });
  };

  return (
    <div className="myodr_btnarea">
      <ul>
        {DES_BTNS_LIST.map((el) => (
          <li key={el.id}>
            <button
              type="button"
              className={el.className}
              onClick={el.id === 2 ? handleDefaultAddr : handleTempAddr}
            >
              <span>{el.name}</span>
            </button>
          </li>
        ))}
      </ul>
      <Toaster
        containerStyle={{
          top: 30,
        }}
        toastOptions={{
          success: {
            iconTheme: {
              primary: '#ff5b59',
            },
          },
        }}
      />
    </div>
  );
}

export default DestinationBtns;
