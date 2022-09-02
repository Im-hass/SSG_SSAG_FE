import React from 'react';
import { Link } from 'react-router-dom';
import './UserManage.scss';

function UserManage() {
  return (
    <div className="myssg_user_manage">
      <Link to="/wishList">
        <span className="myssg_manage_text ty_like">좋아요</span>
      </Link>
      <Link to="/destination">
        <span className="myssg_manage_text ty_delivery">배송지 관리</span>
      </Link>
      <span>
        <span className="myssg_manage_text ty_alert">알림함</span>
      </span>
    </div>
  );
}

export default UserManage;
