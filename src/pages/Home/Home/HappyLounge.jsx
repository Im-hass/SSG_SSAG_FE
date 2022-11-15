import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BannerTitle from './BannerTitle';
import ItemGoods from './ItemGoods';

function HappyLounge() {
  const [datas, setDatas] = useState();

  useEffect(() => {
    axios
      .get('https://ssg-ssag.shop:9000/comm-users/main/happy-lounge')
      .then((res) => {
        setDatas(res.data.result);
      });
  }, []);

  return (
    <>
      <BannerTitle
        title="Happy Lounge"
        txt="당신의 쇼핑이 특별해지는, 매일 오전 9시"
        isBtn
        isV2
      />
      {datas &&
        datas.map((data) => <ItemGoods key={data.productId} data={data} />)}
    </>
  );
}

export default HappyLounge;
