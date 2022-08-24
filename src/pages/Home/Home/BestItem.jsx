import React from 'react';
import BannerTitle from './BannerTitle';
import CtgNav from './CtgNav';
import Dummy from './Dummy';
import Filter from './Filter';
import Horizontal from './HorizontalScroll';
import More from './More';

function BestItem() {
  return (
    <>
      <BannerTitle title="Best Items" txt="" isBtn={false} isV2={false} />
      <Dummy />
      <CtgNav />
      <Filter />
      <Horizontal />
      <More />
    </>
  );
}

export default BestItem;
