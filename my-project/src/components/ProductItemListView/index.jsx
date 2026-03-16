import Button from "@mui/material/Button";
import Rating from '@mui/material/Rating';
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { Link } from 'react-router-dom';
import "../ProductItem/style.css";
import {MdOutlineShoppingCart} from "react-icons/md";


const ProductItem = () => {
  return( 
    <div className="productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)] flex items-center">
      <div className="group imgWrapper w-[25%] overflow-hidden rounded-md relative">
        <Link to="/">
        <div className="img h-[220px] overflow-hidden">
        <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" className="w-full" referrerPolicy="no-referrer"/>

        <img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg" className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105" referrerPolicy="no-referrer"/>


        </div>
        </Link>

        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">10%</span>



        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">

          
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group"><MdZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white"/></Button>
          

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group"><IoGitCompareOutline className="text-[18px] text-black group-hover:text-white"/></Button>

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group"><FaRegHeart className="text-[18px] text-black group-hover:text-white"/></Button>

          
        </div>
      </div>

      <div className='info p-3 py-5 px-8 w-[75%]'>
        <h6 className="text-[15px] text-left"><Link to="/" className="link transition-all">Soylent Green </Link></h6>
        <h3 className="text-[18px] title mt-3 font-[500] mb-1 text-[#000]"> <Link to="/" className="link transition-all">Siril Georgette pink color saree with Blouse piece</Link></h3>

        <p className="text-[14px] mb-3">We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms off pleasure of moment, so blinded by desire that they cannot.</p>

        <Rating name="size-small" defaultValue={2} size="small" readOnly/>

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">$58.00</span>
          <span className="price text-primary font-[600]">$58.00</span>
        </div>

        <div className="mt-3">
          <Button className="btn-org flex gap-2"><MdOutlineShoppingCart/>Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
