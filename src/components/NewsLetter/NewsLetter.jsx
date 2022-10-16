import Button from "../Button/Button";

const NewsLetter = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6 items-center p-4 mb-20">
      <h3 className="text-center">
        Become part of our community. Be the first to hear about our exciting
        news
      </h3>
      <input type='text' name='' id='' placeholder='Your Name' className="border-[1px] border-greyish p-3 rounded sm:w-[50vw] lg:w-[35vw]" />
      <input type='text' name='' id='' placeholder='Email Address' className="border-[1px] border-greyish p-3 rounded sm:w-[50vw] lg:w-[35vw]" />
      <Button content={"Subscribe"} type={"submit"} />
    </form>
  );
};

export default NewsLetter