import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";


const Footer=()=>{
    return (
        <footer className="py-6 bg-[#fafafa]">
            <div className="container">
                <div className="flex items-center justify-center gap-2">
                    <div className="col flex items-center justify-center flex-col group w-[15%]">
                        <LiaShippingFastSolid className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"/>
                        <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
                        <p className="text-[12px] font-[500]">For All Orders Over $100</p>
                    </div>


                    <div className="col flex items-center justify-center flex-col group w-[15%]">
                        <PiKeyReturnLight className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"/>
                        <h3 className="text-[16px] font-[600] mt-3">30 Days Return</h3>
                        <p className="text-[12px] font-[500]">For An Exchange Product</p>
                    </div>


                    <div className="col flex items-center justify-center flex-col group w-[15%]">
                        <BsWallet2 className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"/>
                        <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
                        <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
                    </div>


                    <div className="col flex items-center justify-center flex-col group w-[15%]">
                        <LiaGiftSolid className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"/>
                        <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
                        <p className="text-[12px] font-[500]">Our First Product Order</p>
                    </div>


                    <div className="col flex items-center justify-center flex-col group w-[15%]">
                        <BiSupport className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"/>
                        <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
                        <p className="text-[12px] font-[500]">Conduct us Anytime</p>
                    </div>

                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;