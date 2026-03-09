import React from 'react';
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import HomeSliderV2 from '../../components/HomeSliderV2';
import ProductsSlider from '../../components/ProductsSlider';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import BlogItem from '../../components/BlogItem';
import Footer from '../../components/Footer';

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    {/* <HomeSlider/> */}


   <section className="py-6">
    <div className="container flex items-center">
      <div className="part1 w-[75%]">
        <HomeSliderV2/>
      </div>

    </div>
   </section>


    <HomeCatSlider/>


    <section className="bg-white py-8">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="leftSec">
            <h2 className="text-[20px] font-600">Popular Products</h2>
            <p className="text-[14px] font-400">Do not  miss the current offers until the end of March</p>
          </div>

          <div className="rightSec w-[60%]">
          <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="Bags" />
        <Tab label="Footwear" />
        <Tab label="Groceries" />
        <Tab label="Beauty" />
        <Tab label="Wellness" />
        <Tab label="Jewellery" />
        
      </Tabs>
          </div>
        </div>

        <ProductsSlider items={6}/>
      </div>
    </section>

    <section className='py-4 pt-2 bg-white '>
    <div className="container">
      <div className="Freeshipping w-[80%] m-auto py-4 p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7">
      
      <div className="col1 flex items-center gap-4">
      <LiaShippingFastSolid className="text-[50px]" />
      <span className="text-[20px] font-[600] uppercase">Free shipping</span>
      </div>


      <div className="col2">
        <p className="mb-0 font-[500]">Free delivery now on your first order and over $200</p>
      </div>

      <p className="font-bold text-[25px]"> -ony $200*</p>

      </div>


      <AdsBannerSlider items={4}/>
    </div>
    </section>



    <section className="py-5 pt-0 bg-white">
      <div className="container">
        <h2 className="text-[20px] font-600">Latest Products</h2>
        <ProductsSlider items={6}/>

        <AdsBannerSlider items={3}/>
      </div> 
    </section>



    <section className="py-5 pt-0 bg-white">
      <div className="container">
        <h2 className="text-[20px] font-600">Featured Products</h2>
        <ProductsSlider items={6}/>

        <AdsBannerSlider items={3}/>
      </div> 
    </section>


    <section className="py-5 pb-8 pt-0 bg-white blogSection">
      <div className="container">
        <h2 className="text-[20px] font-[600] mb-4">From The Blog </h2>
      <Swiper
              spaceBetween={30}
              slidesPerView={4}
              modules={[Navigation]}
              className="blogSlider"
              navigation={true}
            >
              <SwiperSlide>
                <BlogItem/>
              </SwiperSlide>

              <SwiperSlide>
                <BlogItem/>
              </SwiperSlide>

              <SwiperSlide>
                <BlogItem/>
              </SwiperSlide>

              <SwiperSlide>
                <BlogItem/>
              </SwiperSlide>


              <SwiperSlide>
                <BlogItem/>
              </SwiperSlide>

              <SwiperSlide>
                <BlogItem/>
              </SwiperSlide>
      </Swiper>
      </div>
    </section>

    <Footer/>

    
    </>
  )
}

export default Home
