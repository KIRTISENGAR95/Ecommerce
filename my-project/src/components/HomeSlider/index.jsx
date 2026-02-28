import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div className="homeSlider">
        <div className="container">
        <Swiper navigation={true} modules={[Navigation]} className="SliderHome">
        <SwiperSlide>
        <img src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg" alt="Banner slide" className="w-full"/>
        </SwiperSlide>

        <SwiperSlide>
        <img src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg" alt="Banner slide" className="w-full"/>
        </SwiperSlide>

        <SwiperSlide>
        <img src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg" alt="Banner slide" className="w-full"/>
        </SwiperSlide>

        <SwiperSlide>
        <img src="https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg" alt="Banner slide" className="w-full"/>
        </SwiperSlide>

        <SwiperSlide>
        <img src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg" alt="Banner slide" className="w-full"/>
        </SwiperSlide>

        <SwiperSlide>
        <img src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg" alt="Banner slide" className="w-full"/>
        </SwiperSlide>
        
      </Swiper>
        </div>
      
    </div>
  )
}

export default HomeSlider
