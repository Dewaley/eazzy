import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

const Questions = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='border-b-[1px] border-b-greyish'>
      <div
        className='cursor-pointer flex justify-between items-center mb-2'
        onClick={() => {
          setOpen(!open);
        }}
      >
        <h2 className='text-lg font-medium'>{question}</h2>
        <BsChevronDown
          className={`transition duration-500 ${
            open && "-rotate-180"
          }`}
        />
      </div>
      <div
        className={`text-greenish font-light transition-all duration-500 overflow-hidden mb-2 ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Questions;
