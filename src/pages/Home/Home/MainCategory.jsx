import React from 'react';
import { Link } from 'react-router-dom';
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
                  <Link to="/" className="clickable" rel="nofollow">
                    <span
                      className="cmitem_quick_thmb ssg_lazy"
                      style={{
                        backgroundImage: `${data.backgroundImage}`,
                      }}
                    />
                    <span className="cmitem_quick_tx" />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainCategory;
