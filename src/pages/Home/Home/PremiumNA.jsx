import React from 'react';
import BannerTitle from './BannerTitle';
import CtgNav from './CtgNav';
import Dummy from './Dummy';
import ItemGrid from './ItemGrid';
import More from './More';

function PremiumNA() {
  return (
    <>
      <BannerTitle
        title="Premium New Arrivals"
        txt=""
        isBtn={false}
        isV2={false}
      />
      <Dummy />
      <CtgNav />
      <ItemGrid />
      <More />
    </>
  );
}

export default PremiumNA;
