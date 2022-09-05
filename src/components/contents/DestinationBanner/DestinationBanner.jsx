import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationBanner.scss';

function DestinationBanner() {
  return (
    <div className="myodr_banner">
      <Link to="/destination">
        <img
          src="//sui.ssgcdn.com/ui/m_ssg/img/cs/bn_pickup.jpg"
          alt="청계천점 PIXEL OPEN 온라인 주문하고 원하는 시간에 픽업을 쓱"
        />
      </Link>
    </div>
  );
}

export default DestinationBanner;
