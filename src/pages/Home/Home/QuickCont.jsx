import React from 'react';

function QuickCont({ datas, clname }) {
  return (
    <div className="cmgrid_full_box" data-page-set-id="115">
      <div className="cmitem_quick_unit ty_horizontal ">
        <div className="cmitem_quick_cont">
          <ul className={`cmitem_quick_lst ${clname}  is_moreset`}>
            {datas &&
              datas.map((data) => (
                <li key={data.hotBrandId}>
                  <a
                    href="https://m-shinsegaemall.ssg.com/page/giftshop.ssg"
                    className="clickable"
                  >
                    <span
                      className="cmitem_quick_thmb ssg_lazy"
                      data-bg="url('//sui.ssgcdn.com/cmpt/banner/202207/2022072018095879442344852334_902.png')"
                      data-ll-status="loading"
                      style={{ backgroundImage: `url(${data.imgUrl})` }}
                    />
                    <span className="cmitem_quick_tx">{data.brandName}</span>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default QuickCont;
