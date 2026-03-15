import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";
import '../Search/style.css';

const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[40px] bg-[#f1f1f1] rounded-[8px] relative p-1 px-3 flex items-center'>
      <input type='text' placeholder='Search for products...' className='w-full h-[32px] focus:outline-none bg-inherit p-2 text-[14px] text-gray-700'></input>
      <Button className="!absolute top-[4px] right-[5px] z-50 !w-[32px] !min-w-[32px] h-[32px] !rounded-full !text-black">
        <IoSearch className='text-[#555] text-[20px]'/>
      </Button>
    </div>
    
  )
}

export default Search
