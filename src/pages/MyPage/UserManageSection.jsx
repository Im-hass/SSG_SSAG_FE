import React from 'react';
import UserManageContent from './UserManageContent';
import userManageConts from './data/UserManageConts.json';
import './UserManageSection.scss';

function UserManageSection() {
  return (
    <div className="myssg_manage_sec">
      {userManageConts &&
        userManageConts.map((item) => (
          <UserManageContent key={item.id} content={item} />
        ))}
    </div>
  );
}

export default UserManageSection;
