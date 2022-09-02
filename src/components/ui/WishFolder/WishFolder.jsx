import React from 'react';

function WishFolder() {
  return (
    <div className="mylike_folder">
      <div className="mylike_folder_slider">
        <ul className="mylike_folder_list" role="tablist">
          <li className="mylike_folder_item" role="presentation">
            <a
              href="/"
              className="mylike_folder_btn ty_all clickable  on "
              role="tab"
            >
              <span className="mylike_folder_thmb" />
              <em className="mylike_folder_name">전체보기</em>
            </a>
          </li>
          <li
            className="mylike_folder_item"
            role="presentation"
            id="mylike_folder_new"
          >
            <a
              href="/"
              className="mylike_folder_btn ty_create clickable"
              role="tab"
            >
              <span className="mylike_folder_thmb" />
              <em className="mylike_folder_name">새폴더</em>
            </a>
          </li>
          <li className="mylike_folder_item" role="presentation">
            <a
              href="/"
              className="mylike_folder_btn ty_manage clickable"
              role="tab"
            >
              <span className="mylike_folder_thmb" />
              <em className="mylike_folder_name">폴더관리</em>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WishFolder;
