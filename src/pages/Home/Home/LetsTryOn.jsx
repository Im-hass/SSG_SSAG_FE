import React from 'react';
import BannerTitle from './BannerTitle';
import More from './More';
import TryOnSlider from './TryOnSlider';

function LetsTryOn() {
  return (
    <>
      <BannerTitle
        title="Let's Try on"
        txt="직접 만져보고 입는 것처럼 생동감있는 쇼핑"
        isBtn={false}
        isV2={false}
      />
      <TryOnSlider />
      <More />
    </>
  );
}

export default LetsTryOn;
