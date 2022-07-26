import React from 'react';
import { Link } from 'react-router-dom';
import { DestinationAddBtn } from '../index';
import './DestinationNoData.scss';

function DestinationNoData() {
  return (
    <div className="myodr_nodata">
      <p className="myodr_nodata_tx">등록된 MY배송지가 없습니다</p>
      <Link to="/addDestination">
        <DestinationAddBtn />
      </Link>
    </div>
  );
}

export default DestinationNoData;
