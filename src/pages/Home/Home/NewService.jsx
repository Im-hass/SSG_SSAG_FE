import React from 'react';
import BannerTitle from './BannerTitle';
import HeroSwiper from './HeroSwiper';
import ItemBlank from './ItemBlank';
import PromoBn from './PromoBn';
import QuickCont from './QuickCont';
import q1 from './quickLst1.json';

function NewService() {
  return (
    <>
      <BannerTitle
        title="New Service"
        txt="새롭게 오픈한 서비스를 소개해드려요"
        isBtn={false}
        isV2={false}
      />
      <HeroSwiper />
      <QuickCont data={q1} clname="ty_view5" />
      <ItemBlank />
      <PromoBn />
      <ItemBlank />
    </>
  );
}

export default NewService;
