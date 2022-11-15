import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BannerTitle from './BannerTitle';
import QuickCont from './QuickCont';

function HotBrand() {
  const [datas, setDatas] = useState();

  useEffect(() => {
    axios
      .get('https://ssg-ssag.shop:9000/comm-users/main/hot-brand')
      .then((res) => {
        setDatas(res.data.result);
      });
  }, []);

  return (
    <>
      <BannerTitle title="Hot Brand" txt="" isBtn={false} isV2={false} />
      <QuickCont datas={datas} clname="ty_view4" />
    </>
  );
}

export default HotBrand;
