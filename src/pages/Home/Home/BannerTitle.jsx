import React from 'react';
import TitTxtBtn from './TitTxtBtn';

function BannerTitle({ title, txt, isBtn, isV2 }) {
  return (
    <div className="cmgrid_full_box js-set-header" data-page-set-id="112">
      <div className={isV2 ? 'cmtit_heading v2' : 'cmtit_heading '}>
        <div className="cmtit_txtbx">
          <h3 className="cmtit_maintxt" style={{ fontWeight: 'bold' }}>
            {title}
          </h3>
          <p className="cmtit_subtxt">{txt}</p>
        </div>
        {isBtn ? <TitTxtBtn /> : ''}
      </div>
    </div>
  );
}

export default BannerTitle;
