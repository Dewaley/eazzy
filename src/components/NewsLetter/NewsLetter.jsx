import Button from "../Button/Button";
import { useState } from "react";

const NewsLetter = () => {
  const form = document.getElementById("my-form");

  const [message, setMessage] = useState("");

  return (
    <div className='overflow-hidden relative w-full'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(form);
          const action =
            "https://script.google.com/macros/s/AKfycbw93XWQ4hlGTPsSo2FyrcU3Rn-9aS9O2TTFZXP5aFftIPEzjlsDnwYaTien6ef5O4uFgg/exec";
          fetch(action, {
            method: "POST",
            body: data,
          }).then(() => {
            setMessage("Thanks for reaching out to us!");
            setTimeout(() => {
              setMessage("");
            }, 3000);
          });
        }}
        id='my-form'
        className='flex flex-col gap-6 items-center px-3 py-8 bg-[#EBF2EB] w-full overflow-hidden z-20'
      >
        <h1 className='font-medium text-center text-3xl z-20'>
          Join the waitlist
        </h1>
        <h3 className='text-center z-20'>
          Become part of our community. Be the first to hear about our exciting
          news
        </h3>
        <input
          type='text'
          name='Name'
          id=''
          placeholder='Your Name'
          className='border-[1px] border-greenish p-3 w-[80vw] rounded sm:w-[50vw] lg:w-[35vw] bg-transparent z-20'
          required
        />
        <input
          type='email'
          name='Email'
          id=''
          placeholder='Email Address'
          className='border-[1px] border-greenish p-3 rounded w-[80vw] sm:w-[50vw] lg:w-[35vw] bg-transparent z-20'
          required
        />
        <Button content={"Subscribe"} type={"submit"} />
        <p className='z-20'>{message}</p>
      </form>
      <div className='!z-10 flex h-96 w-96 rounded-full border-[60px] border-[#7CE58D] absolute -left-[12rem] top-[50%] -translate-y-[50%]'></div>
      <div className='flex h-80 w-80 rounded-full border-[60px] border-[#7CE58D] absolute -right-[12rem] !z-10 -bottom-[12rem]'></div>
    </div>
  );
};

export default NewsLetter;
