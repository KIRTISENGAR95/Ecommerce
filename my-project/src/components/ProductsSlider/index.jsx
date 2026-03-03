import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from "swiper/modules";
import ProductItem from '../ProductItem';

const ProductsSlider = (props) => {
  return (
    <div className='productsSlider py-3'>
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


        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>


        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>

        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>


        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>


        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>

        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default ProductsSlider
