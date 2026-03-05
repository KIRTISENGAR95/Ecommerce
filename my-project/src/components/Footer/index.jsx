import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";

const Footer=()=>{
    return (
        <footer className="py-6">
            <div className="container">
                <div className="flex items-center justify-center gap-2">
                    <div className="col">
                        <LiaShippingFastSolid />
                        <h3>Free Shipping</h3>
                        <p>For All Orders Over $100</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;