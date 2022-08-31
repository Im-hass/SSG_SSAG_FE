import React from 'react';
import './UserSection.scss';
import UserProfile from './UserProfile';
import UserManage from './UserManage';
import UserBenefit from './UserBenefit';

function UserSection() {
  return (
    <div className="myssg_user_sec">
      {/* 유저 정보(썸네일, 이름, 등급) */}
      <UserProfile />
      {/* 좋아요,  배송지 관리, 알림함 */}
      <UserManage />
      {/* 쿠폰, 포인트 */}
      <UserBenefit />
    </div>
  );
}

export default UserSection;
