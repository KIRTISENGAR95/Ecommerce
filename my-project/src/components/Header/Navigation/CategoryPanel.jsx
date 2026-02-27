import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import React, { useState } from 'react';
import { FaRegPlusSquare } from "react-icons/fa";
import { FiMinusSquare } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


const CategoryPanel = ({ isOpenCatPanel, closeCategoryPanel }) =>{
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const openSubmenu=(index)=>{
    if(submenuIndex===index){
      setSubmenuIndex(null);
    }else{
      setSubmenuIndex(index);
    }
  }

  const openInnerSubmenu=(index)=>{
    if(innerSubmenuIndex===index){
      setInnerSubmenuIndex(null);
    }else{
      setInnerSubmenuIndex(index);
    }
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">

      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        shop by categories 
        <IoCloseSharp onClick={closeCategoryPanel} className="cursor-pointer text-[20px]"/>
      </h3>


      <div className="scroll">
        <ul className="w-full">
          <li className="list-none relative">
            <div className="flex items-center justify-between w-full">
              <Link to="/" className="flex-1">
                <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                  Fashion
                </Button>
              </Link>
              {
                submenuIndex === 0 ?
                <FiMinusSquare className="cursor-pointer ml-2" onClick={()=>openSubmenu(0)}/>:
                <FaRegPlusSquare className="cursor-pointer ml-2" onClick={()=>openSubmenu(0)}/>
              }
            </div>


            {
                submenuIndex===0 &&
                <ul className="submenu w-full pl-3">
              <li className="list-none relative">
                <Link to="/" className="w-full">
                  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                    Apparel
                  </Button>
                </Link>

            {
              innerSubmenuIndex === 0 ?
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openInnerSubmenu(0)}/>:
              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openInnerSubmenu(0)}/>
            }

            {
              innerSubmenuIndex===0 &&
              <ul className="inner_submenu w-full pl-3">
                <li className="list-none relative mb-1">
                  <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Smart Tablet
                  </Link>
                  </li>


                  <li className="list-none relative mb-1">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Crepe T-Shirt
                    </Link>
                  </li>


                  <li className="list-none relative mb-1">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Leather Watch
                    </Link>
                  </li>


                  <li className="list-none relative mb-1">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Rolling Diamond
                    </Link>
                  </li>

  
                </ul>
                }

                
              </li>
              </ul>
            }
          </li>


          <li className="list-none relative">
            <div className="flex items-center justify-between w-full">
              <Link to="/" className="flex-1">
                <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                  New Arrivals
                </Button>
              </Link>
              {
                submenuIndex === 1 ?
                <FiMinusSquare className="cursor-pointer ml-2" onClick={()=>openSubmenu(1)}/>:
                <FaRegPlusSquare className="cursor-pointer ml-2" onClick={()=>openSubmenu(1)}/>
              }
            </div>


            {
                submenuIndex===1 &&
                <ul className="submenu  w-full pl-3">
              <li className="list-none relative">
                <Link to="/" className="w-full">
                  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                    Outerwear
                  </Button>
                </Link>

            {
              innerSubmenuIndex === 1 ?
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openInnerSubmenu(1)}/>:
              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openInnerSubmenu(1)}/>
            }

            {
              innerSubmenuIndex===1 &&
              <ul className="inner_submenu w-full pl-3">
                <li className="list-none relative mb-1">
                  <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Woodean Chair
                  </Link>
                  </li>


                  <li className="list-none relative mb-1">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Sneakers shoes
                    </Link>
                  </li>


                  <li className="list-none relative mb-1">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Purse
                    </Link>
                  </li>


                  <li className="list-none relative mb-1">
                    <Link
                      to="/"
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                    >
                      Xbox Controller
                    </Link>
                  </li>

  
                </ul>
                }

                
              </li>
              </ul>
            }

            
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
