import React, { useRef,useState } from "react";
import "./home.css";
import Navbar from "../../components/navbar/navbar";
import { sliderData } from "../../Utils/slider";
import Footer from "../../components/footer/footer";
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Home = () => {
  
  return (
    <>
      <div className="background-img">
        <div className="text">
          <span>Welcome to our abode.</span>
        </div>
      </div>
      <div className="events">Events</div>

      <div className="swiper-container">
      <div className="swiper">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlidesBounds = {true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate:50,
            stretch:0,
            depth:100,
            modifier:1,
            slideShadows:true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="myswiper"
        >
        {sliderData.map((result,index)=>(
          <SwiperSlide key={index}>
            <img src={result.image}/>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
      </div>

    </>
  );
};

export default Home;
