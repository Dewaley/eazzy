import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const OrderTracking = () => {
  const inputRef = useRef(null);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("yayyy");
  };

  const checkInput = () => {
    const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    console.log(inputRef.current.value);
    const value = inputRef.current.value;
    if (regex.test(value)) {
      setError("");
    } else {
      setError(
        "Please enter a valid Order-ID in the format XXXX-XXXX-XXXX-XXXX"
      );
    }
  };

  return (
    <div className='mt-8 flex flex-col justify-center items-center min-h-[70vh]'>
      <h3 className='text-2xl font-semibold mb-2'>Order Tracking</h3>
      <form
        className='flex border-2 rounded overflow-hidden w-fit'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type='text'
          placeholder='Order-ID'
          name=''
          id=''
          className='focus:outline-none px-2'
          ref={inputRef}
          onInput={checkInput}
          required
        />
        <button className='bg-greenish text-white p-2 uppercase rounded-r'>
          Search
        </button>
      </form>
      <span className='text-red-700'>{error}</span>

      <ol class='relative border-l border-[#D9D9D9] dark:border-gray-700 w-[80%] md:w-[60%] mt-12 mb-32 h-96'>
        <li class='h-32 ml-8'>
          <span class='absolute flex items-center justify-center w-9 h-9 bg-[#D9D9D9] rounded-lg -left-[1.125rem] border-4 border-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4'
              viewBox='0 0 24 24'
            >
              <path d='M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z' />
            </svg>
          </span>
          <h3 class='flex items-center justify-between font-semibold text-gray-900'>
            Order Received
            <span class='bg-[#789F7E] text-white text-sm font-medium px-2.5 py-2 rounded'>
              03:30PM
            </span>
          </h3>
          <p class='mb-4 w-[80%] text-sm text-gray-500 dark:text-gray-400'>
            We have received your order and your order will soon be processed.
          </p>
        </li>
        <li class='h-32 ml-8'>
          <span class='absolute flex items-center justify-center w-9 h-9 bg-[#D9D9D9] rounded-lg -left-[1.125rem] border-4 border-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4'
              viewBox='0 0 24 24'
            >
              <path d='M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z' />
            </svg>
          </span>
          <h3 class='flex items-center justify-between font-semibold text-gray-900'>
          Order Procesing
            <span class='bg-[#789F7E] text-white text-sm font-medium px-2.5 py-2 rounded'>
              03:30PM
            </span>
          </h3>
          <p class='mb-4 w-[80%] text-sm text-gray-500'>
          Your order has been processed and will soon be dispatched.
          </p>
        </li>
        <li class='h-32 ml-8'>
          <span class='absolute flex items-center justify-center w-9 h-9 bg-[#D9D9D9] rounded-lg -left-[1.125rem] border-4 border-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4'
              viewBox='0 0 24 24'
            >
              <path d='M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z' />
            </svg>
          </span>
          <h3 class='flex items-center justify-between font-semibold text-gray-900'>
          Order on the way
            <span class='bg-[#789F7E] text-white text-sm font-medium px-2.5 py-2 rounded'>
              03:30PM
            </span>
          </h3>
          <p class='mb-4 w-[80%] text-sm text-gray-500'>
          Your order is on the way and will son get to you.
          </p>
        </li>
        <li class='h-32 ml-8'>
          <span class='absolute flex items-center justify-center w-9 h-9 bg-[#D9D9D9] rounded-lg -left-[1.125rem] border-4 border-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4'
              viewBox='0 0 24 24'
            >
              <path d='M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z' />
            </svg>
          </span>
          <h3 class='flex items-center justify-between font-semibold text-gray-900'>
          Order Delivered
            <span class='bg-[#789F7E] text-white text-sm font-medium px-2.5 py-2 rounded'>
              03:30PM
            </span>
          </h3>
          <p class='mb-4 w-[80%] text-sm text-gray-500'>
          Your order has been delivered.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default OrderTracking;
