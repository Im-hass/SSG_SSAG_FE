import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BannerTitle from './BannerTitle';
import HeroSwiper from './HeroSwiper';
import PromoBn from './PromoBn';
import QuickCont from './QuickCont';
import q1 from './quickLst1.json';

function NewService() {
  const [datas, setDatas] = useState();

  useEffect(() => {
    axios
      .get('http://13.209.26.150:9000/comm-users/main/new-service')
      .then((res) => {
        setDatas(res.data.result);
      });
  }, []);

  return (
    <>
      <BannerTitle
        title="New Service"
        txt="새롭게 오픈한 서비스를 소개해드려요"
        isBtn={false}
        isV2={false}
      />
      <HeroSwiper datas={datas} />
      <QuickCont datas={q1} clname="ty_view5" />
      <PromoBn />
    </>
  );
}

export default NewService;
