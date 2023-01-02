import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import Button from "../../components/Button/Button";

const Contact = () => {
  return (
    <div className='flex flex-col items-center gap-8'>
      <h1 className='text-xl font-medium py-12 bg-[#EBF2EB] w-full text-center'>
        Contact Us
      </h1>
      <div className='mb-8 flex flex-col md:flex-row md:items-center px-3 md:px-6 gap-8'>
        <div className='flex flex-col gap-3 md:order-2 md:w-1/2'>
          <div flex flex-col gap-2>
            <h1 className='text-lg'>How can we help you?</h1>
            <p className=''>
              Fill in the form or drop an email, and we will reach out to you as
              soon as possible.
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <span>
              <BsTelephone />
            </span>
            <a href='tel:+2348169793982' className='underline'>
              +2348169793982
            </a>
          </div>
          <div className='flex items-center gap-4'>
            <span>
              <IoMailOutline />
            </span>
            <a href='mailto:support@tryeazzy.com' className='underline'>
              support@tryeazzy.com
            </a>
          </div>
          <div className='flex items-center gap-4'>
            <span>
              <GoLocation />
            </span>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
        <form
          action=''
          className='flex flex-col w-full gap-4 border-[1px] p-3 md:p-5 rounded md:order-1 md:w-1/2'
        >
          <input
            type='text'
            placeholder='Name'
            className='border-[1px] rounded p-2 font-lg w-full'
          />
          <input
            type='email'
            placeholder='Email Address'
            className='border-[1px] rounded p-2 font-lg w-full'
          />
          <input
            type='text'
            placeholder='Message title'
            className='border-[1px] rounded p-2 font-lg w-full'
          />
          <textarea
            name=''
            id=''
            rows='5'
            placeholder='Message'
            className='w-full border-[1px] rounded p-2 font-lg mb-4'
                  ></textarea>
                  <Button large content={"Send"}/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
