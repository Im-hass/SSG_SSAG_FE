import React, { useState } from 'react';

function ProductReviewGraph() {
  const [isReviewGraphOpen, setIsReviewGraphOpen] = useState('');

  const handleReviewGraphOpen = () =>
    isReviewGraphOpen !== 'on'
      ? setIsReviewGraphOpen('on')
      : setIsReviewGraphOpen('');

  return (
    <div className={`mndtl_cmt_skin mndtl_toggle v2 ${isReviewGraphOpen}`}>
      <div className="mndtl_skin_chart">
        <div className="mndtl_skin_item">
          <div className="mndtl_skin_info">
            <div className="mndtl_skin_tit">
              <span className="mndtl_skin_tx">사이즈</span>
            </div>
            <div className="mndtl_skin_desc">
              <span className="mndtl_skin_tx">정사이즈에요</span>
            </div>
            <div className="mndtl_skin_score_wrap">
              <div className="mndtl_skin_score_bar">
                <span className="mndtl_skin_bar">
                  <em className="mndtl_skin_per" style={{ width: '66%' }} />
                </span>
              </div>
              <div className="mndtl_skin_score">
                66<em>%</em>
              </div>
            </div>
          </div>
          <div className="mndtl_skin_detail mndtl_toggle_cont">
            <ul className="mndtl_skin_grp">
              <li className="">
                <div className="mndtl_skingrp_type">예상보다작아요</div>
                <div className="mndtl_skingrp_fullbar">
                  <span className="mndtl_skingrp_bar">
                    <em
                      className="mndtl_skingrp_per"
                      style={{ width: '17%' }}
                    />
                  </span>
                </div>
                <div className="mndtl_skingrp_score">17%</div>
              </li>
              <li className="on">
                <div className="mndtl_skingrp_type">정사이즈에요</div>
                <div className="mndtl_skingrp_fullbar">
                  <span className="mndtl_skingrp_bar">
                    <em
                      className="mndtl_skingrp_per"
                      style={{ width: '66%' }}
                    />
                  </span>
                </div>
                <div className="mndtl_skingrp_score">66%</div>
              </li>
              <li className="">
                <div className="mndtl_skingrp_type">예상보다 커요</div>
                <div className="mndtl_skingrp_fullbar">
                  <span className="mndtl_skingrp_bar">
                    <em
                      className="mndtl_skingrp_per"
                      style={{ width: '17%' }}
                    />
                  </span>
                </div>
                <div className="mndtl_skingrp_score">17%</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mndtl_skin_item">
          <div className="mndtl_skin_info">
            <div className="mndtl_skin_tit">
              <span className="mndtl_skin_tx">색상</span>
            </div>
            <div className="mndtl_skin_desc">
              <span className="mndtl_skin_tx">화면과 같아요</span>
            </div>
            <div className="mndtl_skin_score_wrap">
              <div className="mndtl_skin_score_bar">
                <span className="mndtl_skin_bar">
                  <em className="mndtl_skin_per" style={{ width: '75%' }} />
                </span>
              </div>
              <div className="mndtl_skin_score">
                75<em>%</em>
              </div>
            </div>
          </div>
          <div className="mndtl_skin_detail mndtl_toggle_cont">
            <ul className="mndtl_skin_grp">
              <li className="">
                <div className="mndtl_skingrp_type">화면보다 어두워요</div>
                <div className="mndtl_skingrp_fullbar">
                  <span className="mndtl_skingrp_bar">
                    <em
                      className="mndtl_skingrp_per"
                      style={{ width: '17%' }}
                    />
                  </span>
                </div>
                <div className="mndtl_skingrp_score">17%</div>
              </li>
              <li className="on">
                <div className="mndtl_skingrp_type">화면과 같아요</div>
                <div className="mndtl_skingrp_fullbar">
                  <span className="mndtl_skingrp_bar">
                    <em
                      className="mndtl_skingrp_per"
                      style={{ width: '75%' }}
                    />
                  </span>
                </div>
                <div className="mndtl_skingrp_score">75%</div>
              </li>
              <li className="">
                <div className="mndtl_skingrp_type">화면보다 밝아요</div>
                <div className="mndtl_skingrp_fullbar">
                  <span className="mndtl_skingrp_bar">
                    <em className="mndtl_skingrp_per" style={{ width: '8%' }} />
                  </span>
                </div>
                <div className="mndtl_skingrp_score">8%</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mndtl_skin_item">
          <div className="mndtl_skin_info">
            <div className="mndtl_skin_tit">
              <span className="mndtl_skin_tx">촉감</span>
            </div>
            <div className="mndtl_skin_desc">
              <span className="mndtl_skin_tx">부드러워요</span>
            </div>
            <div className="mndtl_skin_score_wrap">
              <div className="mndtl_skin_score_bar">
                <span className="mndtl_skin_bar">
                  <em className="mndtl_skin_per" style={{ width: '58%' }} />
                </span>
              </div>
              <div className="mndtl_skin_score">
                58<em>%</em>
              </div>
            </div>
          </div>
          <div className="mndtl_skin_detail mndtl_toggle_cont">
            <ul className="mndtl_skin_grp">
              <li className="">
                <div className="mndtl_skingrp_type">거칠어요</div>
                <div className="mndtl_skingrp_fullbar">
                  <span className="mndtl_skingrp_bar">
                    <em className="mndtl_skingrp_per" style={{ width: '0%' }} />
                  </span>
                </div>
                <div className="mndtl_skingrp_score">0%</div>
              </li>
              <li className="">
                <div className="mndtl_skingrp_type">평범해요</div>
                <div className="mndtl_skingrp_fullbar">
                  <span className="mndtl_skingrp_bar">
                    <em
                      className="mndtl_skingrp_per"
                      style={{ width: '42%' }}
                    />
                  </span>
                </div>
                <div className="mndtl_skingrp_score">42%</div>
              </li>
              <li className="on">
                <div className="mndtl_skingrp_type">부드러워요</div>
                <div className="mndtl_skingrp_fullbar">
                  <span className="mndtl_skingrp_bar">
                    <em
                      className="mndtl_skingrp_per"
                      style={{ width: '58%' }}
                    />
                  </span>
                </div>
                <div className="mndtl_skingrp_score">58%</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="mndtl_skin_btnmore"
        data-react-unit-type="text"
        data-react-unit-text='[{"type":"tarea_addt_val","value":"통계_펼쳐보기"}]'
      >
        <button
          className="mndtl_toggle_btn clickable"
          data-react-tarea-dtl-cd="t00060"
          type="button"
          aria-expanded="false"
          onClick={handleReviewGraphOpen}
        >
          <i className="skinmore_deco left" />
          <span className="blind">추가평가항목</span>
          <span className="sr_off">펼쳐보기</span>
          <span className="sr_on">접기</span>
          <i className="skinmore_deco right" />
        </button>
      </div>
    </div>
  );
}

export default ProductReviewGraph;
