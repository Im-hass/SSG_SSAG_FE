import React from 'react';
import BannerTitle from './BannerTitle';
import ItemGrid from './ItemGrid';
import More from './More';

function SpecialGift() {
  return (
    <>
      <BannerTitle
        title="Special Gift"
        txt="포장으로 마음을 담은 백화점 선물"
        isBtn={false}
        isV2={false}
      />
      <ItemGrid />
      <More />
    </>
  );
}

export default SpecialGift;
