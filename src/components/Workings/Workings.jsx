import workings from "../../assets/workings.png";
import search from "../../assets/Vector.png";
import user from "../../assets/Group.png";
import time from "../../assets/carbon_time.png";
import check from "../../assets/bx_select-multiple.png";
import {
  AiOutlineCheckSquare,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

const Workings = () => {
  const items = [
    {
      header: "Create account",
      details:
        "Create an account and access a diverse range of products to shop from.",
      icon: <AiOutlineUser />,
    },
    {
      header: "Search items",
      details: "Search items by cateogories,product and select an item",
      icon: <AiOutlineSearch />,
    },
    {
      header: "Choose date and pay",
      details:
        "Select a delivery date of your choice, pay using our reliable payment options, and we’ll keep you updated with the delivery details.",
      icon: <AiOutlineCheckSquare />,
    },
    {
      header: "Put your feet up and lay back",
      details:
        "Get more value for your time and money by doing other things that matter to you.",
      icon: <BiTimeFive />,
    },
  ];

  return (
    <div className='flex md:w-[80vw] gap-8 items-center md:flex-row flex-col'>
      <img src={workings} alt='' className='md:h-[80vh] md:w-auto w-[70vw]' />
      <div className='flex flex-col gap-4'>
        <h2 className='px-4 md:px-0 font-medium text-2xl text-center md:text-left'>How it works</h2>
        <ul className='px-4 md:px-0 md:py-8 flex flex-col gap-4'>
          {items.map((item, index) => (
            <li className='flex items-center gap-4'>
              <span className='flex items-center justify-center min-h-20 min-w-20 text-greenish bg-lightGreenish/30 p-4 rounded-full text-xl'>
                {item.icon}
              </span>
              <div>
                <h5 className='font-medium'>{item.header}</h5>
                <p className='font-light text-sm'>{item.details}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Workings;