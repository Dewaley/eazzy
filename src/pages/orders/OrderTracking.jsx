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
          className='focus:border-none px-2'
          ref={inputRef}
          onInput={checkInput}
          required
        />
        <button className='bg-greenish text-white p-2 uppercase rounded-r'>
          Search
        </button>
      </form>
      <span className='text-red-700'>{error}</span>

      <ol class='relative border-l border-[#D9D9D9] dark:border-gray-700 w-[80%] md:w-[60%] mt-8'>
        <li class='mb-10 ml-8'>
          <span class='absolute flex items-center justify-center w-10 h-10 bg-[#D9D9D9] rounded-lg -left-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className="w-5 h-5"
              viewBox='0 0 24 24'
            >
              <path d='M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z' />
            </svg>
          </span>
          <h3 class='flex items-center justify-between mb-1 text-lg font-semibold text-gray-900'>
            Flowbite Application UI v2.0.0{" "}
            <span class='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3'>
              Latest
            </span>
          </h3>
          <time class='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            Released on January 13th, 2022
          </time>
          <p class='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
          <a
            href='#'
            class='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
          >
            <svg
              class='w-4 h-4 mr-2'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z'
                clip-rule='evenodd'
              ></path>
            </svg>{" "}
            Download ZIP
          </a>
        </li>
        <li class='mb-10 ml-6'>
          <span class='absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
            <svg
              aria-hidden='true'
              class='w-3 h-3 text-blue-600 dark:text-blue-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </span>
          <h3 class='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
            Flowbite Figma v1.3.0
          </h3>
          <time class='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            Released on December 7th, 2021
          </time>
          <p class='text-base font-normal text-gray-500 dark:text-gray-400'>
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li class='ml-6'>
          <span class='absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
            <svg
              aria-hidden='true'
              class='w-3 h-3 text-blue-600 dark:text-blue-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </span>
          <h3 class='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
            Flowbite Library v1.2.2
          </h3>
          <time class='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            Released on December 2nd, 2021
          </time>
          <p class='text-base font-normal text-gray-500 dark:text-gray-400'>
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default OrderTracking;
