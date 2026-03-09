import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '@mui/material/Button';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';


const HomeSliderV2 = () => {
    return (
        <Swiper
        loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="homeSliderV2"
      >
        <SwiperSlide>
          <div className="item w-full h-[450px] rounded-md overflow-hidden relative">
            <img src="img1.png" className="w-full h-full object-cover"/>

            <div className="info absolute top-20 -right-[100%] opacity-0 w-[30%] h-[100%] z-50 p-8 items-center flex-col justify-center transition-all duration-700">
              <h4 className="text-[18px] font-[500] w-full text-left mb-4 relative -right-[100%] opacity-0 ">Big Saving Days Sale</h4>
              <h2 className="text-[25px] font-[700] w-full relative -right[100%] opacity-0">Women Solid Round Green T-Shirt</h2>
              <h3 className="flex items-center gap-3  text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0">Starting At Only<span className="text-primary text-[30px] font-[800]">$59.00</span></h3>

              <div className="w-full relative -right-[100%] opacity-0 btn_">
                <Button className="btn-org ">SHOP NOW</Button>
              </div>

            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="item w-full h-[450px] rounded-md overflow-hidden relative">
            <img src="img2.png" className="w-full h-full object-cover"/>

            <div className="info absolute top-20 -right-[100%] opacity-0 w-[30%] h-[100%] z-50 p-8 items-center flex-col justify-center transition-all duration-700">
              <h4 className="text-[18px] font-[500] w-full text-left mb-4 relative -right-[100%] opacity-0 ">Big Saving Days Sale</h4>
              <h2 className="text-[25px] font-[700] w-full relative -right[100%] opacity-0">Women Solid Round Green T-Shirt</h2>
              <h3 className="flex items-center gap-3  text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0">Starting At Only<span className="text-primary text-[30px] font-[800]">$59.00</span></h3>

              <div className="w-full relative -right-[100%] opacity-0 btn_">
                <Button className="btn-org ">SHOP NOW</Button>
              </div>

            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    )
}

export default HomeSliderV2;