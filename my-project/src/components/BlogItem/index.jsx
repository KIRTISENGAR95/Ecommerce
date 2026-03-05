import React from 'react'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
export const BlogItem =()=>{
    return (
        <div className="blogItem group">
            <div className='imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative'>
                <img src="https://api.spicezgold.com/download/file_1734528773361_ksc-khatushyam-collection-black-pu-for-women-handheld-bag-product-images-rvkg3apiuk-0-202405282358.webp" className="w-full transition-all group-hover:scale-105 group-hover:rotate-1" alt="blog image"/>

                <span className='flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-11px font-[500] gap-1'>
                    <IoMdTime className="text-[16px]"/> 5 march, 2026
                </span>
            </div>

            <div className="info py-4">
                <h2 className="text-[15px] font-[500] text-black">
                    <Link to="/" className="link">Nullam ullamcorper ornare molestile</Link>
                </h2>
                <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, suscipit quo eaque provident velit laboriosam iure dignissimos adipisci deserunt? Pariatur, illum. Debitis fuga tenetur deleniti sed ipsum excepturi. Pariatur, consectetur!....</p>

                <Link to='/blog' className="link font-[500] text-[14px] flex items-center gap-1">Read more <IoIosArrowForward /></Link>
            </div>


            <div className="info py-4"></div>
        </div>
    )
}

export default BlogItem;