import React from 'react';
import { ServiceItem } from '../ServiceItem';
import { SERVICE_LIST_DATA } from '../../../assets/datas/ServiceList';

function ServiceList() {
  return (
    <ul>
      {SERVICE_LIST_DATA &&
        SERVICE_LIST_DATA.map((data) => (
          <ServiceItem key={data.title} data={data} />
        ))}
    </ul>
  );
}

export default ServiceList;
