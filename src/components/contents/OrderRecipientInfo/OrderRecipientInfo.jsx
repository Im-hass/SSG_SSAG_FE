import React from 'react';

function OrderRecipientInfo(props) {
  const { recipientData, handleClickBtn } = props;

  return (
    <ul className="mnodr_article_list fullOrdArea">
      <li className="mnodr_article_item">
        <article className="mnodr_article mnodr_delivery_infos">
          <div className="mnodr_article_head">
            <div className="mnodr_article_headlt">
              <h2 className="mnodr_tx_tit" style={{ fontWeight: 'bold' }}>
                주문자 정보
              </h2>
            </div>
            <div className="mnodr_article_headrt">
              <button
                type="button"
                className="mnodr_btn ty_grayline ty_xxs payTracking"
                name="recipient"
                onClick={handleClickBtn}
              >
                변경
              </button>
            </div>
          </div>
          <div className="mnodr_article_cont ty_pull">
            <div className="mnodr_form_sec">
              <div className="mnodr_form_cont">
                <dl className="mnodr_dl_desc">
                  <dt>
                    <span className="mnodr_tx_desc mnodr_tx_gray">
                      주문자명
                    </span>
                  </dt>
                  <dd>
                    <span className="mnodr_tx_desc" id="ordpeNmStr">
                      {recipientData.name}
                    </span>
                  </dd>
                </dl>
                <dl className="mnodr_dl_desc">
                  <dt>
                    <span className="mnodr_tx_desc mnodr_tx_gray">연락처</span>
                  </dt>
                  <dd>
                    <span className="mnodr_tx_desc" id="ordpeHpnoStr">
                      {recipientData.phone}
                    </span>
                  </dd>
                </dl>
                <dl className="mnodr_dl_desc">
                  <dt>
                    <span className="mnodr_tx_desc mnodr_tx_gray">이메일</span>
                  </dt>
                  <dd>
                    <span className="mnodr_tx_desc" id="ordpeEmailStr">
                      {recipientData.email}
                    </span>
                  </dd>
                </dl>
                <dl className="mnodr_dl_desc">
                  <dt>
                    <span className="mnodr_tx_desc mnodr_tx_gray">
                      품절시 환불
                    </span>
                  </dt>
                  <dd>
                    <span className="mnodr_tx_desc">
                      <span id="rfdMthdStrArea">
                        {recipientData.refundCheck}
                      </span>
                    </span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </article>
      </li>
    </ul>
  );
}

export default OrderRecipientInfo;
