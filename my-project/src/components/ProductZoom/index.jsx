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
            <div className="slider w-[20%]">
                <Swiper
                        direction={'vertical'}
                        spaceBetween={10}
                        slidesPerView={4}
                        modules={[Navigation]}
                        className="zoomProductSliderThumbs"
                        navigation={true}
                      >
                        <SwiperSlide>
                            <div className="item">
                                <img src="https://imgs.search.brave.com/WLykb6A7U8XdDpkVTSRnUelA-a-9riYd1ijiCV7lyUQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iZWF1/dHktZmFzaGlvbi1t/b2RlbC1naXJsLXdl/YXJpbmctc3R5bGlz/aC1zdW5nbGFzc2Vz/LWJyb3duLWhhaXIt/NzYwNjA2MzUuanBn"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item">
                                <img src="https://imgs.search.brave.com/WLykb6A7U8XdDpkVTSRnUelA-a-9riYd1ijiCV7lyUQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iZWF1/dHktZmFzaGlvbi1t/b2RlbC1naXJsLXdl/YXJpbmctc3R5bGlz/aC1zdW5nbGFzc2Vz/LWJyb3duLWhhaXIt/NzYwNjA2MzUuanBn"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item">
                                <img src="https://imgs.search.brave.com/WLykb6A7U8XdDpkVTSRnUelA-a-9riYd1ijiCV7lyUQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iZWF1/dHktZmFzaGlvbi1t/b2RlbC1naXJsLXdl/YXJpbmctc3R5bGlz/aC1zdW5nbGFzc2Vz/LWJyb3duLWhhaXIt/NzYwNjA2MzUuanBn"/>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="item">
                                <img src="https://imgs.search.brave.com/WLykb6A7U8XdDpkVTSRnUelA-a-9riYd1ijiCV7lyUQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iZWF1/dHktZmFzaGlvbi1t/b2RlbC1naXJsLXdl/YXJpbmctc3R5bGlz/aC1zdW5nbGFzc2Vz/LWJyb3duLWhhaXIt/NzYwNjA2MzUuanBn"/>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="item">
                                <img src="https://imgs.search.brave.com/WLykb6A7U8XdDpkVTSRnUelA-a-9riYd1ijiCV7lyUQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iZWF1/dHktZmFzaGlvbi1t/b2RlbC1naXJsLXdl/YXJpbmctc3R5bGlz/aC1zdW5nbGFzc2Vz/LWJyb3duLWhhaXIt/NzYwNjA2MzUuanBn"/>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
            
            <div className="zoomContainer w-[80%]">
                <InnerImageZoom zoomType="hover" zoomScale={1} src={'https://imgs.search.brave.com/WLykb6A7U8XdDpkVTSRnUelA-a-9riYd1ijiCV7lyUQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iZWF1/dHktZmFzaGlvbi1t/b2RlbC1naXJsLXdl/YXJpbmctc3R5bGlz/aC1zdW5nbGFzc2Vz/LWJyb3duLWhhaXIt/NzYwNjA2MzUuanBn'}/>
            </div>
        </div>
        </>
    )
}

export default ProductZoom;