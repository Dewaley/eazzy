import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/logo.png";
import { BiHelpCircle, BiUser } from "react-icons/bi";
import { BsChevronDown, BsBox } from "react-icons/bs";
import { useState } from "react";
import Button from "../Button/Button";

const Navbar = () => {
  const [helpOpen, setHelpOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <div>
      <div className='flex justify-between items-center p-4 font-poppins h-16 relative gap-2'>
        <h1 className='text-2xl italic z-40'>
          <img src={logo} alt='' className='w-32' />
        </h1>
        <form
          action=''
          className='w-[60%] hidden md:flex items-center gap-4 justify-center'
        >
          <input
            type='text'
            name=''
            id=''
            placeholder='Search by cartegory, price and product'
            className='border-2 rounded p-2 w-[85%]'
          />
          <Button content={"SEARCH"} />
        </form>
        <div
          className='hidden md:flex items-center justify-center h-6 rounded gap-1 cursor-pointer'
          onClick={() => {
            setAccountOpen(!accountOpen);
            setHelpOpen(false);
          }}
        >
          <BiUser />
          <span>Account</span>
          <BsChevronDown
            className={`transition duration-500 ${
              accountOpen && "-rotate-180"
            }`}
          />
        </div>
        <div
          className='hidden md:flex items-center justify-center h-6 rounded gap-1 cursor-pointer'
          onClick={() => {
            setHelpOpen(!helpOpen);
            setAccountOpen(false);
          }}
        >
          <BiHelpCircle />
          <span>Help</span>
          <BsChevronDown
            className={`transition duration-500 ${helpOpen && "-rotate-180"}`}
          />
        </div>
        <div className='flex items-center text-blackish gap-4 z-40'>
          <span className='flex items-center justify-center h-6 px-1 rounded border-[1px] border-blackish gap-1'>
            <AiOutlineShoppingCart /> <span className='text-sm'>0</span>
          </span>
          <span className='flex items-center justify-center h-6 rounded'>
            <AiOutlineMenu />
          </span>
        </div>
        {helpOpen && (
          <ul className='absolute px-3 py-2 top-[4rem] right-[1rem] flex flex-col bg-white w-44 z-40 gap-2 justify-center rounded-b'>
            <li className='cursor-pointer'>Track order</li>
            <li className='cursor-pointer'>FAQs</li>
            <Button content={"Contact us"} big />
          </ul>
        )}
        {accountOpen && (
          <ul className='absolute px-3 py-2 top-[4rem] right-[1.5rem] md:right-[9rem] flex flex-col bg-white w-48 z-40 gap-2 justify-center rounded-b'>
            <Button content={"Sign up"} big />
            <li className='cursor-pointer items-center flex gap-2'>
              <BiUser />
              Account settings
            </li>
            <li className='cursor-pointer items-center flex gap-2'>
              <BsBox />
              Orders
            </li>
          </ul>
        )}
        {(helpOpen || accountOpen) && (
          <div
            className='z-30 w-full h-screen fixed top-0 left-0'
            onClick={() => {
              setHelpOpen(false);
              setAccountOpen(false);
            }}
          ></div>
        )}
      </div>
      <form
        action=''
        className='md:hidden flex items-center gap-4 justify-center px-3'
      >
        <input
          type='text'
          name=''
          id=''
          placeholder='Search by cartegory, price and product'
          className='border-2 rounded p-2 w-[85%]'
        />
        <Button content={"SEARCH"} />
      </form>
    </div>
  );
};

export default Navbar;
