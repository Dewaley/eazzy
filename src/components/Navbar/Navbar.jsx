import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/logo.png";
import { BiHelpCircle, BiUser } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import Button from "../Button/Button";

const Navbar = () => {
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <div>
      <div className='flex justify-between items-center p-4 font-poppins h-14 border-b-2 relative'>
        <h1 className='text-2xl italic z-40'>
          <img src={logo} alt='' className='h-10' />
        </h1>
        <div className='flex items-center text-blackish gap-4 z-40'>
          <div
            className='flex items-center justify-center h-6 rounded gap-1 cursor-pointer'
            onClick={() => {
              setHelpOpen(!helpOpen);
            }}
          >
            <BiHelpCircle />
            <span>Help</span>
            <BsChevronDown
              className={`transition duration-500 ${helpOpen && "-rotate-180"}`}
            />
          </div>
          <span className='flex items-center justify-center h-6 px-1 rounded border-[1px] border-blackish gap-1'>
            <AiOutlineShoppingCart /> <span className='text-sm'>0</span>
          </span>
          <span className='flex items-center justify-center h-6 rounded'>
            <AiOutlineMenu />
          </span>
        </div>
        {helpOpen && (
          <ul className='absolute px-3 py-2 top-[3.5rem] right-[1rem] flex flex-col bg-white w-44 z-40 gap-1 justify-center rounded-b'>
            <li className='cursor-pointer text-sm'>Track order</li>
            <li className='cursor-pointer'>FAQs</li>
            <Button content={"Contact us"} big />
          </ul>
        )}
        {helpOpen && (
          <div
            className='z-30 w-full h-screen fixed top-0 left-0'
            onClick={() => {
              setHelpOpen(false);
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
