import React from 'react';
import MainCtgy from './MainCtgy.json';

function MainCategory() {
  return (
    <div className="cmgrid_full_box" data-page-set-id="106">
      <div className="cmitem_quick_unit ty_horizontal_scroll">
        <div className="cmitem_quick_cont">
          <ul className="cmitem_quick_lst">
            {MainCtgy &&
              MainCtgy.map((data) => (
                <li key={data.id}>
                  <a
                    href="https://m-shinsegaemall.ssg.com/page/ssgluxury.ssg"
                    className="clickable"
                    rel="nofollow"
                    data-react-tarea="홈|버티컬카테고리|배너_클릭|명품"
                  >
                    <span
                      className="cmitem_quick_thmb ssg_lazy"
                      data-bg="url('//sui.ssgcdn.com/cmpt/banner/202207/2022072216460396994225724522_92.png')"
                      data-ll-status="loading"
                      style={{
                        backgroundImage: `${data.backgroundImage}`,
                      }}
                    />
                    <span className="cmitem_quick_tx" />
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainCategory;
