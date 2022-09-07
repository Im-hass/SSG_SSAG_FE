import React from 'react';

function OrderDestinationInfo(props) {
  const { destinationData, handleClickBtn, registDestination } = props;

  return (
    <ul className="mnodr_article_list" id="ordPageShpplocInfoDiv_1">
      <li
        className="mnodr_article_item ordPageShpplocArea fullOrdArea"
        style={{ display: 'list-item' }}
      >
        <article className="mnodr_article mnodr_delivery_infos">
          <div className="mnodr_article_head">
            <div className="mnodr_article_headlt">
              <h2 className="mnodr_tx_tit" style={{ fontWeight: 'bold' }}>
                배송지 : {!registDestination && destinationData.addrName}
              </h2>
            </div>
            <div className="mnodr_article_headrt">
              <button
                type="button"
                className="mnodr_btn ty_grayline ty_xxs payTracking"
                name="destination"
                onClick={handleClickBtn}
              >
                변경
              </button>
            </div>
          </div>
          <div className="mnodr_article_cont ty_pull">
            <div className="mnodr_form_sec">
              <p className="mnodr_tx_desc">
                [{!registDestination && destinationData.zipCode}]{' '}
                {!registDestination && destinationData.streetAddr}
              </p>
              <div className="mnodr_tx_wrap ty_space">
                <span className="mnodr_tx_size2 mnodr_tx_gray">
                  <span id="dispRcptpeNm_0">
                    {!registDestination && destinationData.recipient}{' '}
                  </span>
                  /
                  <span id="dispHpno_0">
                    {' '}
                    {!registDestination && destinationData.phone}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </article>
      </li>
    </ul>
  );
}

export default OrderDestinationInfo;
