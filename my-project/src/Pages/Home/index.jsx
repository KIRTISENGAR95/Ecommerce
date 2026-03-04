import React from 'react';
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import HomeSlider from '../../components/HomeSlider';
import ProductsSlider from '../../components/ProductsSlider';



import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <HomeSlider/>
    <HomeCatSlider/>


    <section className="bg-white py-8">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="leftSec">
            <h2 className="text-[20px] font-600">Popular Products</h2>
            <p className="text-[14px] font-400">don't miss the current offers until the end of March</p>
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

    <section className='py-4 bg-white '>
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



    <section className="py-5">
      <div className="container">
        <ProductsSlider items={6}/>
      </div>
    </section>

    <br /><br /><br /><br /><br /><br />
    </>
  )
}

export default Home
