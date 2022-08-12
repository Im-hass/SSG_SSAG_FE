import React from 'react';
import { FilterList } from '../FilterList';
import { RANK_OPTIONS } from '../../../assets/datas';
import './SearchFilter.scss';

function SearchFilter() {
  return (
    <div className="m_scharea m_scharea_malltab">
      <div className="sch_search_options">
        <div className="sch_filter_view">
          <div className="m_ncatetblarea">
            <ul className="m_ncatetbl">
              {/* 뷰 타입 */}
              <li className="view_td">
                <div className="posr">
                  <a href="/" id="_btn_view_type_toggle" className="btn_t">
                    <span className="sp_view ico_thmb">이미지형</span>
                  </a>
                </div>
              </li>

              {/* 백화점상품 / 매장픽업 */}
              <li className="filter_td">
                <div className="in">
                  {/* 누르면 on 클래스 추가되고 option 출력 */}
                  <div className="cmft_sel_wrap">
                    <span className="cmft_inp_chk">
                      <input
                        type="checkbox"
                        id="ui_ship_view"
                        value="sd_store_chk"
                      />
                    </span>
                    <a href="/" className="cmft_sort_tit cmft_sel_curent">
                      <span className="cmft_txt ty_emart">백화점상품</span>
                    </a>
                    <ul className="cmft_sel_lst">
                      <li>
                        <a href="/" id="sd_store_chk" className="chk clickable">
                          <span className="cmft_txt">백화점상품</span>
                        </a>
                      </li>
                      <li>
                        <a href="/" id="magic_chk" className="chk clickable">
                          <span className="cmft_txt">매장픽업</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* 추천순 */}
              <li className="rank_td">
                {/* 누르면 active 클래스 추가되고 option 출력 */}
                <div className="in">
                  <a href="/" className="btn_t">
                    추천순<span className="sp_view ico_arrow">&nbsp;</span>
                  </a>
                  <ul className="mn_layer">
                    {/* 선택된 option에 active 클래스 추가되어 있음 */}
                    {RANK_OPTIONS &&
                      RANK_OPTIONS.map((data) => (
                        <FilterList key={data.title} data={data} />
                      ))}
                  </ul>
                </div>
              </li>

              {/* 필터 옵션 : 카테고리/브랜드/상품유형/배송유형/혜택/백화점상품/가격 */}
              <li className="sch_td">
                {/* active 클래스 추가시 필터 option 출력 */}
                <div className="in">
                  <a href="/" className="btn_t">
                    필터<span className="sp_view ico_arrow">&nbsp;</span>
                  </a>
                  <div className="m_ds_pos">
                    <div className="m_schmid" id="m_schmid">
                      <div className="detail_schwrap">
                        <div className="detail_sch">
                          <span className="tit">카테고리</span>
                          <div className="ds_cont">
                            <span className="des_select">
                              <span
                                className="cc_ellip_in selected"
                                id="category_select"
                              >
                                전체
                              </span>
                              <span className="sp_com_v2 sel_arrow">
                                &nbsp;
                              </span>
                              <span className="hide_select">
                                <label htmlFor="category">카테고리 선택</label>
                                <select id="category" title="옵션">
                                  <option value="all">전체</option>
                                  <option
                                    value="6000209194"
                                    title="컴퓨터/노트북/태블릿"
                                    className="clickable"
                                  >
                                    컴퓨터/노트북/태블릿
                                  </option>
                                  <option
                                    value="6000209203"
                                    title="휴대폰/스마트기기"
                                    className="clickable"
                                  >
                                    휴대폰/스마트기기
                                  </option>
                                  <option
                                    value="6000211273"
                                    title="문구/미술/사무용품"
                                    className="clickable"
                                  >
                                    문구/미술/사무용품
                                  </option>
                                  <option
                                    value="6000200799"
                                    title="가방/지갑"
                                    className="clickable"
                                  >
                                    가방/지갑
                                  </option>
                                  <option
                                    value="6000209202"
                                    title="영상/음향가전"
                                    className="clickable"
                                  >
                                    영상/음향가전
                                  </option>
                                  <option
                                    value="6000209196"
                                    title="PC주변기기/저장장치"
                                    className="clickable"
                                  >
                                    PC주변기기/저장장치
                                  </option>
                                  <option
                                    value="6000209199"
                                    title="내비/블랙박스/차량용품"
                                    className="clickable"
                                  >
                                    내비/블랙박스/차량용품
                                  </option>
                                  <option
                                    value="6000210596"
                                    title="도서"
                                    className="clickable"
                                  >
                                    도서
                                  </option>
                                  <option
                                    value="6000209197"
                                    title="카메라/캠코더"
                                    className="clickable"
                                  >
                                    카메라/캠코더
                                  </option>
                                  <option
                                    value="6000200803"
                                    title="명품잡화/아이웨어"
                                    className="clickable"
                                  >
                                    명품잡화/아이웨어
                                  </option>
                                  <option
                                    value="6000209195"
                                    title="게임/타이틀"
                                    className="clickable"
                                  >
                                    게임/타이틀
                                  </option>
                                  <option
                                    value="6000163570"
                                    title="완구/교구"
                                    className="clickable"
                                  >
                                    완구/교구
                                  </option>
                                  <option
                                    value="6000200802"
                                    title="시계/쥬얼리"
                                    className="clickable"
                                  >
                                    시계/쥬얼리
                                  </option>
                                  <option
                                    value="6000177371"
                                    title="조명/인테리어소품"
                                    className="clickable"
                                  >
                                    조명/인테리어소품
                                  </option>
                                  <option
                                    value="6000178524"
                                    title="청소/욕실/공구"
                                    className="clickable"
                                  >
                                    청소/욕실/공구
                                  </option>
                                  <option
                                    value="6000205356"
                                    title="캠핑/낚시용품"
                                    className="clickable"
                                  >
                                    캠핑/낚시용품
                                  </option>
                                  <option
                                    value="6000193742"
                                    title="스킨케어"
                                    className="clickable"
                                  >
                                    스킨케어
                                  </option>
                                  <option
                                    value="6000177369"
                                    title="거실/주방가구"
                                    className="clickable"
                                  >
                                    거실/주방가구
                                  </option>
                                  <option
                                    value="6000178525"
                                    title="생활/건강"
                                    className="clickable"
                                  >
                                    생활/건강
                                  </option>
                                  <option
                                    value="6000177370"
                                    title="서재/학생아동가구"
                                    className="clickable"
                                  >
                                    서재/학생아동가구
                                  </option>
                                  <option
                                    value="6000177372"
                                    title="DIY/시공"
                                    className="clickable"
                                  >
                                    DIY/시공
                                  </option>
                                  <option
                                    value="6000178523"
                                    title="주방용품"
                                    className="clickable"
                                  >
                                    주방용품
                                  </option>
                                  <option
                                    value="6000205355"
                                    title="등산/아웃도어"
                                    className="clickable"
                                  >
                                    등산/아웃도어
                                  </option>
                                  <option
                                    value="3500000958"
                                    title="악기"
                                    className="clickable"
                                  >
                                    악기
                                  </option>
                                  <option
                                    value="6000209198"
                                    title="에어컨/계절가전"
                                    className="clickable"
                                  >
                                    에어컨/계절가전
                                  </option>
                                  <option
                                    value="6000205354"
                                    title="스포츠웨어/용품"
                                    className="clickable"
                                  >
                                    스포츠웨어/용품
                                  </option>
                                  <option
                                    value="6000185640"
                                    title="반려동물용품"
                                    className="clickable"
                                  >
                                    반려동물용품
                                  </option>
                                  <option
                                    value="6000209200"
                                    title="냉장고/주방가전"
                                    className="clickable"
                                  >
                                    냉장고/주방가전
                                  </option>
                                  <option
                                    value="6000163573"
                                    title="유아동신발/잡화"
                                    className="clickable"
                                  >
                                    유아동신발/잡화
                                  </option>
                                  <option
                                    value="6000200800"
                                    title="모자/장갑/ACC"
                                    className="clickable"
                                  >
                                    모자/장갑/ACC
                                  </option>
                                  <option
                                    value="6000177368"
                                    title="침실/수납가구"
                                    className="clickable"
                                  >
                                    침실/수납가구
                                  </option>
                                  <option
                                    value="6000205361"
                                    title="수영/수상레저"
                                    className="clickable"
                                  >
                                    수영/수상레저
                                  </option>
                                  <option
                                    value="6000189392"
                                    title="남성패션"
                                    className="clickable"
                                  >
                                    남성패션
                                  </option>
                                  <option
                                    value="6000189453"
                                    title="언더웨어"
                                    className="clickable"
                                  >
                                    언더웨어
                                  </option>
                                  <option
                                    value="6000193747"
                                    title="미용기기/소품"
                                    className="clickable"
                                  >
                                    미용기기/소품
                                  </option>
                                  <option
                                    value="6000177367"
                                    title="침구/커튼/카페트"
                                    className="clickable"
                                  >
                                    침구/커튼/카페트
                                  </option>
                                  <option
                                    value="6000193745"
                                    title="바디케어"
                                    className="clickable"
                                  >
                                    바디케어
                                  </option>
                                  <option
                                    value="6000018405"
                                    title="취미/키덜트"
                                    className="clickable"
                                  >
                                    취미/키덜트
                                  </option>
                                  <option
                                    value="6000163569"
                                    title="유모차/카시트/실내용품"
                                    className="clickable"
                                  >
                                    유모차/카시트/실내용품
                                  </option>
                                  <option
                                    value="6000163568"
                                    title="출산/육아용품"
                                    className="clickable"
                                  >
                                    출산/육아용품
                                  </option>
                                  <option
                                    value="6000205357"
                                    title="골프웨어/용품/클럽"
                                    className="clickable"
                                  >
                                    골프웨어/용품/클럽
                                  </option>
                                  <option
                                    value="6000189500"
                                    title="캐주얼/유니섹스"
                                    className="clickable"
                                  >
                                    캐주얼/유니섹스
                                  </option>
                                </select>
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="detail_sch">
                          <span className="tit">브랜드</span>
                          <div className="ds_cont">
                            <span className="des_select">
                              <span className="cc_ellip_in" id="brand_select">
                                전체
                              </span>
                              <span className="sp_com_v2 sel_arrow">
                                &nbsp;
                              </span>
                              <span className="hide_select">
                                <label htmlFor="brand">브랜드 선택</label>
                                <select
                                  id="brand"
                                  title="옵션"
                                  multiple="multiple"
                                >
                                  <option
                                    value="2000000375"
                                    title="APPLE(애플)"
                                  >
                                    APPLE(애플)(135)
                                  </option>
                                  <option value="3000022725" title="베락스">
                                    베락스(6,384)
                                  </option>
                                  <option value="2000047517" title="텐바이텐">
                                    텐바이텐(6,114)
                                  </option>
                                  <option value="2011015363" title="바보사랑">
                                    바보사랑(5,630)
                                  </option>
                                  <option value="2000017754" title="아트박스">
                                    아트박스(4,343)
                                  </option>
                                  <option value="3000044565" title="수나르">
                                    수나르(1,595)
                                  </option>
                                  <option value="3000034082" title="오너클랜">
                                    오너클랜(1,385)
                                  </option>
                                  <option value="3000040101" title="하푼">
                                    하푼(949)
                                  </option>
                                  <option value="3000008058" title="핫트랙스">
                                    핫트랙스(805)
                                  </option>
                                  <option value="3000044063" title="유니슈트">
                                    유니슈트(581)
                                  </option>
                                  <option
                                    value="3000004381"
                                    title="Healing Shield"
                                  >
                                    Healing Shield(578)
                                  </option>
                                  <option value="3000014981" title="ozem">
                                    ozem(562)
                                  </option>
                                  <option
                                    value="3000056136"
                                    title="오젬 셀러허브"
                                  >
                                    오젬 셀러허브(480)
                                  </option>
                                  <option value="3000007114" title="태블리스">
                                    태블리스(437)
                                  </option>
                                  <option value="3000026118" title="GOBUKEE">
                                    GOBUKEE(393)
                                  </option>
                                  <option value="3000047116" title="디작소">
                                    디작소(380)
                                  </option>
                                  <option value="3000027931" title="스코코">
                                    스코코(255)
                                  </option>
                                  <option value="3000054304" title="헤이맨">
                                    헤이맨(251)
                                  </option>
                                  <option value="3000026906" title="데켄스">
                                    데켄스(230)
                                  </option>
                                  <option value="3000034184" title="오펜트">
                                    오펜트(197)
                                  </option>
                                  <option value="3000039315" title="스냅케이스">
                                    스냅케이스(191)
                                  </option>
                                  <option value="3000013845" title="뷰씨">
                                    뷰씨(152)
                                  </option>
                                  <option value="3000047977" title="스크린웨어">
                                    스크린웨어(131)
                                  </option>
                                  <option value="3000019178" title="아자케이스">
                                    아자케이스(125)
                                  </option>
                                  <option value="2010028371" title="sinjimoru">
                                    sinjimoru(101)
                                  </option>
                                  <option
                                    value="3000051982"
                                    title="플라잉웨일즈"
                                  >
                                    플라잉웨일즈(86)
                                  </option>
                                  <option value="2010034105" title="vonjean">
                                    vonjean(76)
                                  </option>
                                  <option value="3000035464" title="가우런">
                                    가우런(75)
                                  </option>
                                  <option value="3000024073" title="1300K">
                                    1300K(59)
                                  </option>
                                  <option value="3000016651" title="ESR">
                                    ESR(58)
                                  </option>
                                  <option value="2000019111" title="오피스디포">
                                    오피스디포(54)
                                  </option>
                                  <option value="2011000234" title="교보문고">
                                    교보문고(51)
                                  </option>
                                  <option value="3000021334" title="비오비">
                                    비오비(51)
                                  </option>
                                  <option value="3000044676" title="제이큐">
                                    제이큐(49)
                                  </option>
                                  <option value="2011006095" title="ARKON">
                                    ARKON(47)
                                  </option>
                                  <option value="3000016595" title="케이안">
                                    케이안(47)
                                  </option>
                                  <option value="3000039306" title="솔츠코리아">
                                    솔츠코리아(44)
                                  </option>
                                  <option
                                    value="3000030743"
                                    title="탐탁(tomtoc)"
                                  >
                                    탐탁(tomtoc)(43)
                                  </option>
                                  <option
                                    value="3000019773"
                                    title="발렉스트라 (Valextra)"
                                  >
                                    발렉스트라 (Valextra...(42)
                                  </option>
                                  <option value="3000017135" title="UM2">
                                    UM2(40)
                                  </option>
                                  <option value="2000005992" title="슈피겐">
                                    슈피겐(36)
                                  </option>
                                  <option value="3000005553" title="요이치">
                                    요이치(36)
                                  </option>
                                  <option value="3000032800" title="로랜텍">
                                    로랜텍(35)
                                  </option>
                                  <option value="3000016658" title="빅쏘">
                                    빅쏘(34)
                                  </option>
                                  <option
                                    value="3000024929"
                                    title="UNIQBLE(유니커블)"
                                  >
                                    UNIQBLE(유니커블)(34)
                                  </option>
                                  <option value="3000048936" title="Zio-Biz">
                                    Zio-Biz(34)
                                  </option>
                                  <option
                                    value="3000005964"
                                    title="ACTTO (엑토)"
                                  >
                                    ACTTO (엑토)(33)
                                  </option>
                                  <option value="3000016650" title="애드온">
                                    애드온(33)
                                  </option>
                                  <option value="3000007711" title="슈퍼디비전">
                                    슈퍼디비전(30)
                                  </option>
                                  <option
                                    value="3000047550"
                                    title="Eagles Trading"
                                  >
                                    Eagles Trading(30)
                                  </option>
                                  <option value="3000029822" title="코끼리리빙">
                                    코끼리리빙(29)
                                  </option>
                                  <option value="3000012386" title="베이스어스">
                                    베이스어스(28)
                                  </option>
                                  <option value="3000016281" title="벤토사">
                                    벤토사(28)
                                  </option>
                                  <option value="3000024721" title="UNIQBLE">
                                    UNIQBLE(28)
                                  </option>
                                  <option value="3000032652" title="하이온">
                                    하이온(28)
                                  </option>
                                  <option value="3000020229" title="패치웍스">
                                    패치웍스(27)
                                  </option>
                                  <option value="3000021834" title="갓샵">
                                    갓샵(27)
                                  </option>
                                  <option value="3000008806" title="네고">
                                    네고(26)
                                  </option>
                                  <option value="3000015986" title="파인피아">
                                    파인피아(25)
                                  </option>
                                  <option value="3000049176" title="inovia">
                                    inovia(25)
                                  </option>
                                  <option value="2011005972" title="맥컬리">
                                    맥컬리(24)
                                  </option>
                                  <option value="3000049493" title="안나슬리">
                                    안나슬리(24)
                                  </option>
                                  <option value="2000006583" title="TARGUS">
                                    TARGUS(23)
                                  </option>
                                  <option value="2011009917" title="안테나샵">
                                    안테나샵(23)
                                  </option>
                                  <option
                                    value="3000002862"
                                    title="araree(아라리)"
                                  >
                                    araree(아라리)(23)
                                  </option>
                                  <option value="3000027823" title="솔츠">
                                    솔츠(22)
                                  </option>
                                  <option value="3000041721" title="미스터마켓">
                                    미스터마켓(22)
                                  </option>
                                  <option
                                    value="3000051469"
                                    title="크리스찬케리"
                                  >
                                    크리스찬케리(22)
                                  </option>
                                  <option
                                    value="3000013753"
                                    title="데일리라이크(Dailylike)"
                                  >
                                    데일리라이크(Dailylik...(21)
                                  </option>
                                  <option
                                    value="3000015913"
                                    title="포유아이엔씨"
                                  >
                                    포유아이엔씨(21)
                                  </option>
                                  <option value="3000017189" title="본젠">
                                    본젠(20)
                                  </option>
                                  <option value="3000022412" title="JUPAZIP">
                                    JUPAZIP(20)
                                  </option>
                                  <option value="3000029842" title="멜팅브라운">
                                    멜팅브라운(20)
                                  </option>
                                  <option
                                    value="3000039382"
                                    title="BISON denim"
                                  >
                                    BISON denim(20)
                                  </option>
                                  <option value="3000003851" title="Anyclear">
                                    Anyclear(18)
                                  </option>
                                  <option value="3000038882" title="호후">
                                    호후(18)
                                  </option>
                                  <option
                                    value="3000010686"
                                    title="피콰드로 (Piquadro)"
                                  >
                                    피콰드로 (Piquadro)(17)
                                  </option>
                                  <option value="3000049971" title="다이아큐브">
                                    다이아큐브(16)
                                  </option>
                                  <option value="2000009688" title="그린데이">
                                    그린데이(14)
                                  </option>
                                  <option value="2011009057" title="프로텍트엠">
                                    프로텍트엠(14)
                                  </option>
                                  <option value="3000024211" title="아이엠듀">
                                    아이엠듀(14)
                                  </option>
                                  <option value="3000025634" title="닥터가드">
                                    닥터가드(14)
                                  </option>
                                  <option value="3000035431" title="웅진북센">
                                    웅진북센(14)
                                  </option>
                                  <option value="3000048015" title="필름상회">
                                    필름상회(14)
                                  </option>
                                  <option value="3000007842" title="LAB.C">
                                    LAB.C(13)
                                  </option>
                                  <option value="3000008815" title="뷰파인">
                                    뷰파인(13)
                                  </option>
                                  <option value="3000010500" title="OMT">
                                    OMT(13)
                                  </option>
                                  <option value="3000032850" title="포지시아">
                                    포지시아(13)
                                  </option>
                                  <option value="3000038896" title="바이슨데님">
                                    바이슨데님(13)
                                  </option>
                                  <option value="3000046178" title="CHOETECH">
                                    CHOETECH(13)
                                  </option>
                                  <option value="2000011533" title="디자인스킨">
                                    디자인스킨(12)
                                  </option>
                                  <option
                                    value="2011000555"
                                    title="질스튜어트ACC"
                                  >
                                    질스튜어트ACC(12)
                                  </option>
                                  <option value="3000038815" title="만렙">
                                    만렙(12)
                                  </option>
                                  <option value="3000049366" title="이노플리아">
                                    이노플리아(12)
                                  </option>
                                  <option value="2000000760" title="BELKIN">
                                    BELKIN(11)
                                  </option>
                                  <option value="2000018278" title="에스뷰">
                                    에스뷰(11)
                                  </option>
                                  <option
                                    value="3000004099"
                                    title="티처빌(Teacherville)"
                                  >
                                    티처빌(Teachervill...(11)
                                  </option>
                                  <option value="3000028853" title="굿즈트리">
                                    굿즈트리(11)
                                  </option>
                                  <option
                                    value="2000000558"
                                    title="Ambient Lounge"
                                  >
                                    Ambient Lounge(10)
                                  </option>
                                </select>
                              </span>
                            </span>
                            <ul className="ds_schlist" />
                          </div>
                        </div>
                        <div className="detail_sch">
                          <span className="tit">상품유형</span>
                          <div className="ds_cont">
                            <span className="des_select">
                              <span className="cc_ellip_in" id="cls_select">
                                전체
                              </span>
                              <span className="sp_com_v2 sel_arrow">
                                &nbsp;
                              </span>
                              <span className="hide_select">
                                <label htmlFor="cls">상품유형 선택</label>
                                <select
                                  id="cls"
                                  title="옵션"
                                  multiple="multiple"
                                >
                                  <option value="department" title="백화점상품">
                                    백화점상품
                                  </option>
                                  <option value="usedgood" title="중고상품">
                                    중고상품
                                  </option>
                                </select>
                              </span>
                            </span>
                            <ul className="ds_schlist" />
                          </div>
                        </div>
                        <div className="detail_sch">
                          <span className="tit">배송유형</span>
                          <div className="ds_cont">
                            <span className="des_select">
                              <span
                                className="cc_ellip_in selected"
                                id="shpp_select"
                              >
                                전체
                              </span>
                              <span className="sp_com_v2 sel_arrow">
                                &nbsp;
                              </span>
                              <span className="hide_select">
                                <label htmlFor="shpp">배송유형 선택</label>
                                <select id="shpp" title="옵션">
                                  <option value="all">전체</option>
                                  <option
                                    value="picku"
                                    title="매장픽업"
                                    className="clickable"
                                  >
                                    매장픽업
                                  </option>
                                  <option
                                    value="qshpp"
                                    title="퀵배송"
                                    className="clickable"
                                  >
                                    퀵배송
                                  </option>
                                  <option
                                    value="con"
                                    title="모바일쿠폰"
                                    className="clickable"
                                  >
                                    모바일쿠폰
                                  </option>
                                  <option
                                    value="direct"
                                    title="해외직구"
                                    className="clickable"
                                  >
                                    해외직구
                                  </option>
                                </select>
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="detail_sch">
                          <span className="tit">혜택</span>
                          <div className="ds_cont">
                            <span className="des_select">
                              <span className="cc_ellip_in" id="filter_select">
                                전체
                              </span>
                              <span className="sp_com_v2 sel_arrow">
                                &nbsp;
                              </span>
                              <span className="hide_select">
                                <label htmlFor="filter">혜택 선택</label>
                                <select
                                  id="filter"
                                  title="옵션"
                                  multiple="multiple"
                                >
                                  <option
                                    value="obanjang|spprice"
                                    title="특가상품"
                                  >
                                    특가상품
                                  </option>
                                  <option value="dscnt" title="쿠폰/에누리">
                                    쿠폰/에누리
                                  </option>
                                  <option value="dsale" title="백화점세일">
                                    백화점세일
                                  </option>
                                  <option value="free" title="무료배송">
                                    무료배송
                                  </option>
                                </select>
                              </span>
                            </span>
                            <ul className="ds_schlist" />
                          </div>
                        </div>
                        <div className="detail_sch">
                          <span className="tit">백화점상품</span>
                          <div className="ds_cont">
                            <span className="des_select">
                              <span
                                className="cc_ellip_in selected"
                                id="salestrNo_select"
                              >
                                전체
                              </span>
                              <span className="sp_com_v2 sel_arrow">
                                &nbsp;
                              </span>
                              <span className="hide_select">
                                <label htmlFor="salestrNo">
                                  백화점점포 선택
                                </label>
                                <select id="salestrNo" title="옵션">
                                  <option value="all">전체</option>
                                  <option value="1002" name="salestrNo">
                                    본점
                                  </option>
                                  <option value="1004" name="salestrNo">
                                    강남점
                                  </option>
                                  <option value="1006" name="salestrNo">
                                    경기점
                                  </option>
                                  <option value="1009" name="salestrNo">
                                    센텀시티점
                                  </option>
                                  <option value="1013" name="salestrNo">
                                    타임스퀘어점패션관
                                  </option>
                                  <option value="1003" name="salestrNo">
                                    타임스퀘어점리빙관
                                  </option>
                                  <option value="1007" name="salestrNo">
                                    의정부점
                                  </option>
                                  <option value="1008" name="salestrNo">
                                    광주신세계
                                  </option>
                                  <option value="1010" name="salestrNo">
                                    마산점
                                  </option>
                                  <option value="1011" name="salestrNo">
                                    천안아산점
                                  </option>
                                  <option value="1017" name="salestrNo">
                                    김해점
                                  </option>
                                  <option value="1018" name="salestrNo">
                                    하남점
                                  </option>
                                  <option value="1019" name="salestrNo">
                                    대구신세계
                                  </option>
                                  <option value="1024" name="salestrNo">
                                    대전신세계
                                  </option>
                                </select>
                              </span>
                            </span>
                            <ul className="ds_schlist" />
                          </div>
                        </div>
                        <div className="detail_sch">
                          <span className="tit">가격</span>
                          <div className="ds_cont">
                            <span className="des_select">
                              <span
                                className="cc_ellip_in selected"
                                id="price_select"
                              >
                                전체
                              </span>
                              <span className="sp_com_v2 sel_arrow">
                                &nbsp;
                              </span>
                              <span className="hide_select">
                                <label htmlFor="lf_like">가격 선택</label>
                                <select id="price" title="옵션">
                                  <option value="all">전체</option>
                                  dvdPrc :: 10000 dvdMinPrcLong :: 0.0
                                  dvdMaxPrcLong :: 1.0 dvdMinUnit :: 0
                                  dvdMinUnit1 :: 00000 dvdMaxUnit :: 10000
                                  dvdMaxUnit1 :: 10000 dvdMinPrc :: 0 dvdMaxPrc
                                  :: 1
                                  <option value="0-10000" title="0">
                                    ~ 1만원
                                  </option>
                                  dvdPrc :: 10000 dvdMinPrcLong :: 1.0
                                  dvdMaxPrcLong :: 2.0 dvdMinUnit :: 10000
                                  dvdMinUnit1 :: 10000 dvdMaxUnit :: 20000
                                  dvdMaxUnit1 :: 20000 dvdMinPrc :: 1 dvdMaxPrc
                                  :: 2
                                  <option value="0-20000" title="1">
                                    ~ 2만원
                                  </option>
                                  dvdPrc :: 10000 dvdMinPrcLong :: 2.0
                                  dvdMaxPrcLong :: 278.0 dvdMinUnit :: 20000
                                  dvdMinUnit1 :: 20000 dvdMaxUnit :: 2780000
                                  dvdMaxUnit1 :: 2780000 dvdMinPrc :: 2
                                  dvdMaxPrc :: 278
                                  <option value="20000-2780000" title="2">
                                    2만원 ~ 278만원
                                  </option>
                                </select>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <ul className="bnbox">
                        <li>
                          <a href="/" className="bn_gray2">
                            선택초기화
                          </a>
                        </li>
                        <li>
                          <a href="/" className="bn_pnk2">
                            선택적용
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
