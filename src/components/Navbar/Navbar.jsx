import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center p-4 font-poppins'>
        <h1 className='text-2xl italic'>Eazzy</h1>
        <div className='flex items-center text-blackish gap-2'>
          <span className='flex items-center justify-center h-6 px-1 rounded border-[1px] border-blackish gap-1'>
            <AiOutlineShoppingCart /> <span className='text-sm'>0</span>
          </span>
          <span className='flex items-center justify-center h-6 px-1 rounded border-[1px] border-blackish'>
            <AiOutlineMenu />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
