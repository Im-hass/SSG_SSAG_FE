import React from 'react';
import { useLocation } from 'react-router-dom';
import FtBackBtn from '../button/floating/FtBackBtn';
import FtUpBtn from '../button/floating/FtUpBtn';


function Floating() {
  
    let location = useLocation();
    if(location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/subsignup'){
        return null;
      }
    return ( 
        <>
          <div id="m_floating" className="mcom_floating_v2 react-area">
              <div className="floating_left">
                    <FtBackBtn />                
              </div>
              <div className="floating_right" id="floating_right_id">
                  <div className="floating_notice" id="floating_notice">
                      <div className="floating_notice_dimmed"></div>
                      <div className="floating_talk">
                          <a href="#" className="btn_talk ty_csbot" id="_ssgCs">
                              <span className="btn_talk_label">
                                  <span className="label_txt">고객센터톡</span>
                                  <span className="cmnoti_push" style={{display : 'none'}}></span>
                              </span>
                              <span className="floating_btn"><i className="icon ty_lg icon_talk"
                                      aria-hidden="true"></i></span>
                          </a>
                          <a href="#" className="btn_talk ty_chat" id="_seller">
                              <span className="btn_talk_label">
                                  <span className="label_txt">채팅</span>
                                  <span className="cmnoti_push" style={{display : 'none'}}></span>
                              </span>
                              <span className="floating_btn"><i className="icon ty_md icon_chat_individual"
                                      aria-hidden="true"></i></span>
                          </a>
                      </div>
                      <button className="floating_btn floating_btn_notice ty_notice" type="button"
                          aria-expanded="false">
                          <span className="blind">알림함</span>
                          <i className="icon ty_lg icon_talk" aria-hidden="true"></i>
                          <i className="icon ty_sm icon_close icon_close_white" aria-hidden="true"></i>
                          <span className="cmnoti_push" style={{display : 'none'}}></span>
                      </button>
                  </div>
                    <FtUpBtn />
              </div>
          </div>
        </>
     );
}

export default Floating;