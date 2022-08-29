import React from 'react';
import MainSlider from './Home/MainSlider';
import TopNav from './Home/TopNav';
import MainCategory from './Home/MainCategory';
import HappyLounge from './Home/HappyLounge';
import NewService from './Home/NewService';
import CardPromo from './Home/CardPromo';
import HotBrand from './Home/HotBrand';
import BrandRanking from './Home/BrandRanking';
import LetsTryOn from './Home/LetsTryOn';
import SsgLuxury from './Home/SsgLuxury';
import PremiumNA from './Home/PremiumNA';
import BrandLookbook from './Home/BrandLookbook';
import SmartOS from './Home/SmartOS';
import SpecialGift from './Home/SpecialGift';
import LifeMagazine from './Home/LifeMagazine';
import DeBestItem from './Home/DeBestItem';
import BestItem from './Home/BestItem';
import './Home/style/Home.scss';
import { FloatingContents } from '../../components/common';

function Home() {
  return (
    <div id="m_container" className="mcom_container">
      <div className="main_wrap">
        <MainSlider />
        <TopNav />
        <div id="m_content" className="react-area" style={{ zIndex: '500' }}>
          <div className="cmgrid_module">
            <div className="cmgrid_list">
              <MainCategory />
              <HappyLounge />
              <NewService />
              <CardPromo />
              <HotBrand />
              <BrandRanking />
              <LetsTryOn />
              <DeBestItem />
              <SsgLuxury />
              <PremiumNA />
              <SmartOS />
              <BrandLookbook />
              <SpecialGift />
              <LifeMagazine />
              <BestItem />
            </div>
          </div>
        </div>
        <FloatingContents pageName="main" />
      </div>
    </div>
  );
}

export default Home;
