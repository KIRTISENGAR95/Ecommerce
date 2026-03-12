import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FaRegPlusSquare } from "react-icons/fa";
import { FiMinusSquare } from "react-icons/fi";

const CategoryCollapse = ()=>{
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


    return (
        <>
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
        </>
    )
}
export default CategoryCollapse;