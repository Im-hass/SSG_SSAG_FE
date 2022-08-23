import React, { useState } from 'react';

import HidePdtTool from './HidePdtTool';
import PdtTool01 from './PdtTool01';
import PdtTool02 from './PdtTool02';

function ProductToolbar() {
  const [buyBtn, setBuyBtn] = useState('');
  const [goBuyBtn, setGoBuyBtn] = useState('hideCom');
  const [toggleOn, setToggleOn] = useState('');

  const openBuyBtn = () => {
    setBuyBtn('hideCom');
    setGoBuyBtn('viewCom');
    console.log(buyBtn);
    setToggleOn('on');
  };

  const closeBuyBtn = () => {
    setBuyBtn('viewCom');
    setGoBuyBtn('hideCom');
    console.log(buyBtn);
    setToggleOn('');
  };

  return (
    <>
      <div className="mndtl_opt_btm _js_mndtl_opt_btm react-area">
        <div className="opt_btm_bgn">
          <PdtTool01 buyBtn={buyBtn} openBuyBtn={openBuyBtn} />
          <PdtTool02 goBuyBtn={goBuyBtn} openBuyBtn={openBuyBtn} />
        </div>
      </div>
      <HidePdtTool toggleOn={toggleOn} closeBuyBtn={closeBuyBtn} />
    </>
  );
}

export default ProductToolbar;
