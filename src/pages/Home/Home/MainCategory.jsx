import React from 'react';
import MainCtgy from './MainCtgy.json';
import './style/MainCategory.scss';

function MainCategory() {
  return (
    <div className="cmgrid_full_box">
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
                  >
                    <span
                      className="cmitem_quick_thmb ssg_lazy"
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
