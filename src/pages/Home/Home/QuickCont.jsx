import React, { useState } from 'react';

function QuickCont({ data, clname }) {
  return (
    <div className="cmgrid_full_box" data-page-set-id="115">
      <div className="cmitem_quick_unit ty_horizontal ">
        <div className="cmitem_quick_cont">
          <ul className={`cmitem_quick_lst ${clname}  is_moreset`}>
            {data &&
              data.map((d) => (
                <li key={d.id}>
                  <a
                    href="https://m-shinsegaemall.ssg.com/page/giftshop.ssg"
                    className="clickable"
                    data-react-tarea="홈|서비스퀵링크|배너_클릭|명절"
                  >
                    <span
                      className="cmitem_quick_thmb ssg_lazy"
                      data-bg="url('//sui.ssgcdn.com/cmpt/banner/202207/2022072018095879442344852334_902.png')"
                      data-ll-status="loading"
                      style={{ backgroundImage: `${d.backgroundImage}` }}
                    />
                    <span className="cmitem_quick_tx">{d.txt}</span>
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
