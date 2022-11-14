import React, { useState, useEffect } from 'react';
import axios from 'axios/index';

const bgColor = {
  'SSG.COM카드': '#363635',
  'SSG.COM삼성카드': '#006bff',
  삼성카드: '#006bff',
  KB국민카드: '#645b4c',
  '신한카드 대상상품': '#0B1966',
  신한카드: '#0B1966',
  롯데카드: '#E21C24',
};

function ItemCard() {
  const [datas, setDatas] = useState();

  useEffect(() => {
    axios
      .get('http://54.180.132.155:9000/comm-users/main/card-promotion')
      .then((res) => {
        setDatas(res.data.result);
      });
  }, []);

  return (
    <div className="cmgrid_full_box" data-page-set-id="117">
      <div className="cmitem_cardbenfit_unit ty_horizontal">
        <div className="cmitem_cardbnfit_tit">
          <span className="cmitem_cardbnfit_tittx" />
          <span className="cmitem_cardbnfit_tittx" />
        </div>
        <div className="cmitem_cardbnfit_cont">
          <ul className="cmitem_cardbnfit_lst">
            {datas &&
              datas.map((data) => (
                <li
                  key={data.cardPromotionId}
                  className="cmitem_cardbnfit_item"
                  style={{ backgroundColor: bgColor[data.cardName] }}
                >
                  <a
                    href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000000858&amp;siteNo=6005&amp;recruitmentPath=L6007001&amp;eventCode=HPG02"
                    className="clickable"
                  >
                    <div className="cmitem_cardbnfit_discount">
                      <span className="cmitem_cardbnfit_rate">
                        <em>{data.benefits}</em>
                        {data.benefits[0] === '~' ? '만원' : ''}
                      </span>
                      <span className="cmitem_cardbnfit_bi">
                        <img
                          src={data.tagImgUrl}
                          alt={data.event}
                          className="ssg_lazy loaded"
                        />
                      </span>
                    </div>
                    <div className="cmitem_cardbnfit_info">
                      <span className="card_info_tx">
                        <span className="card_info_tx1">{data.cardName}</span>
                      </span>
                      <span className="card_info_name">
                        <span className="card_info_name1">{data.event}</span>
                        <span className="card_info_name2" />
                      </span>
                    </div>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
