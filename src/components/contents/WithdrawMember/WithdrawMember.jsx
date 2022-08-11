/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  MobileHeader,
  WithdrawNotice,
  WithdrawNoticeTit,
  WithdrawTit,
  Textarea,
  Button,
  Table,
  CheckSquareInput,
} from '../../ui/index';
import { Footer } from '../../common/index';

import * as datas from '../../../assets/datas/WithdrawContents';

function WithdrawMember() {
  const {
    NOTICE_CONTENTS1,
    NOTICE_CONTENTS2,
    NOTICE_CONTENTS3,
    NOTICE_CONTENTS4,
    TABLE_CONTENTS1,
    TABLE_CONTENTS2,
    TABLE_CONTENTS3,
  } = datas;

  return (
    <div>
      <MobileHeader title="회원탈퇴" />
      <div id="m_content" className="cmem_ct_myinfo">
        <div className="cmem_card">
          <WithdrawTit title="탈퇴 유의사항" />
          <div className="cmem_cont">
            <div className="cmem_leave_noti">
              <div className="cmem_row">
                <div className="total_member">
                  <div className="section">
                    <WithdrawNoticeTit title="SSG MONEY 소멸" />
                    <WithdrawNotice contentsArray={NOTICE_CONTENTS1} />
                    <div className="tbl_sec">
                      <div className="tit_txt2">나의 SSG MONEY</div>
                      <Table
                        caption={TABLE_CONTENTS1.caption}
                        colgroup={TABLE_CONTENTS1.colgroup}
                        thead={TABLE_CONTENTS1.thead}
                        tbody={TABLE_CONTENTS1.tbody}
                      />
                    </div>
                  </div>
                  <div className="section">
                    <WithdrawNoticeTit title="회원 재가입 제한" />
                    <WithdrawNotice contentsArray={NOTICE_CONTENTS2} />
                    <div className="tbl_sec">
                      <div className="tit_txt2">회원 재가입 유예기간</div>
                      <Table
                        caption={TABLE_CONTENTS2.caption}
                        colgroup={TABLE_CONTENTS2.colgroup}
                        tbody={TABLE_CONTENTS2.tbody}
                      />
                    </div>
                  </div>
                  <div className="section">
                    <WithdrawNoticeTit title="개인정보 파기" />
                    <WithdrawNotice contentsArray={NOTICE_CONTENTS3} />
                    <div className="tbl_sec ty2">
                      <Table
                        caption={TABLE_CONTENTS3.caption}
                        colgroup={TABLE_CONTENTS3.colgroup}
                        tbody={TABLE_CONTENTS3.tbody}
                      />
                    </div>
                  </div>
                  <div className="section">
                    <WithdrawNoticeTit title="통합 ID 서비스" />
                    <WithdrawNotice contentsArray={NOTICE_CONTENTS4} />
                  </div>
                </div>
              </div>
              <div className="cmem_row">
                <WithdrawNoticeTit title="탈퇴 사유 및 개선점(선택)" />
                <Textarea
                  maxLength="100"
                  placeholder="SSG.COM에 해주고 싶은 말씀을 자유롭게 입력해주세요.(100자 이내)"
                />
              </div>
              <div className="cmem_row">
                <CheckSquareInput
                  htmlFor="leave_agree"
                  text="회원탈퇴 유의사항을 모두 확인하였으며, SSG.COM 회원탈퇴에
                  동의합니다."
                />
              </div>
            </div>
            <Button
              type="button"
              className="cmem_btn cmem_btn_orange4"
              name="확인"
            />
          </div>
        </div>

        <div className="cmem_space" />
        <div className="cmem_card">
          <WithdrawTit title="신세계포인트 통합 ID 서비스 탈퇴" />
          <div className="cmem_cont">
            <div className="cmem_row">
              <p>
                신세계포인트닷컴 및 가입되어 있는 신세계포인트 통합 ID 서비스를
                탈퇴하시려면 &apos;통합 ID 서비스 탈퇴&apos; 버튼을
                클릭해주세요.
              </p>
            </div>
            <Button
              type="button"
              className="cmem_btn cmem_btn_orange4"
              name="확인"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WithdrawMember;
