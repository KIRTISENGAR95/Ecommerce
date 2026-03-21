import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link} from "react-router-dom";
import ProductZoom from "../../components/ProductZoom"

const ProductDetails = () =>{
    return (
        <section className="py-5 ">
          <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/" className="link transition">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
          className="link transition !text-[14px]"
        >
          Fashion
        </Link>



        <Link
          underline="hover"
          color="inherit"
          className="link transition !text-[14px]"
        >
          Cropped Satin Bomber Jacket
        </Link>
        
      </Breadcrumbs>

          </div>


          <section className="bg-white py-5">
            <div className="container flex gap-8">
            <div className="productZoomContainer w-[40%]">
              <ProductZoom/>
            </div>

            <div className="productContent w-[60%]">
              <h1 className="text-[22px] font-[600]">Chikankari Woven Kurta</h1>
              <div className="flex items-center gap-3">
                <span className="text-gray-400">Brands: <span className="font-[500]"></span></span>
              </div>
            </div>
          </div>
          </section>
      </section>
    )
}

export default ProductDetails;