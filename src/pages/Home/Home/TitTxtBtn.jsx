import React from 'react';
import { Link } from 'react-router-dom';

function TitTxtBtn() {
  return (
    <div className="cmtit_txtbtn">
      <Link to="/" className="cmtit_txtbtn_link">
        전체보기
      </Link>
    </div>
  );
}

export default TitTxtBtn;
