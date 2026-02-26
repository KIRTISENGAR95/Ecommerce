import React from 'react'
import Button from '@mui/material/Button';
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";

const Navigation = () => {
  return (
    <div>
      <nav className='py-2'>
        <div className='container flex items-center justify-end'>
            <div className='col_1 w-[30%]'>
                <Button className="!text-black gap-2"><RiMenu2Fill className="text-[18px]" />
                Shop by categories
                <LiaAngleDownSolid className="text-[18px]" />
                </Button>
            </div>

            <div className='col_2 w-[70%]'>
                {/* <Button className="!text-black">Shop by categories</Button> */}
            </div>

            
        </div>
      </nav>
    </div>
  )
}

export default Navigation
