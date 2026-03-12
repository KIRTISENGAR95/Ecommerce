import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import React, { useState } from 'react';

import { IoCloseSharp } from "react-icons/io5";
import CategoryCollapse from '../../CategoryCollapse';



const CategoryPanel = ({ isOpenCatPanel, closeCategoryPanel }) =>{
  


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">

      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        shop by categories 
        <IoCloseSharp onClick={closeCategoryPanel} className="cursor-pointer text-[20px]"/>
      </h3>


      <CategoryCollapse/>
      
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
