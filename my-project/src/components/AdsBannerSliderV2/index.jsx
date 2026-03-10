import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';
import BannerBoxV2 from '../bannerBoxV2';

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={props.items}
        modules={[Navigation]}
        className="smlBtn"
        navigation={true}
      >
        <SwiperSlide>
          <BannerBoxV2 info="left" image={'camera.png'} link={'/'}/>
        </SwiperSlide>


        <SwiperSlide>
          <BannerBoxV2 info="right" image={'diningChair.png'} link={'/'}/>
        </SwiperSlide>

        <SwiperSlide>
          <BannerBoxV2 info="left" image={'camera.png'} link={'/'}/>
        </SwiperSlide>

        <SwiperSlide>
          <BannerBoxV2 info="left" image={'camera.png'} link={'/'}/>
        </SwiperSlide>


        <SwiperSlide>
          <BannerBoxV2 info="left" image={'camera.png'} link={'/'}/>
        </SwiperSlide>

        
        </Swiper>
    </div>
  )
}

export default AdsBannerSlider
