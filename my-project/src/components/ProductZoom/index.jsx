import React, {useRef,useState} from"react";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
const ProductZoom=()=>{
    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();

    const goto =(index)=>{
        setSlideIndex(index);
        zoomSliderSml.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }
    return(
        <>
        <div className="flex gap-3">
            <div className="slider w-[15%]">
                <Swiper
                        ref={zoomSliderSml}
                        direction={'vertical'}
                        spaceBetween={10}
                        slidesPerView={4}
                        modules={[Navigation]}
                        className="zoomProductSliderThumbs h-[500px] overflow-hidden"
                        navigation={true}
                      >
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group  $ {slideIndex===0 ? 'opacity-1' : 'opacity-30'}`} onClick={()=> Goto(0)}>
                                <img src="https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-0-202502051101.jpg?im=Resize=(600,750)" className="w-full transition-all group-hover:scale-105"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group  $ {slideIndex===1 ? 'opacity-1' : 'opacity-30'}`} onClick={()=> Goto(1)}>
                                <img src="https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-1-202502051101.jpg?im=Resize=(600,750)" className="w-full transition-all group-hover:scale-105"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group  $ {slideIndex===2 ? 'opacity-1' : 'opacity-30'}`} onClick={()=> Goto(2)}>
                                <img src="https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-2-202502051101.jpg?im=Resize=(600,750)"className="w-full transition-all group-hover:scale-105"/>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group  $ {slideIndex===3 ? 'opacity-1' : 'opacity-30'}`} onClick={()=> Goto(3)}>
                                <img src="https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-3-202502051101.jpg?im=Resize=(600,750)"className="w-full transition-all group-hover:scale-105"/>
                            </div>
                        </SwiperSlide>



                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group  $ {slideIndex===4 ? 'opacity-1' : 'opacity-30'}`} onClick={()=> Goto(0)}>
                                <img src="https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-4-202502051102.jpg?im=Resize=(600,750)"className="w-full transition-all group-hover:scale-105"/>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group  $ {slideIndex===5 ? 'opacity-1' : 'opacity-30'}`} onClick={()=> Goto(0)}>
                                <img src="https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-4-202502051102.jpg?im=Resize=(600,750)"className="w-full transition-all group-hover:scale-105"/>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
            
            <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">
                <Swiper
                        ref={zoomSliderBig}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={false}
                      >
                    <SwiperSlide>
                        <InnerImageZoom zoomType="hover" zoomScale={1} src={'https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-0-202502051101.jpg?im=Resize=(600,750)'}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <InnerImageZoom zoomType="hover" zoomScale={1} src={'https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-1-202502051101.jpg?im=Resize=(600,750)'}/>
                    </SwiperSlide>


                    <SwiperSlide>
                        <InnerImageZoom zoomType="hover" zoomScale={1} src={'https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-2-202502051101.jpg?im=Resize=(600,750)'}/>
                    </SwiperSlide>


                    <SwiperSlide>
                        <InnerImageZoom zoomType="hover" zoomScale={1} src={'https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-3-202502051101.jpg?im=Resize=(600,750)'}/>
                    </SwiperSlide>


                    <SwiperSlide>
                        <InnerImageZoom zoomType="hover" zoomScale={1} src={'https://www.jiomart.com/images/product/original/rvkbvlzaox/ddg-women-printed-anarkali-kurta-product-images-rvkbvlzaox-4-202502051102.jpg?im=Resize=(600,750)'}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        </>
    )
}

export default ProductZoom;