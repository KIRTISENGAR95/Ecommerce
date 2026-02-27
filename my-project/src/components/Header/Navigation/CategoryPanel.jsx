import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseSharp } from "react-icons/io5";
import { ButtonGroupButtonContext } from '@mui/material/ButtonGroup';
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom"


const CategoryPanel = ({ isOpenCatPanel, closeCategoryPanel }) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">

      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        shop by categories 
        <IoCloseSharp onClick={closeCategoryPanel} className="cursor-pointer text-[20px]"/>
      </h3>


      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative">
            <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">FASHION</Button>
            <FaRegPlusSquare className="absolute top-[10px] right-[15px]"/>

            <ul className="submenu absolute top-[100%] left-[0%] w-full pl-3 ">
              <li className="list-none relative">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">APPAREL</Button>
              <FaRegPlusSquare className="absolute top-[10px] right-[15px]" cursor-pointer/>


              <ul className="submenu absolute top-[100%] left-[0%] w-full pl-3 ">
              <li className="list-none relative">
              <Link to ="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">APPAREL</Link>
              <FaRegPlusSquare className="absolute top-[10px] right-[15px]" cursor-pointer/>
              </li>
            </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      
    </Box>
  );



  return (
    <>
    
      <Drawer open={isOpenCatPanel} onClose={closeCategoryPanel}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default CategoryPanel
