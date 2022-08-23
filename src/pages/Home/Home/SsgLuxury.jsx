import React from 'react';
import BannerTitle from './BannerTitle';
import BmrPromo from './BmrPromo';
import ItemGrid from './ItemGrid';
import More from './More';

function SsgLuxury() {
  return (
    <>
      <BannerTitle
        title="SSG Luxury"
        txt="명품이 신세계를 만나다"
        isBtn={false}
        isV2={false}
      />
      <BmrPromo />
      <ItemGrid />
      <More />
    </>
  );
}

export default SsgLuxury;
