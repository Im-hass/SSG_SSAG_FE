import React from 'react';
import ToolItem from '../ToolItem/ToolItem';
import './ToolList.scss';

const ToolList = () => (
  // <div className="toolList-wrapper">
  //   <div id="m_toolbar" className="toolList react-area">
  //     <ul className="toolbar_menu" role="navigation">
  //       <li>
  //         <ToolItem />
  //       </li>
  //       <li>
  //         <ToolItem />
  //       </li>
  //       <li>
  //         <ToolItem />
  //       </li>
  //       <li>
  //         <ToolItem />
  //       </li>
  //     </ul>
  //   </div>
  // </div>
  <div
    id="m_toolbar"
    className="mcom_toolbar_v2 react-area"
    // style="user-select: auto;"
  >
    <ul
      className="toolbar_menu"
      role="navigation"
      // style="user-select: auto;"
    >
      <li
        className="toolbar_item"
        // style="user-select: auto;"
      >
        <ToolItem />
      </li>
      <li
        className="toolbar_item"
        // style="user-select: auto;"
      >
        <ToolItem />
      </li>
      <li
        className="toolbar_item"
        // style="user-select: auto;"
      >
        <ToolItem />
      </li>
      <li
        className="toolbar_item"
        // style="user-select: auto;"
      >
        <ToolItem />
      </li>
      <li
        className="toolbar_item"
        // style="user-select: auto;"
      >
        <ToolItem />
      </li>
    </ul>
  </div>
);

export default ToolList;
