import React from 'react';
import BannerTitle from './BannerTitle';
import ItemCard from './ItemCard';

function CardPromo() {
  return (
    <>
      <BannerTitle
        title="이번 주 카드 프로모션"
        txt="SSGPAY로 결제하셔도 혜택 받을 수 있어요"
        isBtn={false}
        isV2={false}
      />
      <ItemCard />
    </>
  );
}

export default CardPromo;
