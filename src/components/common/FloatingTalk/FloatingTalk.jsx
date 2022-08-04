import React from 'react';
import './FloatingTalk.scss';

function FloatingTalk() {
  return (
    <div className="floating_notice" id="floating_notice">
      <div className="floating_talk">
        <a href="/" className="btn_talk ty_csbot" id="_ssgCs">
          <span className="btn_talk_label">
            <span className="label_txt">고객센터톡</span>
            <span className="cmnoti_push" style={{ display: 'none' }} />
          </span>
          <span className="floating_btn">
            <i className="icon ty_lg icon_talk" aria-hidden="true" />
          </span>
        </a>
        <a href="/" className="btn_talk ty_chat" id="_seller">
          <span className="btn_talk_label">
            <span className="label_txt">채팅</span>
            <span className="cmnoti_push" style={{ display: 'none' }} />
          </span>
          <span className="floating_btn">
            <i className="icon ty_md icon_chat_individual" aria-hidden="true" />
          </span>
        </a>
      </div>
      <button
        className="floating_btn floating_btn_notice ty_notice"
        type="button"
        aria-expanded="false"
      >
        <span className="blind">알림함</span>
        <i className="icon ty_lg icon_talk" aria-hidden="true" />
        <i
          className="icon ty_sm icon_close icon_close_white"
          aria-hidden="true"
        />
        <span className="cmnoti_push" style={{ display: 'none' }} />
      </button>
    </div>
  );
}

export default FloatingTalk;
