import mainInfoPic from "../../assets/mainInfoPic.png";
import Button from "../Button/Button";
import { BiTime } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { TiWorldOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const MainInfo = () => {
  const items = [
    {
      icon: <TbTruckDelivery />,
      header: "Reliable delivery",
    },
    {
      icon: <TiWorldOutline />,
      header: "Eco friendly packaging",
      text: "Using sustainable materials",
    },
    {
      icon: <BiTime />,
      header: "Opening Hours",
      text: "Mon- Sun, 9am-9pm.",
    },
  ];

  return (
    <div className='px-3 md:px-6 flex gap-12 flex-col items-center py-4'>
      <div className='w-full h-full relative flex flex-col sm:flex-row items-center gap-8 justify-evenly'>
        <div className='z-20 flex flex-col gap-8 sm:w-[40%]'>
          <h1 className='text-4xl font-medium overflow-visible h-fit'>
            Buy Fresh foods conveniently & Automate procurement
          </h1>
          <p>
            Eazzy is a digital farmers market that enables food businesses in
            Africa, to buy diverse fresh food items and supplies on a recurring
            and convenient schedule
          </p>
          <a href='#categories' className='w-fit'>
            <Button content={"Shop Now"} big={true} />
          </a>
        </div>
        <img
          src={mainInfoPic}
          alt=''
          className='z-20 sm:w-[50%] md:w-[35%] w[60vw]'
        />
        <ul class='circles z-10'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='grid grid-cols-3 py-2 border-y-2 md:w-[85vw] divide-x-2 md:divide-x-0'>
        {items.map((item, index) => (
          <div
            className='flex flex-col md:flex-row items-center justify-center md:divide-x-2'
            key={index}
          >
            <span className='px-3 text-2xl'>{item.icon}</span>
            <div className='px-3 text-xs md:text-base text-center md:text-left'>
              <h6 className='font-medium'>{item.header}</h6>
              <p className='font-light'>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// w-full sm:w-auto sm:h-[350px] md:h-[500px]

export default MainInfo;
