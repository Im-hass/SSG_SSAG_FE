import React from 'react';

function ServiceItem({ data }) {
  const { to, bgImgUrl, title } = data;
  return (
    <li className="clnb_renew_item">
      <a href={to} className="clickable">
        <span
          className="thmb ssg_lazy"
          style={{
            backgroundImage: `url(${bgImgUrl})`,
          }}
        />
        <em>{title}</em>
      </a>
    </li>
  );
}

export default ServiceItem;
