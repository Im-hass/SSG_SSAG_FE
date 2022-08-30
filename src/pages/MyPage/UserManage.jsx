import React from 'react';
import './UserManage.scss';

function UserManage() {
  return (
    <div className="myssg_user_manage">
      <span>
        <span className="myssg_manage_text ty_like">좋아요</span>
      </span>
      <span>
        <span className="myssg_manage_text ty_delivery">배송지 관리</span>
      </span>
      <span>
        <span className="myssg_manage_text ty_alert">알림함</span>
      </span>
    </div>
  );
}

export default UserManage;
