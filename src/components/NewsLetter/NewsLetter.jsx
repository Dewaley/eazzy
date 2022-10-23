import Button from "../Button/Button";

const NewsLetter = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6 items-center p-8 mb-20 bg-[#EBF2EB] w-full relative overflow-hidden">
      <h1 className="font-medium text-3xl z-20">Join the waitlist</h1>
      <h3 className="text-center z-20">
        Become part of our community. Be the first to hear about our exciting
        news
      </h3>
      <input type='text' name='' id='' placeholder='Your Name' className="border-[1px] border-greyish p-3 rounded sm:w-[50vw] lg:w-[35vw] bg-transparent z-20" />
      <input type='text' name='' id='' placeholder='Email Address' className="border-[1px] border-greyish p-3 rounded sm:w-[50vw] lg:w-[35vw] bg-transparent z-20" />
      <Button content={"Subscribe"} type={"submit"} />
      <div className="!z-10 flex h-96 w-96 rounded-full border-[60px] border-[#7CE58D] absolute -left-[12rem] top-[50%] -translate-y-[50%]"></div>
      <div className="flex h-96 w-96 rounded-full border-[60px] border-[#7CE58D] absolute -right-[12rem] !z-10 -bottom-[12rem]"></div>
    </form>
  );
};

export default NewsLetter