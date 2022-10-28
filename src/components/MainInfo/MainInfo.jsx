import mainInfoPic from "../../assets/mainInfoPic.png";
import Button from "../Button/Button";
import { BiTime } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { TiWorldOutline } from "react-icons/ti";

const MainInfo = () => {
  const items = [
    {
      icon: <TbTruckDelivery />,
      header: "Opening Hours",
      text: "Mon- Sun 9am-9pm",
    },
    {
      icon: <TiWorldOutline />,
      header: "Opening Hours",
      text: "Mon- Sun 9am-9pm",
    },
    {
      icon: <BiTime />,
      header: "Opening Hours",
      text: "Mon- Sun 9am-9pm",
    },
  ];

  return (
    <div className='px-3 md:px-6 flex gap-12 flex-col items-center py-4'>
      <div className='w-full h-full relative flex flex-col sm:flex-row items-center gap-8 justify-evenly'>
        <div className='z-20 flex flex-col gap-8 sm:w-[40%]'>
          <h1 className='text-4xl font-medium overflow-visible h-fit'>
            The Smarter way to buy food items & groceries.
          </h1>
          <p>
            Eazzy is a digital marketplace that enables individuals and
            businesses to shop & procure fresh food items instantly and on a
            schedule.
          </p>
          <Button content={"Shop Now"} big={true} />
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
      <div className='grid grid-cols-3 py-2 border-y-2 md:w-[85vw]'>
        {items.map((item, index) => (
          <div
            className='flex items-center justify-center divide-x-2'
            key={index}
          >
            <span className='px-3 text-2xl'>{item.icon}</span>
            <div className='px-3 text-xs md:text-base'>
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
