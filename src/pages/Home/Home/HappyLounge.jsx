import React from 'react';
import BannerTitle from './BannerTitle';
import ItemGoods from './ItemGoods';

function HappyLounge() {
  return (
    <>
      <BannerTitle
        title="Happy Lounge"
        txt="당신의 쇼핑이 특별해지는, 매일 오전 9시"
        isBtn
        isV2
      />
      <ItemGoods />
    </>
  );
}

export default HappyLounge;
