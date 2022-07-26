import React, { useState } from 'react';
import HidePdtTool from './HidePdtTool';
import PdtTool01 from './PdtTool01';
import PdtTool02 from './PdtTool02';

function ProductToolbar({ productData, isWishChange, setIsWishChange }) {
  const [buyBtn, setBuyBtn] = useState('');
  const [goBuyBtn, setGoBuyBtn] = useState('hideCom');
  const [toggleOn, setToggleOn] = useState('');

  const handleOpenBtn = (action) => {
    if (action === 'open') {
      setBuyBtn('hideCom');
      setGoBuyBtn('viewCom');
      setToggleOn('on');
    } else {
      setBuyBtn('viewCom');
      setGoBuyBtn('hideCom');
      setToggleOn('');
    }
  };

  return (
    <>
      <div className="mndtl_opt_btm _js_mndtl_opt_btm react-area">
        <div className="opt_btm_bgn">
          {toggleOn !== 'on' && (
            <PdtTool01
              buyBtn={buyBtn}
              productData={productData}
              handleOpenBtn={handleOpenBtn}
              isWishChange={isWishChange}
              setIsWishChange={setIsWishChange}
            />
          )}
          {toggleOn === 'on' && (
            <PdtTool02
              goBuyBtn={goBuyBtn}
              productData={productData}
              handleOpenBtn={handleOpenBtn}
            />
          )}
        </div>
      </div>
      <HidePdtTool
        toggleOn={toggleOn}
        handleOpenBtn={handleOpenBtn}
        productData={productData}
      />
    </>
  );
}

export default ProductToolbar;
