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
        loop={true}
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
            <h3 className="text-[15px] font-[500] mt-3">Electronics</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/ExCL-4Hd3uP7V0OeFWYQ4IAyZMwBVU66mHe6rDBSf-U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMv/ODM1LzExNi9zbWFs/bC9mYXNoaW9uLXNo/aXJ0LWplYW5zLXBu/Zy5wbmc" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">Fashion</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/lxMU461aVWDt0jA_bqfvrVpRr1zp6M7yYHgVK7SXPJQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDkv/NTkwLzM1MS9zbWFs/bC9lY29tbWVyY2Ut/aWNvbi1sdXh1cnkt/c2hvcHBpbmctYmFn/cy0zZC1pbGx1c3Ry/YXRpb24tZnJlZS1w/bmcucG5n" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">Bags</h3>
          </div>
          </Link>
        </SwiperSlide>



        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/epoNUFHWDUpKtojyrsPa7gNRIpGqwRN3bVqaxDdStgU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMi9CbGFj/ay1TbmVha2Vycy5w/bmc" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">Footwear</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/uFxcfuQhGKb6O8g-krjLfZfWwC-B6TPNBWtHRKpDAjw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjkv/MTkxLzY4Ni9zbWFs/bC9jb2xvcmZ1bC1z/aG9wcGluZy1jYXJ0/LWZpbGxlZC13aXRo/LWdyb2Nlcmllcy1p/bWFnZS1wbmcucG5n" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">Groceries</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/"> 
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/5s6DstPPgiXPGzjtx2xXxrmifU_4scqd5YTOr8rs9OQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTMv/NDA2LzkxNi9zbWFs/bC9naXJsLXVzaW5n/LW1ha2V1cC1nbGl0/dGVyLWNsaXAtYXJ0/LWZyZWUtcG5nLnBu/Zw" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">Beauty</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/g6s2NKW3jAm_F6K1diOYdcisMB2NTnG53IFBeS1aI5M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvd29tYW4t/c2l0dGluZy1pbi1t/ZWRpdGF0aW9uLWxv/dHVzLXBvc2UtaWxs/dXN0cmF0aW9uLWRv/d25sb2FkLXN2Zy1w/bmctZ2lmLWZpbGUt/Zm9ybWF0cy0td2Vs/bG5lc3MtcmVsYXhh/dGlvbi1wcmFjdGlj/aW5nLW1vcm5pbmct/d29ya291dC10cmFp/bmluZy1kb2luZy15/b2dhLXBhY2stZ3lt/LWZpdG5lc3MtaWxs/dXN0cmF0aW9ucy0y/NDYyODMzLnBuZz9m/PXdlYnA" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">Wellness</h3>
          </div>
          </Link>
        </SwiperSlide>



        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/-GVq3kbDpsC-mWX6fg7LPD6etkiMHc9-BKME2Vicc8A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/MTMxLzE5MS9zbWFs/bC9lbGVnYW50LWdv/bGQtbmVja2xhY2Ut/d2l0aC1zcGFya2xp/bmctY3J5c3RhbHMt/bHV4dXJpb3VzLWpl/d2VscnktZGVzaWdu/LWZyZWUtcG5nLnBu/Zw" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">Jewellery</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex item-center justify-center flex-col">
            <img src="https://imgs.search.brave.com/Km5blkCbUL-KRXM-AJ8pbWCpTO42jf7AprKZTqEWcYE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDAv/MjEyLzQ3Mi9zbWFs/bC9haS1nZW5lcmF0/ZWQtcGllY2Utb2Yt/d29vZC1jbGlwLWFy/dC1mcmVlLXBuZy5w/bmc" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">wood</h3>
          </div>
          </Link>
        </SwiperSlide>

    
      </Swiper>
      </div>
      
    </div>
  )
}

export default HomeCatSlider
