import { useState, useEffect } from "react";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import pic4 from "../../assets/pic4.png";

const WhyEazzy = () => {
  const items = [
    {
      count: 1,
      header: "High quality produce",
      details:
        "Get fresh and direct supply from the finest farmers/vendors, and at affordable prices.",
    },
    {
      count: 2,
      header: "Your market runs on auto-pilot",
      details:
        "Pre-order fresh food items and other groceries on a schedule that works for you.",
    },
    {
      count: 3,
      header: "Saves time and money",
      details:
        "Our platform enables businesses and consumers like you to procure and shop fromthe comfort of your location.",
    },
    {
      count: 4,
      header: "Multiple & Reliable payment option",
      details:
        "We are all about the easy life, who needs cash when you can pay “eazzily” via payment links, debit cards, & a fundable in-app wallet",
    },
  ];

  const [count, setCount] = useState(1);
  const increment = () => setCount((prev) => (count === 4 ? 1 : count + 1));
  // setInterval(() => {
  //   count === 1 && setCount(2)
  //   count === 2 && setCount(3)
  //   count === 3 && setCount(4)
  //   count === 4 && setCount(1)
  // }, 2000);

  useEffect(() => {
    setTimeout(increment, 2000);
  }, [count]);

  return (
    <div className='bg-[#EBF2EB] w-full px-4 py-24 flex justify-center'>
      <div className='flex md:w-[80vw] gap-8 items-center md:flex-row flex-col'>
        <div className='flex flex-col md:w-[60%]'>
          <h2 className='font-medium text-3xl text-center md:text-left'>
            Why Eazzy?
          </h2>
          <ul className='py-8 flex flex-col gap-4 indicator'>
            {items.map((item, index) => (
              <li
                className={`flex flex-col border-l-4 pl-2 cursor-default ${
                  count === item.count
                    ? "border-l-greenish"
                    : "border-l-transparent"
                }`}
              >
                <h5 className='font-medium text-lg'>{item.header}</h5>
                <p className='font-light text-base'>{item.details}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-[60vw] md:w-[40%] h-[calc(60vw/1.05)] md:h-[calc((0.4*80vw)/1.05)] overflow-hidden'>
          <div
            className={`flex flex-col
            ${count === 1 && "transition translate-y-0"} ${
              count === 2 &&
              "transition translate-y-[calc(-60vw/1.05)] md:translate-y-[calc((-0.4*80vw)/1.05)]"
            } ${
              count === 3 &&
              "transition translate-y-[calc((-60vw/1.05)*2)] md:translate-y-[calc(((-0.4*80vw)/1.05)*2)]"
            } ${
              count === 4 &&
              "transition translate-y-[calc((-60vw/1.05)*3)] md:translate-y-[calc(((-0.4*80vw)/1.05)*3)]"
            }`}
          >
            <div className='h-[calc(60vw/1.05)] md:h-[calc((0.4*80vw)/1.05)] w-full'>
              <img
                src={pic1}
                alt=''
                className='w-full h-full object-cover object-center'
              />
            </div>
            <div className='h-[calc(60vw/1.05)] md:h-[calc((0.4*80vw)/1.05)] w-full'>
              <img src={pic2} alt='' className='w-full h-full object-cover object-center' />
            </div>
            <div className='h-[calc(60vw/1.05)] md:h-[calc((0.4*80vw)/1.05)] w-full'>
              <img src={pic3} alt='' className='w-full h-full object-cover object-center' />
            </div>
            <div className='h-[calc(60vw/1.05)] md:h-[calc((0.4*80vw)/1.05)] w-full'>
              <img src={pic4} alt='' className='w-full h-full object-cover object-center' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyEazzy;
