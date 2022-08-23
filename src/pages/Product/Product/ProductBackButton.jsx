import React from "react";
import BackBtn from "./BackBtn";

function ProductBackButton() {
  return (
    <>
      <div
        id="mndtl_modal_iframe"
        className="mndtl_modal_iframe react-area"
        role="document"
        tabindex="0"
      >
        <header className="mndtl_modal_head">
          <div className="mndtl_modal_top">
            <a
              href=""
              className="mndtl_btn_back modal-close-btn modal-iframe-close"
              target="_parent"
            >
              <i className="mndtl_ic_arrback"></i>
              <span className="blind">이전 페이지</span>
            </a>
            {/* <BackBtn /> */}
            <div className="mndtl_cont_tit">
              <h2></h2>
            </div>
          </div>
        </header>
        <div className="mndtl_modal_cont">
          <div className="loader" id="mndtl_modal_iframe_loader">
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span>
            <span></span> <span></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductBackButton;
