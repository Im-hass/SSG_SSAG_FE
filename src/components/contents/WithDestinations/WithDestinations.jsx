import React from 'react';

function WithDestinations() {
  return (
    <div className="myodr_tab_cont">
      <div className="myodr_tab_panel" role="tabpanel">
        <div className="myodr_nodata">
          <span className="myodr_nodata_ico">&nbsp;</span>
          <p className="myodr_nodata_tx">
            등록된 함께장보기 배송지가 없습니다.
          </p>
          <button type="button" className="myodr_btn myodr_btn_gray2">
            <span>함께장보기 시작하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WithDestinations;
