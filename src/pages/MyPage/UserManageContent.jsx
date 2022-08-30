import React from 'react';
import { Link } from 'react-router-dom';
import './UserManageContent.scss';

function UserManageContent({ content }) {
  return (
    <div className="myssg_manage_conts">
      <h3 className="myssg_manage_title">{content.title}</h3>
      <ul className="myssg_manage_list">
        {content.list &&
          content.list.map((item) => (
            <li key={item.id}>
              <Link to={item.path}>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default UserManageContent;
