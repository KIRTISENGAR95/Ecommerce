import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

import { Navigation } from 'swiper/modules';

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider pt-4 py-8">
      <div className="container">
      <Swiper
        spaceBetween={10}
        slidesPerView={8}
        modules={[Navigation]}
        className="mySwiper"
        navigation={true}
      >
        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/nPryTZj2bXfPrbayiKA9UhgIS3ASENfzazjqZ4B3qzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQHNj/MDQva2YvSGYyY2Ni/MjdkNzhjMTQ0NTI4/YmNhNGI4OTM1YTQ4/NTgzWC5qcGdfMzAw/eDMwMC5qcGc" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">SmartTablet</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/nPryTZj2bXfPrbayiKA9UhgIS3ASENfzazjqZ4B3qzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQHNj/MDQva2YvSGYyY2Ni/MjdkNzhjMTQ0NTI4/YmNhNGI4OTM1YTQ4/NTgzWC5qcGdfMzAw/eDMwMC5qcGc" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">SmartTablet</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/nPryTZj2bXfPrbayiKA9UhgIS3ASENfzazjqZ4B3qzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQHNj/MDQva2YvSGYyY2Ni/MjdkNzhjMTQ0NTI4/YmNhNGI4OTM1YTQ4/NTgzWC5qcGdfMzAw/eDMwMC5qcGc" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">SmartTablet</h3>
          </div>
          </Link>
        </SwiperSlide>



        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/nPryTZj2bXfPrbayiKA9UhgIS3ASENfzazjqZ4B3qzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQHNj/MDQva2YvSGYyY2Ni/MjdkNzhjMTQ0NTI4/YmNhNGI4OTM1YTQ4/NTgzWC5qcGdfMzAw/eDMwMC5qcGc" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">SmartTablet</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/nPryTZj2bXfPrbayiKA9UhgIS3ASENfzazjqZ4B3qzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQHNj/MDQva2YvSGYyY2Ni/MjdkNzhjMTQ0NTI4/YmNhNGI4OTM1YTQ4/NTgzWC5qcGdfMzAw/eDMwMC5qcGc" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">SmartTablet</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/nPryTZj2bXfPrbayiKA9UhgIS3ASENfzazjqZ4B3qzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQHNj/MDQva2YvSGYyY2Ni/MjdkNzhjMTQ0NTI4/YmNhNGI4OTM1YTQ4/NTgzWC5qcGdfMzAw/eDMwMC5qcGc" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">SmartTablet</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/nPryTZj2bXfPrbayiKA9UhgIS3ASENfzazjqZ4B3qzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQHNj/MDQva2YvSGYyY2Ni/MjdkNzhjMTQ0NTI4/YmNhNGI4OTM1YTQ4/NTgzWC5qcGdfMzAw/eDMwMC5qcGc" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">SmartTablet</h3>
          </div>
          </Link>
        </SwiperSlide>



        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/nPryTZj2bXfPrbayiKA9UhgIS3ASENfzazjqZ4B3qzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQHNj/MDQva2YvSGYyY2Ni/MjdkNzhjMTQ0NTI4/YmNhNGI4OTM1YTQ4/NTgzWC5qcGdfMzAw/eDMwMC5qcGc" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">SmartTablet</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/nPryTZj2bXfPrbayiKA9UhgIS3ASENfzazjqZ4B3qzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQHNj/MDQva2YvSGYyY2Ni/MjdkNzhjMTQ0NTI4/YmNhNGI4OTM1YTQ4/NTgzWC5qcGdfMzAw/eDMwMC5qcGc" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">SmartTablet</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/nPryTZj2bXfPrbayiKA9UhgIS3ASENfzazjqZ4B3qzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQHNj/MDQva2YvSGYyY2Ni/MjdkNzhjMTQ0NTI4/YmNhNGI4OTM1YTQ4/NTgzWC5qcGdfMzAw/eDMwMC5qcGc" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">SmartTablet</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/nPryTZj2bXfPrbayiKA9UhgIS3ASENfzazjqZ4B3qzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQHNj/MDQva2YvSGYyY2Ni/MjdkNzhjMTQ0NTI4/YmNhNGI4OTM1YTQ4/NTgzWC5qcGdfMzAw/eDMwMC5qcGc" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">SmartTablet</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/nPryTZj2bXfPrbayiKA9UhgIS3ASENfzazjqZ4B3qzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQHNj/MDQva2YvSGYyY2Ni/MjdkNzhjMTQ0NTI4/YmNhNGI4OTM1YTQ4/NTgzWC5qcGdfMzAw/eDMwMC5qcGc" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">SmartTablet</h3>
          </div>
          </Link>
        </SwiperSlide>

    
      </Swiper>
      </div>
      
    </div>
  )
}

export default HomeCatSlider
