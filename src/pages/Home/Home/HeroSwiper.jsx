import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';

function HeroSwiper() {
  // const [good, setGood] = useState([]);
  // const getGood = async () => {
  //   const response = await fetch(
  //     `http://10.10.10.153:8081/api/newservice/getAll`
  //   );
  //   //광식씨가 준 주소 받기 -> get
  //   const json = await response.json();
  //   setGood(json);
  // };

  // useEffect(() => {
  //   getGood();
  // }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    autoplay: true,
  };
  const [good, setGood] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`http://10.10.10.153:8081/api/newservice/getAll`)
  //     .then((Response) => {
  //       setGood(Response.data);
  //       console.log(Response.data);
  //     });
  // }, []);

  // const [good, setGood] = useState([]);
  // const getGood = async () =>{
  //    const response1 = await fetch(`http://10.10.10.153:8081/api/newservice/getAll`);
  //    //광식씨가 준 주소 받기 -> get
  //    const json1 = await response1.json();
  //    setGood(json1)
  // }

  // useEffect(()=>{
  //    getGood();
  // },[])

  return (
    <div className="cmgrid_full_box">
      <div className="cmhero_banner cmhero_banner_ty_sd_scroll ty_bn100">
        <div className="cmhero_swiper" id="_cmhero_swiper">
          <div className="swiper-container swiper-container-horizontal">
            <Slider style={{ ...settings }}>
              {good &&
                good.map((d) => (
                  <div key={d.id}>
                    <li className="swiper-slide">
                      <div className="cmhero_bn">
                        <Link
                          className="cmhero_bnlnk"
                          to="https://m-shinsegaemall.ssg.com/page/giftshop.ssg"
                        >
                          <img
                            className="ssg_lazy"
                            src={d.productNewPhotoPath}
                            alt="명절"
                          />
                        </Link>
                      </div>
                      <div className="cmhero_tit">
                        <Link
                          className="cmhero_titlnk"
                          to="https://m-shinsegaemall.ssg.com/page/giftshop.ssg"
                        >
                          <h3 className="cmhero_titmain">
                            <span className="cmhero_titmain_tx">
                              2022 추석 명절
                            </span>
                          </h3>
                          <div className="cmhero_titsub">
                            <span className="ccmhero_titsub_tx">
                              미리 준비하는 올 추석 명절 선물
                            </span>
                          </div>
                        </Link>
                      </div>
                    </li>
                  </div>
                ))}
            </Slider>
          </div>
          <div className="swiper-ctrls">
            <div className="swiper-pagination swiper-pagination-progressbar">
              <span className="swiper-pagination-progressbar-fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSwiper;
