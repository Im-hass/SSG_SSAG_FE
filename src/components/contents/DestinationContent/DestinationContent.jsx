import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DestinationTit, DestinationTabList } from '../index';

function DestinationContent() {
  const [menuName, setMenuName] = useState('myDes');

  const handleMenu = (name) => {
    setMenuName(name);
  };

  return (
    <div id="m_wrap" className="mcom_wrap ssg">
      <div id="m_container" className="mcom_container">
        <div id="m_content">
          <div className="myodr_addrwrap">
            <DestinationTit />

            <div className="myodr_tab">
              <DestinationTabList handleMenu={handleMenu} menuName={menuName} />

              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationContent;
