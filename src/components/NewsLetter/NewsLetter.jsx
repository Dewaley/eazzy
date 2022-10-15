import React from "react";

const NewsLetter = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6 items-center p-4">
      <h3>
        Become part of our community. Be the first to hear about our exciting
        news
      </h3>
      <input type='text' name='' id='' placeholder='Your Name' className="border-[1px] border-greyish p-3 rounded sm:w-[50vw] lg:w-[35vw]" />
      <input type='text' name='' id='' placeholder='Email Address' className="border-[1px] border-greyish p-3 rounded sm:w-[50vw] lg:w-[35vw]" />
      <button type='submit' className='px-2 py-1 rounded bg-greenish text-white'>
        Subscribe
      </button>
    </form>
  );
};

export default NewsLetter