import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const NewsLetter = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbykrtMzDvGGzI6My0wtlXiqxLmuThXTgoUVC5NBSchza_1IixlVw1a-Z0AaP24OXqZuXA/exec";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message,setMessage] = useState("")

  const onSubmit = (data) => {
    fetch(scriptURL, { method: 'POST', body: data})
      .then(response => {
        console.log('Success!', response)
        setMessage("Thanks for reaching out to us!")
        setTimeout(() => {
          setMessage("")
        },3000)
      })
      .catch(error => console.error('Error!', error.message))
  };

  return (
    <div className='overflow-hidden relative w-full'>
      <form
        onSubmit={handleSubmit(onSubmit)}
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
          {...register("name")}
          required
        />
        <input
          type='email'
          name='Email'
          id=''
          placeholder='Email Address'
          className='border-[1px] border-greenish p-3 rounded w-[80vw] sm:w-[50vw] lg:w-[35vw] bg-transparent z-20'
          {...register("email")}
          required
        />
        <Button content={"Subscribe"} type={"submit"} />
        <p className="z-20">{message}</p>
      </form>
      <div className='!z-10 flex h-96 w-96 rounded-full border-[60px] border-[#7CE58D] absolute -left-[12rem] top-[50%] -translate-y-[50%]'></div>
      <div className='flex h-80 w-80 rounded-full border-[60px] border-[#7CE58D] absolute -right-[12rem] !z-10 -bottom-[12rem]'></div>
    </div>
  );
};

export default NewsLetter;
