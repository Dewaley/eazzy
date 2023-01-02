import can1 from "../../assets/can1.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const WhoCan = () => {
  return (
    <div className='flex flex-col items-center gap-12'>
      <h4 className='text-3xl font-medium px-6 text-center'>
        Built for Ambitious Food Businesses
      </h4>
      <div className='flex md:w-[80vw] gap-8 items-center md:items-start md:flex-row flex-col'>
        <img
          src={can1}
          alt=''
          className='w-[60vw] md:w-[40%] object-cover object-center'
        />
        <ul className='flex flex-col indicator2 gap-4 items-center md:items-start text-center md:text-left'>
          <li className={`flex flex-col pl-4 cursor-default`}>
            <h5 className='font-medium text-lg'>
              <Link to='/signup'>Create an Account</Link>
            </h5>
            <p className='font-light text-base'>
              Signup for free in 2 minutes.
            </p>
          </li>
          <li className={`flex flex-col pl-4 cursor-default`}>
            <h5 className='font-medium text-lg'>Order what you want</h5>
            <p className='font-light text-base'>
              Browse through our diverse categories and products.
            </p>
          </li>
          <li className={`flex flex-col pl-4 cursor-default`}>
            <h5 className='font-medium text-lg'>Schedule your Orders</h5>
            <p className='font-light text-base'>
              Fill in your preferred delivery date and time.
            </p>
          </li>
          <li className={`flex flex-col pl-4 cursor-default`}>
            <h5 className='font-medium text-lg'>Count on us to Deliver</h5>
            <p className='font-light text-base'>
              Try Eazzy today and never have to worry about late or unreliable
              deliveries.
            </p>
          </li>
          {/* <a href='#categories' className='w-fit pl-4'>
            <Button content={"Shop Now"} big={true} />
          </a> */}
        </ul>
      </div>
    </div>
  );
};

export default WhoCan;
