import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from "swiper/modules";

const ProductsSlider = (props) => {
  return (
    <div className='productsSlider py-5'>
        <Swiper
        spaceBetween={10}
        slidesPerView={props.items}
        modules={[Navigation]}
        className="mySwiper"
        navigation={true}
      >
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default ProductsSlider
