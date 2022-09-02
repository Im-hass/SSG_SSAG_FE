import React from 'react';
import { Link } from 'react-router-dom';

function WishFolder() {
  return (
    <div className="mylike_folder">
      <div className="mylike_folder_slider">
        <ul className="mylike_folder_list" role="tablist">
          <li className="mylike_folder_item" role="presentation">
            <Link
              to="/wishList"
              className="mylike_folder_btn ty_all clickable  on "
              role="tab"
            >
              <span className="mylike_folder_thmb" />
              <em className="mylike_folder_name">전체보기</em>
            </Link>
          </li>
          <li
            className="mylike_folder_item"
            role="presentation"
            id="mylike_folder_new"
          >
            <Link
              to="/wishList"
              className="mylike_folder_btn ty_create clickable"
              role="tab"
            >
              <span className="mylike_folder_thmb" />
              <em className="mylike_folder_name">새폴더</em>
            </Link>
          </li>
          <li className="mylike_folder_item" role="presentation">
            <Link
              to="/wishList"
              className="mylike_folder_btn ty_manage clickable"
              role="tab"
            >
              <span className="mylike_folder_thmb" />
              <em className="mylike_folder_name">폴더관리</em>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WishFolder;
