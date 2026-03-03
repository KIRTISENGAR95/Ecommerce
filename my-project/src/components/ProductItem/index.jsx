import React from 'react';
import "../ProductItem/style.css";
import {Link} from 'react-router-dom'
import Rating from '@mui/material/Rating';

const ProductItem = () => {
  return( 
    <div className="productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
      <div className="imgWrapper w-full h-[220px] overflow-hidden rounded-md">
        <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" className="w-full"/>
      </div>

      <div className='info p-3 py-5 '>
        <h6 className="text-[13px]"><Link to="/" className="link transition-all">Soylent Green </Link></h6>
        <h3 className="text-[13px] title mt-3 font-[500] mb-1 text-[#000]"> <Link to="/" className="link transition-all">Siril Georgette pink color saree with Blouse piece</Link></h3>

        <Rating name="size-small" defaultValue={2} size="small" readOnly/>

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">$58.00</span>
          <span className="price text-primary font-[600]">$58.00</span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
