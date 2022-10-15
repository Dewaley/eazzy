import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

const Questions = ({question,answer}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b-[1px] border-b-greyish">
      <div className='flex justify-between items-center mb-2'>
              <h2 className='text-lg font-medium'>{ question}</h2>
        <BsChevronDown
          className={`cursor-pointer transition duration-500 ${
            open && "-rotate-180"
          }`}
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
      <div className={`text-greenish font-light overflow-hidden mb-2 ${open ? "h-auto" : "h-0"}`}>
        <p>
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Questions;
