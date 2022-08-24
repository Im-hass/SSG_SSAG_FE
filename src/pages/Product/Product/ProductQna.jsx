import React from 'react';

function ProductQna() {
  return (
    <div className="mndtl_sec_cont" id="_detailqna">
      <div className="mndtl_sec_subject">
        <h3 className="mndtl_sec_tit">Q&amp;A 문의</h3>
        <div className="mndtl_qna_btnarea">
          <a
            // href="javascript:itemQna.newQuestion('1000310147566', '6004', '6005');"
            href="/"
            className="mndtl_qna_btn"
            target="_parent"
          >
            <span className="clickable">문의하기</span>
          </a>
        </div>
      </div>
      <div className="mndtl_qna_wrap">
        <div className="mndtl_qna_lst">
          <ul className="mndtl_chart_lst">
            <div id="data_of_list">
              <li className="mndtl_chart_item mndtl_toggle">
                <div className="mndtl_msg_unit">
                  <div className="mndtl_msg_bx">
                    <div className="mndtl_msg">
                      <div className="mndtl_msg_cont">
                        <div className="mndtl_qna_info">
                          <span className="mndtl_qna_status complete">
                            <span className="mndtl_qna_tx">답변완료</span>
                          </span>
                          <div className="mndtl_user_info">
                            <span className="mndtl_user_tx">2022.05.17</span>
                            <span className="mndtl_user_tx">gpa*******</span>
                          </div>
                        </div>
                        <div className="mndtl_qna_cont">
                          <span className="blind">문의내용</span>
                          <button
                            type="button"
                            className="mndtl_qna_btnmore mndtl_toggle_btn clickable"
                            aria-expanded="false"
                            onClick="itemQna.getAnswer(this, '1171480513')"
                          >
                            <span className="blind">
                              <span className="sr_off">문의내용 펼치기</span>
                              <span className="sr_on">문의내용 접기</span>
                            </span>
                            <em className="mndtl_qna_tit">상품문의</em>
                            <p className="mndtl_qna_desc">
                              블랙은 입고가 안되는 건가요~~?
                            </p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <li className="mndtl_chart_item">
              <div className="mndtl_msg_unit">
                <div className="mndtl_msg_bx">
                  <div className="mndtl_msg">
                    <a
                      // href="#"
                      href="/"
                      className="mndtl_msg_more modal-iframe-open clickable"
                      target=""
                    >
                      Q&amp;A 문의 전체보기
                      <span className="count">(1건)</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductQna;
