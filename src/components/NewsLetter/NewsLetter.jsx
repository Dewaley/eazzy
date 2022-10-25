import Button from "../Button/Button";

const NewsLetter = () => {
  return (
    <div className="overflow-hidden relative w-full">
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex flex-col gap-6 items-center px-3 py-8 bg-[#EBF2EB] w-full overflow-hidden z-20'
      >
        <h1 className='font-medium text-center text-3xl z-20'>Join the waitlist</h1>
        <h3 className='text-center z-20'>
          Become part of our community. Be the first to hear about our exciting
          news
        </h3>
        <input
          type='text'
          name=''
          id=''
          placeholder='Your Name'
          className='border-[1px] border-greyish p-3 w-[80vw] rounded sm:w-[50vw] lg:w-[35vw] bg-transparent z-20'
        />
        <input
          type='text'
          name=''
          id=''
          placeholder='Email Address'
          className='border-[1px] border-greyish p-3 rounded w-[80vw] sm:w-[50vw] lg:w-[35vw] bg-transparent z-20'
        />
        <Button
          content={"Subscribe"}
          type={"submit"}
        />
      </form>
      <div className='!z-10 flex h-96 w-96 rounded-full border-[60px] border-[#7CE58D] absolute -left-[12rem] top-[50%] -translate-y-[50%]'></div>
      <div className='flex h-80 w-80 rounded-full border-[60px] border-[#7CE58D] absolute -right-[12rem] !z-10 -bottom-[12rem]'></div>
    </div>
  );
};

export default NewsLetter;
