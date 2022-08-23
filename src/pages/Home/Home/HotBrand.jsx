import React from 'react';
import BannerTitle from './BannerTitle';
import QuickCont from './QuickCont';
import q2 from './quickLst2.json';

function HotBrand() {
  return (
    <>
      <BannerTitle title="Hot Brand" txt="" isBtn={false} isV2={false} />
      <QuickCont data={q2} clname="ty_view4" />
    </>
  );
}

export default HotBrand;
