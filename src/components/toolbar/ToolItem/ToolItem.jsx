import React from 'react';
import { Link } from 'react-router-dom';

const ToolItem = () => (
  // <li className="toolbar__item">
  //   <Link
  //     to="/comm/getmCategoryLnb.ssg"
  //     className="toolbar_lnk ty_category clickable"
  //     // data-react-tarea="웹공통_N|웹바|카테고리|신세계몰"
  //   >
  //     <i
  //       className="icon ty_lg icon_category"
  //       aria-hidden="true"
  //       // style="user-select: auto;"
  //     />
  //     <span className="toolbar_txt">카테고리</span>
  //   </Link>
  // </li>

  <Link
    to="/comm/getmCategoryLnb.ssg"
    className="toolbar_lnk ty_category clickable"
    data-react-tarea="웹공통_N|웹바|카테고리|SSG.COM"
    // style="user-select: auto;"
  >
    <i
      className="icon ty_lg icon_category"
      aria-hidden="true"
      // style="user-select: auto;"
    />
    <span
      className="toolbar_txt"
      // style="user-select: auto;"
    >
      카테고리
    </span>
  </Link>
);

export default ToolItem;
