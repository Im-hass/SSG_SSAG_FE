import React from 'react';

function HeaderCrtBtn() {
    return ( 
        <div class="btn_cate btn_cart">
        <button type="button" class="clickable"
            onclick="">
            <span class="sp_ctg_icon ctg_icon_cart">
                <span class="cmnoti_push"><span class="blind" id="topCartCnt">담은 상품 수</span></span>
            </span>
        </button>
    </div>
     );
}

export default HeaderCrtBtn;