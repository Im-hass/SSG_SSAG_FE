import React from 'react';
import BannerTitle from './BannerTitle';
import CtgNav from './CtgNav';
import Dummy from './Dummy';
import ItemGrid from './ItemGrid';
import More from './More';

function SmartOS() {
  return (
    <>
      <BannerTitle
        title="스마트한 해외 직구 쇼핑"
        txt=""
        isBtn={false}
        isV2={false}
      />
      <CtgNav />
      <Dummy />
      <ItemGrid />
      <More />
    </>
  );
}

export default SmartOS;
