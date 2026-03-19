import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
const ProductZoom=()=>{
    return(
        <>
        <div className="flex gap-3">
            <div className="slider w-[15%]">
                <Swiper
                        direction={'vertical'}
                        spaceBetween={10}
                        slidesPerView={4}
                        modules={[Navigation]}
                        className="zoomProductSliderThumbs h-[500px] overflow-hidden"
                        navigation={true}
                      >
                        <SwiperSlide>
                            <div className="item rounded-md overflow-hidden cursor-pointer group">
                                <img src="https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-0-202502051101.jpg?im=Resize=(600,750)" className="w-full transition-all group-hover:scale-105"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item">
                                <img src="https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-1-202502051101.jpg?im=Resize=(600,750)" className="w-full transition-all group-hover:scale-105"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item">
                                <img src="https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-2-202502051101.jpg?im=Resize=(600,750)"className="w-full transition-all group-hover:scale-105"/>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="item">
                                <img src="https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-3-202502051101.jpg?im=Resize=(600,750)"className="w-full transition-all group-hover:scale-105"/>
                            </div>
                        </SwiperSlide>



                        <SwiperSlide>
                            <div className="item">
                                <img src="https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-4-202502051102.jpg?im=Resize=(600,750)"className="w-full transition-all group-hover:scale-105"/>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="item">
                                <img src="https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-3-202502051101.jpg?im=Resize=(600,750)"className="w-full transition-all group-hover:scale-105"/>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
            
            <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">
                <InnerImageZoom zoomType="hover" zoomScale={1} src={'https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-0-202502051101.jpg?im=Resize=(600,750)'}/>
            </div>
        </div>
        </>
    )
}

export default ProductZoom;